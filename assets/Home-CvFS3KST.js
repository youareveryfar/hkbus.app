import{j as t,u as v,r as p,C as D,b as Q,e as ee,A as S,p as te,w,D as M,q as $,x as H,y as B,z as re}from"./index-BZAXjjD_.js";import{c as U,T as ae,a as _,B as ie,b,D as le,I as ce,d as ue,e as j,g as N,f as W,L as F,S as P,u as pe,P as de,v as A}from"./App-heRoAE-M.js";import{S as xe}from"./Star-BCYx7LXs.js";import{B as ge,D as he}from"./DbRenewReminder-TdIjLY0i.js";import{S as me}from"./index-bFHy5SPL.js";import{u as fe,d as be}from"./hooks-CZFy8cBf.js";import{l as C,M as je,T as G,L as Z,a as Ce,C as ve}from"./TileLayer-BM2OEKST.js";import{D as ye}from"./DialogTitle-D5e51YJn.js";import{C as Re}from"./Close-BhYzwXfU.js";import{S as Se}from"./Slider-r5RYSkgN.js";import{T as Te,a as V}from"./ToggleButtonGroup-Dg91Y5Pv.js";import{t as Ie}from"./index-mhOicfQu.js";const ke=U([t.jsx("circle",{cx:"12",cy:"17",r:"4"},"0"),t.jsx("path",{d:"M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08"},"1")],"CompassCalibration"),De=U(t.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Me=U(t.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),we=({homeTab:e,onChangeTab:o})=>{const{t:n}=v(),{collections:s}=p.useContext(D);return t.jsxs(ae,{value:e,onChange:(l,a)=>o(a,!0),sx:Oe,variant:"scrollable",scrollButtons:!0,children:[t.jsx(_,{iconPosition:"start",icon:t.jsx(ke,{}),label:n("附近"),value:"nearby",disableRipple:!0}),t.jsx(_,{iconPosition:"start",icon:t.jsx(xe,{}),label:n("常用"),value:"saved",disableRipple:!0}),t.jsx(_,{iconPosition:"start",icon:t.jsx(ie,{}),label:n("Collections"),value:"collections",disableRipple:!0}),s.map((l,a)=>t.jsx(_,{label:l.name,value:l.name,disableRipple:!0},`collection-${a}`))]})},_e=(e,o)=>{if(e==="saved"||e==="nearby"||e==="collections")return!0;for(let n=0;n<o.length;++n)if(e===o[n].name)return!0;return!1},Oe={background:e=>e.palette.background.default,minHeight:"36px","& .MuiTab-root":{textTransform:"none",alignItems:"center",justifyContent:"center",paddingTop:0,paddingBottom:0,minHeight:"32px"},"& .MuiTabs-flexContainer":{justifyContent:"flex-start"}};C.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"});C.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var o=this.options.imagePath||C.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(o),o+C.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(e){this._setOptions("icon",X,e),this._setOptions("shadow",X,e),this._setOptions("popup",Y),this._setOptions("tooltip",Y),this._needsInit=!1},_setOptions:function(e,o,n){var s=this.options,l=s.classNamePrefix,a=o(l+e,n);for(var r in a)s[e+r]=s[e+r]||a[r]}});function X(e,o){var n=C.DomUtil.create("div",e,document.body),s=He(n),l=$e(s,o),a=I(n,"width"),r=I(n,"height"),i=I(n,"margin-left"),c=I(n,"margin-top");return n.parentNode.removeChild(n),{Url:l[0],RetinaUrl:l[1],Size:[a,r],Anchor:[-i,-c]}}function Y(e){var o=C.DomUtil.create("div",e,document.body),n=I(o,"margin-left"),s=I(o,"margin-top");return o.parentNode.removeChild(o),{Anchor:[n,s]}}function $e(e,o){for(var n=/url\(['"]?([^"']*?)['"]?\)/gi,s=[],l=n.exec(e);l;)s.push(o?Be(l[1]):l[1]),l=n.exec(e);return s}function Be(e){return e.substr(e.lastIndexOf("/")+1)}function I(e,o){return parseInt(E(e,o),10)}function E(e,o){return C.DomUtil.getStyle(e,o)||C.DomUtil.getStyle(e,Le(o))}function He(e){var o=E(e,"background-image");return o&&o!=="none"?o:E(e,"cursor")}function Le(e){return e.replace(/-(\w)/g,function(o,n){return n.toUpperCase()})}const Ee=Q.forwardRef(({range:e,value:o,onChange:n},s)=>{const l=ee(),a=p.useRef(null),r=p.useRef(null),i=p.useRef(o).current,{geolocation:c,colorMode:d}=p.useContext(S),[u,x]=p.useState(null);p.useImperativeHandle(s,()=>u,[u]);const g=p.useCallback(()=>{var f,h;u!==null&&((f=a.current)==null||f.setLatLng(u.getCenter()),(h=r.current)==null||h.setLatLng(u.getCenter()),n(u.getCenter()))},[n,u]);return p.useEffect(()=>(u==null||u.on("move",g),()=>{u==null||u.off("move",g)}),[g,u]),t.jsxs(je,{style:{height:"100%",position:"relative"},center:i,zoom:Ue,scrollWheelZoom:!1,ref:x,children:[t.jsx(G,{crossOrigin:"anonymous",maxZoom:Z.Browser.retina?20:19,maxNativeZoom:18,keepBuffer:10,updateWhenIdle:!1,url:d==="light"?"https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png":"https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png"}),t.jsx(G,{crossOrigin:"anonymous",maxZoom:Z.Browser.retina?20:19,maxNativeZoom:18,keepBuffer:10,updateWhenIdle:!1,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a> © <a href="https://api.portal.hkmapservice.gov.hk/disclaimer">地圖版權屬香港特別行政區政府</a>',url:"https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/{lang}/WGS84/{z}/{x}/{y}.png".replace("{lang}",l==="zh"?"tc":"en")}),t.jsx(Ce,{position:i,ref:a}),t.jsx(ve,{center:i,radius:e,ref:r}),t.jsx(Fe,{map:u,onChange:n}),t.jsx(Pe,{onClick:()=>{u==null||u.setView(c.current,u==null?void 0:u.getZoom(),{animate:!0})}})]})}),Ue=14,Fe=({map:e,onChange:o})=>(fe("click",n=>{e.setView(n.latlng,e.getZoom(),{animate:!0}),o(n.latlng)}),null),Pe=({onClick:e})=>t.jsx("div",{className:"leaflet-bottom leaflet-right",children:t.jsx(b,{sx:ze,className:"leaflet-control leaflet-bar",onClick:e,children:t.jsx(be,{className:ne.centerControl})})}),T="range-map",ne={mapContainerBox:`${T}-mapContainerBox`,mapContainer:`${T}-mapContainer`,centerControl:`${T}-centerControl`,marker:`${T}-marker`,active:`${T}-active`,passed:`${T}-passed`},ze={background:"white",width:32,height:32,marginBottom:"20px !important",marginRight:"5px !important",display:"flex",justifyContent:"center",alignItems:"center",[`& .${ne.centerControl}`]:{padding:"3px",color:"black"}},Ne=({open:e,onClose:o})=>{const{geolocation:n,manualGeolocation:s,searchRange:l,setManualGeolocation:a,setSearchRange:r}=p.useContext(S),{t:i}=v(),[c,d]=p.useState({geolocation:s??n.current,searchRange:l}),u=p.useCallback(()=>{a(c.geolocation),r(c.searchRange),o()},[c,a,r,o]),x=p.useCallback(h=>{d(m=>({...m,geolocation:h}))},[]),g=p.useCallback(h=>{d(m=>({...m,searchRange:h}))},[]),f=p.useCallback(h=>{const{distance:m,unit:y}=te(h);return`${m}${i(y)}`},[i]);return t.jsxs(le,{open:e,onClose:u,sx:We,children:[t.jsxs(ye,{sx:Ae,children:[i("自訂搜尋範圍"),t.jsx(ce,{onClick:u,children:t.jsx(Re,{})})]}),t.jsxs(ue,{children:[t.jsx(Ee,{range:c.searchRange,value:c.geolocation,onChange:x}),t.jsx(b,{sx:{px:4,py:5},children:t.jsx(Se,{sx:Ge,"aria-label":"Range",value:L(c.searchRange,O,R),valueLabelDisplay:"on",marks:R.map((h,m)=>({label:f(O[m]),value:h})),min:R[0],max:R[R.length-1],step:250,scale:h=>L(h,R,O),valueLabelFormat:h=>f(h),onChange:(h,m)=>g(L(m,R,O))})})]})]})},We={"& .MuiPaper-root":{width:"100%",height:"calc(100dvh - 100px)"},"& .MuiDialogContent-root":{p:0,display:"flex",flexDirection:"column"}},Ae={backgroundColor:e=>e.palette.background.default,color:e=>e.palette.primary.main,display:"flex",justifyContent:"space-between"},Ge={"& .MuiSlider-mark":{backgroundColor:"#bfbfbf",height:8}},R=[0,1e3,2e3,3e3,4e3,5e3],O=[20,100,200,400,2e3,4e3],L=(e,o,n)=>{if(e<=o[0])return n[0];for(let s=1;s<o.length;++s)if(e<=o[s])return n[s-1]+(e-o[s-1])*(n[s]-n[s-1])/(o[s]-o[s-1]);return n[n.length-1]},Ze=()=>{const{t:e}=v(),{searchRange:o,setSearchRange:n}=p.useContext(S),[s,l]=p.useState(!1);return t.jsxs(b,{sx:Ve,children:[t.jsxs(j,{variant:"caption",children:[e("搜尋範圍（米）"),":"]}),t.jsxs(Te,{value:w.includes(o)?o:"custom",onChange:(a,r)=>{w.includes(r)?n(r):l(!0)},"aria-label":"search range",size:"small",exclusive:!0,children:[w.map(a=>{const{distance:r}=te(a);return t.jsx(V,{sx:q,disableRipple:!0,value:a,"aria-label":a.toString(),children:r},`range-${a}`)}),t.jsxs(V,{sx:q,disableRipple:!0,value:"custom","aria-label":"custom",children:[e("自訂"),!w.includes(o)&&`(${o})`]},"range-custom")]}),t.jsx(Ne,{open:s,onClose:()=>l(!1)})]})},Ve={position:"sticky",top:0,display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",listStyle:"none",px:0,py:1,m:0,borderRadius:0,fontSize:14,borderBottomWidth:1,borderBottomColor:e=>e.palette.mode==="dark"?N[900]:N[200],borderBottomStyle:"solid"},q={height:30,px:2},oe=({name:e,routeStrings:o,defaultExpanded:n=!0})=>{const[s,l]=p.useState(n),a=p.useMemo(()=>o.split("|").filter(r=>r)??[],[o]);return a.length===0?t.jsx(t.Fragment,{}):t.jsxs(b,{children:[t.jsxs(b,{sx:Xe,onClick:()=>l(r=>!r),children:[t.jsx(j,{variant:"body1",m:1,fontWeight:700,children:e}),t.jsx(b,{children:s?t.jsx(De,{}):t.jsx(Me,{})})]}),t.jsx(W,{}),s&&t.jsx(F,{disablePadding:!0,children:a.map((r,i)=>!!r&&t.jsx(P,{routeId:r},`route-${e}-${i}`))}),t.jsx(W,{})]})},Xe={display:"flex",alignItems:"center",justifyContent:"space-between",mx:1,cursor:"pointer"},Ye=({isFocus:e})=>{const{t:o}=v(),{manualGeolocation:n,geolocation:s,isRouteFilter:l,searchRange:a}=p.useContext(S),{db:{routeList:r,stopList:i,serviceDayMap:c},isTodayHoliday:d}=p.useContext(M),[u,x]=p.useState(n??s.current),g=p.useMemo(()=>Ie(m=>{x(m)},500),[]);p.useEffect(()=>{const m=setInterval(()=>{g(n??s.current)},1e3);return g(n??s.current),()=>{clearInterval(m)}},[n,s,g]);const f=p.useMemo(()=>qe({geolocation:u,stopList:i,routeList:r,isRouteFilter:l,isTodayHoliday:d,serviceDayMap:c,searchRange:a}),[u,i,r,l,d,c,a]),h=p.useMemo(()=>Object.values(f).map(m=>m.split("|").every(y=>y==="")).every(Boolean),[f]);return e?h?t.jsx(b,{sx:J,children:t.jsx(j,{sx:{marginTop:5},fontWeight:"700",children:o("附近未有任何路線")})}):t.jsx(b,{sx:J,children:Object.entries(f).map(([m,y])=>t.jsx(oe,{name:o(m),routeStrings:y},`nearby-${m}`))}):t.jsx(t.Fragment,{})},qe=({geolocation:e,stopList:o,routeList:n,isRouteFilter:s,isTodayHoliday:l,serviceDayMap:a,searchRange:r})=>{const i=Object.entries(o).map(c=>[...c,$(c[1].location,e)]).filter(c=>c[2]<r).sort((c,d)=>c[2]-d[2]).slice(0,20).reduce((c,[d])=>(Object.entries(n).forEach(([u,x])=>{["kmb","lrtfeeder","lightRail","gmb","ctb","nlb"].forEach(g=>{x.stops[g]&&x.stops[g].includes(d)&&(c[H[g]]===void 0&&(c[H[g]]=[]),c[H[g]].push(u+"/"+x.stops[g].indexOf(d)))})}),c),{bus:[],mtr:[],lightRail:[],minibus:[],ferry:[]});return Object.entries(i).reduce((c,[d,u])=>(c[d]=B(u,l,s,n,o,a,e),c),{})},J={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},Je=({isFocus:e})=>{const{t:o}=v(),{geolocation:n,isRouteFilter:s}=p.useContext(S),{savedEtas:l}=p.useContext(D),{db:{routeList:a,stopList:r,serviceDayMap:i},isTodayHoliday:c}=p.useContext(M),d=p.useMemo(()=>Ke({savedEtas:l,geolocation:n.current,stopList:r,routeList:a,isRouteFilter:s,isTodayHoliday:c,serviceDayMap:i}),[l,n,a,r,s,c,i]),u=p.useMemo(()=>d.every(x=>!x),[d]);return e?u?t.jsx(b,{sx:Qe,children:t.jsx(j,{sx:{marginTop:5},fontWeight:"700",children:o("未有收藏路線")})}):t.jsx(F,{disablePadding:!0,sx:{minHeight:"100dvh"},children:d.map((x,g)=>!!x&&t.jsx(P,{routeId:x},`route-shortcut-${g}`))}):t.jsx(t.Fragment,{})},Ke=({savedEtas:e,geolocation:o,stopList:n,routeList:s,isRouteFilter:l,isTodayHoliday:a,serviceDayMap:r})=>B(e.filter((i,c,d)=>d.indexOf(i)===c&&i.split("/")[0]in s).map((i,c,d)=>{const[u,x]=i.split("/"),g=Object.values(s[u].stops).sort((f,h)=>h.length-f.length)[0];if(x!==void 0&&parseInt(x,10)<g.length)return[i,$(o,n[g[Number(x)]].location),d.length-c];{const f=g.map(h=>[h,$(o,n[h].location)]).sort(([,h],[,m])=>h<m?-1:1)[0][0];return[i,$(o,n[f].location),d.length-c]}}).sort((i,c)=>i[2]-c[2]).map(i=>i[0]).slice(0,40),a,l,s,n,r,o).split("|"),Qe={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},et=({isFocus:e})=>{const{t:o}=v(),{geolocation:n,isRouteFilter:s}=p.useContext(S),{collections:l}=p.useContext(D),{db:{routeList:a,stopList:r,serviceDayMap:i},isTodayHoliday:c}=p.useContext(M),d=p.useMemo(()=>tt({collections:l,geolocation:n.current,stopList:r,routeList:a,isRouteFilter:s,isTodayHoliday:c,serviceDayMap:i}),[l,n,r,a,s,c,i]);return e?d.length===0?t.jsx(b,{sx:K,children:t.jsx(j,{sx:{marginTop:5},fontWeight:700,children:o("未有收藏路線")})}):t.jsxs(b,{sx:K,children:[d.map(({name:u,routes:x,defaultExpanded:g},f)=>t.jsx(oe,{name:u,routeStrings:x,defaultExpanded:g},`collection-${f}`)),!d.reduce((u,{routes:x})=>u||x.split("|").filter(g=>!!g).length>0,!1)&&t.jsx(j,{sx:{marginTop:5},fontWeight:700,children:o("未有收藏路線")})]}):t.jsx(t.Fragment,{})},tt=({collections:e,geolocation:o,stopList:n,routeList:s,isRouteFilter:l,isTodayHoliday:a,serviceDayMap:r})=>e.map(({name:i,list:c,schedules:d})=>({name:i,routes:c,defaultExpanded:d.reduce((u,{day:x,start:g,end:f})=>{if(u)return u;const h=new Date;h.setUTCHours(h.getUTCHours()+8);const m=h.getUTCDay();if(a&&x===0||x===m){let y=g.hour*60+g.minute,se=f.hour*60+f.minute,z=(h.getUTCHours()*60+h.getUTCMinutes())%1440;return y<=z&&z<=se}return!1},!1)})).map(i=>({...i,routes:B(i.routes,a,l,s,n,r,o)})),K={display:"flex",flexDirection:"column",gap:2,minHeight:"100dvh"},nt=({collection:e,isFocus:o})=>{const{t:n}=v(),{geolocation:s,isRouteFilter:l}=p.useContext(S),{db:{routeList:a,stopList:r,serviceDayMap:i},isTodayHoliday:c}=p.useContext(M),d=p.useMemo(()=>ot({savedEtas:e.list,geolocation:s.current,stopList:r,routeList:a,isRouteFilter:l,isTodayHoliday:c,serviceDayMap:i}),[e,s,r,a,l,c,i]),u=p.useMemo(()=>d.every(x=>!x),[d]);return o?u?t.jsx(b,{sx:st,children:t.jsx(j,{sx:{marginTop:5},fontWeight:700,children:t.jsx("b",{children:n("收藏中未有路線")})})}):t.jsx(F,{disablePadding:!0,sx:{minHeight:"100dvh"},children:d.map((x,g)=>!!x&&t.jsx(P,{routeId:x},`route-shortcut-${g}`))}):t.jsx(t.Fragment,{})},ot=({savedEtas:e,geolocation:o,stopList:n,routeList:s,isRouteFilter:l,isTodayHoliday:a,serviceDayMap:r})=>B(e,a,l,s,n,r,o).split("|"),st={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},rt=Q.forwardRef(({homeTab:e,onChangeTab:o},n)=>{const{collections:s}=p.useContext(D),l=p.useRef(e);p.useImperativeHandle(n,()=>({changeTab:r=>{l.current=r}}));const a=p.useCallback(()=>{let r=k.indexOf(l.current);if(r!==-1)return r;for(let i=0;i<s.length;++i)if(s[i].name===l.current)return i+k.length;return-1},[s]);return t.jsxs(t.Fragment,{children:[e==="nearby"?t.jsx(Ze,{}):null,t.jsxs(me,{index:a(),onChangeIndex:r=>{o(r<k.length?k[r]:s[r-k.length].name)},children:[t.jsx(Ye,{isFocus:e==="nearby"}),t.jsx(Je,{isFocus:e==="saved"}),t.jsx(et,{isFocus:e==="collections"}),s.map(r=>t.jsx(nt,{collection:r,isFocus:e===r.name},`list-${r.name}`))]})]})}),k=["nearby","saved","collections"],jt=()=>{const{AppTitle:e}=p.useContext(M),{collections:o}=p.useContext(D),{t:n}=v(),s=ee(),{collectionName:l}=pe(),a=p.useRef(null),r=l??localStorage.getItem("homeTab"),[i,c]=p.useState(_e(r,o)?r:"nearby");p.useEffect(()=>{re({title:`${n("Dashboard")} - ${n(e)}`,description:n("home-page-description"),lang:s})},[s,e,n]);const d=(u,x=!1)=>{c(u),localStorage.setItem("homeTab",u),a.current&&x&&a.current.changeTab(u)};return t.jsxs(de,{sx:at,square:!0,elevation:0,children:[t.jsx(j,{component:"h1",style:A,children:`${n("Dashboard")} - ${n(e)}`}),t.jsx(j,{component:"h2",style:A,children:n("home-page-description")}),t.jsx(we,{homeTab:i,onChangeTab:d}),t.jsx(ge,{}),t.jsx(he,{}),t.jsx(rt,{ref:a,homeTab:i,onChangeTab:d})]})},at={background:e=>e.palette.mode==="dark"?e.palette.background.default:"white",textAlign:"center",display:"flex",flexDirection:"column",overflow:"auto",width:"100%",height:"100%"};export{jt as default};