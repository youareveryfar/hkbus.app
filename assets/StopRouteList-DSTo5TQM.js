import{r as a,D as I,A,F as D,e as M,l as P,j as p}from"./index-BZAXjjD_.js";import{b,L as F,S as O}from"./App-heRoAE-M.js";import{C as T}from"./CircularProgress-BJX6oDjs.js";const q=({stopKeys:i,disabled:f=!1})=>{const{db:{routeList:n,stopList:u,serviceDayMap:o,holidays:x},isTodayHoliday:g}=a.useContext(I),{isVisible:d,refreshInterval:E,isRouteFilter:j}=a.useContext(A),C=a.useMemo(()=>i.reduce((e,[r])=>e||r==="lightRail",!1),[i]),c=a.useMemo(()=>Object.entries(n).reduce((e,[r,{stops:t,freq:l}])=>(j&&!D(r,l,g,o)||i.forEach(([s,y])=>{var v;(v=t[s])==null||v.forEach((z,k)=>{z===y&&e.push([r,k])})}),e),[]).map(e=>e.join("|")).filter((e,r,t)=>t.indexOf(e)===r).map(e=>e.split("|")),[i,n,j,g,o]),[L,R]=a.useState([]),S=M(),m=a.useRef(!1),h=a.useCallback(()=>!d||f||navigator.userAgent==="prerendering"?(R([]),new Promise(e=>e([]))):Promise.all(c.map(([e,r])=>P({...n[e],seq:parseInt(r,10),stopList:u,language:S,holidays:x,serviceDayMap:o}))).then(e=>{m.current&&R(e.map((r,t)=>[c[t].join("/"),r.filter(({co:l,dest:s})=>l!=="mtr"?!0:s.zh===n[c[t][0]].dest.zh)]).sort(([r,t],[l,s])=>t.length===0?1:s.length===0?-1:C?t[0].remark.zh===s[0].remark.zh?t[0].eta<s[0].eta?-1:1:t[0].remark.zh<s[0].remark.zh?-1:1:t[0].eta===s[0].eta?r<l?-1:1:t[0].eta<s[0].eta?-1:1))}),[d,f,S,n,u,c,C,x,o]);return a.useEffect(()=>{m.current=!0;const e=setInterval(()=>{h()},E);return h(),()=>{m.current=!1,clearInterval(e)}},[h,E]),L},G=({stops:i,isFocus:f})=>{const n=q({stopKeys:i,disabled:!f});return n.length===0?p.jsx(b,{sx:w,children:p.jsx(T,{sx:{my:5}})}):p.jsx(F,{children:n.map(([u,o])=>p.jsx(O,{routeId:u,etas:o},u))})},w={display:"flex",flex:1,justifyContent:"center"};export{G as S};
