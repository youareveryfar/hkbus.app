const express = require('express');
const fs = require('fs');
const resolve = require('path').resolve;
const puppeteer = require('puppeteer');
let app;

/**
 * @returns {object}
 */
async function readOptionsFromFile() {
  try {
    const config = await fs.readFileSync('./.rsp.json');
    const options = JSON.parse(config.toString());
    return options;
  } catch (err) {
    throw new Error(`Error: Failed to read options from '.rsp.json'.\nMessage: ${err}`);
  }
}

/**
 * @param {number} port 
 * @param {string} routes 
 * @param {string} dir 
 * @returns {string|boolean}
 */
async function runStaticServer(port, routes, dir) {
  try {
    app = express();
    const resolvedPath = resolve(dir); 
    app.use(express.static(resolvedPath));
    routes.forEach(route => {
      app.get(route, (req, res) => {
        res.sendFile(`${resolvedPath}/index.html`);
      })
    })

    await app.listen(port);
    return `http://localhost:${port}`;
  } catch(err) {
    throw new Error(`Error: Failed to run puppeteer server on port ${port}.\nMessage: ${err}`);
  }
}

/**
 * 
 * @param {string} route 
 * @param {string} html 
 * @param {string} dir 
 */
async function createNewHTMLPage(route, html, dir) {
  if (html === 'skip') return;
  try {
    const fname = route === '/' ? 'index' : route;
    if (route.indexOf('/') !== route.lastIndexOf('/')) {
      const subDir = route.slice(0, route.lastIndexOf('/'));
      await ensureDirExists(`${dir}${subDir}`);
    }
    await fs.writeFileSync(`${dir}${fname}.html`, html, {encoding: 'utf-8', flag: 'w'});
    console.log(`Created ${fname}.html`);
  } catch (err) {
    throw new Error(`Error: Failed to create HTML page for ${route}.\nMessage: ${err}`);
  }
}

/**
 * 
 * @param {string} dir 
 * @returns {Promise}
 */
function ensureDirExists(dir) {
  try {
    return fs.mkdirSync(dir, {recursive: true});
  } catch (err) {
    throw new Error(`Error: Failed to create directory for path ${dir}.\nMessage: ${err}`);
  }
}

/**
 * @param {object} page
 * @param {string} pageUrl 
 * @returns {string|number}
 */
async function getHTMLfromPuppeteerPage(page, pageUrl, idx) {
  const start = Date.now()
  try {
    // const page = await browser.newPage();
    if ( !pageUrl.includes('/route/') ) {
        await page.goto(pageUrl, {waitUntil: idx > 0 ? 'domcontentloaded' : 'networkidle0'});
        if (idx === 0 || pageUrl.includes('search')) await page.waitForTimeout(3000) // wait decompression & loading data
    } else {
        const lang = pageUrl.split('/').slice(-3)[0]
        const q = pageUrl.split('/').slice(-1)[0];
        await page.click(`[id="${lang}-selector"]`)
        await page.evaluate((q) => {
            // programmatically change the search route value
            var input = document.getElementById('searchInput');
            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            nativeInputValueSetter.call(input, q);
            var ev2 = new Event('input', { bubbles: true});
            input.dispatchEvent(ev2);
        }, q)
        await page.waitForSelector(`input[id="${q}"][value="${q}"]`, {timeout: 1000});
    }

    const html = await page.content();
    if (!html) return 0;
    return html;
  } catch(err) {
    throw new Error(`Error: Failed to build HTML for ${pageUrl}.\nMessage: ${err}`);
  }
}

/**
 * @param {string} baseUrl 
 * @param {string[]} routes 
 * @param {string} dir 
 * @returns {number|undefined}
 */
async function runPuppeteer(baseUrl, routes, dir) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setUserAgent('prerendering');
  let start = Date.now();
  for (let i = 0; i < routes.length; i++) {
    try {
      console.log(`Processing route "${routes[i]}"`);
      const html = await getHTMLfromPuppeteerPage(page, `${baseUrl}${routes[i]}`, i);
      if (html) createNewHTMLPage(routes[i], html, dir);
      else return 0;

    } catch (err) {
      console.error(`Error: Failed to process route "${routes[i]}"\nMessage: ${err}`);
      process.exit(1)
    }
  }

  await browser.close();
  console.log( ( 'Finished in ' + (Date.now() - start ) / 1000) + "s.");
  start = Date.now();
  return;
} 

async function run() {
  const options = await readOptionsFromFile();
  const staticServerURL = await runStaticServer(options.port || 3000, options.routes || [], options.buildDirectory || './build');

  if (!staticServerURL) return 0;

  await runPuppeteer(staticServerURL, options.routes, options.buildDirectory || './build');
  console.log('Finish react-spa-prerender tasks!');
  process.exit();
}
   
run()