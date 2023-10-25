(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const So="modulepreload",ko=function(n){return"/"+n},qt={},Tt=function(e,t,o){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=ko(i),i in qt)return;qt[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const f=r[p];if(f.href===i&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":So,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((p,f)=>{l.addEventListener("load",p),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};function Z(){}const jn=n=>n;function Fn(n){return n()}function Kt(){return Object.create(null)}function $e(n){n.forEach(Fn)}function Rt(n){return typeof n=="function"}function ae(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function To(n){return Object.keys(n).length===0}const Vn=typeof window<"u";let $o=Vn?()=>window.performance.now():()=>Date.now(),Pt=Vn?n=>requestAnimationFrame(n):Z;const De=new Set;function Hn(n){De.forEach(e=>{e.c(n)||(De.delete(e),e.f())}),De.size!==0&&Pt(Hn)}function Mo(n){let e;return De.size===0&&Pt(Hn),{promise:new Promise(t=>{De.add(e={c:n,f:t})}),abort(){De.delete(e)}}}function G(n,e){n.appendChild(e)}function We(n,e,t){const o=Dt(n);if(!o.getElementById(e)){const r=V("style");r.id=e,r.textContent=t,Gn(o,r)}}function Dt(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Co(n){const e=V("style");return Gn(Dt(n),e),e.sheet}function Gn(n,e){return G(n.head||n,e),e.sheet}function j(n,e,t){n.insertBefore(e,t||null)}function z(n){n.parentNode&&n.parentNode.removeChild(n)}function Ue(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function V(n){return document.createElement(n)}function Oo(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ye(n){return document.createTextNode(n)}function ce(){return Ye(" ")}function ge(){return Ye("")}function xe(n,e,t,o){return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}function Wn(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function $(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Eo(n){return Array.from(n.childNodes)}function st(n,e){e=""+e,n.data!==e&&(n.data=e)}function Yo(n,e,{bubbles:t=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,t,o,e),r}class Bo{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,o=null){this.e||(this.is_svg?this.e=Oo(t.nodeName):this.e=V(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)j(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(z)}}const tt=new Map;let nt=0;function Jo(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Ro(n,e){const t={stylesheet:Co(e),rules:{}};return tt.set(n,t),t}function Qt(n,e,t,o,r,i,s,a=0){const c=16.666/o;let l=`{
`;for(let u=0;u<=1;u+=c){const d=e+(t-e)*i(u);l+=u*100+`%{${s(d,1-d)}}
`}const p=l+`100% {${s(t,1-t)}}
}`,f=`__svelte_${Jo(p)}_${a}`,h=Dt(n),{stylesheet:g,rules:y}=tt.get(h)||Ro(h,n);y[f]||(y[f]=!0,g.insertRule(`@keyframes ${f} ${p}`,g.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${f} ${o}ms linear ${r}ms 1 both`,nt+=1,f}function Po(n,e){const t=(n.style.animation||"").split(", "),o=t.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=t.length-o.length;r&&(n.style.animation=o.join(", "),nt-=r,nt||Do())}function Do(){Pt(()=>{nt||(tt.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&z(e)}),tt.clear())})}let He;function Ve(n){He=n}function Xn(){if(!He)throw new Error("Function called outside component initialization");return He}function Be(n){Xn().$$.on_mount.push(n)}function Me(n){Xn().$$.on_destroy.push(n)}const Pe=[],ye=[];let Le=[];const Zt=[],Lo=Promise.resolve();let $t=!1;function No(){$t||($t=!0,Lo.then(ie))}function Ge(n){Le.push(n)}const pt=new Set;let Re=0;function ie(){if(Re!==0)return;const n=He;do{try{for(;Re<Pe.length;){const e=Pe[Re];Re++,Ve(e),Uo(e.$$)}}catch(e){throw Pe.length=0,Re=0,e}for(Ve(null),Pe.length=0,Re=0;ye.length;)ye.pop()();for(let e=0;e<Le.length;e+=1){const t=Le[e];pt.has(t)||(pt.add(t),t())}Le.length=0}while(Pe.length);for(;Zt.length;)Zt.pop()();$t=!1,pt.clear(),Ve(n)}function Uo(n){if(n.fragment!==null){n.update(),$e(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ge)}}function zo(n){const e=[],t=[];Le.forEach(o=>n.indexOf(o)===-1?e.push(o):t.push(o)),t.forEach(o=>o()),Le=e}let je;function jo(){return je||(je=Promise.resolve(),je.then(()=>{je=null})),je}function dt(n,e,t){n.dispatchEvent(Yo(`${e?"intro":"outro"}${t}`))}const Ze=new Set;let Ie;function pe(){Ie={r:0,c:[],p:Ie}}function de(){Ie.r||$e(Ie.c),Ie=Ie.p}function Y(n,e){n&&n.i&&(Ze.delete(n),n.i(e))}function D(n,e,t,o){if(n&&n.o){if(Ze.has(n))return;Ze.add(n),Ie.c.push(()=>{Ze.delete(n),o&&(t&&n.d(1),o())}),n.o(e)}else o&&o()}const Fo={duration:0};function en(n,e,t,o){const r={direction:"both"};let i=e(n,t,r),s=o?0:1,a=null,c=null,l=null;function p(){l&&Po(n,l)}function f(g,y){const v=g.b-s;return y*=Math.abs(v),{a:s,b:g.b,d:v,duration:y,start:g.start,end:g.start+y,group:g.group}}function h(g){const{delay:y=0,duration:v=300,easing:u=jn,tick:d=Z,css:I}=i||Fo,x={start:$o()+y,b:g};g||(x.group=Ie,Ie.r+=1),a||c?c=x:(I&&(p(),l=Qt(n,s,g,v,y,u,I)),g&&d(0,1),a=f(x,v),Ge(()=>dt(n,g,"start")),Mo(M=>{if(c&&M>c.start&&(a=f(c,v),c=null,dt(n,a.b,"start"),I&&(p(),l=Qt(n,s,a.b,a.duration,0,u,i.css))),a){if(M>=a.end)d(s=a.b,1-s),dt(n,a.b,"end"),c||(a.b?p():--a.group.r||$e(a.group.c)),a=null;else if(M>=a.start){const J=M-a.start;s=a.a+a.d*u(J/a.duration),d(s,1-s)}}return!!(a||c)}))}return{run(g){Rt(i)?jo().then(()=>{i=i(r),h(g)}):h(g)},end(){p(),a=c=null}}}function le(n){n&&n.c()}function ne(n,e,t,o){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),o||Ge(()=>{const s=n.$$.on_mount.map(Fn).filter(Rt);n.$$.on_destroy?n.$$.on_destroy.push(...s):$e(s),n.$$.on_mount=[]}),i.forEach(Ge)}function oe(n,e){const t=n.$$;t.fragment!==null&&(zo(t.after_update),$e(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Vo(n,e){n.$$.dirty[0]===-1&&(Pe.push(n),No(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ue(n,e,t,o,r,i,s,a=[-1]){const c=He;Ve(n);const l=n.$$={fragment:null,ctx:[],props:i,update:Z,not_equal:r,bound:Kt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Kt(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let p=!1;if(l.ctx=t?t(n,e.props||{},(f,h,...g)=>{const y=g.length?g[0]:h;return l.ctx&&r(l.ctx[f],l.ctx[f]=y)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](y),p&&Vo(n,f)),h}):[],l.update(),p=!0,$e(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){const f=Eo(e.target);l.fragment&&l.fragment.l(f),f.forEach(z)}else l.fragment&&l.fragment.c();e.intro&&Y(n.$$.fragment),ne(n,e.target,e.anchor,e.customElement),ie()}Ve(c)}class fe{$destroy(){oe(this,1),this.$destroy=Z}$on(e,t){if(!Rt(t))return Z;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!To(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function qn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Kn={};function Ho(n){return!!(n&&typeof n=="object"&&isFinite(n.length)&&n.length>=0&&n.length===Math.floor(n.length)&&n.length<4294967296)}function Go(n){return!!(n&&typeof n=="object"&&typeof n.sort=="function")}Kn.isSortableArrayLike=function(n){return Ho(n)&&Go(n)};var Wo={numcmp:function(n,e){return n-e},strcmp:function(n,e){return n<e?-1:n>e?1:0}},Qn={};function Mt(n,e,t,o,r){var i=t+e>>>1,s=this.compare(n[i][this.index],o);return s?e>=t?r[o]={found:!1,index:null,prev:s<0?t:t-1,next:s<0?t+1:t}:s>0?Mt.call(this,n,e,i-1,o,r):Mt.call(this,n,i+1,t,o,r):r[o]={found:!0,index:i,prev:null,next:null}}function Xo(n){var e=this.data;return Mt.call(this,e,0,e.length-1,n,this.valpos)}Qn.search=Xo;var qo=Kn,tn=Wo,Ko=Qn,Qo=Ce;function Ce(n,e){if(!qo.isSortableArrayLike(n))throw new Error("Invalid data");if(!e||n.length>0&&!(e in n[0]))throw new Error("Invalid index");this.data=n,this.index=e,this.setBoundaries(),this.compare=typeof this.minv=="number"?tn.numcmp:tn.strcmp,this.search=Ko.search,this.valpos={},this.cursor=null,this.nextlow=null,this.nexthigh=null}Ce.prototype.setCompare=function(n){if(typeof n!="function")throw new Error("Invalid argument");return this.compare=n,this};Ce.prototype.setSearch=function(n){if(typeof n!="function")throw new Error("Invalid argument");return this.search=n,this};Ce.prototype.sort=function(){var n=this,e=this.index;return this.data.sort(function(t,o){return n.compare(t[e],o[e])}),this.setBoundaries(),this};Ce.prototype.setBoundaries=function(){var n=this.data,e=this.index;return this.minv=n.length&&n[0][e],this.maxv=n.length&&n[n.length-1][e],this};Ce.prototype.fetch=function(n){if(this.data.length===0)return this.cursor=null,this.nextlow=null,this.nexthigh=null,this;if(this.compare(n,this.minv)===-1)return this.cursor=null,this.nextlow=null,this.nexthigh=0,this;if(this.compare(n,this.maxv)===1)return this.cursor=null,this.nextlow=this.data.length-1,this.nexthigh=null,this;var e=this.valpos,t=e[n];if(t)return t.found?(this.cursor=t.index,this.nextlow=null,this.nexthigh=null):(this.cursor=null,this.nextlow=t.prev,this.nexthigh=t.next),this;var o=this.search.call(this,n);return this.cursor=o.index,this.nextlow=o.prev,this.nexthigh=o.next,this};Ce.prototype.get=function(n){n&&this.fetch(n);var e=this.cursor;return e!==null?this.data[e]:null};Ce.prototype.getRange=function(n,e){if(this.compare(n,e)===1)return[];this.fetch(n);var t=this.cursor||this.nexthigh;this.fetch(e);var o=this.cursor||this.nextlow;return t===null||o===null?[]:this.data.slice(t,o+1)};const ut=qn(Qo),Oe=1e3,ve=Oe*60,Zo=ve*3,Lt=ve*5,Nt=ve*15,Ut=ve*30,te=ve*60,Ct=te*4,nn=te*12,he=te*24,ot=he*7,Ee=ot*4,Te=he*365,er=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tr=[Te*10,Te*5,Te*3,Te*2,Te,Ee*6,Ee*4,Ee*3,Ee*2,Ee,he*15,he*10,he*7,he*5,he*3,he*2,he,te*12,te*6,te*3,te*1.5,te,Ut,Nt,ve*10,Lt,ve*2,ve],nr=[.05,.1,.2,.25,.5,.8,1,2,5],or={back:"#14151c",grid:"#252732",text:"#adadad",textHL:"#dedddd",textLG:"#c4c4c4",llValue:"#818989",llBack:"#14151c77",llSelect:"#2d7b2f",scale:"#606060",cross:"#8091a0",candleUp:"#41a376",candleDw:"#de4646",wickUp:"#23a77688",wickDw:"#e5415088",volUp:"#41a37682",volDw:"#de464682",panel:"#2a2f38",tbBack:void 0,tbBorder:"#8282827d"},Zn={SBMIN:60,SBMAX:1/0,TOOLBAR:57,TB_ICON:25,TB_ITEM_M:6,TB_ICON_BRI:1,TB_ICON_HOLD:420,TB_BORDER:1,TB_B_STYLE:"dotted",TOOL_COLL:7,EXPAND:.15,CANDLEW:.7,GRIDX:100,GRIDY:47,BOTBAR:28,PANHEIGHT:22,DEFAULT_LEN:50,MINIMUM_LEN:5,MIN_ZOOM:5,MAX_ZOOM:5e3,VOLSCALE:.15,UX_OPACITY:.9,ZOOM_MODE:"tv",L_BTN_SIZE:21,L_BTN_MARGIN:"-6px 0 -6px 0",SCROLL_WHEEL:"prevent",QUANTIZE_AFTER:0,AUTO_PRE_SAMPLE:10};Zn.FONT=`11px -apple-system,BlinkMacSystemFont,
    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
    Fira Sans,Droid Sans,Helvetica Neue,
    sans-serif`;const rr="When using IB mode you should specify timeframe ('tf' filed in 'chart' object),otherwise you can get an unexpected behaviour",ir={"1s":Oe,"5s":Oe*5,"10s":Oe*10,"20s":Oe*20,"30s":Oe*30,"1m":ve,"3m":Zo,"5m":Lt,"15m":Nt,"30m":Ut,"1H":te,"2H":te*2,"3H":te*3,"4H":Ct,"12H":nn,"1D":he,"1W":ot,"1M":Ee,"1Y":Te,"1h":te,"2h":te*2,"3h":te*3,"4h":Ct,"12h":nn,"1d":he,"1w":ot,"1y":Te},sr=-.5,ee={SECOND:Oe,MINUTE:ve,MINUTE5:Lt,MINUTE15:Nt,MINUTE30:Ut,HOUR:te,HOUR4:Ct,DAY:he,WEEK:ot,MONTH:Ee,YEAR:Te,MONTHMAP:er,TIMESCALES:tr,$SCALES:nr,ChartConfig:Zn,MAP_UNIT:ir,IB_TF_WARN:rr,COLORS:or,HPX:sr},A={clamp(n,e,t){return n<=e?e:n>=t?t:n},addZero(n){return n<10&&(n="0"+n),n},dayStart(n){return new Date(n).setUTCHours(0,0,0,0)},monthStart(n){let e=new Date(n);return Date.UTC(e.getFullYear(),e.getMonth(),1)},yearStart(n){return Date.UTC(new Date(n).getFullYear())},getYear(n){if(n)return new Date(n).getUTCFullYear()},getMonth(n){if(n)return new Date(n).getUTCMonth()},nearestA(n,e){let t=1/0,o=null,r=-1;for(var i=0;i<e.length;i++){var s=e[i];Math.abs(s-n)<t&&(t=Math.abs(s-n),o=s,r=i)}return[r,o]},nearestTs(n,e){let t=1/0,o=null,r=-1;for(var i=0;i<e.length;i++){var s=e[i][0];Math.abs(s-n)<t&&(t=Math.abs(s-n),o=e[i],r=i)}return[r,o]},nearestTsIb(n,e,t){let o=Math.floor(n-t)+1,r=e[o]||null;return[o,r]},round(n,e=8){return parseFloat(n.toFixed(e))},strip(n){return parseFloat(parseFloat(n).toPrecision(12))},getDay(n){return n?new Date(n).getDate():null},overwrite(n,e){n.splice(0,n.length,...e)},allOverlays(n=[]){return n.map(e=>e.overlays||[]).flat()},detectTimeframe(n){let e=Math.min(n.length-1,99),t=1/0;return n.slice(0,e).forEach((o,r)=>{let i=n[r+1][0]-o[0];i===i&&i<t&&(t=i)}),t>=ee.MONTH&&t<=ee.DAY*30?ee.DAY*31:t},fastFilter(n,e,t){if(!n.length)return[n,void 0];try{let o=new ut(n,"0"),r=o.getRange(e,t),i=o.valpos[e].next;return[r,i]}catch{return[n.filter(r=>r[0]>=e&&r[0]<=t),0]}},fastFilter2(n,e,t){if(!n.length)return[n,void 0];try{let o=new ut(n,"0");o.fetch(e);let r=o.cursor||o.nexthigh;o.fetch(t);let i=o.cursor||o.nextlow;return[r,i+1]}catch{let r=n.filter(a=>a[0]>=e&&a[0]<=t),i=n.indexOf(r[0]),s=n.indexOf(r[r.length-1]);return[i,s]}},fastFilterIB(n,e,t){if(!n.length)return[void 0,void 0];let o=Math.floor(e);o<0&&(o=0);let r=Math.floor(t+1);return[o,r]},fastNearest(n,e){let t=new ut(n,"0");return t.fetch(e),[t.nextlow,t.nexthigh]},now(){return new Date().getTime()},pause(n){return new Promise((e,t)=>setTimeout(e,n))},smartWheel(n){let e=Math.abs(n);return e>500?(200+Math.log(e))*Math.sign(n):n},getDeltaX(n){return n.originalEvent.deltaX/12},getDeltaY(n){return n.originalEvent.deltaY/12},applyOpacity(n,e){if(n.length===7){let t=Math.floor(e*255);t=this.clamp(t,0,255),n+=t.toString(16)}return n},parseTf(n){return typeof n=="string"?ee.MAP_UNIT[n]:n},indexShift(n,e){if(!e.length)return 0;let t=e[0][0],o;for(var r=1;r<e.length;r++)if(e[r][0]!==t){o=e[r][0];break}for(var i=0;i<n.length;i++)if(n[i][0]===o)return i-r;return 0},measureText(n,e,t){let o=n.measureTextOrg(e);if(o.width===0){const r=document,i="nvjs-measure-text";let s=r.getElementById(i);if(!s){let a=r.getElementById(t);s=r.createElement("div"),s.id=i,s.style.position="absolute",s.style.top="-1000px",a.appendChild(s)}return n.font&&(s.style.font=n.font),s.innerText=e.replace(/ /g,"."),{width:s.offsetWidth}}else return o},uuid(n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"){return n.replace(/[xy]/g,e=>{var t=Math.random()*16|0,o=e=="x"?t:t&3|8;return o.toString(16)})},uuid2(){return this.uuid("xxxxxxxxxxxx")},uuid3(){return Math.random().toString().slice(2).replace(/^0+/,"")},warn(n,e,t=0){setTimeout(()=>{n()&&console.warn(e)},t)},delayedExec(n){if(!n.script||!n.script.execInterval)return!0;let e=this.now(),t=n.script.execInterval;return!n.settings.$last_exec||e>n.settings.$last_exec+t?(n.settings.$last_exec=e,!0):!1},formatName(n){if(!n.name)return;let e=n.name;for(var t in n.settings||{}){let o=n.settings[t],r=new RegExp(`\\$${t}`,"g");e=e.replace(r,o)}return e},xMode(){return this.is_mobile?"explore":"default"},defaultPrevented(n){return n.original?n.original.defaultPrevented:n.defaultPrevented},afterAll(n,e,t){clearTimeout(n.__afterAllId__),n.__afterAllId__=setTimeout(()=>e(),t)},defaultPreSampler(n){if(!n)return[];let e=[];for(var t=1;t<n.length;t++)typeof n[t]=="number"&&e.push(n[t]);return e},getScalesBySide(n,e){return e?e.settings.scaleTemplate[n].map(o=>e.scales[o]).filter(o=>o):[]},autoScaleSideId(n,e,t){e[n].length?(!t[n]||!e[n].includes(t[n]))&&(t[n]=e[n][0]):t[n]=void 0},callsPerSecond(){window.__counter__===void 0&&(window.__counter__=0),window.__counter__++,!window.__cpsId__&&(window.__cpsId__=setTimeout(()=>{console.log(window.__counter__,"upd/sec"),window.__counter__=0,window.__cpsId__=null},1e3))},findIndexOffset(n,e){let t={},o={};for(var r=0;r<n.length;r++)t[n[r][0]]=r;for(var r=0;r<e.length;r++)o[e[r][0]]=r;let i=[];for(var s in o)if(t[s]!==void 0){let a=t[s]-o[s];if((!i.length||i[0]===a)&&i.unshift(a),i.length===3)return i.pop()}return 0},formatCash(n){if(n==null)return"x";if(typeof n!="number")return n;if(n<1e3)return n.toFixed(0);if(n>=1e3&&n<1e6)return+(n/1e3).toFixed(2)+"K";if(n>=1e6&&n<1e9)return+(n/1e6).toFixed(2)+"M";if(n>=1e9&&n<1e12)return+(n/1e9).toFixed(2)+"B";if(n>=1e12)return+(n/1e12).toFixed(2)+"T"},realTimeRange(n){return n.length?n[n.length-1][0]-n[0][0]:0},numberLR(n){var e=n!=null?n.toString():"";if(n<1e-6){var[t,o]=e.split("e-"),[r,i]=t.split(".");i||(i=""),i={length:i.length+parseInt(o)||0}}else var[r,i]=e.split(".");return[r.length,i?i.length:0]},ovDispositionHash(n){let e="";for(var t of n){e+=t.uuid;for(var o of t.overlays)o.main||(e+=o.type)}return e},isMobile:(n=>"onorientationchange"in n&&(!!navigator.maxTouchPoints||!!navigator.msMaxTouchPoints||"ontouchstart"in n||n.DocumentTouch&&document instanceof n.DocumentTouch))(typeof window<"u"?window:{})},H={point2line(n,e,t){let{area:o,base:r}=this.tri(n,e,t);return Math.abs(this.tri_h(o,r))},point2seg(n,e,t){let{area:o,base:r}=this.tri(n,e,t),i=this.dot_prod(n,e,t)/r,s=Math.max(-i,0),a=Math.max(i-r,0),c=Math.abs(this.tri_h(o,r));return Math.max(c,s,a)},point2ray(n,e,t){let{area:o,base:r}=this.tri(n,e,t),i=this.dot_prod(n,e,t)/r,s=Math.max(-i,0),a=Math.abs(this.tri_h(o,r));return Math.max(a,s)},tri(n,e,t){let o=this.area(n,e,t),r=t[0]-e[0],i=t[1]-e[1],s=Math.sqrt(r*r+i*i);return{area:o,base:s}},area(n,e,t){return n[0]*(e[1]-t[1])+e[0]*(t[1]-n[1])+t[0]*(n[1]-e[1])},tri_h(n,e){return n/e},dot_prod(n,e,t){let o=[t[0]-e[0],t[1]-e[1]],r=[n[0]-e[0],n[1]-e[1]];return o[0]*r[0]+o[1]*r[1]},log(n){return Math.sign(n)*Math.log(Math.abs(n)+1)},exp(n){return Math.sign(n)*(Math.exp(Math.abs(n))-1)},log_mid(n,e){let t=this.log(n[0]),o=this.log(n[1]),r=e/2,i=t-r*(t-o)/e;return this.exp(i)},re_range(n,e,t){let o=this.log(n[0]),r=this.log(n[1]),i=this.log(e),s=this.log(t),a=(i-s)*(o-r)/(o-s);return this.exp(i-a)}};class lr{constructor(e){this.meta=e}xSync(e,t,o,r){if(r.visible===!1)return this.hide(),this;let i=this.ti;Object.assign(this,r);let s=t.main.startx,a=t.main.pxStep;return this.yValues(t),this.locked&&!this.meta.scrollLock?(this.x=t.main.time2x(i),this):(this.x=Math.round((this.x-s)/a)*a+s,this.x=Math.floor(this.x-1)+.5,this.xValues(e,t,o))}xValues(e,t,o){(!this.locked||this.meta.scrollLock)&&(this.ti=t.main.x2ti(this.x));let r=[],i;for(var s of e.panes()){let c=[];for(var a=0;a<s.overlays.length;a++){let l=s.overlays[a];if(!t.indexBased)i=A.nearestTs(this.ti,l.dataSubset)||[];else{let p=l.indexOffset;i=A.nearestTsIb(this.ti,l.data,p)||[]}l.main&&(this.time=i[1]?i[1][0]:void 0),c.push(i[1])}r.push(c)}return this.values=r,this.quantizeTime(e,t,o),this}yValues(e){let t=this.gridId;if(!e.grids[t])return;this.scales={};let o=e.grids[t];for(var r of Object.values(o.scales)){let i=this.y2value(this.y,r);this.scales[r.scaleSpecs.id]=i}}quantizeTime(e,t,o){let r=e.chart.id,i=e.mainOv.id;if(!this.values||!this.values[r])return;let s=this.values[r][i];if(!s)return;if(Math.abs((s[0]-this.ti)/o.interval)>=.5){let c=Math.round(this.ti/o.interval);this.ti=c*o.interval}else this.ti=s[0];t.indexBased||(this.time=this.ti)}y2value(e,t){return t.scaleSpecs.log?H.exp((e-t.B)/t.A):(e-t.B)/t.A}getValue(e,t){return this.values?(this.values[e]||[])[t]:void 0}hide(){this.visible=!1,delete this.scales,delete this.x,delete this.y,this.locked||delete this.ti}}class ar{constructor(){this.handlers={}}emit(e,t){let o=this.handlers[e];if(o)for(var r in o)o[r](t)}emitSpec(e,t,o){let r=this.handlers[t];r&&r[e]&&r[e](o)}on(e,t){let[o,r]=e.split(":");this.handlers[r]||(this.handlers[r]={}),this.handlers[r][o]=t}off(e,t=null){if(t&&this.handlers[t]){delete this.handlers[t][e];return}for(var t in this.handlers)delete this.handlers[t][e]}}let ft={};function cr(n){return ft[n]||(ft[n]=new ar(n)),ft[n]}const re={instance:cr};class pr{constructor(e,t){this.chart=t,this.ww=t.ww,this.ww.onevent=this.onEvent.bind(this)}setRefs(e,t){this.hub=e,this.scan=t}onEvent(e){switch(e.data.type){case"overlay-data":this.onOverlayData(e.data.data);case"engine-state":this.onEngineState(e.data.data);break}}async uploadData(){this.hub.mainOv&&await this.ww.exec("upload-data",{meta:{range:this.chart.range,tf:this.scan.tf},dss:{ohlcv:this.hub.mainOv.data}})}async updateData(){let e=this.hub.mainOv.data,t=await this.ww.exec("update-data",{ohlcv:e.slice(-2)}),o=!1;for(var r of this.hub.allOverlays())if(t[r.uuid]){let i=r.data[r.data.length-1],s=t[r.uuid];!i||s[0]>i[0]?(r.data.push(s),o=!0):s[0]===i[0]&&(r.data[r.data.length-1]=s)}o?this.chart.update("data"):this.chart.update()}async execScripts(){let e=this.hub.panes().map(t=>({id:t.id,uuid:t.uuid,scripts:t.scripts}));await this.ww.exec("exec-all-scripts",e)}async uploadAndExec(){await this.uploadData(),await this.execScripts()}replaceOverlays(e){for(var t of this.hub.panes()){t.overlays=t.overlays.filter(r=>!r.prod);let o=e.find(r=>r.uuid===t.uuid);o&&o.overlays&&t.overlays.push(...o.overlays)}this.chart.update()}updateOverlays(e){for(var t of this.hub.panes()){let r=e.find(i=>i.uuid===t.uuid);if(r&&r.overlays){let i=t.overlays.filter(s=>s.prod);for(var o=0;o<i.length;o++){let s=i[o],a=r.overlays[o];s&&a&&(s.name=a.name,s.data=a.data,s.uuid=a.uuid)}}}this.chart.update("data",{updateHash:!0})}onOverlayData(e){let t=A.ovDispositionHash(this.hub.panes()),o=A.ovDispositionHash(e);t===o?this.updateOverlays(e):this.replaceOverlays(e)}onEngineState(e){this.state=Object.assign(this.state||{},e)}}let ht={};function dr(n,e){return ht[n]||(ht[n]=new pr(n,e)),ht[n]}const eo={instance:dr};class ur{constructor(e,t,o){this.src=e,this.i1=Math.max(0,t-1),this.i2=Math.min(o,e.length-1),this.length=this.i2-this.i1+1}makeSubset(){return this.src.slice(this.i1,this.i2+1)}}class fr{constructor(e){let t=re.instance(e),o=eo.instance(e);this.events=t,this.se=o,o.hub=this,t.on("hub:set-scale-index",this.onScaleIndex.bind(this)),t.on("hub:display-overlay",this.onDisplayOv.bind(this))}init(e){var t;this.data=e,this.indexBased=(t=e.indexBased)!=null?t:!1,this.chart=null,this.offchart=null,this.mainOv=null,this.mainPaneId=null}updateRange(e){for(var t of this.data.panes)for(var o of t.overlays){let r=o.indexOffset;o.dataView=this.filter(o.data,e,r),o.dataSubset=o.dataView.makeSubset()}}calcSubset(e){var t=0;for(var o of this.data.panes||[]){o.id=t++,o.overlays=o.overlays||[],o.settings=o.settings||{};var r=0;for(var i of o.overlays)i.id=r++,i.main=!!i.main,i.data=i.data||[],i.dataView=this.filter(i.data,e,i.indexOffset),i.dataSubset=i.dataView.makeSubset(),i.settings=i.settings||{},i.props=i.props||{},i.uuid=i.uuid||A.uuid3();o.uuid=o.uuid||A.uuid3()}}async loadScripts(e=!1){for(var t of this.data.panes||[]){var o=0;t.scripts=t.scripts||[];for(var r of t.scripts)r.id=o++,r.settings=r.settings||{},r.props=r.props||{},r.uuid=r.uuid||A.uuid3()}e&&(await A.pause(0),await this.se.uploadAndExec())}detectMain(){let e=A.allOverlays(this.data.panes),t=e.find(r=>r.main)||e[0];if(!(!e.length||!t)){t.main=!0,this.chart=this.data.panes.find(r=>r.overlays.find(i=>i.main)),this.offchart=this.data.panes.filter(r=>r!==this.chart),this.mainOv=t,this.mainPaneId=this.panes().indexOf(this.chart);for(var o of e)o!==t&&(o.main=!1)}}filter(e,t,o=0){var i=(this.indexBased?A.fastFilterIB:A.fastFilter2)(e,t[0]-o,t[1]-o);return new ur(e,i[0],i[1])}panes(){return(this.data.panes||[]).filter(e=>e.uuid)}overlay(e,t){var o;return(o=this.panes()[e])==null?void 0:o.overlays[t]}ovData(e,t){var o,r;return(r=(o=this.panes()[e])==null?void 0:o.overlays[t])==null?void 0:r.data}ovDataSubset(e,t){var o,r;return(r=(o=this.panes()[e])==null?void 0:o.overlays[t])==null?void 0:r.dataSubset}allOverlays(e){let t=A.allOverlays(this.data.panes);return e?t.filter(o=>o.type===e):t}onScaleIndex(e){let t=this.panes()[e.paneId];t&&(t.settings.scaleIndex=e.index,t.settings.scaleSideIdxs=e.sideIdxs,this.events.emitSpec("chart","update-layout"))}onDisplayOv(e){let t=this.panes()[e.paneId];if(!t)return;let o=t.overlays[e.ovId];if(!o)return;o.settings.display=e.flag;let r=`${e.paneId}-${e.ovId}`;this.events.emitSpec("chart","update-layout"),this.events.emitSpec(`ll-${r}`,"update-ll")}}let gt={};function hr(n){return gt[n]||(gt[n]=new fr(n)),gt[n]}const _e={instance:hr};class gr{constructor(e){let t=re.instance(e);this.hub=_e.instance(e),this.events=t,t.on("meta:sidebar-transform",this.onYTransform.bind(this)),t.on("meta:select-overlay",this.onOverlaySelect.bind(this)),t.on("meta:grid-mousedown",this.onGridMousedown.bind(this)),t.on("meta:scroll-lock",this.onScrollLock.bind(this)),this.storage={}}init(e){this.panes=0,this.legendFns=[],this.yTransforms=[],this.preSamplers=[],this.yRangeFns=[],this.autoPrecisions=[],this.valueTrackers=[],this.selectedOverlay=void 0,this.ohlcMap=[],this.ohlcFn=void 0,this.scrollLock=!1}exctractFrom(e){var t;let o=e.gridId(),r=e.id();var i=this.yRangeFns[o]||[];i[r]=e.yRange?{exec:e.yRange,preCalc:e.yRangePreCalc}:null;var s=this.preSamplers[o]||[];s[r]=e.preSampler;var a=this.legendFns[o]||[];a[r]={legend:e.legend,legendHtml:e.legendHtml,noLegend:(t=e.noLegend)!=null?t:!1};var c=this.valueTrackers[o]||[];c[r]=e.valueTracker,this.hub.overlay(o,r).main&&(this.ohlcFn=e.ohlc),this.yRangeFns[o]=i,this.preSamplers[o]=s,this.legendFns[o]=a,this.valueTrackers[o]=c}calcOhlcMap(){this.ohlcMap={};let e=this.hub.mainOv.data;for(var t=0;t<e.length;t++)this.ohlcMap[e[t][0]]={ref:e[t],index:t}}setAutoPrec(e,t,o){let r=this.autoPrecisions[e]||[];r[t]=o,this.autoPrecisions[e]=r}finish(){this.panes++,!(this.panes<this.hub.panes().length)&&(this.autoPrecisions=[],this.calcOhlcMap(),setTimeout(()=>{this.events.emitSpec("chart","update-layout"),this.events.emit("update-legend")}))}store(){this.storage={};let e=this.yTransforms||[];for(var t in e){let r=e[t],i=this.hub.panes()[t];if(i)for(var o in r){let s=`yts:${i.uuid}:${o}`;this.storage[s]=r[o]}}}restore(){let e=this.yTransforms;for(var t in this.storage){let[o,r,i]=t.split(":"),s=this.hub.panes().find(a=>a.uuid===r);if(s)switch(o){case"yts":e[s.id]||(e[s.id]=[]),e[s.id][i]=this.storage[t];break}}this.store()}getYtransform(e,t){return(this.yTransforms[e]||[])[t]}getAutoPrec(e,t){return(this.autoPrecisions[e]||[])[t]}getPreSampler(e,t){return(this.preSamplers[e]||[])[t]}getLegendFns(e,t){return(this.legendFns[e]||[])[t]}ohlc(e){let t=this.ohlcMap[e];if(!(!t||!this.ohlcFn))return this.ohlcFn(t.ref)}onYTransform(e){let t=this.yTransforms[e.gridId]||{},o=t[e.scaleId]||{};t[e.scaleId]=Object.assign(o,e),this.yTransforms[e.gridId]=t,e.updateLayout&&this.events.emitSpec("chart","update-layout"),this.store()}onOverlaySelect(e){this.selectedOverlay=e.index,this.events.emit("$overlay-select",{index:e.index,ov:this.hub.overlay(...e.index)})}onGridMousedown(e){this.selectedOverlay=void 0,this.events.emit("$overlay-select",{index:void 0,ov:void 0})}onScrollLock(e){this.scrollLock=e}}let mt={};function mr(n){return mt[n]||(mt[n]=new gr(n)),mt[n]}const Ae={instance:mr};class yr{constructor(){}init(e){this.props=e,this.hub=_e.instance(e.id)}detectInterval(){this.all=A.allOverlays(this.hub.data.panes),this.all.filter(o=>o.main).length>1&&console.warn("Two or more overlays with flagged as 'main'");let e=this.all.find(o=>o.main)||this.all[0];e=e||{},this.main=e.data||[];let t=(e.settings||{}).timeFrame;return t!==void 0?this.tf=A.parseTf(t):this.tf=A.detectTimeframe(this.main),this.interval=this.hub.data.indexBased?1:this.tf,this.ibMode=this.hub.data.indexBased,this.interval}getTimeframe(){return this.tf}defaultRange(){const e=this.props.config.DEFAULT_LEN,t=this.props.config.MINIMUM_LEN+.5,o=this.main.length-1;if(this.main.length<2)return[];if(this.main.length<=e)var r=0,i=t;else r=o-e,i=.5;return this.hub.data.indexBased?[r-this.interval*i,o+this.interval*t]:[this.main[r][0]-this.interval*i,this.main[o][0]+this.interval*t]}calcIndexOffsets(){var e,t;if(this.hub.data.indexBased)for(var o of this.all){if(o.data===this.main){o.indexOffset=(e=o.indexOffset)!=null?e:0;continue}let r=A.findIndexOffset(this.main,o.data);o.indexOffset=(t=o.indexOffset)!=null?t:r}}calcPanesHash(){let e="";for(var t of this.hub.data.panes||[]){e+=t.uuid;for(var o of t.overlays||[])e+=o.uuid}return e}panesChanged(){return this.calcPanesHash()!==this.panesHash}updatePanesHash(){this.panesHash=this.calcPanesHash()}}let yt={};function vr(n){return yt[n]||(yt[n]=new yr(n)),yt[n]}const zt={instance:vr},vt=ee.HPX;function to(n,e,t=null){var o;const r=e[1]-e[0],i=n.spacex/r,s=(n.scaleSpecs||{}).log||!1,a=(o=t?t.indexOffset:0)!=null?o:0;return Object.assign(n,{ti:(c,l)=>n.indexBased?l:c,ti2x:(c,l)=>{let p=n.indexBased?l+a:c;return Math.floor((p-e[0])*i)+vt},time2x:c=>Math.floor((c-e[0])*i)+vt,value2y:c=>(s&&(c=H.log(c)),Math.floor(c*n.A+n.B)+vt),tMagnet:c=>{},y2value:c=>s?H.exp((c-n.B)/n.A):(c-n.B)/n.A,x2time:c=>e[0]+c/i,x2ti:c=>e[0]+c/i,$magnet:c=>{},cMagnet:c=>{const l=n.candles||n.master_grid.candles,p=l.map(h=>h.raw[0]),f=A.nearestA(c,p)[0];return l[f]},dataMagnet:c=>{}}),n}const on={candle(n,e,t,o){return{x:e,w:n.pxStep*o.config.CANDLEW,o:Math.floor(H.log(t[1])*n.A+n.B),h:Math.floor(H.log(t[2])*n.A+n.B),l:Math.floor(H.log(t[3])*n.A+n.B),c:Math.floor(H.log(t[4])*n.A+n.B),raw:t}},expand(n,e){let t=-e/(H.log(n.$hi)-H.log(n.$lo)),o=-H.log(n.$hi)*t,r=-e*.1,i=e*1.1;n.$hi=H.exp((r-o)/t),n.$lo=H.exp((i-o)/t)}},{$SCALES:br}=ee;function wr(n,e,t){let{hub:o,props:r,settings:i,height:s}=t,{ctx:a}=r,c=Ae.instance(r.id),l={},p=(c.yTransforms[e.gridId]||[])[n],f=e.gridId,h=e.ovs,g=e.log;const y=r.config.AUTO_PRE_SAMPLE;function v(){if(Math.max(...h.map(w=>w.dataSubset.length))<2){l.prec=0,l.sb=r.config.SBMIN;return}if(e.precision!==void 0)l.prec=e.precision;else{l.prec=0;for(var b of h){if(b.settings.precision!==void 0)var T=b.settings.precision;else var T=d(b);T>l.prec&&(l.prec=T)}}if(!isFinite(l.$hi)||!isFinite(l.$lo)){l.sb=r.config.SBMIN;return}let k=[];k.push(l.$hi.toFixed(l.prec).length),k.push(l.$lo.toFixed(l.prec).length);let E="0".repeat(Math.max(...k))+"    ";l.sb=a.measureText(E).width,l.sb=Math.max(Math.floor(l.sb),r.config.SBMIN),l.sb=Math.min(l.sb,r.config.SBMAX)}function u(){var m=-1/0,b=1/0;for(var T of h){if(T.settings.display===!1)continue;let q=(c.yRangeFns[f]||[])[T.id],W=T.dataSubset;var k=-1/0,E=1/0;if(!q||q&&q.preCalc)for(var w=0;w<W.length;w++)for(var S=1;S<W[w].length;S++){let P=W[w][S];P>k&&(k=P),P<E&&(E=P)}if(q){var C=q.exec(k,E);if(C)var[k,E,U]=q.exec(k,E);else var[k,E]=[m,b]}k>m&&(m=k),E<b&&(b=E)}p&&!p.auto&&p.range?(l.$hi=p.range[0],l.$lo=p.range[1]):(g?(l.$hi=m,l.$lo=b,on.expand(l,s)):(U=U===!1?0:1,l.$hi=m+(m-b)*r.config.EXPAND*U,l.$lo=b-(m-b)*r.config.EXPAND*U),l.$hi===l.$lo&&(g?on.expand(l,s):(l.$hi*=1.05,l.$lo*=.95)))}function d(m){let b=0,T=[],k=c.getPreSampler(f,m.id);k=k||A.defaultPreSampler;for(var E=0;E<y;E++){let S=Math.floor(Math.random()*m.dataSubset.length),C=k(m.dataSubset[S]);typeof C=="number"?T.push(C):T=T.concat(C)}T.forEach(S=>{let C=A.numberLR(S)[1];C>b&&(b=C)});let w=c.getAutoPrec(f,m.id);return w===void 0||b>w?(c.setAutoPrec(f,m.id,b),b):w}function I(){g?(l.A=-s/(H.log(l.$hi)-H.log(l.$lo)),l.B=-H.log(l.$hi)*l.A):(l.A=-s/(l.$hi-l.$lo),l.B=-l.$hi*l.A)}function x(){let m=l.$hi-l.$lo,b=m*(r.config.GRIDY/s),T=parseInt(m.toExponential().split("e")[1]),k=Math.pow(10,T),E=br.map(w=>w*k);return A.strip(A.nearestA(b,E)[1])}function M(){let m=J(),b=R();return Math.max(m,b)}function J(){let m=Math.min(l.B,s);if(m<r.config.GRIDY)return 1;let b=m/r.config.GRIDY,T=l.$hi;if(l.$lo>0)var k=l.$hi/l.$lo;else k=l.$hi/1;return T*(r.config.GRIDY/m),parseInt(T.toExponential().split("e")[1]),Math.pow(k,1/b)}function R(){let m=Math.min(s-l.B,s);if(m<r.config.GRIDY)return 1;let b=m/r.config.GRIDY,T=Math.abs(l.$lo);if(l.$hi<0&&l.$lo<0)var k=Math.abs(l.$lo/l.$hi);else k=Math.abs(l.$lo)/1;return T*(r.config.GRIDY/m),parseInt(T.toExponential().split("e")[1]),Math.pow(k,1/b)}function O(){let m=Math.pow(10,-l.prec);l.$step=Math.max(m,x()),l.ys=[];let b=l.$lo-l.$lo%l.$step;for(var T=b;T<=l.$hi;T+=l.$step){let k=Math.floor(T*l.A+l.B);k>s||l.ys.push([k,A.strip(T)])}}function F(){if(l.$_mult=M(),l.ys=[],!data.length)return;let m=Math.abs(data[data.length-1][1]||1),b=N(m),T=_(-m),k=-1/0,E=s/r.config.GRIDY,w=1+(l.$_mult-1)/2;for(var S=b;S>0;S/=l.$_mult){S=B(S,w);let C=Math.floor(H.log(S)*l.A+l.B);if(l.ys.push([C,A.strip(S)]),C>s||C-k<r.config.GRIDY*.7||l.ys.length>E+1)break;k=C}k=1/0;for(var S=T;S<0;S/=l.$_mult){S=B(S,w);let U=Math.floor(H.log(S)*l.A+l.B);if(k-U<r.config.GRIDY*.7||(l.ys.push([U,A.strip(S)]),U<0)||l.ys.length>E*3+1)break;k=U}}function N(m){let b=s/r.config.GRIDY;for(var T=1/0,k=m,E=0;T>0;)if(T=Math.floor(H.log(k)*l.A+l.B),k*=l.$_mult,E++>b*3)return 0;return k}function _(m){let b=s/r.config.GRIDY;for(var T=-1/0,k=m,E=0;T<s&&(T=Math.floor(H.log(k)*l.A+l.B),k*=l.$_mult,!(E++>b*3)););return k}function B(m,b){let T=Math.sign(m);if(m=Math.abs(m),m>10){for(var k=10;k<MAX_INT;k*=10){let w=Math.floor(m/k)*k;if(m/w>b)break}return k/=10,T*Math.floor(m/k)*k}else if(m<1){for(var E=10;E>=1;E--){let w=A.round(m,E);if(m/w>b)break}return T*A.round(m,E+1)}else return T*Math.floor(m)}return u(),v(),I(),g?F():O(),l.scaleSpecs={id:n,log:e.log,ovIdxs:e.ovIdxs},l.height=s,l}const{TIMESCALES:xr,$SCALES:ka,WEEK:Ir,MONTH:rn,YEAR:sn,HOUR:ln,DAY:bt}=ee;function an(n,e,t=null){let{hub:o,meta:r,props:i,settings:s,height:a}=e,{interval:c,timeFrame:l,range:p,ctx:f,timezone:h}=i,g=!!s.logScale,y=o.panes()[n].overlays,v=o.mainOv.dataSubset,u=o.mainOv.dataView,d={indexBased:o.indexBased};function I(){let w=x();for(var S=0;S<y.length;S++){let C=y[S],U=C.settings.scale||"A";w[U]||(w[U]=M(U)),w[U].ovs.push(C),w[U].ovIdxs.push(S)}return Object.values(w)}function x(){let w={A:M("A")};for(var S in s.scales||{}){let C=s.scales[S];w[S]=M(S,C)}return w}function M(w,S={}){var C;return{id:w,gridId:n,ovs:[],ovIdxs:[],log:(C=S.log)!=null?C:g,precision:S.precision}}function J(){if(v.length<2)return;let w=p[1]-p[0];d.spacex=i.width-d.sbMax[0]-d.sbMax[1];let S=w/c;d.pxStep=d.spacex/S;let C=d.spacex/w;d.startx=(v[0][0]-p[0])*C}function R(){let w=d.indexBased?l:1,C=(p[1]-p[0])*w*(i.config.GRIDX/i.width),U=xr;return A.nearestA(C,U)[1]}function O(){if(t)d.tStep=t.tStep,d.pxStep=t.pxStep,d.startx=t.startx,d.spacex=t.spacex,d.xs=t.xs;else{J(),d.tStep=R(),d.xs=[];const C=p[1]-p[0],U=d.spacex/C;let q=A.realTimeRange(v);if(d.indexBased||(q=C),d.indexBased&&p[1]-u.src.length>0){let K=1-(p[1]-u.src.length)/C;q/=K}let W=q/bt>10,P=q/rn>10,X=u.i1;P?X=N(u.i1):W&&(X=F(u.i1));for(var w=X,S=u.i2;w<=S;w++){let K=u.src[w],be=u.src[w-1]||[],Q=d.xs[d.xs.length-1]||[0,[]],Je=d.indexBased?w:K[0],Se=Math.floor((Je-p[0])*U);_(be,K,Se);let L=d.xs[d.xs.length-1]||[0,[]];Q!==L&&L[1]-Q[1]<d.tStep*.8&&(L[2]*L[3]<=Q[2]*Q[3]?d.xs.pop():d.xs.splice(d.xs.length-2,1))}!d.indexBased&&l<Ir&&U>0&&(B(C,U),m(C,U))}}function F(w){let S=A.getMonth(u.src[w][0]);for(var C=w-1;C>=0;C--)if(A.getMonth(u.src[C][0])!==S)return C;return 0}function N(w){let S=A.getYear(u.src[w][0]);for(var C=w-1;C>=0;C--)if(A.getYear(u.src[C][0])!==S)return C;return 0}function _(w,S,C,U){let q=w[0],W=S[0];if(l<bt&&(q+=h*ln,W+=h*ln),(w[0]||l===sn)&&A.getYear(W)!==A.getYear(q))d.xs.push([C,W,sn,1]);else if(w[0]&&A.getMonth(W)!==A.getMonth(q))d.xs.push([C,W,rn,1]);else if(A.dayStart(W)===W){let P=A.getDay(W)===13?0:.9;d.xs.push([C,W,bt,P])}else W%d.tStep===0&&d.xs.push([C,W,l,1])}function B(w,S){if(!d.xs.length||!isFinite(S))return;let C=d.xs[0][1];for(;;){C-=d.tStep;let U=Math.floor((C-p[0])*S);if(U<0)break;C%l===0&&d.xs.unshift([U,C,l,1])}}function m(w,S){if(!d.xs.length||!isFinite(S))return;let C=d.xs[d.xs.length-1][1];for(;;){C+=d.tStep;let U=Math.floor((C-p[0])*S);if(U>d.spacex)break;C%c===0&&d.xs.push([U,C,c,1])}}function b(){d.width=i.width-d.sbMax[0]-d.sbMax[1],d.height=a}function T(){let w={};for(var S of I()){let C=new wr(S.id,S,e);w[S.id]=C}d.scales=w}function k(){d.scales[s.scaleIndex]||(s.scaleIndex="A"),d.scaleIndex=s.scaleIndex,s.scaleTemplate||(s.scaleTemplate=[[],Object.keys(d.scales)]);let w=s.scaleTemplate;(!w[0]||!w[1])&&console.error("Define scaleTemplate as [[],[]]"),s.scaleSideIdxs||(s.scaleSideIdxs=[]);let S=s.scaleSideIdxs;A.autoScaleSideId(0,w,S),A.autoScaleSideId(1,w,S),d.sb=[];let C=w[0].includes(S[0])?S[0]:null;d.sb.push(d.scales[C]?d.scales[C].sb:0);let U=w[1].includes(S[1])?S[1]:null;d.sb.push(d.scales[U]?d.scales[U].sb:0)}function E(){let w=d.sb;Object.assign(d,d.scales[d.scaleIndex]),d.sb=w,d.ys=d.ys||[]}return T(),k(),{create:()=>(O(),b(),t&&(d.mainGrid=t),d.settings=s,d.main=!t,d.id=n,E(),d.ohlc=r.ohlc.bind(r),to(d,p)),getLayout:()=>d,setMaxSidebar:w=>d.sbMax=w,getSidebar:()=>d.sb,id:()=>n}}function cn(n,e,t){let o=e.chart,r=e.offchart,i=e.panes().filter(d=>d.settings);if(!o)return{};function s(){const d=n.height-n.config.BOTBAR;if(i.find(O=>O.settings.height))return a(d);const I=r.length,x=2*Math.sqrt(I)/7/(I||1),M=Math.floor(d*x),J=d-M*I;let R=Array(I+1).fill(M);return R[e.mainPaneId]=J,R}function a(d){let I=e.panes().map(J=>{var R;return(R=J.settings.height)!=null?R:1}),x=I.reduce((J,R)=>J+R,0);I=I.map(J=>Math.floor(J/x*d)),x=I.reduce((J,R)=>J+R,0);for(var M=0;M<d-x;M++)I[M%I.length]++;return I}const c=s();let l=d=>({hub:e,meta:t,props:n,settings:i[d].settings,height:c[d]}),p=new an(e.mainPaneId,l(e.mainPaneId)),f=[p];for(var[h,g]of i.entries())h!==e.mainPaneId&&f.push(new an(h,l(h),p.getLayout()));let y=[Math.max(...f.map(d=>d.getSidebar()[0])),Math.max(...f.map(d=>d.getSidebar()[1]))],v=[],u=0;for(var h=0;h<f.length;h++){let I=f[h].id();f[h].setMaxSidebar(y),v[I]=f[h].create()}for(var h=0;h<v.length;h++)v[h].offset=u,u+=v[h].height;return{grids:v,main:v.find(d=>d.main),indexBased:e.indexBased,botbar:{width:n.width,height:n.config.BOTBAR,offset:u,xs:v[0]?v[0].xs:[]}}}function _r(n){let t=document.createElement("canvas").getContext("2d");return t.font=n.config.FONT,t}const Ar=`
// NavyJS ~ 0.1-lite

// <ds>Area chart</ds>, format: [<timestamp>, <value>]

[OVERLAY name=Area, ctx=Canvas, version=1.0.0]

// Define new props
prop('color', { type: 'color', def: '#31ce31' })
prop('lineWidth', { type: 'number', def: 1.25 })
prop('back1', { type: 'color', def: $props.color + '15' })
prop('back2', { type: 'color', def: $props.color + '01' })
prop('dataIndex', { type: 'integer', def: 1 })

draw(ctx) {
   
    const layout = $core.layout
    const data = $core.data // Full dataset
    const view = $core.view // Visible view
    const idx = $props.dataIndex
    const grd = ctx.createLinearGradient(0, 0, 0, layout.height)
    grd.addColorStop(0, $props.back1)
    grd.addColorStop(1, $props.back2)

    // Line
    ctx.lineWidth = $props.lineWidth
    ctx.strokeStyle = $props.color
    ctx.lineJoin = "round"
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[idx])
        ctx.lineTo(x, y)
    }
    ctx.stroke()

    // Area
    ctx.fillStyle = grd
    ctx.beginPath()
    let p0 = (data[0] || [])[0]
    let pN = (data[data.length - 1] || [])[0]
    ctx.lineTo(layout.ti2x(p0, 0), layout.height)
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[idx])
        ctx.lineTo(x, y)
    }
    ctx.lineTo(layout.ti2x(pN, i - 1), layout.height)
    ctx.fill()

}

// Precision sampling
preSampler(x) => [x[$props.dataIndex]]

// Map data item to OHLC (for candle magnets etc.)
// Here we simulate a candle with 0 height
ohlc(x) => Array(4).fill(x[$props.dataIndex])

// Legend, defined as pairs [value, color]
yRange() {
    let data = $core.hub.ovDataSubset($core.paneId, $core.id)
    let di = $props.dataIndex
    let len = data.length
    var h, l, high = -Infinity, low = Infinity
    for(var i = 0; i < len; i++) {
        let point = data[i][di]
        if (point > high) high = point
        if (point < low) low = point
    }
    return [high, low]
}

// Legend, defined as pairs [value, color]
legend(x) => [[x[$props.dataIndex], $props.color]]
`,Sr=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),kr=`
// Navy ~ 0.1-lite

// <ds>Stacked arrow trades</ds>
// Format: [<timestamp>, [<dir>, <?label> <?big>], ...]
// <dir> :: 1 for buy -1 for sell
// <?label> :: trade label (null for no label)
// <?big> :: true/false, make an arrow big

[OVERLAY name=ArrowTrades, ctx=Canvas, version=1.0.0]

prop('buyColor', {  type: 'color', def: '#08c65e' })
prop('sellColor', {  type: 'color', def: '#e42633' })
prop('size', {  type: 'number', def: 7 })
prop('showLabels', {  type: 'boolean', def: true })
prop('markerOutline', {  type: 'boolean', def: true })
prop('outlineWidth', {  type: 'number', def: 4 })

// Draw function (called on each update)
// Library provides a lot of useful variables to make
// overlays ($core in the main collection)
draw(ctx) {
    ctx.lineWidth = $props.outlineWidth
    const layout = $core.layout
    const data = $core.data // Full dataset
    const view = $core.view // Visible view

    // Fill sell trades
    ctx.fillStyle = $props.buyColor
    ctx.beginPath()
    let lbls1 = iterTrades(ctx, view, data, layout, -1)
    ctx.fill()

    // Fill buy trades
    ctx.fillStyle = $props.sellColor
    ctx.beginPath()
    let lbls2 = iterTrades(ctx, view, data, layout, 1)
    ctx.fill()

    // Draw labels
    if ($props.showLabels) {
        ctx.fillStyle = $core.colors.textHL
        ctx.font = $core.props.config.FONT
        let all = [...lbls1, ...lbls2]
        drawLabels(ctx, view, layout, all)
    }

}

// Iter through arcs
iterTrades(ctx, view, data, layout, dir) {
    let lables = []
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let ohlc = layout.ohlc(p[0])
        if (!ohlc) continue
        let x = layout.ti2x(p[0], i)
        if (dir > 0) {
            var y = layout.value2y(ohlc[1])
        } else {
            var y = layout.value2y(ohlc[2])
        }
        for (var k = 1; k < p.length; k++) {
            if (Math.sign(p[k][0]) === dir) continue
            let size = $props.size
            if (p[k][2]) size *= 1.5
            let yk = y - dir * (15 * (k - 1) + 10)
            let align = dir < 0 ? 'right' : 'left'
            let dy = p[k][2] ? - dir * 1 : 0
            if (p[k][1]) {
                lables.push([ x + 10 * dir, yk + dy, p[k][1], align])
            }
            drawArrow(ctx, x, yk, -dir, size)
        }
    }
    return lables
}

drawArrow(ctx, x, y, dir, size) {
    ctx.moveTo(x, y)
    ctx.lineTo(x + size * dir * 0.63, y + size * dir)
    ctx.lineTo(x - size * dir * 0.63, y + size * dir)
}

// Draw simple lables
drawLabels(ctx, view, layout, lables) {
    for (var l of lables) {
        ctx.textAlign = l[3]
        let dy = l[3] === 'right' ? 7 : 0
        ctx.fillText(l[2], l[0], l[1] + dy)
    }
}

// Not affecting the y-range
yRange() => null

// Legend formatter, Array of [value, color] pairs
// x represents one data item e.g. [<time>, <value>]
legend(x) {
    let items = []
    for (var i = 1; i < x.length; i++) {
        items.push([
            x[i][1] || (x[i][0] > 0 ? 'Buy' : 'Sell'),
            x[i][0] > 0 ? $props.buyColor : $props.sellColor
        ])
    }
    return items
}
`,Tr=Object.freeze(Object.defineProperty({__proto__:null,default:kr},Symbol.toStringTag,{value:"Module"})),$r=`// Navy ~ 0.1-lite

// <ds>Bands indicator, e.g. BollingerBands</ds> 
// format: [<timestamp>, <high>, <mid>, <low>]

[OVERLAY name=Band, ctx=Canvas, verion=1.0.0]

// Overlay props
prop('color', { type: 'Color', def: '#b41d70' })
prop('backColor', { type: 'Color', def: $props.color + '11' })
prop('lineWidth', { type: 'number', def: 1 })
prop('showMid', { type: 'boolean', def: true })

// Draw call
draw(ctx) {
     // Background
    const data = $core.data
    const view = $core.view
    const layout = $core.layout
    ctx.beginPath()
    ctx.fillStyle = $props.backColor
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1] || undefined)
        ctx.lineTo(x, y)
    }
    for (var i = view.i2, i1 = view.i1; i >= i1; i--) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[3] || undefined)
        ctx.lineTo(x, y)
    }
    ctx.fill()
    // Lines
    // TODO: can be faster by combining line
    // into one path with moveTo in b/w
    ctx.lineWidth = $props.lineWidth
    ctx.strokeStyle = $props.color
    // Top line
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1] || undefined)
        ctx.lineTo(x, y)
    }
    ctx.stroke()
    // Bottom line
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[3] || undefined)
        ctx.lineTo(x, y)
    }
    ctx.stroke()
    // Middle line
    if (!$props.showMid) return
    ctx.beginPath()
    for (var i = 0; i < data.length; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[2] || undefined)
        ctx.lineTo(x, y)
    }
    ctx.stroke()
}

// Legend, defined as pairs [value, color]
legend(x) => $props.showMid ? [
    [x[1], $props.color],
    [x[2], $props.color],
    [x[3], $props.color]
] : [
    [x[1], $props.color],
    [x[3], $props.color]
]
`,Mr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Cr=`
// NavyJS ~ 0.1-lite

// <ds>Standart japanese candles</ds>, format:
// [<timestamp>, <open>, <high>, <low>, <close>, <?volume>]

[OVERLAY name=Candles, ctx=Canvas, version=1.0.0]

// Define the props
prop('colorBodyUp', { type: 'color', def: $core.colors.candleUp })
prop('colorBodyDw', { type: 'color', def: $core.colors.candleDw })
prop('colorWickUp', { type: 'color', def: $core.colors.wickUp })
prop('colorWickDw', { type: 'color', def: $core.colors.wickDw })
prop('colorVolUp', { type: 'color', def: $core.colors.volUp })
prop('colorVolDw', { type: 'color', def: $core.colors.volDw })
prop('showVolume', { type: 'boolean', def: true })
prop('currencySymbol', { type: 'string', def: '$' })
prop('showAvgVolume', { type: 'boolean', def: true })
prop('avgVolumeSMA', { type: 'number', def: 20 })
prop('colorAvgVol', { type: 'color', def: '#1cccb777'})
prop('scaleSymbol', { type: 'string|boolean', def: false })
prop('priceLine', { type: 'boolean', def: true })
prop('showValueTracker', { type: 'boolean', def: true })


// Draw call
draw(ctx) {

    let cnv = $lib.layoutCnv($core, true, $props.showVolume)
    let bodies = cnv.upBodies.length ? cnv.upBodies : cnv.dwBodies
    if (!bodies.length) return
    let w = Math.max(bodies[0].w, 1)

    drawCvPart(ctx, $lib.candleWick, cnv.dwWicks, 1, 'colorWickDw')
    drawCvPart(ctx, $lib.candleWick, cnv.upWicks, 1, 'colorWickUp')
    drawCvPart(ctx, $lib.candleBody, cnv.dwBodies, w, 'colorBodyDw')
    drawCvPart(ctx, $lib.candleBody, cnv.upBodies, w, 'colorBodyUp')
    drawCvPart(ctx, $lib.volumeBar, cnv.dwVolbars, w, 'colorVolDw')
    drawCvPart(ctx, $lib.volumeBar, cnv.upVolbars, w, 'colorVolUp')

    if ($props.showVolume && $props.showAvgVolume) {
        $lib.avgVolume(ctx, $core, $props, cnv)
    }

}

// Draw candle part
drawCvPart(ctx, f, arr, w, color) {
    let layout = $core.layout
    ctx.lineWidth = w
    ctx.strokeStyle = $props[color]
    ctx.beginPath()
    for (var i = 0, n = arr.length; i < n; i++) {
        f(ctx, arr[i], layout)
    }
    ctx.stroke()
}

// Define y-range (by finding max High, min Low)
yRange() {
    // Getting updated data faster
    // (we need 1 more update when using $core.dataSubset)
    let data = $core.hub.ovDataSubset($core.paneId, $core.id)
    let len = data.length
    var h, l, high = -Infinity, low = Infinity
    for(var i = 0; i < len; i++) {
        let point = data[i]
        if (point[2] > high) high = point[2]
        if (point[3] < low) low = point[3]
    }
    return [high, low]
}

// Use [Open, Close] for precision detection
preSampler(x) => [x[1], x[4]]

// Map data item to OHLC (for candle magnets etc.)
ohlc(x) => [x[1], x[2], x[3], x[4]]

// Price label + Scale symbol + price line
valueTracker(x) => {
    show: $props.showValueTracker,
    symbol: $props.scaleSymbol,
    line: $props.priceLine,
    color: $lib.candleColor($props, $core.data[$core.data.length - 1]),
    value: x[4] // close
}

// Define the OHLCV legend
legendHtml(x, prec, f) {
    let color1 = $core.colors.text
    let v = $core.cursor.getValue($core.paneId, $core.id)
    let sym = $props.currencySymbol
    let color2 = v[4] >= v[1] ?
        $props.colorBodyUp : $props.colorBodyDw
    let fc = $lib.formatCash
    return \`
    <span style="color: \${color2}">
        <span style="margin-left: 3px;"></span>
        <span style="color: \${color1}">O</span>
        <span class="nvjs-ll-value">\${f(x[1])}</span>
        <span style="color: \${color1}">H</span>
        <span class="nvjs-ll-value">\${f(x[2])}</span>
        <span style="color: \${color1}">L</span>
        <span class="nvjs-ll-value">\${f(x[3])}</span>
        <span style="color: \${color1}">C</span>
        <span class="nvjs-ll-value">\${f(x[4])}</span>
    \`
    + ($props.showVolume ? \`
        <span style="color: \${color1}">V</span>
        <span class="nvjs-ll-value">\${sym+fc(x[5])}</span>\` : \`\`)
    + \`</span>\`
    }
`,Or=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"})),Er=`
// NavyJS ~ 0.1-lite

// <ds>Colored Candles (Warning: coloring makes it slower)</ds>
// Format: [<timestamp>, <open>, <high>, <low>, <close>, <?volume>, <?color>]
// <?color> :: Candle body color

[OVERLAY name=CandlesPlus, ctx=Canvas, version=1.0.0]

// Define the props
prop('colorBodyUp', { type: 'color', def: $core.colors.candleUp })
prop('colorBodyDw', { type: 'color', def: $core.colors.candleDw })
prop('colorWickUp', { type: 'color', def: $core.colors.wickUp })
prop('colorWickDw', { type: 'color', def: $core.colors.wickDw })
prop('colorVolUp', { type: 'color', def: $core.colors.volUp })
prop('colorVolDw', { type: 'color', def: $core.colors.volDw })
prop('showVolume', { type: 'boolean', def: true })
prop('showWicks', { type: 'boolean', def: true })
prop('currencySymbol', { type: 'string', def: '$' })
prop('showAvgVolume', { type: 'boolean', def: true })
prop('avgVolumeSMA', { type: 'number', def: 20 })
prop('colorAvgVol', { type: 'color', def: '#1cccb777'})
prop('scaleSymbol', { type: 'string|boolean', def: false })
prop('priceLine', { type: 'boolean', def: true })
prop('showValueTracker', { type: 'boolean', def: true })
prop('coloringBodies', { type: 'boolean', def: true })
prop('coloringWicks', { type: 'boolean', def: false })
prop('coloringVolume', { type: 'boolean', def: false })

// Draw call
draw(ctx) {

    let cnv = $lib.layoutCnv($core, true, $props.showVolume)
    let bodies = cnv.upBodies.length ? cnv.upBodies : cnv.dwBodies
    if (!bodies.length) return
    let w = Math.max(bodies[0].w, 1)
    let sw = $props.showWicks
    let cb = $props.coloringBodies
    let cw = $props.coloringWicks
    let cv = $props.coloringVolume

    if (sw) {
        drawCvPart(ctx, $lib.candleWick, cnv.dwWicks, 1, 'colorWickDw', cw)
        drawCvPart(ctx, $lib.candleWick, cnv.upWicks, 1, 'colorWickUp', cw)
    }
    drawCvPart(ctx, $lib.candleBody, cnv.dwBodies, w, 'colorBodyDw', cb)
    drawCvPart(ctx, $lib.candleBody, cnv.upBodies, w, 'colorBodyUp', cb)
    drawCvPart(ctx, $lib.volumeBar, cnv.dwVolbars, w, 'colorVolDw', cv)
    drawCvPart(ctx, $lib.volumeBar, cnv.upVolbars, w, 'colorVolUp', cv)

    if ($props.showVolume && $props.showAvgVolume) {
        $lib.avgVolume(ctx, $core, $props, cnv)
    }

}

// Draw candle part
drawCvPart(ctx, f, arr, w, color, coloring = false) {
    let layout = $core.layout
    let prevColor = null
    ctx.lineWidth = w
    ctx.strokeStyle = $props[color]
    ctx.beginPath()
    for (var i = 0, n = arr.length; i < n; i++) {
        if (coloring) {
            var c = arr[i].src[6]
            if (c) {
                if (c !== prevColor) {
                    ctx.stroke()
                    ctx.beginPath()
                }
                ctx.strokeStyle = c
            } else if (prevColor !== $props[color]) {
                ctx.stroke()
                ctx.beginPath()
                ctx.strokeStyle = $props[color]
                prevColor = $props[color]
            }
            prevColor = c
        }
        f(ctx, arr[i], layout)
    }
    ctx.stroke()
}

// Define y-range (by finding max High, min Low)
yRange() {
    // Getting updated data faster
    // (we need 1 more update when using $core.dataSubset)
    let data = $core.hub.ovDataSubset($core.paneId, $core.id)
    let len = data.length
    var h, l, high = -Infinity, low = Infinity
    for(var i = 0; i < len; i++) {
        let point = data[i]
        if (point[2] > high) high = point[2]
        if (point[3] < low) low = point[3]
    }
    return [high, low]
}

// Use [Open, Close] for precision detection
preSampler(x) => [x[1], x[4]]

// Map data item to OHLC (for candle magnets etc.)
ohlc(x) => [x[1], x[2], x[3], x[4]]

// Price label + Scale symbol + price line
valueTracker(x) => {
    show: $props.showValueTracker,
    symbol: $props.scaleSymbol,
    line: $props.priceLine,
    color: $lib.candleColor($props, $core.data[$core.data.length - 1]),
    value: x[4] // close
}

// Define the OHLCV legend
legendHtml(x, prec, f) {
    let color1 = $core.colors.text
    let v = $core.cursor.getValue($core.paneId, $core.id)
    let sym = $props.currencySymbol
    let color2 = v[4] >= v[1] ?
        $props.colorBodyUp : $props.colorBodyDw
    if ($props.coloringBodies && x[6]) {
        color2 = x[6]
    }
    let fc = $lib.formatCash
    return \`
    <span style="color: \${color2}">
        <span style="margin-left: 3px;"></span>
        <span style="color: \${color1}">O</span>
        <span class="nvjs-ll-value">\${f(x[1])}</span>
        <span style="color: \${color1}">H</span>
        <span class="nvjs-ll-value">\${f(x[2])}</span>
        <span style="color: \${color1}">L</span>
        <span class="nvjs-ll-value">\${f(x[3])}</span>
        <span style="color: \${color1}">C</span>
        <span class="nvjs-ll-value">\${f(x[4])}</span>
    \`
    + ($props.showVolume ? \`
        <span style="color: \${color1}">V</span>
        <span class="nvjs-ll-value">\${sym+fc(x[5])}</span>\` : \`\`)
    + \`</span>\`
    }
`,Yr=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"})),Br=`// Navy ~ 0.1-lite

// <ds>Cloud</ds>, format [<timestamp>, <line1>, <line2>]
[OVERLAY name=Cloud, ctx=Canvas, verion=0.1.0]

// Overlay props
prop('color1', { type: 'color', def: '#55d7b0aa' })
prop('color2', { type: 'color', def: '#d94d64aa' })
prop('back1', { type: 'color', def: '#79ffde22' })
prop('back2', { type: 'color', def: '#ff246c22' })
prop('drawLines', { type: 'boolean', def: false })

// Draw call
// TODO: speed-up (draw segment with the same color together)
draw(ctx) {

    const layout = $core.layout
    const data = $core.data
    const view = $core.view

    ctx.lineWidth = 1

    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p1 = map(layout, data[i], i)
        let p2 = map(layout, data[i+1], i+1)

        if (!p2) continue
        if (p1.y1 !== p1.y1) continue // Fix NaN

         // Background
        ctx.beginPath()
        ctx.fillStyle =  p1.y1 < p1.y2 ? $props.back1 : $props.back2
        ctx.moveTo(p1.x, p1.y1)
        ctx.lineTo(p2.x + 0.1, p2.y1)
        ctx.lineTo(p2.x + 0.1, p2.y2)
        ctx.lineTo(p1.x, p1.y2)
        ctx.fill()
        // Lines
        if (!$props.drawLines) continue
        ctx.beginPath()
        ctx.strokeStyle = $props.color1
        ctx.moveTo(p1.x, p1.y1)
        ctx.lineTo(p2.x, p2.y1)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = $props.color2
        ctx.moveTo(p1.x, p1.y2)
        ctx.lineTo(p2.x, p2.y2)
        ctx.stroke()
    }
}

map(layout, p, i) {
    return p && {
        x:  layout.ti2x(p[0], i),
        y1: layout.value2y(p[1]),
        y2: layout.value2y(p[2])
    }
}

// Legend, defined as pairs [value, color]
legend(x) => [[x[1], $props.color1], [x[2], $props.color2]]
`,Jr=Object.freeze(Object.defineProperty({__proto__:null,default:Br},Symbol.toStringTag,{value:"Module"})),Rr=`// Navy ~ 0.1-lite

// <ds>Colored histogram, can be used for MACD</ds>
// Format: [<timestamp>, <hist>, <?value>, <?signal>]
// <hist> :: histogram value (e.g. MACD bars)
// <?value> :: value of the first line (e.g. MACD value)
// <?signal> :: value of the second line (e.g. MACD signal)

[OVERLAY name=Histogram, ctx=Canvas, verion=1.0.1]
// "#35a776", "#79e0b3", "#e54150", "#ea969e"
// Overlay props
prop('barWidth', { type: 'number', def: 4 })
prop('lineWidth', { type: 'number', def: 1 })
prop('colorUp', { type: 'Color', def: '#35a776' })
prop('colorDw', { type: 'Color', def: '#e54150' })
prop('colorSemiUp', { type: 'Color', def: '#79e0b3' })
prop('colorSemiDw', { type: 'Color', def: '#ea969e' })
prop('colorValue', { type: 'Color', def: '#3782f2' })
prop('colorSignal', { type: 'Color', def: '#f48709' })

// Draw call
draw(ctx) {

    const layout = $core.layout
    const view = $core.view

    let groups = splitBars(view, layout, view.src)

    ctx.lineWidth = detectBarWidth(view, layout, view.src)

    // Semi-down

    ctx.strokeStyle = $props.colorSemiDw
    drawBars(ctx, layout, groups.semiDw)

    // Semi-up
    ctx.strokeStyle = $props.colorSemiUp
    drawBars(ctx, layout, groups.semiUp)

    // Down
    ctx.strokeStyle = $props.colorDw
    drawBars(ctx, layout, groups.dw)

    // Up
    ctx.strokeStyle = $props.colorUp
    drawBars(ctx, layout, groups.up)

    // Drawing the lines
    ctx.lineWidth = $props.lineWidth
    ctx.lineJoin = "round"

    ctx.strokeStyle = $props.colorValue
    drawSpline(ctx, view, layout, 2)

    ctx.strokeStyle = $props.colorSignal
    drawSpline(ctx, view, layout, 3)

}

detectBarWidth(view, layout, data) {
    if (!data[view.i2 - 1]) return 0
    let p1 = layout.ti2x(data[view.i2 - 1][0], view.i2 - 1)
    let p2 = layout.ti2x(data[view.i2][0], view.i2)
    if ((p2 - p1) < 1) {
        return 1
    } else {
        return $props.barWidth
    }
}

splitBars(view, layout, data) {
    const off = $props.barWidth % 2 ? 0 : 0.5
    let semiDw = []
    let semiUp = []
    let dw = []
    let up = []
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let prev = data[i - 1]
        let p = data[i]
        let x = layout.ti2x(p[0], i) - off
        let y = layout.value2y(p[1]) - 0.5
        let bar = {x, y}
        if (p[1] >= 0) {
            var color = 0
            if (prev && p[1] < prev[1]) color = 1
        } else {
            var color = 2
            if (prev && p[1] > prev[1]) color = 3
        }
        switch(color) {
            case 0:
                up.push(bar)
                break
            case 1:
                semiUp.push(bar)
                break
            case 2:
                dw.push(bar)
                break
            case 3:
                semiDw.push(bar)
                break
        }
    }
    return { semiDw, semiUp, dw, up }
}

drawBars(ctx, layout, group) {
    const data = $core.data
    const base = layout.value2y(0) + 0.5
    ctx.beginPath()
    for (var bar of group) {
        ctx.moveTo(bar.x, base)
        ctx.lineTo(bar.x, bar.y)
    }
    ctx.stroke()
}

drawSpline(ctx, view, layout, idx) {
    ctx.beginPath()
    const data = view.src
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[idx])
        ctx.lineTo(x, y)
    }
    ctx.stroke()
}

// Legend, defined as pairs [value, color]
// TODO: colorize the hist point
legend(x) => [
    [x[1], $props.color],
    [x[2], $props.colorValue],
    [x[3], $props.colorSignal]
]
`,Pr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),Dr=`// Navy ~ 0.1-lite

// <ds>Price labels that stick to candles</ds>
// Format: [<timestamp>, <LabelObject>]
// <LabelObject> {
//   text :: string, text of the label
//   dir :: direction, 1 = points up, -1 = points down
//   pin :: "open" | "high" | "low" | "close"
//   ?color :: color, text color
//   ?back :: color, background
//   ?stroke :: stroke color
//   ?offset, px, offest from the pin
// }

[OVERLAY name=PriceLabels, ctx=Canvas, verion=1.0.0]

// Overlay props
prop('color', { type: 'Color', def: $core.colors.text })
prop('back', { type: 'Color', def: $core.colors.back })
prop('stroke', { type: 'Color', def: $core.colors.scale })
prop('borderRadius', { type: 'number', def: 3 })
prop('offset', { type: 'number', def: 5 })

const PINMAP = {
    open: 0,
    high: 1,
    low: 2,
    close: 3
}

// Draw call
draw(ctx) {
    const layout = $core.layout
    const view = $core.view
    const data = $core.data

    ctx.font = $core.props.config.FONT

    let items = calcItems(ctx, layout, view, data)

    // Draw items
    ctx.lineWidth = 1
    ctx.textAlign = 'center'
    for (var item of items) {
        let off = (item.o ?? $props.offset) * item.dir
        let dy = (item.dir > 0 ? 19 : -11)
        item.y += off
        ctx.strokeStyle = item.s || $props.stroke
        ctx.fillStyle = item.b || $props.back
        ctx.beginPath()
        drawBody(ctx, item)
        ctx.stroke()
        ctx.fill()
        ctx.fillStyle = item.c || $props.color
        ctx.fillText(item.text, item.x, item.y + dy)
    }



    // Draw texts

}

calcItems(ctx, layout, view, data) {

    let items = []
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let specs = p[1]
        let ohlc = layout.ohlc(p[0])
        if (!ohlc) continue
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(ohlc[PINMAP[specs.pin]])
        let w = ctx.measureText(specs.text).width
        let h = 20
        let dir = specs.dir
        items.push({
            x, y, w, h, dir,
            c: specs.color,
            b: specs.back,
            s: specs.stroke,
            o: specs.offset,
            text: specs.text})
    }
    return items
}

drawBody(ctx, item) {
    let r = $props.borderRadius
    let hw = item.w // half width
    let d = - item.dir
    let x = item.x
    let y = item.y
    ctx.moveTo(x, y)
    ctx.lineTo(x + 5, y - 5 * d)
    ctx.lineTo(x + hw - r, y - 5 * d)
    ctx.quadraticCurveTo(x + hw, y - 5 * d, x + hw, y - (5 + r) * d)
    ctx.lineTo(x + hw, y - (5 + item.h - r) * d)
    ctx.quadraticCurveTo(x + hw, y - (5 + item.h) * d, x + hw - r, y - (5 + item.h) * d)
    ctx.lineTo(x - hw + r, y - (5 + item.h) * d)
    ctx.quadraticCurveTo(x - hw, y - (5 + item.h) * d, x - hw, y - (5 + item.h - r) * d)
    ctx.lineTo(x - hw, y - (5 + r) * d)
    ctx.quadraticCurveTo(x - hw, y - 5 * d, x - hw + r, y - 5 * d)
    ctx.lineTo(x - 5, y - 5 * d)
    ctx.lineTo(x, y)


}

// Legend, defined as pairs [value, color]
legend(x) => [[x[1].text, x[1].color || $props.color]]
`,Lr=Object.freeze(Object.defineProperty({__proto__:null,default:Dr},Symbol.toStringTag,{value:"Module"})),Nr=`// Navy ~ 0.1-lite

// <ds>Ranging indicator, e.g. RSI</ds>
// Format: [<timestamp>, <value>]

[OVERLAY name=Range, ctx=Canvas, verion=1.0.1]

// Overlay props
prop('color', { type: 'Color', def: '#ec206e' })
prop('backColor', { type: 'Color', def: '#381e9c16' })
prop('bandColor', { type: 'Color', def: '#535559' })
prop('lineWidth', { type: 'number', def: 1 })
prop('upperBand', { type: 'number', def: 70 })
prop('lowerBand', { type: 'number', def: 30 })

// Draw call
draw(ctx) {
    const layout = $core.layout
    const upper = layout.value2y($props.upperBand)
    const lower = layout.value2y($props.lowerBand)
    const data = $core.data
    const view = $core.view
    // RSI values
    ctx.lineWidth = $props.lineWidth
    ctx.lineJoin = "round"
    ctx.strokeStyle = $props.color
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1])
        ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.strokeStyle = $props.bandColor
    ctx.setLineDash([5]) // Will be removed after draw()
    ctx.beginPath()
    // Fill the area between the bands
    ctx.fillStyle = $props.backColor
    ctx.fillRect(0, upper, layout.width, lower - upper)
    // Upper band
    ctx.moveTo(0, upper)
    ctx.lineTo(layout.width, upper)
    // Lower band
    ctx.moveTo(0, lower)
    ctx.lineTo(layout.width, lower)
    ctx.stroke()
}

yRange(hi, lo) => [
    Math.max(hi, $props.upperBand),
    Math.min(lo, $props.lowerBand)
]

// Legend, defined as pairs [value, color]
legend(x) => [[x[1], $props.color]]
`,Ur=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"})),zr=`// Navy ~ 0.1-lite

// <ds>Sparse data: points, squares, crosses, triangles</ds>
// Format: [<timestamp>, <value>, <?direction>]
// <value> :: Price/value
// <?direction> :: Triangle direction: 1 | -1

[OVERLAY name=Sparse, ctx=Canvas, verion=1.0.0]

// Overlay props
prop('color', { type: 'Color', def: '#898989' })
prop('size', { type: 'number', def: 3 })
prop('shape', {
    type: 'string',
    def: 'point',
    options: ['point', 'square', 'cross', 'triangle']
})

// Draw call
draw(ctx) {
    const layout = $core.layout
    const view = $core.view

    ctx.fillStyle = $props.color
    ctx.strokeStyle = $props.color

    switch($props.shape) {
        case 'point':
            drawArcs(ctx, view, layout)
        break
        case 'square':
            drawSquares(ctx, view, layout)
        break
        case 'cross':
            drawCrosses(ctx, view, layout)
        break
        case 'triangle':
            drawTriandles(ctx, view, layout)
        break
    }
}

drawArcs(ctx, view, layout) {
    const radius = $props.size
    const data = view.src
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1])
        ctx.moveTo(x+radius, y)
        ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    }
    ctx.fill()
}

drawSquares(ctx, view, layout) {
    const half = $props.size
    const side = half * 2
    const data = view.src
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1])
        ctx.moveTo(x-half, y-half)
        ctx.lineTo(x+half, y-half)
        ctx.lineTo(x+half, y+half)
        ctx.lineTo(x-half, y+half)
    }
    ctx.fill()
}

drawCrosses(ctx, view, layout) {
    const half = $props.size
    const side = half * 2
    const data = view.src
    ctx.lineWidth = Math.max(half - 1, 1)
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1])
        ctx.moveTo(x-half, y)
        ctx.lineTo(x+half, y)
        ctx.moveTo(x, y-half)
        ctx.lineTo(x, y+half)
    }
    ctx.stroke()
}

drawTriandles(ctx, view, layout) {
    const half = $props.size
    const side = half * 2
    const data = view.src
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1])
        let dir = p[2] ?? 1
        ctx.moveTo(x, y)
        ctx.lineTo(x + side * dir * 0.63, y + side * dir)
        ctx.lineTo(x - side * dir * 0.63, y + side * dir)
    }
    ctx.fill()
}

yRange() {
    let data = $core.hub.ovDataSubset($core.paneId, $core.id)
    let len = data.length
    var h, l, high = -Infinity, low = Infinity
    for(var i = 0; i < len; i++) {
        let point = data[i][1]
        if (point > high) high = point
        if (point < low) low = point
    }
    return [high, low]
}

preSampler(x) => [x[1]]

// Legend, defined as pairs [value, color]
legend(x) => [[Math.random(), $props.color]]
`,jr=Object.freeze(Object.defineProperty({__proto__:null,default:zr},Symbol.toStringTag,{value:"Module"})),Fr=`
// NavyJS ~ 0.1-lite

// <ds>Single spline</ds>
// Format: [<timestamp>, <number>]

[OVERLAY name=Spline, ctx=Canvas, version=1.1.0]

// Define new props
prop('color', { type: 'color', def: '#31ce31' })
prop('lineWidth', { type: 'number', def: 1 })
prop('dataIndex', { type: 'integer', def: 1 })


draw(ctx) {
    ctx.lineWidth = $props.lineWidth
    ctx.lineJoin = "round"
    ctx.strokeStyle = $props.color
    ctx.beginPath()
    const layout = $core.layout
    const data = $core.data // Full dataset
    const view = $core.view // Visible view
    const idx = $props.dataIndex
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[idx])
        ctx.lineTo(x, y)
    }
    ctx.stroke()
}

// Price label + Scale symbol + price line
/*valueTracker(x) => {
    show: true,
    symbol: $core.src.name,
    line: true,
    color: $props.color,
    value: x[$props.dataIndex]
}*/

preSampler(x) => [x[$props.dataIndex]]

// Map data item to OHLC (for candle magnets etc.)
// Here we simulate a candle with 0 height
ohlc(x) => Array(4).fill(x[$props.dataIndex])

yRange() {
    let data = $core.hub.ovDataSubset($core.paneId, $core.id)
    let di = $props.dataIndex
    let len = data.length
    var h, l, high = -Infinity, low = Infinity
    for(var i = 0; i < len; i++) {
        let point = data[i][di]
        if (point > high) high = point
        if (point < low) low = point
    }
    return [high, low]
}

// Legend, defined as pairs [value, color]
legend(x) => [[x[$props.dataIndex], $props.color]]
`,Vr=Object.freeze(Object.defineProperty({__proto__:null,default:Fr},Symbol.toStringTag,{value:"Module"})),Hr=`
// NavyJS ~ 0.1-lite

// <ds>Multiple splines</ds> 
// Format: [<timestamp>, <line1>, <line2>, ...]

[OVERLAY name=Splines, ctx=Canvas, version=1.0.0]

prop('lineWidth', { type: 'number', def: 1 })
prop('widths', { type: 'Array', def: [] })
prop('colors', { type: 'Array', def: [] })
prop('skipNan', { type: 'boolean', def: false })

const COLORS = $props.colors.length ? $props.colors : [
    '#53c153', '#d1c045', '#d37734', '#d63953', '#c43cb9',
    '#6c3cc4', '#444bc9', '#44c2c9', '#44c98d'
]
draw(ctx) {

    let num = ($core.data[0] || []).length ?? 0
    for (var i = 0; i < num; i++) {
        let _i = i % COLORS.length
        ctx.strokeStyle = COLORS[_i]
        ctx.lineJoin = "round"
        ctx.lineWidth = $props.widths[i] || $props.lineWidth
        ctx.beginPath()
        drawSpline(ctx, i)
        ctx.stroke()
    }

}

drawSpline(ctx, idx) {
    const layout = $core.layout
    const data = $core.data
    const view = $core.view
    if (!this.skipNan) {
        for (var i = view.i1, n = view.i2; i <= n; i++) {
            let p = data[i]
            let x = layout.ti2x(p[0], i)
            let y = layout.value2y(p[idx + 1])
            ctx.lineTo(x, y)
        }
    } else {
        var skip = false
        for (var i = view.i1, n = view.i2; i <= n; i++) {
            let p = data[i]
            let x = layout.ti2x(p[0], i)
            let y = layout.value2y(p[idx + 1])
            if (p[idx + 1] == null || y !== y) {
                skip = true
            } else {
                if (skip) ctx.moveTo(x, y)
                ctx.lineTo(x, y)
                skip = false
            }
        }
    }
}

// Legend, defined as pairs [value, color]
legend(x) => x.slice(1) // remove time
    .map((v, i) => [ // map value => color
        v, COLORS[i % COLORS.length]
    ])
`,Gr=Object.freeze(Object.defineProperty({__proto__:null,default:Hr},Symbol.toStringTag,{value:"Module"})),Wr=`// Navy ~ 0.1-lite

// <ds>Two bands: above and below the price (like LuxAlgo Reverse Zones)</ds>
// Format: [<timestamp>, <high1>, <mid1>, <low1>, <high2>, <mid2>, <low2>]
/*
--- <high1> ---
--- <mid1> ---
--- <low1> ---
~~~ price ~~~
--- <high2> ---
--- <mid2> ---
--- <low2> ---
*/

[OVERLAY name=SuperBands, ctx=Canvas, verion=1.0.0]

// Overlay props
prop('color1', { type: 'color', def: '#d80d3848' })
prop('color1dark', { type: 'color', def: '#d80d3824' })
prop('color2', { type: 'color', def: '#1edbbe33' })
prop('color2dark', { type: 'color', def: '#1edbbe15' })

// Draw call
draw(ctx) {
    const view = $core.view
    const layout = $core.layout

    ctx.fillStyle = $props.color1
    drawBand(ctx, layout, view, 1, 2)

    ctx.fillStyle = $props.color1dark
    drawBand(ctx, layout, view, 2, 3)

    ctx.fillStyle = $props.color2dark
    drawBand(ctx, layout, view, 4, 5)

    ctx.fillStyle = $props.color2
    drawBand(ctx, layout, view, 5, 6)

}


drawBand(ctx, layout, view, i1, i2) {
    let data = $core.view.src
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[i1] || undefined)
        ctx.lineTo(x, y)
    }
    for (var i = view.i2, i1 = view.i1; i >= i1; i--) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[i2] || undefined)
        ctx.lineTo(x, y)
    }
    ctx.fill()
}

// Legend, defined as pairs [value, color]
legend(x) => [
    [x[1], $props.color1], [x[2], $props.color1], [x[3], $props.color1],
    [x[4], $props.color2], [x[5], $props.color2], [x[6], $props.color2]
]
`,Xr=Object.freeze(Object.defineProperty({__proto__:null,default:Wr},Symbol.toStringTag,{value:"Module"})),qr=`
// Navy ~ 0.1-lite

// <ds>Simple trades</ds>
// Format: [<timestamp>, <dir>, <price>, <?label>]
// <dir> :: 1 for buy -1 for sell
// <price> :: trade price
// <?label> :: trade label
[OVERLAY name=Trades, ctx=Canvas, version=1.0.0]

prop('buyColor', {  type: 'color', def: '#08b2c6' })
prop('sellColor', {  type: 'color', def: '#e42633' })
prop('radius', {  type: 'number', def: 4 })
prop('showLabels', {  type: 'boolean', def: true })
prop('markerOutline', {  type: 'boolean', def: true })
prop('outlineWidth', {  type: 'number', def: 4 })

// Draw function (called on each update)
// Library provides a lot of useful variables to make
// overlays ($core in the main collection)
draw(ctx) {
    ctx.lineWidth = $props.outlineWidth
    const layout = $core.layout
    const data = $core.data // Full dataset
    const view = $core.view // Visible view

    // Outline
    if ($props.markerOutline) {
        ctx.strokeStyle = $core.colors.back
        ctx.beginPath()
        iterArcs(ctx, view, data, layout)
        ctx.stroke()
    }

    // Fill sell trades
    ctx.fillStyle = $props.buyColor
    ctx.beginPath()
    iterArcs(ctx, view, data, layout, -1)
    ctx.fill()

    // Fill buy trades
    ctx.fillStyle = $props.sellColor
    ctx.beginPath()
    iterArcs(ctx, view, data, layout, 1)
    ctx.fill()

    // Draw labels
    if ($props.showLabels) {
        ctx.fillStyle = $core.colors.textHL
        ctx.font = $core.props.config.FONT
        ctx.textAlign = 'center'
        drawLabels(ctx, view, data, layout)
    }

}

// Iter through arcs
iterArcs(ctx, view, data, layout, dir) {
    const radius = $props.radius
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        if (Math.sign(p[1]) === dir) continue
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[2])
        ctx.moveTo(x+radius, y)
        ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    }
}

// Draw simple lables
drawLabels(ctx, view, data, layout) {
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[2])
        ctx.fillText(p[3], x, y - 25)
    }
}

// Sample data point with index 2
preSampler(x) => x[2]

// Not affecting the y-range
yRange() => null

// Legend formatter, Array of [value, color] pairs
// x represents one data item e.g. [<time>, <value>]
legend(x) {
    if (x[1] > 0) {
        return [
            ['Buy', $props.buyColor],
            [x[2], $core.colors.text],
            [x[3]]
        ]
    } else {
        return [
            ['Sell', $props.sellColor],
            [x[2], $core.colors.text],
            [x[3]]
        ]
    }
}
`,Kr=Object.freeze(Object.defineProperty({__proto__:null,default:qr},Symbol.toStringTag,{value:"Module"})),Qr=`// Navy ~ 0.1-lite

// <ds>Regular volume</ds> 
// Format: [<timestamp>, <volume>, <direction>]
// <direction> :: 1 for green volume, - 1 for red volume

[OVERLAY name=Volume, ctx=Canvas, verion=1.0.0]

// Overlay props
prop('colorVolUp', { type: 'color', def: '#41a37682' })
prop('colorVolDw', { type: 'color', def: '#de464682' })
prop('barsHeight', { type: 'number', def: 0.15, step: 0.1 })
prop('currencySymbol', { type: 'string', def: '$' })
prop('showAvgVolume', { type: 'boolean', def: true })
prop('avgVolumeSMA', { type: 'number', def: 20 })
prop('colorAvgVol', { type: 'color', def: '#17e2bb99'})

// Draw call
draw(ctx) {

    let height = $core.id === 0 ? 0.8 : $props.barsHeight
    let cnv = $lib.layoutCnv($core, false, true, 1, 2, height)
    let bars = cnv.upVolbars.length ? cnv.upVolbars : cnv.dwVolbars
    if (!bars.length) return

    drawCvPart(ctx, $lib.volumeBar, cnv.dwVolbars, 'colorVolDw')
    drawCvPart(ctx, $lib.volumeBar, cnv.upVolbars, 'colorVolUp')

    if ($props.showAvgVolume) $lib.avgVolume(ctx, $core, $props, cnv, 1)
}

// Draw candle part
drawCvPart(ctx, f, arr, color) {
    let layout = $core.layout
    ctx.strokeStyle = $props[color]
    ctx.beginPath()
    for (var i = 0, n = arr.length; i < n; i++) {
        f(ctx, arr[i], layout)
    }
    ctx.stroke()
}

// Custom y-range
yRange(hi, lo) {
    // Remove this overlay for yRange calculation
    // if it's not the main overlay of the pane
    if ($core.id !== 0) {
        return null
    } else {
        return [hi, lo, false]
    }
}

// Legend, defined as pairs [value, color]
legend(x) {
    let v = $core.cursor.getValue($core.paneId, $core.id)
    let sym = $props.currencySymbol
    let color = v[2] > 0 ?
        $props.colorVolUp : $props.colorVolDw
    let fc = $lib.formatCash
    return [[sym + fc(x[1]), color.slice(0, 7)]]
}
`,Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Qr},Symbol.toStringTag,{value:"Module"})),ei=`// Navy ~ 0.1-lite

// <ds>Volume bars with delta ( = buyVol - sellVol)</ds>
// Format: [<timestamp>, <buyVol>, <sellVol>, <total>, <delta>]

[OVERLAY name=VolumeDelta, ctx=Canvas, verion=1.0.0]

// Overlay props
prop('colorVolUp', { type: 'color', def: '#41a37682' })
prop('colorVolDw', { type: 'color', def: '#de464682' })
prop('colorVolDeltaUp', { type: 'color', def: '#41a376' })
prop('colorVolDeltaDw', { type: 'color', def: '#de4646' })
prop('barsHeight', { type: 'number', def: 0.15, step: 0.1 })

// Draw call
draw(ctx) {

    let height = $core.id === 0 ? 0.8 : $props.barsHeight
    let cnv = $lib.layoutCnv($core, false, true, 1, 4, height)
    let bars = cnv.upVolbars.length ? cnv.upVolbars : cnv.dwVolbars
    if (!bars.length) return

    drawCvPart(ctx, $lib.volumeBar, cnv.dwVolbars, 'colorVolDw')
    drawCvPart(ctx, $lib.volumeBar, cnv.upVolbars, 'colorVolUp')

    let dwDelta = makeDelta(cnv.dwVolbars)
    let upDelta = makeDelta(cnv.upVolbars)

    drawCvPart(ctx, $lib.volumeBar, dwDelta, 'colorVolDeltaDw')
    drawCvPart(ctx, $lib.volumeBar, upDelta, 'colorVolDeltaUp')

}

// Draw candle part
drawCvPart(ctx, f, arr, color) {
    let layout = $core.layout
    ctx.strokeStyle = $props[color]
    ctx.beginPath()
    for (var i = 0, n = arr.length; i < n; i++) {
        f(ctx, arr[i], layout)
    }
    ctx.stroke()
}

makeDelta(bars) {
    let delta = []
    for (var bar of bars) {
        let src = bar.src
        let k = Math.abs(src[4]) / src[3]
        bar.h =  bar.h * k
        delta.push(bar)
    }
    return delta
}

// Custom y-range
yRange(hi, lo) {
    // Remove this overlay for yRange calculation
    // if it's not the main overlay of the pane
    if ($core.id !== 0) {
        return null
    } else {
        return [hi, lo, false]
    }
}

// Legend, defined as pairs [value, color]
legendHtml(x) {
    let v = $core.cursor.getValue($core.paneId, $core.id)
    let sym = $props.currencySymbol
    let color1 = $core.colors.text
    let color2 = v[4] > 0 ?
        $props.colorVolDeltaUp : $props.colorVolDeltaDw
    let fc = $lib.formatCash
    let sign = v[4] > 0 ? '+' : ''
    return \`
    <span style="color: \${color2}">
        <span style="margin-left: 3px;"></span>
        <span style="color: \${color1}">B</span>
        <span class="nvjs-ll-value">\${fc(x[1])}</span>
        <span style="color: \${color1}">S</span>
        <span class="nvjs-ll-value">\${fc(x[2])}</span>
        <span style="color: \${color1}">Σ</span>
        <span class="nvjs-ll-value">\${fc(x[3])}</span>
        <span style="color: \${color1}">Δ</span>
        <span class="nvjs-ll-value">\${sign}\${fc(x[4])}</span>
    \`
    //return [[sym + fc(x[1]), color.slice(0, 7)]]
}
`,ti=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"})),ni=`// Navy ~ 0.1-lite
// <ds>Time & value measurment tool [Shift+Click]</ds>

[OVERLAY name=RangeTool, ctx=Canvas, verion=1.0.1, author=GPT4]

let pin1 = null 
let pin2 = null 
let shift = false
let state = 'idle'

draw(ctx) {
    const layout = $core.layout 

    if (pin1 && pin2) {
        const x1 = layout.time2x(pin1.t) // time to x coordinate
        const x2 = layout.time2x(pin2.t) // time to x coordinate
        const y1 = layout.value2y(pin1.v) // value to y coordinate
        const y2 = layout.value2y(pin2.v) // value to y coordinate

         // change fill color based on percentage
        let color = percent() >= 0 ? '#3355ff' : '#ff3333';
        ctx.fillStyle = color + '33';
        ctx.fillRect(x1, y1, x2 - x1, y2 - y1)

        // draw arrows in the middle of rectangle
        let midX = (x1 + x2) / 2;
        let midY = (y1 + y2) / 2;
        $lib.drawArrow(ctx, midX, y1, midX, y2, color, Math.abs(y2 - y1) > 42); 
        $lib.drawArrow(ctx, x1, midY, x2, midY, color, Math.abs(x2 - x1) > 42);  

        // draw rounded rectangle with text
        const text1 = \`\${deltaValue().toFixed(2)} (\${percent().toFixed(2)}%)\`;
        const text2 = \`\${bars()} bars, \${timeText()}\`;
        const text = \`\${text1}\\n\${text2}\`;
        const textWidth = ctx.measureText(text).width;
        
        const padding = 10;
        const mainRectCenterX = (x1 + x2) / 2; // calculate center of the main rectangle
        const roundRectX = mainRectCenterX - textWidth / 2 - padding; // center the text rectangle relative to the main rectangle
        const roundRectWidth = textWidth + 2 * padding;
        const roundRectHeight = 50;  // adjust as needed
        const roundRectY = percent() > 0 ? Math.min(y1, y2) - roundRectHeight - padding : Math.max(y1, y2) + padding;
        const roundRectRadius = 5;   // adjust as needed
        ctx.fillStyle = color + 'cc';
        $lib.roundRect(ctx, roundRectX, roundRectY, roundRectWidth, roundRectHeight, roundRectRadius);

        // draw text
        ctx.fillStyle = '#ffffffcc' // color;
        ctx.font = $lib.rescaleFont($core.props.config.FONT, 14);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text1, roundRectX + roundRectWidth / 2, roundRectY + roundRectHeight / 4);
        ctx.fillText(text2, roundRectX + roundRectWidth / 2, roundRectY + 3 * roundRectHeight / 4);
      
    }
}

// Calculate the percentage of the are between pins v-values
// assuming that pin2 is above pin1 equals positive value
// and negative otherwise
percent() {
    if (pin1 && pin2) {
        let delta = 100 * (pin2.v - pin1.v)
        if (delta > 0) {
            return delta / pin1.v
        } else {
            return delta / pin2.v
        }
    }
    return 0
}

// Calculate delta time between pins t-values
// assuming that pin2 on the right of pin1 equals positive value
// and negative otherwise
deltaTime() {
    if (pin1 && pin2) {
        return pin2.t - pin1.t
    }
    return 0
}

// Calculate delta value between pins v-values
// assuming that pin2 is above pin1 equals positive value
// and negative otherwise
deltaValue() {
    if (pin1 && pin2) {
        return pin2.v - pin1.v
    }
    return 0
}

// Delta time in bars
bars() {
    let data = $core.hub.mainOv.dataSubset
    if (pin1 && pin2) {
        const layout = $core.layout
        const bars = data.filter(bar => {
            return bar[0] >= Math.min(pin1.t, pin2.t) && bar[0] <= Math.max(pin1.t, pin2.t)
        });
        let count = bars.length - 1; // reduce the count by 1
        return pin2.t < pin1.t ? -count : count; // make it negative if pin2.t < pin1.t
    }
    return 0
}

// Delta time in text format
timeText() {
    let deltaTimeMs = deltaTime();  // returns delta time in milliseconds
    let timeFrameMs = $core.props.timeFrame;  // returns current chart timeframe in milliseconds

    let negative = deltaTimeMs < 0;
    deltaTimeMs = Math.abs(deltaTimeMs);

    let minutes = Math.floor((deltaTimeMs / (1000 * 60)) % 60);
    let hours = Math.floor((deltaTimeMs / (1000 * 60 * 60)) % 24);
    let days = Math.floor(deltaTimeMs / (1000 * 60 * 60 * 24));

    let result = "";
    if (days > 0) {
        result += days + "d ";
    }
    if ((hours > 0 || days > 0) && hours !== 0) {
        result += hours + "h ";
    }
    if (minutes > 0 && timeFrameMs < 60 * 60 * 1000 && minutes !== 0) {
        result += minutes + "m";
    }

    return (negative ? '-' : '') + result.trim();
}



keydown(event) {
    if (event.key === 'Shift') {
        shift = true
    }
}

keyup(event) {
    if (event.key === 'Shift') {
        shift = false
    }
}

mousedown(event) {
    const layout = $core.layout 
    if (state === 'idle' && shift) {
        // Create the first pin 
        pin1 = {
            t: $core.cursor.time,
            v: layout.y2value(event.layerY)
        }
        pin2 = { ...pin1 }
        state = 'drawing'
    } else if (state === 'drawing') {
        state = 'finished'
    } else if (state === 'finished') {
        state = 'idle'
        pin1 = null 
        pin2 = null 
    }
    $events.emitSpec('chart', 'update-layout')
}

mousemove(event) {
    if (state === 'drawing') {
        const layout = $core.layout 
        // Create the second pin 
        pin2 = {
            t: $core.cursor.time,
            v: layout.y2value(event.layerY)
        }
    }
}

// Disable legend by returning null
legend() => null
`,oi=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"})),ri=`
// Navy ~ 0.1-lite
// <ds>Arnaud Legoux Moving Average</ds>

[INDICATOR name=ALMA, version=1.0.0]

prop('length', { type: 'integer', def: 10 })
prop('offset', { type: 'number', def: 0.9 })
prop('sigma', { type: 'number', def: 5 })
prop('color', { type: 'color', def: '#559de0' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

let $ = $props

this.specs = {
    name: \`ALMA \${$.length} \${$.offset} \${$.sigma}\`,
    props: {
        color: $props.color,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
let offset = $props.offset
let sigma = $props.sigma

Spline(alma(close, length, offset, sigma), this.specs)
`,ii=Object.freeze(Object.defineProperty({__proto__:null,default:ri},Symbol.toStringTag,{value:"Module"})),si=`
// Navy ~ 0.1-lite
// <ds>Average True Range</ds>

[INDICATOR name=ATR, version=1.0.0]

prop('length', { type: 'integer', def: 15 })
prop('color', { type: 'color', def: '#e52468' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: 'ATR ' + $props.length,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Spline(atr($props.length), this.specs)
`,li=Object.freeze(Object.defineProperty({__proto__:null,default:si},Symbol.toStringTag,{value:"Module"})),ai=`
// Navy ~ 0.1-lite
// <ds>Average True Range, percentage</ds>

[INDICATOR name=ATRp, version=1.0.0]

prop('length', { type: 'integer', def: 15 })
prop('color', { type: 'color', def: '#f44336' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: 'ATR% ' + $props.length,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let k = 100 / close[0]
Spline(atr($props.length)[0] * k, this.specs)
`,ci=Object.freeze(Object.defineProperty({__proto__:null,default:ai},Symbol.toStringTag,{value:"Module"})),pi=`
// Navy ~ 0.1-lite
// <ds>Bollinger Bands</ds>

[INDICATOR name=BB, version=1.0.0]

prop('length', { type: 'integer', def: 21 })
prop('stddev', { type: 'number', def: 2 })
prop('color', { type: 'color', def: '#2cc6c9ab' })
prop('backColor', { type: 'color', def: '#2cc6c90a' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`BB \${$props.length} \${$props.stddev}\`,
    props: {
        color: $props.color,
        backColor: $props.backColor,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
let stddev = $props.stddev
let [m, h, l] = bb(close, length, stddev)
Band([h[0], m[0], l[0]], this.specs)
`,di=Object.freeze(Object.defineProperty({__proto__:null,default:pi},Symbol.toStringTag,{value:"Module"})),ui=`
// Navy ~ 0.1-lite
// <ds>Bollinger Bands Width</ds>

[INDICATOR name=BBW, version=1.0.0]

prop('length', { type: 'integer', def: 21 })
prop('stddev', { type: 'number', def: 2 })
prop('color', { type: 'color', def: '#2cc6c9ab' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`BBW \${$props.length} \${$props.stddev}\`,
    props: {
        color: $props.color,
        backColor: $props.backColor,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
let stddev = $props.stddev
Spline(bbw(close, length, stddev), this.specs)
`,fi=Object.freeze(Object.defineProperty({__proto__:null,default:ui},Symbol.toStringTag,{value:"Module"})),hi=`
// Navy ~ 0.1-lite
// <ds>Commodity Channel Index</ds>

[INDICATOR name=CCI, version=1.0.0]

prop('length', { type: 'integer', def: 21 })
prop('upperBand', { type: 'number', def: 100 })
prop('lowerBand', { type: 'number', def: -100 })
prop('color', { type: 'color', def: '#e28a3dee' })
prop('backColor', { type: 'color', def: '#e28a3d11' })
prop('bandColor', { type: 'color', def: '#999999' })
prop('prec', { type: 'integer', def: 2 })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: 'CCI ' + $props.length,
    props: {
        color: $props.color,
        backColor: $props.backColor,
        bandColor: $props.bandColor,
        upperBand: $props.upperBand,
        lowerBand: $props.lowerBand,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Range(cci(close, $props.length), this.specs)
`,gi=Object.freeze(Object.defineProperty({__proto__:null,default:hi},Symbol.toStringTag,{value:"Module"})),mi=`
// Navy ~ 0.1-lite
// <ds>Chande Momentum Oscillator</ds>

[INDICATOR name=CMO, version=1.0.0]

prop('length', { type: 'integer', def: 10 })
prop('color', { type: 'color', def: '#559de0' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`CMO \${$props.length}\`,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
Spline(cmo(close, length), this.specs)
`,yi=Object.freeze(Object.defineProperty({__proto__:null,default:mi},Symbol.toStringTag,{value:"Module"})),vi=`
// Navy ~ 0.1-lite
// <ds>Center of Gravity</ds>

[INDICATOR name=COG, version=1.0.0]

prop('length', { type: 'integer', def: 10 })
prop('color', { type: 'color', def: '#559de0' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`COG \${$props.length}\`,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
Spline(cog(close, length), this.specs)
`,bi=Object.freeze(Object.defineProperty({__proto__:null,default:vi},Symbol.toStringTag,{value:"Module"})),wi=`
// Navy ~ 0.1-lite
// <ds>Directional Movement Index</ds>

[INDICATOR name=DMI, version=1.0.0]

prop('length', { type: 'integer', def: 15 })
prop('smooth', { type: 'integer', def: 15 })
prop('color1', { type: 'color', def: "#ef1360" })
prop('color2', { type: 'color', def: "#3782f2" })
prop('color3', { type: 'color', def: "#f48709" })
prop('prec', { type: 'integer', def: 2 })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`DMI \${$props.length} \${$props.smooth}\`,
    props: {
        colors: [$props.color1, $props.color2, $props.color3]
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let [adx, dp, dn] = dmi($props.length, $props.smooth)
Splines([adx[0], dp[0], dn[0]], this.specs)
`,xi=Object.freeze(Object.defineProperty({__proto__:null,default:wi},Symbol.toStringTag,{value:"Module"})),Ii=`
// Navy ~ 0.1-lite
// <ds>Exponential Moving Average</ds>

[INDICATOR name=EMA, version=1.0.0]

prop('length', { type: 'integer', def: 12 })
prop('color', { type: 'color', def: '#f7890c' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`EMA \${$props.length}\`,
    props: {
        color: $props.color,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Spline(ema(close, $props.length), this.specs)
`,_i=Object.freeze(Object.defineProperty({__proto__:null,default:Ii},Symbol.toStringTag,{value:"Module"})),Ai=`
// Navy ~ 0.1-lite
// <ds>Hull Moving Average</ds>

[INDICATOR name=HMA, version=1.0.0]

prop('length', { type: 'integer', def: 10 })
prop('color', { type: 'color', def: '#3af475' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`HMA \${$props.length}\`,
    props: {
        color: $props.color,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Spline(hma(close, $props.length), this.specs)
`,Si=Object.freeze(Object.defineProperty({__proto__:null,default:Ai},Symbol.toStringTag,{value:"Module"})),ki=`
// Navy ~ 0.1-lite
// <ds>Ichimoku Cloud</ds>

[INDICATOR name=Ichimoku, version=1.0.0]

prop('convLength', { type: 'integer', def: 9 })
prop('baseLength', { type: 'integer', def: 26 })
prop('laggingLength', { type: 'integer', def: 52 })
prop('displacement', { type: 'integer', def: 26 })
prop('cloudUpColor', { type: 'color', def: '#79ffde18' })
prop('cloudDwColor', { type: 'color', def: '#ff246c18' })
prop('convColor', { type: 'color', def: '#4eb6d8' })
prop('baseColor', { type: 'color', def: '#d626a1' })
prop('laggingColor', { type: 'color', def: '#66cc66' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = ({name, props}) => ({
    name: name,
    props: props,
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
})

[UPDATE]

let $ = $props
let donchian = (len, id) => ts(
    avg(lowest(low, len)[0], highest(high, len)[0]), id
)
let conversionLine = donchian($.convLength, 1)
let baseLine = donchian($.baseLength, 2)
let leadLine1 = ts(avg(conversionLine[0], baseLine[0]))
let leadLine2 = donchian($.laggingLength, 3)
let lagging = ts(close[0])
offset(leadLine1, $.displacement - 1)
offset(leadLine2, $.displacement - 1)
offset(lagging, -$.displacement + 1)

Cloud([leadLine1, leadLine2], this.specs({
    name: \`Cloud\`,
    props: {
        back1: $props.cloudUpColor,
        back2: $props.cloudDwColor
    }
}))

Splines([conversionLine, baseLine], this.specs({
    name: \`Base Lines \${$.convLength} \${$.baseLength}\`,
    props: {
        colors: [
            $props.convColor,
            $props.baseColor
        ]
    }
}))

Spline(lagging, this.specs({
    name: \`Lagging Span \${$.laggingLength}\`,
    props: {
        color: $props.laggingColor
    }
}))
`,Ti=Object.freeze(Object.defineProperty({__proto__:null,default:ki},Symbol.toStringTag,{value:"Module"})),$i=`
// Navy ~ 0.1-lite
// <ds>Keltner Channels</ds>

[INDICATOR name=KC, version=1.0.0]

prop('length', { type: 'integer', def: 20 })
prop('mult', { type: 'number', def: 1 })
prop('trueRange', { type: 'boolean', def: true })
prop('color', { type: 'color', def: '#4c8dffab' })
prop('backColor', { type: 'color', def: '#4c8dff0a' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`KC \${$props.length} \${$props.mult}\`,
    props: {
        color: $props.color,
        backColor: $props.backColor,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
let [m, h, l] = kc(close, $.length, $.mult, $.trueRange)
Band([h[0], m[0], l[0]], this.specs)
`,Mi=Object.freeze(Object.defineProperty({__proto__:null,default:$i},Symbol.toStringTag,{value:"Module"})),Ci=`
// Navy ~ 0.1-lite
// <ds>Keltner Channels Width</ds>

[INDICATOR name=KCW, version=1.0.0]

prop('length', { type: 'integer', def: 20 })
prop('mult', { type: 'number', def: 1 })
prop('trueRange', { type: 'boolean', def: true })
prop('color', { type: 'color', def: '#4c8dffab' })
prop('backColor', { type: 'color', def: '#4c8dff0a' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`KCW \${$props.length} \${$props.mult}\`,
    props: {
        color: $props.color,
        backColor: $props.backColor,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
let w = kcw(close, $.length, $.mult, $.trueRange)
Spline(w, this.specs)
`,Oi=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),Ei=`
// Navy ~ 0.1-lite
// <ds>Moving Average Convergence/Divergence</ds>

[INDICATOR name=MACD, version=1.0.0]

prop('fast', { type: 'integer', def: 12 })
prop('slow', { type: 'integer', def: 26 })
prop('smooth', { type: 'integer', def: 9 })
prop('colorMacd', { type: 'color', def: '#3782f2' })
prop('colorSignal', { type: 'color', def: '#f48709' })
prop('colorUp', { type: 'Color', def: '#35a776' })
prop('colorDw', { type: 'Color', def: '#e54150' })
prop('colorSemiUp', { type: 'Color', def: '#79e0b3' })
prop('colorSemiDw', { type: 'Color', def: '#ea969e' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

let $ = $props
this.specs = {
    name: \`MACD \${$.fast} \${$.slow} \${$.smooth}\`,
    props: {
        colorValue: $.colorMacd,
        colorSignal: $.colorSignal,
        colorUp: $.colorUp,
        colorDw: $.colorDw,
        colorSemiUp: $.colorSemiUp,
        colorSemiDw: $.colorSemiDw
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
let [m, s, h] = macd(close, $.fast, $.slow, $.smooth)

Histogram([h[0], m[0], s[0]], this.specs)
`,Yi=Object.freeze(Object.defineProperty({__proto__:null,default:Ei},Symbol.toStringTag,{value:"Module"})),Bi=`
// Navy ~ 0.1-lite
// <ds>Money Flow Index	</ds>

[INDICATOR name=MFI, version=1.0.0]

prop('length', { type: 'integer', def: 14 })
prop('upperBand', { type: 'number', def: 80 })
prop('lowerBand', { type: 'number', def: 20 })
prop('color', { type: 'color', def: '#85c427ee' })
prop('backColor', { type: 'color', def: '#85c42711' })
prop('bandColor', { type: 'color', def: '#999999' })
prop('prec', { type: 'integer', def: 2 })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: 'MFI ' + $props.length,
    props: {
        color: $props.color,
        backColor: $props.backColor,
        bandColor: $props.bandColor,
        upperBand: $props.upperBand,
        lowerBand: $props.lowerBand,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let hlc3 = ts((high[0] + low[0] + close[0]) / 3)
Range(mfi(hlc3, $props.length), this.specs)
`,Ji=Object.freeze(Object.defineProperty({__proto__:null,default:Bi},Symbol.toStringTag,{value:"Module"})),Ri=`
// Navy ~ 0.1-lite
// <ds>Momentum</ds>

[INDICATOR name=MOM, version=1.0.0]

prop('length', { type: 'integer', def: 11 })
prop('color', { type: 'color', def: '#bcc427ee' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`MOM \${$props.length}\`,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
Spline(mom(close, length), this.specs)
`,Pi=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"})),Di=`
// Navy ~ 0.1-lite
// <ds>Rate of Change</ds>

[INDICATOR name=ROC, version=1.0.0]

prop('length', { type: 'integer', def: 9 })
prop('color', { type: 'color', def: '#279fc4' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`ROC \${$props.length}\`,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let length = $props.length
Spline(roc(close, length), this.specs)
`,Li=Object.freeze(Object.defineProperty({__proto__:null,default:Di},Symbol.toStringTag,{value:"Module"})),Ni=`
// Navy ~ 0.1-lite
// <ds>Relative Strength Index</ds>

[INDICATOR name=RSI, version=1.0.0]

prop('length', { type: 'integer', def: 14 })
prop('color', { type: 'color', def: '#3399ff' })
prop('prec', { type: 'integer', def: 2 })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: 'RSI ' + $props.length,
    props: {
        color: $props.color
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Range(rsi(close, $props.length), this.specs)
`,Ui=Object.freeze(Object.defineProperty({__proto__:null,default:Ni},Symbol.toStringTag,{value:"Module"})),zi=`
// Navy ~ 0.1-lite
// <ds>Exponential Moving Average Ribbon</ds>

[INDICATOR name=Ribbon, version=1.0.0]

prop('start', { type: 'integer', def: 10 })
prop('number', { type: 'integer', def: 5 })
prop('step', { type: 'integer', def: 10 })
prop('colors', { type: 'array', def: ["#3aaaf4ee"] })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`EMA x \${$props.number}\`,
    props: {
        colors: $props.colors,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
let arr = []
for (var i = 0; i < $.number; i++) {
    let l = $.start + i * $.step
    arr.push(ema(close, l)[0])
}

Splines(arr, this.specs)
`,ji=Object.freeze(Object.defineProperty({__proto__:null,default:zi},Symbol.toStringTag,{value:"Module"})),Fi=`
// Navy ~ 0.1-lite
// <ds>Parabolic SAR</ds>

[INDICATOR name=SAR, version=1.0.0]

prop('start', { type: 'number', def: 0.02 })
prop('inc', { type: 'number', def: 0.02 })
prop('max', { type: 'number', def: 0.2 })
prop('color', { type: 'color', def: '#35a9c6' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

let $ = $props
this.specs = {
    name: \`SAR \${$.start} \${$.inc} \${$.max}\`,
    props: {
        color: $props.color,
        shape: 'cross'
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
Sparse(sar($.start, $.inc, $.max), this.specs)
`,Vi=Object.freeze(Object.defineProperty({__proto__:null,default:Fi},Symbol.toStringTag,{value:"Module"})),Hi=`
// Navy ~ 0.1-lite
// <ds>Simple Moving Average</ds>

[INDICATOR name=SMA, version=1.0.0]

prop('length', { type: 'integer', def: 12 })
prop('color', { type: 'color', def: '#d1385c' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`SMA \${$props.length}\`,
    props: {
        color: $props.color,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Spline(sma(close, $props.length), this.specs)
`,Gi=Object.freeze(Object.defineProperty({__proto__:null,default:Hi},Symbol.toStringTag,{value:"Module"})),Wi=`
// Navy ~ 0.1-lite
// <ds>Symmetrically Weighted Moving Average</ds>

[INDICATOR name=SWMA, version=1.0.0]

prop('color', { type: 'color', def: '#e57440' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`SWMA\`,
    props: {
        color: $props.color,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Spline(swma(close), this.specs)
`,Xi=Object.freeze(Object.defineProperty({__proto__:null,default:Wi},Symbol.toStringTag,{value:"Module"})),qi=`
// Navy ~ 0.1-lite
// <ds>Stochastic</ds>, format: [<timestamp>, <kLine>, <dLine>]

[OVERLAY name=Stoch, version=1.0.0]

prop('kColor', { type: 'color', def: '#3782f2' })
prop('dColor', { type: 'color', def: '#f48709' })
prop('bandColor', { type: 'color', def: '#535559' })
prop('backColor', { type: 'color', def: '#381e9c16' })
prop('upperBand', { type: 'number', def: 80 })
prop('lowerBand', { type: 'number', def: 20 })

draw(ctx) {
    const layout = $core.layout
    const upper = layout.value2y($props.upperBand)
    const lower = layout.value2y($props.lowerBand)
    const data = $core.data
    const view = $core.view

    // K
    ctx.lineWidth = 1
    ctx.strokeStyle = $props.kColor
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[1])
        ctx.lineTo(x, y)
    }
    ctx.stroke()

    // D
    ctx.strokeStyle = $props.dColor
    ctx.beginPath()
    for (var i = view.i1, n = view.i2; i <= n; i++) {
        let p = data[i]
        let x = layout.ti2x(p[0], i)
        let y = layout.value2y(p[2])
        ctx.lineTo(x, y)
    }
    ctx.stroke()

    ctx.strokeStyle = $props.bandColor
    ctx.setLineDash([5]) // Will be removed after draw()
    ctx.beginPath()
    // Fill the area between the bands
    ctx.fillStyle = $props.backColor
    ctx.fillRect(0, upper, layout.width, lower - upper)
    // Upper band
    ctx.moveTo(0, upper)
    ctx.lineTo(layout.width, upper)
    // Lower band
    ctx.moveTo(0, lower)
    ctx.lineTo(layout.width, lower)
    ctx.stroke()
}

yRange(hi, lo) => [
    Math.max(hi, $props.upperBand),
    Math.min(lo, $props.lowerBand)
]

// Legend, defined as pairs [value, color]
legend(x) => [[x[1], $props.kColor], [x[1], $props.dColor]]


[INDICATOR name=Stoch, version=1.0.0]

prop('paramK', { def: 14 })
prop('paramD', { def: 3 })
prop('smooth', { def: 3 })
prop('kColor', { type: 'color', def: '#3782f2' })
prop('dColor', { type: 'color', def: '#f48709' })
prop('prec', { type: 'integer', def: 2 })
prop('zIndex', { type: 'integer', def: 0 })

let $ = $props
this.specs = {
    name: \`Stoch \${$.paramK} \${$.paramD} \${$.smooth}\`,
    props: {
        kColor: $props.kColor,
        dColor: $props.dColor
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
let k = sma(stoch(close, high, low, $.paramK), $.smooth)
let d = sma(k, $.paramD)
Stoch([k[0], d[0]], this.specs)
`,Ki=Object.freeze(Object.defineProperty({__proto__:null,default:qi},Symbol.toStringTag,{value:"Module"})),Qi=`
// Navy ~ 0.1-lite
// <ds>True Strength Index</ds>

[INDICATOR name=TSI, version=1.0.0]

prop('long', { type: 'integer', def: 25 })
prop('short', { type: 'integer', def: 13 })
prop('signal', { type: 'integer', def: 13 })
prop('color1', { type: 'color', def: '#3bb3e4' })
prop('color2', { type: 'color', def: '#f7046d' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

let $ = $props
this.specs = {
    name: \`TSI \${$.long} \${$.short} \${$.signal}\`,
    props: {
        colors: [$.color1, $.color2]
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

let $ = $props
let val = tsi(close, $.short, $.long)
let sig = ema(val, $.signal)
Splines([val[0] * 100, sig[0] * 100], this.specs)
`,Zi=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"})),es=`
// Navy ~ 0.1-lite
// <ds>Volume Weighted Moving Average</ds>

[INDICATOR name=VWMA, version=1.0.0]

prop('length', { type: 'integer', def: 20 })
prop('color', { type: 'color', def: '#db0670' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`VWMA \${$props.length}\`,
    props: {
        color: $props.color,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Spline(vwma(close, $props.length), this.specs)
`,ts=Object.freeze(Object.defineProperty({__proto__:null,default:es},Symbol.toStringTag,{value:"Module"})),ns=`
// Navy ~ 0.1-lite
// <ds>Williams %R</ds>

[INDICATOR name=WilliamsR, version=1.0.0]

prop('length', { type: 'integer', def: 14 })
prop('upperBand', { type: 'number', def: -20 })
prop('lowerBand', { type: 'number', def: -80 })
prop('color', { type: 'color', def: '#0980e8' })
prop('backColor', { type: 'color', def: '#9b9ba316' })
prop('bandColor', { type: 'color', def: '#535559' })
prop('prec', { type: 'integer', def: autoPrec() })
prop('zIndex', { type: 'integer', def: 0 })

this.specs = {
    name: \`%R \${$props.length}\`,
    props: {
        color: $props.color,
        backColor: $props.backColor,
        bandColor: $props.bandColor,
        upperBand: $props.upperBand,
        lowerBand: $props.lowerBand,
    },
    settings: {
        precision: $props.prec,
        zIndex: $props.zIndex
    }
}

[UPDATE]

Range(wpr($props.length), this.specs)
`,os=Object.freeze(Object.defineProperty({__proto__:null,default:ns},Symbol.toStringTag,{value:"Module"}));var no={exports:{}};const rs=(n,e={})=>{const t=e.safe===!0||e.keepProtected===!0;let o=!1;const r=i=>{let s="",a,c;for(const l of i.nodes)switch(l.type){case"block":if(e.first&&o===!0){s+=r(l);break}if(e.preserveNewlines===!0){a=r(l),c=a.split(`
`),s+=`
`.repeat(c.length-1);break}if(t===!0&&l.protected===!0){s+=r(l);break}o=!0;break;case"line":if(e.first&&o===!0){s+=l.value;break}t===!0&&l.protected===!0&&(s+=l.value),o=!0;break;case"open":case"close":case"text":case"newline":default:{s+=l.value||"";break}}return s};return r(n)};var is=rs;let oo=class{constructor(e){this.type=e.type,e.value&&(this.value=e.value),e.match&&(this.match=e.match),this.newline=e.newline||""}get protected(){return!!this.match&&this.match[1]==="!"}},ss=class extends oo{constructor(e){super(e),this.nodes=e.nodes||[]}push(e){this.nodes.push(e)}get protected(){return this.nodes.length>0&&this.nodes[0].protected===!0}};var ls={Node:oo,Block:ss},ro={};(function(n){n.ada={LINE_REGEX:/^--.*/},n.apl={LINE_REGEX:/^⍝.*/},n.applescript={BLOCK_OPEN_REGEX:/^\(\*/,BLOCK_CLOSE_REGEX:/^\*\)/},n.csharp={LINE_REGEX:/^\/\/.*/},n.haskell={BLOCK_OPEN_REGEX:/^\{-/,BLOCK_CLOSE_REGEX:/^-\}/,LINE_REGEX:/^--.*/},n.javascript={BLOCK_OPEN_REGEX:/^\/\*\*?(!?)/,BLOCK_CLOSE_REGEX:/^\*\/(\n?)/,LINE_REGEX:/^\/\/(!?).*/},n.lua={BLOCK_OPEN_REGEX:/^--\[\[/,BLOCK_CLOSE_REGEX:/^\]\]/,LINE_REGEX:/^--.*/},n.matlab={BLOCK_OPEN_REGEX:/^%{/,BLOCK_CLOSE_REGEX:/^%}/,LINE_REGEX:/^%.*/},n.perl={LINE_REGEX:/^#.*/},n.php={...n.javascript,LINE_REGEX:/^(#|\/\/).*?(?=\?>|\n)/},n.python={BLOCK_OPEN_REGEX:/^"""/,BLOCK_CLOSE_REGEX:/^"""/,LINE_REGEX:/^#.*/},n.ruby={BLOCK_OPEN_REGEX:/^=begin/,BLOCK_CLOSE_REGEX:/^=end/,LINE_REGEX:/^#.*/},n.shebang=n.hashbang={LINE_REGEX:/^#!.*/},n.c=n.javascript,n.csharp=n.javascript,n.css=n.javascript,n.java=n.javascript,n.js=n.javascript,n.less=n.javascript,n.pascal=n.applescript,n.ocaml=n.applescript,n.sass=n.javascript,n.sql=n.ada,n.swift=n.javascript,n.ts=n.javascript,n.typscript=n.javascript})(ro);const{Node:ke,Block:pn}=ls,as=ro,wt={ESCAPED_CHAR_REGEX:/^\\./,QUOTED_STRING_REGEX:/^(['"`])((?:\\\1|[^\1])*?)(\1)/,NEWLINE_REGEX:/^\r*\n/},cs=(n,e={})=>{if(typeof n!="string")throw new TypeError("Expected input to be a string");const t=new pn({type:"root",nodes:[]}),o=[t],r=(e.language||"javascript").toLowerCase(),i=as[r];if(typeof i>"u")throw new Error(`Language "${r}" is not supported by strip-comments`);const{LINE_REGEX:s,BLOCK_OPEN_REGEX:a,BLOCK_CLOSE_REGEX:c}=i;let l=t,p=n,f,h;const g=[a,c].filter(Boolean);let y=!1;g.every(x=>x.source==='^"""')&&(y=!0);const v=(x=p[0]||"")=>(p=p.slice(x.length),x),u=(x,M="text")=>{const J=x.exec(p);if(J)return v(J[0]),{type:M,value:J[0],match:J}},d=x=>{if(h&&h.type==="text"&&x.type==="text"){h.value+=x.value;return}l.push(x),x.nodes&&(o.push(x),l=x),h=x},I=()=>{if(l.type==="root")throw new SyntaxError("Unclosed block comment");o.pop(),l=o[o.length-1]};for(;p!=="";){if(f=u(wt.ESCAPED_CHAR_REGEX,"text")){d(new ke(f));continue}if(l.type!=="block"&&(!h||!/\w$/.test(h.value))&&!(y&&p.startsWith('"""'))&&(f=u(wt.QUOTED_STRING_REGEX,"text"))){d(new ke(f));continue}if(f=u(wt.NEWLINE_REGEX,"newline")){d(new ke(f));continue}if(a&&e.block&&!(y&&l.type==="block")&&(f=u(a,"open"))){d(new pn({type:"block"})),d(new ke(f));continue}if(c&&l.type==="block"&&e.block&&(f=u(c,"close"))){f.newline=f.match[1]||"",d(new ke(f)),I();continue}if(s&&l.type!=="block"&&e.line&&(f=u(s,"line"))){d(new ke(f));continue}if(f=u(/^[a-zABD-Z0-9\t ]+/,"text")){d(new ke(f));continue}d(new ke({type:"text",value:v(p[0])}))}return t};var ps=cs;/*!
 * strip-comments <https://github.com/jonschlinkert/strip-comments>
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */const lt=is,Xe=ps,at=no.exports=(n,e)=>{const t={...e,block:!0,line:!0};return lt(Xe(n,t),t)};at.block=(n,e)=>{const t={...e,block:!0};return lt(Xe(n,t),t)};at.line=(n,e)=>{const t={...e,line:!0};return lt(Xe(n,t),t)};at.first=(n,e)=>{const t={...e,block:!0,line:!0,first:!0};return lt(Xe(n,t),t)};at.parse=Xe;var ds=no.exports;const us=qn(ds);function fs(n,e){return us(n)}function hs(n,e){let t=io(n,e);for(var o of t){let r=n.slice(0,o[0]+1);r+=n.slice(o[0]+1,o[1]).replaceAll("/*","[!C~1!]").replaceAll("//","[!C~2!]"),r+=n.slice(o[1]),n=r}return n}function gs(n,e){return n.replaceAll("[!C~1!]","/*").replaceAll("[!C~2!]","//")}function io(n,e){let t={"'":0,'"':0,"`":0},o=[],r=null;for(var i=0;i<n.length;i++)for(var s in t)if(n[i]===s&&n[i-1]!=="\\"&&(t[s]++,r||(r=[i,void 0])),n[i]===s&&n[i-1]!=="\\"&&i>r[0]&&(t[s]=0,r&&Object.values(t).every(a=>!a)&&(r[1]=i,o.push(r),r=null)),t[s]<0)throw`Missing quote ${s} in ${e}`;if(r!==null)throw`Missing quote in ${e}: ${JSON.stringify(t)}`;return o}function ms(n,e=btoa){let t=/\/([^*\/]?.+)\//g;do{var o=t.exec(n);if(o){let r=o[0].length;o[1].slice(-1)==="*"&&(r--,o[1]=o[1].slice(0,-1));let i=n.slice(0,o.index+1),s=e(o[1]);i+=s+n.slice(o.index+r-1),n=i,t.lastIndex=o.index+s.length}}while(o);return n}function ys(n,e,t,o="{}"){let r=o[0],i=o[1],s={"'":0,'"':0,"`":0},a=0,c=null;for(var l=e;l<n.length;l++){for(var p in s)if(n[l]===p&&n[l-1]!=="\\"&&(s[p]++,c||(c=[l,void 0])),n[l]===p&&n[l-1]!=="\\"&&l>c[0]&&(s[p]=0,c&&Object.values(s).every(h=>!h)&&(c[1]=l,c=null)),s[p]<0)throw`Missing quote ${p} in ${t}`;if(s["'"]+s['"']+s["`"]===0&&(n[l]===r&&a++,n[l]===i&&a--,a===0))break}if(a!==0)throw`Missing bracket in ${t}: ${o}`;if(c!==null)throw`Missing quote in ${t}: ${JSON.stringify(s)}`;return l}const et={maskStrings:hs,unmaskStrings:gs,findStrings:io,maskRegex:ms,decomment:fs,findClosingBracket:ys},qe=/(function[\s]+|)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\(([^()]*?)\)[\s]*?{/gmi,Ke=/(function[\s]+|)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\(([^()]*?)\)[\s]*?=>[\s]*?{/gmi,xt=/(function[\s]+|)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\(([^()]*?)\)[\s]*?=>/gmi,dn=["if","for","while","switch","catch","with"];class vs{constructor(e,t){this.tagProps=this.parseTagProps(e),this.src=t,this.flags="",this.parseBody()}parseTagProps(e){let t={},o=e.split(",");for(var r of o){let[i,s]=r.split("=");t[i.trim()]=s.trim()}return t}parseBody(){let e=et.decomment(this.src);e=this.prepFuncions1(e),e=this.prepFuncions2(e),e=this.prepFuncions3(e),this.prefab=this.wrapTheCode(e,this.flags)}prepFuncions1(e){let t="",o=0;qe.lastIndex=0;do{var r=qe.exec(e);if(r){r[1].trim();let i=r[2],s=r[3],a=qe.lastIndex-1,c=et.findClosingBracket(e,a);if(dn.includes(i))t+=e.slice(o,c+1);else{let l=e.slice(a,c+1);t+=e.slice(o,r.index),t+=`var ${i} = (${s}) => ${l}`,this.parseFlags(i,s,l)}qe.lastIndex=c,o=c+1}}while(r);return t+e.slice(o)}prepFuncions2(e){let t="",o=0;Ke.lastIndex=0;do{var r=Ke.exec(e);if(r){r[1].trim();let i=r[2],s=r[3],a=Ke.lastIndex-1,c=et.findClosingBracket(e,a);if(dn.includes(i))t+=e.slice(o,c+1);else{let l=e.slice(a,c+1);t+=e.slice(o,r.index),t+=`var ${i} = (${s}) => (${l})`,this.parseFlags(i,s,l)}Ke.lastIndex=c,o=c+1}}while(r);return t+e.slice(o)}prepFuncions3(e){let t="",o=0;xt.lastIndex=0;do{var r=xt.exec(e);if(r){r[1].trim();let i=r[2],s=r[3],a=xt.lastIndex;t+=e.slice(o,r.index),t+=`var ${i} = (${s}) => `;let c=e.slice(a).split(`
`)[0].trim();this.parseFlags(i,s,c),o=a+1}}while(r);return t+e.slice(o)}parseFlags(e,t,o){if(e==="yRange"){let r=!!t.trim().length;this.flags+=`yRangePreCalc: ${r},
`}else e==="legend"&&(o==="null"||o==="undefined")&&(this.flags+=`noLegend: true,
`)}wrapTheCode(e,t){return new Function("env",`

            // Setup the environment
            let { $core, $props, $events } = env
            let prop = (...args) => env.prop(...args)
            let watchProp = (...args) => env.watchProp(...args)

            // Add primitives
            let $lib = env.lib

            // Function stubs
            var init = () => {}
            var destroy = () => {}
            var meta = () => null
            var dataFormat = () => null
            var draw = () => {}
            var drawSidebar = null
            var drawBotbar = null
            var yRange = null
            var preSampler = null
            var legend = null
            var legendHtml = null
            var valueTracker = null
            var ohlc = null

            // Event handler stubs
            var mousemove = null
            var mouseout = null
            var mouseup = null
            var mousedown = null
            var click = null
            var keyup = null
            var keydown = null
            var keypress = null

            // Overlay code
            ${e}

            // Output overlay object
            return {
                gridId: () => $core.layout.id,
                id: () => $core.id,
                init, destroy, meta, dataFormat,
                draw, drawSidebar, drawBotbar,
                yRange, preSampler,
                legend, legendHtml,
                valueTracker, ohlc,
                mousemove, mouseout, mouseup,
                mousedown, click, keyup, keydown,
                keypress,
                // Generated flags
                ${t}
            }
        `)}}const un=/\[[\s]*?UPDATE[\s]*?\]|\[[\s]*?POST[\s]*?\]/gm,fn=/\[[\s]*?UPDATE[\s]*?\]([\s\S]*?)(\[POST|\[UPDATE|\[EOF)/gm,hn=/\[[\s]*?POST[\s]*?\]([\s\S]*?)(\[POST|\[UPDATE|\[EOF)/gm;class bs{constructor(e,t){this.tagProps=this.parseTagProps(e),this.src=t,this.parseBody()}parseTagProps(e){let t={},o=e.split(",");for(var r of o){let[i,s]=r.split("=");t[i.trim()]=s.trim()}return t}parseBody(){un.lastIndex=0,fn.lastIndex=0,hn.lastIndex=0;let e=et.decomment(this.src);this.init=e.split(un)[0],e+=`
[EOF]`,this.update=(fn.exec(e)||[])[1],this.post=(hn.exec(e)||[])[1]}}const gn=.1,ws="lite",xs=/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,It=/\[OVERLAY[\s]+([\s\S]*?)]([\s\S]*?)(\[OVERLAY|\[INDICATOR|\[EOF)/gm,_t=/\[INDICATOR[\s]+([\s\S]*?)]([\s\S]*?)(\[OVERLAY|\[INDICATOR|\[EOF)/gm;class Is{constructor(e,t="Unknown Script"){this.version=gn,this.src=e+`
[EOF]`,this.scriptName=t,this.scriptVers=this.navyVers()[0],this.scriptTag=this.navyVers()[1],this.overlays=[],this.indicators=[],this.scriptVers===0&&console.warn(`${t}: There is no script version string`),this.scriptVers>this.version&&console.warn(`${t}: Script version > parser version`),this.scriptTag!==ws&&console.warn(`${t}: Script version should have 'lite' tag
Most likely are using the community version of NavyJS
with a script written for the PRO version.
If not the case just use 'lite' tag: ${gn}-lite`),this.overlayTags(),this.indicatorTags()}navyVers(){let e=(this.src.match(xs)||[])[0];if(e){let t=e.split("~");if(t.length<2)return[0];let o=parseFloat(t[1]),r=t[1].split("-")[1];return[o===o?o:0,r]}return[0]}overlayTags(){It.lastIndex=0;for(var e;e=It.exec(this.src);)this.overlays.push(new vs(e[1],e[2])),It.lastIndex-=10}indicatorTags(){_t.lastIndex=0;for(var e;e=_t.exec(this.src);)this.indicators.push(new bs(e[1],e[2])),_t.lastIndex-=12}}class _s{constructor(e,t){this.chart=t,this.tasks={},this.onevent=()=>{},this.start()}start(){this.worker&&this.worker.terminate(),this.worker=new Worker(new URL("/assets/worker-0fc67022.js",self.location),{type:"module"}),this.worker.onmessage=e=>this.onmessage(e)}startSocket(){}send(e,t){if(t){let o=t.map(r=>e.data[r]);this.worker.postMessage(e,o)}else this.worker.postMessage(e)}sendToNode(e,t){}onmessage(e){e.data.id in this.tasks?(this.tasks[e.data.id](e.data.data),delete this.tasks[e.data.id]):this.onevent(e)}async exec(e,t,o){return new Promise((r,i)=>{let s=A.uuid();this.send({type:e,id:s,data:t},o),this.tasks[s]=a=>{r(a)}})}just(e,t,o){let r=A.uuid();this.send({type:e,id:r,data:t},o)}async relay(e,t=!1){return new Promise((o,r)=>{this.send(e,e.txKeys),t||(this.tasks[e.id]=i=>{o(i)})})}stop(){this.worker&&this.worker.terminate()}}let At={};function As(n,e){return At[n]||(At[n]=new _s(n,e)),At[n]}const so={instance:As},Ss=Object.assign({"../scripts/Area.navy":Sr,"../scripts/ArrowTrades.navy":Tr,"../scripts/Band.navy":Mr,"../scripts/Candles.navy":Or,"../scripts/CandlesPlus.navy":Yr,"../scripts/Cloud.navy":Jr,"../scripts/Histogram.navy":Pr,"../scripts/PriceLabels.navy":Lr,"../scripts/Range.navy":Ur,"../scripts/Sparse.navy":jr,"../scripts/Spline.navy":Vr,"../scripts/Splines.navy":Gr,"../scripts/SuperBands.navy":Xr,"../scripts/Trades.navy":Kr,"../scripts/Volume.navy":Zr,"../scripts/VolumeDelta.navy":ti}),ks=Object.assign({"../scripts/tools/RangeTool.navy":oi}),Ts=Object.assign({"../scripts/indicators/ALMA.navy":ii,"../scripts/indicators/ATR.navy":li,"../scripts/indicators/ATRp.navy":ci,"../scripts/indicators/BB.navy":di,"../scripts/indicators/BBW.navy":fi,"../scripts/indicators/CCI.navy":gi,"../scripts/indicators/CMO.navy":yi,"../scripts/indicators/COG.navy":bi,"../scripts/indicators/DMI.navy":xi,"../scripts/indicators/EMA.navy":_i,"../scripts/indicators/HMA.navy":Si,"../scripts/indicators/Ichimoku.navy":Ti,"../scripts/indicators/KC.navy":Mi,"../scripts/indicators/KCW.navy":Oi,"../scripts/indicators/MACD.navy":Yi,"../scripts/indicators/MFI.navy":Ji,"../scripts/indicators/MOM.navy":Pi,"../scripts/indicators/ROC.navy":Li,"../scripts/indicators/RSI.navy":Ui,"../scripts/indicators/Ribbon.navy":ji,"../scripts/indicators/SAR.navy":Vi,"../scripts/indicators/SMA.navy":Gi,"../scripts/indicators/SWMA.navy":Xi,"../scripts/indicators/Stoch.navy":Ki,"../scripts/indicators/TSI.navy":Zi,"../scripts/indicators/VWMA.navy":ts,"../scripts/indicators/WilliamsR.navy":os});class $s{constructor(e){this.ww=so.instance(e)}async init(e){this.srcLib=Object.values(Ss).map(t=>t.default),this.srcLib.push(...Object.values(ks).map(t=>t.default)),this.srcLib.push(...Object.values(Ts).map(t=>t.default)),this.srcLib.push(...e),this.prefabs={},this.iScripts={},this.parse(),this.ww.exec("upload-scripts",{prefabs:Object.keys(this.prefabs).reduce((t,o)=>(t[o]={name:this.prefabs[o].name,author:this.prefabs[o].author,version:this.prefabs[o].version},t),{}),iScripts:this.iScripts})}parse(){this.prefabs={};for(var e of this.srcLib){let r=new Is(e);for(var t of r.overlays)this.prefabs[t.tagProps.name]={name:t.tagProps.name,author:t.tagProps.author,version:t.tagProps.version,ctx:t.tagProps.ctx||"Canvas",make:t.prefab};for(var o of r.indicators)this.iScripts[o.tagProps.name]={name:o.tagProps.name,author:o.tagProps.author,version:o.tagProps.version,code:{init:o.init,update:o.update,post:o.post}}}}}let St={};function Ms(n){return St[n]||(St[n]=new $s(n)),St[n]}const lo={instance:Ms};class Cs{constructor(e,t,o,r){this.ctx=o,this.core=e,this.style=r.src[6]||t,this.draw(r)}draw(e){const t=e.src[4]>=e.src[1],o=t?this.style.colorCandleUp:this.style.colorCandleDw,r=t?this.style.colorWickUp:this.style.colorWickDw;let i=Math.max(e.w,1),s=e.x-1;this.ctx.lineWidth=1,this.ctx.strokeStyle=r,this.ctx.beginPath(),this.ctx.moveTo(s,Math.floor(e.h)),this.ctx.lineTo(s,Math.floor(e.l)),this.ctx.stroke(),this.ctx.lineWidth=i,this.ctx.strokeStyle=o,this.ctx.beginPath(),this.ctx.moveTo(s,Math.floor(Math.min(e.o,e.c))),this.ctx.lineTo(s,Math.floor(Math.max(e.o,e.c))+(e.o===e.c?1:0)),this.ctx.stroke()}}function Os(n,e){let t=e.x-1;n.moveTo(t,Math.floor(Math.min(e.o-1,e.c-1))),n.lineTo(t,Math.floor(Math.max(e.o,e.c)))}function Es(n,e){let t=e.x-1;n.moveTo(t,Math.floor(e.h)),n.lineTo(t,Math.floor(e.l))}const Ys=ee.HPX;function Bs(n,e,t){let o=t.height,r=Math.max(1,e.x2-e.x1+Ys),i=e.h,s=(e.x2+e.x1)*.5;n.lineWidth=r,n.moveTo(s,o-i),n.lineTo(s,o)}const Js=ee.HPX;class Rs{constructor(e,t,o,r){this.ctx=o,this.style=r.src[6]||t,this.layout=e.layout,this.draw(r)}draw(e){let t=this.layout.height,o=e.x2-e.x1,r=Math.floor(e.h);this.ctx.fillStyle=e.green?this.style.colorVolUp:this.style.colorVolDw,this.ctx.fillRect(Math.floor(e.x1),Math.floor(t-r+Js),Math.floor(o),Math.floor(r+1))}}const Ps=ee.HPX;function Ds(n,e=!0,t=!0,o=5,r,i){let s=n.props.config,a=n.props.interval,c=n.data,l=n.layout.ti2x,p=n.layout,f=n.view,h=[],g=[],y=[],v=[],u=[],d=[];if(t)var I=i??s.VOLSCALE,x=Ls(n.dataSubset,o),M=I*p.height/x;var J,R,O,F=void 0;let{A:N,B:_,pxStep:B}=p,m=B*s.CANDLEW,b=B>5?1:0;for(var T=f.i1,k=f.i2;T<=k;T++){let E=c[T],w=r?E[r]>0:E[4]>=E[1];if(O=l(E[0],T)+1,c[T-1]&&E[0]-c[T-1][0]>a&&(F=null),e){let S={x:O,w:m,o:Math.floor(E[1]*N+_),h:Math.floor(E[2]*N+_),l:Math.floor(E[3]*N+_),c:Math.floor(E[4]*N+_),green:w,src:E};w?(h.push(S),y.push(S)):(g.push(S),v.push(S))}if(t){J=F||Math.floor(O-B*.5),R=Math.floor(O+B*.5)+Ps;let S={x1:J,x2:R,h:E[o]*M,green:w,src:E};w?u.push(S):d.push(S)}F=R+b}return{upBodies:h,upWicks:y,dwBodies:g,dwWicks:v,upVolbars:u,dwVolbars:d,maxVolume:x,volScale:M}}function Ls(n,e){let t=0;for(var o=0;o<n.length;o++){let r=n[o][e];r>t&&(t=r)}return t}function ao(n,e,t,o,r){let i=0,s=[],a=0,c=1/r,l=Math.max(t-r,0);for(var p=l;p<=o;p++)i+=n[p][e],a++,a>r&&(i-=n[p-r][e],a--),a===r&&s.push([n[p][0],i*c]);return s}function Ns(n,e=[]){return e[4]>=e[1]?n.colorBodyUp:n.colorBodyDw}function Us(n,e){let t=n.split("px");return e+"px"+t[1]}function zs(n,e,t,o,r=5){let i=e.view.i1,s=e.view.i2,a=t.avgVolumeSMA,c=ao(e.data,r,i,s,a),l=e.layout;o.maxVolume;let p=o.volScale,f=l.height;if(e.props.config.VOLSCALE*.5*f,n.lineJoin="round",n.lineWidth=.75,n.strokeStyle=t.colorAvgVol,n.beginPath(),e.layout.indexBased)return;let h=e.data.length-c.length;for(var g=0,y=c.length;g<y;g++){let v=l.ti2x(c[g][0],g+h),u=f-c[g][1]*p;n.lineTo(v,u)}n.stroke()}function js(n,e,t,o,r,i,s=!0,a){if(typeof i>"u"&&(i=5),typeof i=="number")i={tl:i,tr:i,br:i,bl:i};else{var c={tl:0,tr:0,br:0,bl:0};for(var l in c)i[l]=i[l]||c[l]}n.beginPath(),n.moveTo(e+i.tl,t),n.lineTo(e+o-i.tr,t),n.quadraticCurveTo(e+o,t,e+o,t+i.tr),n.lineTo(e+o,t+r-i.br),n.quadraticCurveTo(e+o,t+r,e+o-i.br,t+r),n.lineTo(e+i.bl,t+r),n.quadraticCurveTo(e,t+r,e,t+r-i.bl),n.lineTo(e,t+i.tl),n.quadraticCurveTo(e,t,e+i.tl,t),n.closePath(),s&&n.fill(),a&&n.stroke()}function Fs(n,e,t,o,r,i,s=!0){const c=o-e,l=r-t,p=Math.atan2(l,c);n.beginPath(),n.moveTo(e,t),n.lineTo(o,r),s&&(n.moveTo(o,r),n.lineTo(o-7*Math.cos(p-Math.PI/5),r-7*Math.sin(p-Math.PI/5)),n.moveTo(o,r),n.lineTo(o-7*Math.cos(p+Math.PI/5),r-7*Math.sin(p+Math.PI/5))),n.strokeStyle=i,n.lineWidth=1,n.stroke()}const Vs=A.formatCash;class Hs{constructor(e,t,o,r){let i=_e.instance(r.id),s=Ae.instance(r.id),a=re.instance(r.id),c=zt.instance(r.id);this.ovSrc=t,this.overlay=null,this.id=e,this.handlers={},this.$core={hub:i,meta:s,scan:c},this.update(t,o,r),this.$props=t.props,this.$events=a,this.lib={Candle:Cs,Volbar:Rs,layoutCnv:Ds,formatCash:Vs,candleBody:Os,candleWick:Es,volumeBar:Bs,fastSma:ao,avgVolume:zs,candleColor:Ns,roundRect:js,rescaleFont:Us,drawArrow:Fs,Utils:A}}prop(e,t={}){e in this.$props||(this.$props[e]=t.def)}update(e,t,o){if(!t)return;let r=this.$core;r.layout=this.buildLayout(t,o.range,e),r.dataSubset=e.dataSubset,r.data=e.data,r.view=e.dataView,r.id=e.id,r.paneId=r.layout.id,r.uuid=e.uuid,r.range=o.range,r.colors=o.colors,r.cursor=o.cursor,r.src=e,r.props=o,r.indexOffset=e.indexOffset}buildLayout(e,t,o){let r={};this.scaleId=this.getScaleId(e);let i=e.scales[this.scaleId];return to(Object.assign(r,e,i),t,o)}getScaleId(e){let t=e.scales;for(var o in t)if(t[o].scaleSpecs.ovIdxs.includes(this.id))return o}watchProp(e,t){this.handlers[e]=this.handlers[e]||[],this.handlers[e].push(t);let o=this.$props[e];delete this.$props[e],Object.defineProperty(this.$props,e,{get:()=>o,set:r=>{let i=o;o=r;for(let s of this.handlers[e])s(r,i)},enumerable:!0,configurable:!0})}destroy(){for(let e in this.handlers){let t=this.$props[e];delete this.$props[e],this.$props[e]=t}this.handlers={}}}class ct{constructor(e,t,o){this.id=e,this.nvId=o,this.name=t,this.zIndex=0,this.overlay=null,this.ovSrc=null,this.env=null,this.ctxType=null,this.display=!0,this.opacity=void 0}update(){var e;this.ovSrc&&(this.display=(e=this.ovSrc.settings.display)!=null?e:!0)}}class Gs{constructor(e){this.t0=this.t=A.now(),this.id=setInterval(()=>{A.now()-this.t>100||(A.now()-this.t0>1200&&this.stop(),this.id&&e(this),this.t=A.now())},16)}stop(){clearInterval(this.id),this.id=null}}class Ws{async setup(e){this.MIN_ZOOM=e.props.config.MIN_ZOOM,this.MAX_ZOOM=e.props.config.MAX_ZOOM,A.isMobile&&(this.MIN_ZOOM*=.5),this.canvas=e.canvas,this.ctx=e.ctx,this.props=e.props,this.layout=e.layout,this.rrId=e.rrUpdId,this.gridUpdId=e.gridUpdId,this.gridId=e.id,this.cursor={},this.oldMeta={},this.range=this.props.range,this.interval=this.props.interval,this.offsetX=0,this.offsetY=0,this.deltas=0,this.wmode=this.props.config.SCROLL_WHEEL,this.hub=_e.instance(this.props.id),this.meta=Ae.instance(this.props.id),this.events=re.instance(this.props.id),await this.listeners(),this.mouseEvents("addEventListener")}mouseEvents(e){["mousemove","mouseout","mouseup","mousedown","click"].forEach(t=>{e==="addEventListener"&&(this["_"+t]=this[t].bind(this)),this.canvas[e](t,this["_"+t])})}async listeners(){const e=await Tt(()=>import("./hamster-43898ed1-b3ee6699.js"),[]).then(s=>s.h),t=await Tt(()=>import("./hammer-f752c1fe-b75ce407.js"),[]).then(s=>s.h);this.hm=e.default(this.canvas),this.hm.wheel((s,a)=>this.mousezoom(-a*50,s));let o=this.mc=new t.Manager(this.canvas),r=A.isMobile?10:0;o.add(new t.Pan({threshold:r})),o.add(new t.Tap),o.add(new t.Pinch({threshold:0})),o.get("pinch").set({enable:!0}),A.isMobile&&o.add(new t.Press),o.on("panstart",s=>{if(this.cursor.scroll_lock)return;if(this.cursor.mode==="aim")return this.emitCursorCoord(s);let a=this.layout.scaleIndex,c=this.meta.getYtransform(this.gridId,a);this.drug={x:s.center.x+this.offsetX,y:s.center.y+this.offsetY,r:this.range.slice(),t:this.range[1]-this.range[0],o:c&&c.offset||0,y_r:c&&c.range?c.range.slice():void 0,B:this.layout.B,t0:A.now()},this.events.emit("cursor-locked",!0),this.events.emit("cursor-changed",{gridId:this.gridId,x:s.center.x+this.offsetX,y:s.center.y+this.offsetY})}),o.on("panmove",s=>{A.isMobile&&(this.calcOffset(),this.propagate("mousemove",this.touch2mouse(s))),this.drug?this.mousedrag(this.drug.x+s.deltaX,this.drug.y+s.deltaY):this.cursor.mode==="aim"&&this.emitCursorCoord(s)}),o.on("panend",s=>{A.isMobile&&this.drug&&this.panFade(s),this.drug=null,this.events.emit("cursor-locked",!1)}),o.on("tap",s=>{A.isMobile&&(this.simMousedown(s),this.fade&&this.fade.stop(),this.events.emit("cursor-changed",{}),this.events.emit("cursor-changed",{mode:"explore"}),this.events.emitSpec(this.rrId,"update-rr"))}),o.on("pinchstart",()=>{this.drug=null,this.pinch={t:this.range[1]-this.range[0],r:this.range.slice()}}),o.on("pinchend",()=>{this.pinch=null}),o.on("pinch",s=>{this.pinch&&this.pinchZoom(s.scale)}),o.on("press",s=>{A.isMobile&&(this.fade&&this.fade.stop(),this.calcOffset(),this.emitCursorCoord(s,{mode:"aim"}),setTimeout(()=>this.events.emitSpec(this.rrId,"update-rr")),this.simMousedown(s))});let i=this.canvas.addEventListener;i("gesturestart",this.gesturestart),i("gesturechange",this.gesturechange),i("gestureend",this.gestureend)}gesturestart(e){e.preventDefault()}gesturechange(e){e.preventDefault()}gestureend(e){e.preventDefault()}mousemove(e){A.isMobile||(this.events.emit("cursor-changed",{visible:!0,gridId:this.gridId,x:e.layerX,y:e.layerY-1}),this.calcOffset(),this.propagate("mousemove",e))}mouseout(e){A.isMobile||(this.events.emit("cursor-changed",{visible:!1}),this.propagate("mouseout",e))}mouseup(e){this.drug=null,this.events.emit("cursor-locked",!1),this.propagate("mouseup",e)}mousedown(e){A.isMobile||(this.events.emit("cursor-locked",!0),this.propagate("mousedown",e),!e.defaultPrevented&&this.events.emit("grid-mousedown",[this.gridId,e]))}simMousedown(e){e.srcEvent.defaultPrevented||(this.events.emit("grid-mousedown",[this.gridId,e]),this.propagate("mousemove",this.touch2mouse(e)),this.events.emitSpec(this.rrId,"update-rr"),this.propagate("mousedown",this.touch2mouse(e)),setTimeout(()=>{this.propagate("click",this.touch2mouse(e))}))}touch2mouse(e){return this.calcOffset(),{original:e.srcEvent,layerX:e.center.x+this.offsetX,layerY:e.center.y+this.offsetY,preventDefault:function(){this.original.preventDefault()}}}click(e){this.propagate("click",e)}emitCursorCoord(e,t={}){this.events.emit("cursor-changed",Object.assign({gridId:this.gridId,x:e.center.x+this.offsetX,y:e.center.y+this.offsetY},t))}panFade(e){let t=A.now()-this.drug.t0,r=42*(this.range[1]-this.drug.r[1])/t,i=Math.abs(r*.01);t>500||(this.fade&&this.fade.stop(),this.fade=new Gs(s=>{r*=.85,Math.abs(r)<i&&s.stop(),this.range[0]+=r,this.range[1]+=r,this.changeRange()}))}calcOffset(){let e=this.canvas.getBoundingClientRect();this.offsetX=-e.x,this.offsetY=-e.y}mousezoom(e,t){var o;if(this.meta.scrollLock)return;if(this.wmode!=="pass"){if(this.wmode==="click"&&!this.oldMeta.activated)return;t.originalEvent.preventDefault(),t.preventDefault()}t.deltaX=t.deltaX||A.getDeltaX(t),t.deltaY=t.deltaY||A.getDeltaY(t),Math.abs(t.deltaX)>0&&(this.trackpad=!0,Math.abs(t.deltaX)>=Math.abs(t.deltaY)&&(e*=.1),this.trackpadScroll(t)),this.trackpad&&(e*=.032),e=A.smartWheel(e);const r=(o=window.devicePixelRatio)!=null?o:1;let i=this.hub.mainOv.dataSubset;if(e<0&&i.length<=this.MIN_ZOOM||e>0&&i.length>this.MAX_ZOOM)return;let s=this.interval/1e3,a=e*s*i.length,c=this.props.config.ZOOM_MODE==="tl";if(t.originalEvent.ctrlKey||c){let p=t.originalEvent.offsetX/(this.canvas.width/r-1)*a,f=a-p;this.range[0]-=p,this.range[1]+=f}else this.range[0]-=a;if(c){let p=t.originalEvent.offsetY/(this.canvas.height/r-1)*2,f=2-p,h=a/(this.range[1]-this.range[0]);this.events.emit("rezoom-range",{gridId:this.gridId,z:h,diff1:p,diff2:f})}this.changeRange()}mousedrag(e,t){if(this.meta.scrollLock)return;let o=this.drug.t*(this.drug.x-e)/this.layout.width,r=this.layout.$hi-this.layout.$lo;r*=(this.drug.y-t)/this.layout.height;let i=this.drug.o+r,s=this.layout.settings.logScale;if(s&&this.drug.y_r){let p=this.drug.y-t;var a=this.drug.y_r.slice();a[0]=H.exp((0-this.drug.B+p)/this.layout.A),a[1]=H.exp((this.layout.height-this.drug.B+p)/this.layout.A)}let c=this.layout.scaleIndex,l=this.meta.getYtransform(this.gridId,c);this.drug.y_r&&l&&!l.auto&&this.events.emit("sidebar-transform",{gridId:this.gridId,scaleId:c,range:s?a||this.drug.y_r:[this.drug.y_r[0]-i,this.drug.y_r[1]-i]}),this.range[0]=this.drug.r[0]+o,this.range[1]=this.drug.r[1]+o,this.changeRange()}pinchZoom(e){if(this.meta.scrollLock)return;let t=this.hub.mainOv.dataSubset;if(e>1&&t.length<=this.MIN_ZOOM||e<1&&t.length>this.MAX_ZOOM)return;let o=this.pinch.t,r=o*1/e;this.range[0]=this.pinch.r[0]-(r-o)*.5,this.range[1]=this.pinch.r[1]+(r-o)*.5,this.changeRange()}trackpadScroll(e){if(this.meta.scrollLock)return;let t=this.range[1]-this.range[0];this.range[0]+=e.deltaX*t*.011,this.range[1]+=e.deltaX*t*.011,this.changeRange()}changeRange(){let e=this.hub.mainOv.data;if(!this.range.length||e.length<2)return;let t=e.length-1,o=this.range,r=this.layout;o[0]=A.clamp(o[0],-1/0,r.ti(e[t][0],t)-this.interval*5.5),o[1]=A.clamp(o[1],r.ti(e[0][0],0)+this.interval*5.5,1/0),this.events.emit("range-changed",o)}propagate(e,t){this.events.emitSpec(this.gridUpdId,"propagate",{name:e,event:t})}destroy(){let e=this.canvas.removeEventListener;e("gesturestart",this.gesturestart),e("gesturechange",this.gesturechange),e("gestureend",this.gestureend),this.mc&&this.mc.destroy(),this.hm&&this.hm.unwheel(),this.mouseEvents("removeEventListener")}}class Xs{constructor(e,t){this._keydown=this.keydown.bind(this),this._keyup=this.keyup.bind(this),this._keypress=this.keypress.bind(this),window.addEventListener("keydown",this._keydown),window.addEventListener("keyup",this._keyup),window.addEventListener("keypress",this._keypress),this.events=t,this.updId=e}off(){window.removeEventListener("keydown",this._keydown),window.removeEventListener("keyup",this._keyup),window.removeEventListener("keypress",this._keypress)}keydown(e){this.events.emitSpec(this.updId,"propagate",{name:"keydown",event:e})}keyup(e){this.events.emitSpec(this.updId,"propagate",{name:"keyup",event:e})}keypress(e){this.events.emitSpec(this.updId,"propagate",{name:"keypress",event:e})}}const kt=ee.HPX;class qs extends ct{constructor(e){super(e,"__$Crosshair__"),this.id=e,this.zIndex=1e6,this.ctxType="Canvas",this.overlay={draw:this.draw.bind(this),destroy:this.destroy.bind(this)},this.env={update:this.envEpdate.bind(this),destroy:()=>{}}}draw(e){if(!this.layout)return;const t=this.props.cursor;t.visible&&(e.save(),e.strokeStyle=this.props.colors.cross,e.beginPath(),e.setLineDash([5]),t.gridId===this.layout.id&&(e.moveTo(0,t.y+kt),e.lineTo(this.layout.width+kt,t.y+kt)),e.moveTo(t.x,0),e.lineTo(t.x,this.layout.height),e.stroke(),e.restore())}envEpdate(e,t,o){this.ovSrc=e,this.layout=t,this.props=o}onCursor(e){this.props&&(this.props.cursor=e)}destroy(){}}const Qe=ee.HPX;class Ks extends ct{constructor(e){super(e,"__$Grid__"),this.id=e,this.zIndex=-1e6,this.ctxType="Canvas",this.overlay={draw:this.draw.bind(this),destroy:this.destroy.bind(this)},this.env={update:this.envEpdate.bind(this),destroy:()=>{}}}draw(e){let t=this.layout;if(!t)return;e.strokeStyle=this.props.colors.grid,e.beginPath();const o=t.height;for(var[r,i]of t.xs)e.moveTo(r+Qe,0),e.lineTo(r+Qe,o);for(var[s,a]of t.ys)e.moveTo(0,s+Qe),e.lineTo(t.width,s+Qe);e.stroke()}envEpdate(e,t,o){this.ovSrc=e,this.layout=t,this.props=o}destroy(){}}const me=ee.HPX;function Qs(n,e,t,o,r){var i=t.ys;r.font=n.config.FONT;var{x:s,y:a,w:c,h:l}=co(n,e,o,r);r.fillStyle=n.colors.text,r.beginPath();for(var p of i){if(p[0]>e.height)continue;var f=o==="left"?c+me:s+me,h=o==="left"?f-4.5:f+4.5;r.moveTo(f,p[0]+me),r.lineTo(h,p[0]+me);var g=o==="left"?-10:10;r.textAlign=o==="left"?"end":"start";let y=t.prec;r.fillText(p[1].toFixed(y),f+g,p[0]+4)}r.stroke()}function co(n,e,t,o){var r=t==="right"?1:0,i=e.sbMax[r],s,a,c,l;switch(t){case"left":s=0,a=0,c=Math.floor(i),l=e.height,o.clearRect(s,a,c,l),o.strokeStyle=n.colors.scale,o.beginPath(),o.moveTo(s+me+c,0),o.lineTo(s+me+c,l),o.stroke();break;case"right":s=0,a=0,c=Math.floor(i),l=e.height,o.clearRect(s,a,c,l),o.strokeStyle=n.colors.scale,o.beginPath(),o.moveTo(s-me,0),o.lineTo(s-me,l),o.stroke();break}return{x:s,y:a,w:c,h:l}}function Zs(n,e,t,o,r){const i=n.config.PANHEIGHT;let a=(n.cursor.scales[t.scaleSpecs.id]||0).toFixed(t.prec);r.fillStyle=n.colors.panel;var c=o==="right"?1:0;let l=e.sbMax[c]-5,p=c?1:4,f=n.cursor.y-i*.5+me,h=c?7:l-3;po(r,p,f,l,i,3,c),r.fillStyle=n.colors.textHL,r.textAlign=c?"left":"right",r.fillText(a,h,f+15)}function el(n,e,t,o,r,i){const s=Math.floor(n.config.PANHEIGHT*.8);let c=i.value.toFixed(t.prec);r.fillStyle=i.color;var l=o==="right"?1:0;let p=e.sbMax[l]-5,f=l?1:4,h=i.y-s*.5+me,g=l?7:p-3;po(r,f,h,p,s,3,l),r.fillStyle=n.colors.back,r.textAlign=l?"left":"right",r.fillText(c,g,h+s-4)}function po(n,e,t,o,r,i,s){o<2*i&&(i=o/2),r<2*i&&(i=r/2),n.beginPath(),n.moveTo(e+i,t),n.arcTo(e+o,t,e+o,t+r,i*s),n.arcTo(e+o,t+r,e,t+r,i*s),n.arcTo(e,t+r,e,t,i*(1-s)),n.arcTo(e,t,e+o,t,i*(1-s)),n.closePath(),n.fill()}function uo(n,e,t){t.strokeStyle=n.colors.scale,t.beginPath(),t.moveTo(0,.5),t.lineTo(e.width,.5),t.stroke()}function tl(n,e,t,o){var r=t==="right"?1:0,i=e.sbMax[r];o.font=n.config.FONT,co(n,e,t,o),e.id&&uo(n,e,o);let s=Math.floor(i*.5),a=Math.floor(e.height*.5);o.fillStyle=n.colors.text,o.textAlign="center",o.fillText("Error",s,a)}const Fe={body:Qs,panel:Zs,upperBorder:uo,error:tl,tracker:el};function nl(n,e,t){e.strokeStyle=t.color,e.setLineDash([1,2]),e.beginPath(),e.moveTo(0,t.y),e.lineTo(n.width,t.y),e.stroke(),e.setLineDash([])}class ol extends ct{constructor(e,t,o){super(e,"__$Trackers__"),this.id=e,this.zIndex=5e5,this.ctxType="Canvas",this.hub=_e.instance(t.id),this.meta=Ae.instance(t.id),this.gridId=o,this.props=t,this.overlay={draw:this.draw.bind(this),destroy:this.destroy.bind(this),drawSidebar:this.drawSidebar.bind(this)},this.env={update:this.envEpdate.bind(this),destroy:()=>{}}}draw(e){if(!this.layout)return;let t=this.meta.valueTrackers[this.gridId]||[];this.trackers=[];for(var o=0;o<t.length;o++){let r=t[o];if(!r)continue;let i=this.hub.ovData(this.gridId,o)||[],s=i[i.length-1]||[],a=r(s);a.ovId=o,!(!a.show||a.value===void 0)&&(a.y=this.layout.value2y(a.value),a.color=a.color||this.props.colors.scale,a.line&&nl(this.layout,e,a),this.trackers.push(a))}}drawSidebar(e,t,o){if(this.layout)for(var r of this.trackers||[])this.getScaleId(r.ovId)===o.scaleSpecs.id&&Fe.tracker(this.props,this.layout,o,t,e,r)}envEpdate(e,t,o){this.ovSrc=e,this.layout=t,this.props=o,this.scaleId=this.getScaleId()}getScaleId(e){let t=this.layout.scales;for(var o in t)if(t[o].scaleSpecs.ovIdxs.includes(e))return o}destroy(){}}function rl(n,e,t){let o=document.getElementById(n),r=window.devicePixelRatio||1;o.style.width=`${e}px`,o.style.height=`${t}px`,r<1&&(r=1);var i=o.getBoundingClientRect();o.width=i.width*r,o.height=i.height*r;let s=o.getContext("2d",{});s.scale(r,r),s.measureTextOrg||(s.measureTextOrg=s.measureText);let a=n.split("-").shift();return s.measureText=c=>A.measureText(s,c,a),[o,s]}function il(n,e,t,o){let r=window.devicePixelRatio||1;n.style.width=`${t}px`,n.style.height=`${o}px`,r<1&&(r=1);var i=n.getBoundingClientRect();n.width=i.width*r,n.height=i.height*r,e.scale(r,r)}const Ne={setup:rl,resize:il};function sl(n){let e,t;return{c(){e=V("div"),t=V("canvas"),$(t,"id",n[2]),$(e,"id",n[1]),$(e,"style",n[0]),$(e,"class","nvjs-canvas-rendrer svelte-8n0n7w")},m(o,r){j(o,e,r),G(e,t)},p(o,[r]){r&1&&$(e,"style",o[0])},i:Z,o:Z,d(o){o&&z(e)}}}function ll(n,e,t){let o,r,i,{id:s}=e,{props:a={}}=e,{rr:c={}}=e,{layout:l={}}=e,p=re.instance(a.id),f=`rr-${s}-${c.id}`,h=`grid-${s}`,g=`${a.id}-rr-${s}-${c.id}`,y=`${a.id}-canvas-${s}-${c.id}`;p.on(`${f}:update-rr`,R),p.on(`${f}:run-rr-task`,O);let v,u,d;Be(()=>{J()}),Me(()=>{p.off(`${f}`),d&&d.destroy()});function I(_){d=_,d.setup({id:s,canvas:v,ctx:u,props:a,layout:l,rrUpdId:f,gridUpdId:h})}function x(){d&&(d.destroy(),d=null)}function M(){return d}function J(){[v,u]=Ne.setup(y,l.width,l.height),R()}function R(_=l){t(3,l=_),!(!u||!l)&&(u.clearRect(0,0,v.width,v.height),c.layers.forEach(B=>{if(!B.display)return;u.save();let m=B.overlay;B.opacity&&(u.globalAlpha=B.opacity);try{m.draw(u)}catch(b){console.log(`Layer ${s}.${B.id}`,b)}u.globalAlpha=1,u.restore()}),s>0&&F())}function O(_){_.handler(v,u,d)}function F(){u.strokeStyle=a.colors.scale,u.beginPath(),u.moveTo(0,.5),u.lineTo(l.width,.5),u.stroke()}function N(){v&&(Ne.resize(v,u,l.width,l.height),R())}return n.$$set=_=>{"id"in _&&t(4,s=_.id),"props"in _&&t(5,a=_.props),"rr"in _&&t(6,c=_.rr),"layout"in _&&t(3,l=_.layout)},n.$$.update=()=>{n.$$.dirty&8&&t(0,o=`
    left: ${l.sbMax[0]}px;
    top: ${l.offset||0}px;
    position: absolute;
    height: ${l.height}px;
}`),n.$$.dirty&8&&t(11,r=l.width),n.$$.dirty&8&&t(10,i=l.height),n.$$.dirty&3072&&N()},[o,g,y,l,s,a,c,I,x,M,i,r]}class al extends fe{constructor(e){super(),ue(this,e,ll,sl,ae,{id:4,props:5,rr:6,layout:3,attach:7,detach:8,getInput:9})}get attach(){return this.$$.ctx[7]}get detach(){return this.$$.ctx[8]}get getInput(){return this.$$.ctx[9]}}function mn(n,e,t){const o=n.slice();return o[23]=e[t],o[24]=e,o[25]=t,o}function yn(n){let e,t=n[24],o=n[25],r;const i=()=>n[7](e,t,o),s=()=>n[7](null,t,o);let a={id:n[1],layout:n[0],props:n[2],rr:n[23]};return e=new al({props:a}),i(),{c(){le(e.$$.fragment)},m(c,l){ne(e,c,l),r=!0},p(c,l){(t!==c[24]||o!==c[25])&&(s(),t=c[24],o=c[25],i());const p={};l&2&&(p.id=c[1]),l&1&&(p.layout=c[0]),l&4&&(p.props=c[2]),l&8&&(p.rr=c[23]),e.$set(p)},i(c){r||(Y(e.$$.fragment,c),r=!0)},o(c){D(e.$$.fragment,c),r=!1},d(c){s(),oe(e,c)}}}function vn(n){let e,t,o=n[23].ctxType==="Canvas"&&yn(n);return{c(){o&&o.c(),e=ge()},m(r,i){o&&o.m(r,i),j(r,e,i),t=!0},p(r,i){r[23].ctxType==="Canvas"?o?(o.p(r,i),i&8&&Y(o,1)):(o=yn(r),o.c(),Y(o,1),o.m(e.parentNode,e)):o&&(pe(),D(o,1,1,()=>{o=null}),de())},i(r){t||(Y(o),t=!0)},o(r){D(o),t=!1},d(r){o&&o.d(r),r&&z(e)}}}function cl(n){let e,t,o=n[3],r=[];for(let s=0;s<o.length;s+=1)r[s]=vn(mn(n,o,s));const i=s=>D(r[s],1,1,()=>{r[s]=null});return{c(){e=V("div");for(let s=0;s<r.length;s+=1)r[s].c();$(e,"class","nvjs-grid svelte-1ctdodr"),$(e,"style",n[4])},m(s,a){j(s,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(s,[a]){if(a&15){o=s[3];let c;for(c=0;c<o.length;c+=1){const l=mn(s,o,c);r[c]?(r[c].p(l,a),Y(r[c],1)):(r[c]=vn(l),r[c].c(),Y(r[c],1),r[c].m(e,null))}for(pe(),c=o.length;c<r.length;c+=1)i(c);de()}(!t||a&16)&&$(e,"style",s[4])},i(s){if(!t){for(let a=0;a<o.length;a+=1)Y(r[a]);t=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)D(r[a]);t=!1},d(s){s&&z(e),Ue(r,s)}}}function pl(n,e,t){let o,{id:r}=e,{props:i}=e,{main:s}=e,{layout:a}=e;function c(){return g}let l=_e.instance(i.id),p=Ae.instance(i.id),f=re.instance(i.id),h=lo.instance(i.id),g=[],y=[],v=null,u=null;f.on(`grid-${r}:update-grid`,R),f.on(`grid-${r}:remake-grid`,d),f.on(`grid-${r}:propagate`,O),f.on(`grid-${r}:run-grid-task`,F),Be(()=>{d(),u=new Xs(`grid-${r}`,f)}),Me(()=>{f.off(`grid-${r}`),u.off()});function d(_){if(!l.panes()[r])return;x(),g=M(),t(3,y=J());let B=y[y.length-1];B&&setTimeout(()=>{B.ref&&(I(),B.ref.attach(v=new Ws))})}function I(){for(var _ of y)_.ref.detach()}function x(){for(var _ of g)_.overlay.destroy(),_.env.destroy()}function M(){let _=l.panes()[r].overlays||[],B=[];for(var m=0;m<_.length;m++){let b=_[m],T=h.prefabs[b.type];if(!T)continue;let k=new ct(m,b.name,i.id),E=b.settings.zIndex;k.zIndex=E??(b.main?0:-1);let w=new Hs(m,b,a,i);k.overlay=T.make(w),k.env=w,k.ovSrc=b,k.ctxType=T.ctx,w.overlay=k.overlay,p.exctractFrom(k.overlay),B.push(k),k.overlay.init()}return B.push(new qs(m++)),B.push(new Ks(m++)),B.push(new ol(m++,i,r)),B.sort((b,T)=>b.zIndex-T.zIndex),p.finish(),B}function J(){let _=[],B=null;for(var m of g){if(m.ctxType!==B){var b={ctxType:m.ctxType,layers:[],id:_.length,ref:null};_.push(b),B=m.ctxType}b.layers.push(m)}return _}function R(_=a){t(0,a=_),v&&(v.layout=a);for(var B of g)B.env.update(B.ovSrc,a,i),B.update();for(var m of y)f.emitSpec(`rr-${r}-${m.id}`,"update-rr",a)}function O(_){let{name:B,event:m}=_;for(var b of g)b.overlay[B]&&b.overlay[B](m)}function F(_){_.handler(g,y,{update:R})}function N(_,B,m){ye[_?"unshift":"push"](()=>{B[m].ref=_,t(3,y)})}return n.$$set=_=>{"id"in _&&t(1,r=_.id),"props"in _&&t(2,i=_.props),"main"in _&&t(5,s=_.main),"layout"in _&&t(0,a=_.layout)},n.$$.update=()=>{n.$$.dirty&5&&t(4,o=`
    width: ${a.width}px;
    height: ${a.height}px;
    background: ${i.colors.back};
    margin-left: ${a.sbMax[0]}px;
`)},[a,r,i,y,o,s,c,N]}class dl extends fe{constructor(e){super(),ue(this,e,pl,cl,ae,{id:1,props:2,main:5,layout:0,getLayers:6})}get getLayers(){return this.$$.ctx[6]}}function bn(n,{delay:e=0,duration:t=400,easing:o=jn}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:o,css:i=>`opacity: ${i*r}`}}function ul(n){We(n,"svelte-16w6gr6",".scale-selector.svelte-16w6gr6{position:absolute;bottom:5px;display:grid;justify-content:center;align-content:center}.scale-button.svelte-16w6gr6{border-radius:3px;text-align:center;user-select:none;margin:auto;margin-top:1px}.scale-button.svelte-16w6gr6:hover{filter:brightness(1.2)}")}function wn(n,e,t){const o=n.slice();o[13]=e[t],o[15]=t;const r=o[13].scaleSpecs.id;return o[1]=r,o}function xn(n){let e,t=n[1]+"",o,r,i,s,a;function c(){return n[10](n[1])}return{c(){e=V("div"),o=Ye(t),r=ce(),$(e,"class","scale-button svelte-16w6gr6"),$(e,"style",i=n[2](n[1]))},m(l,p){j(l,e,p),G(e,o),G(e,r),s||(a=xe(e,"click",Wn(c)),s=!0)},p(l,p){n=l,p&1&&t!==(t=n[1]+"")&&st(o,t),p&5&&i!==(i=n[2](n[1]))&&$(e,"style",i)},d(l){l&&z(e),s=!1,a()}}}function fl(n){let e,t,o,r=n[0],i=[];for(let s=0;s<r.length;s+=1)i[s]=xn(wn(n,r,s));return{c(){e=V("div");for(let s=0;s<i.length;s+=1)i[s].c();$(e,"class","scale-selector svelte-16w6gr6"),$(e,"id",n[4]),$(e,"style",n[3])},m(s,a){j(s,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);o=!0},p(s,[a]){if(a&37){r=s[0];let c;for(c=0;c<r.length;c+=1){const l=wn(s,r,c);i[c]?i[c].p(l,a):(i[c]=xn(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}(!o||a&8)&&$(e,"style",s[3])},i(s){o||(Ge(()=>{o&&(t||(t=en(e,bn,{duration:150},!0)),t.run(1))}),o=!0)},o(s){t||(t=en(e,bn,{duration:150},!1)),t.run(0),o=!1},d(s){s&&z(e),Ue(i,s),s&&t&&t.end()}}}function hl(n,e,t){let o,r,i,{id:s}=e,{props:a}=e,{layout:c}=e,{scales:l}=e,{side:p}=e,f=re.instance(a.id),h=p==="right"?1:0,g=`${a.id}-ss-${s}-${p}`;function y(u){l[u];let d=c.settings.scaleSideIdxs;d[h]=u,f.emitSpec("hub","set-scale-index",{paneId:s,index:u,sideIdxs:d})}const v=u=>y(u);return n.$$set=u=>{"id"in u&&t(1,s=u.id),"props"in u&&t(6,a=u.props),"layout"in u&&t(7,c=u.layout),"scales"in u&&t(0,l=u.scales),"side"in u&&t(8,p=u.side)},n.$$.update=()=>{n.$$.dirty&129&&t(9,o=function(){let d={},I=c.sbMax[h];switch(l.length){case 2:case 4:default:d.ssw=46,d.ssm=(I-d.ssw)/2,d.bw=18,d.bh=18,d.tmp="50% 50%";break;case 3:d.ssw=54,d.ssm=(I-d.ssw)/3,d.bw=15,d.bh=15,d.tmp="33% 33% 33%";break}return d}()),n.$$.dirty&576&&t(3,r=`
    grid-template-columns: ${o.tmp};
    font: ${a.config.FONT};
    width: ${o.ssw}px;
    margin-left: ${o.ssm}px;
`),n.$$.dirty&704&&t(2,i=u=>{let I=u===c.settings.scaleSideIdxs[h]?a.colors.text:a.colors.scale;return`
    background: ${a.colors.back};
    line-height: ${o.bh}px;
    width: ${o.bw}px;
    height: ${o.bh}px;
    box-shadow: 0 0 0 1px ${a.colors.back};
    border: 1px solid ${I};
    color: ${I};
`})},[l,s,i,r,g,y,a,c,p,o,v]}class gl extends fe{constructor(e){super(),ue(this,e,hl,fl,ae,{id:1,props:6,layout:7,scales:0,side:8},ul)}}function In(n){let e,t;return e=new gl({props:{id:n[1],props:n[2],layout:n[0],scales:n[4],side:n[3]}}),{c(){le(e.$$.fragment)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r[0]&2&&(i.id=o[1]),r[0]&4&&(i.props=o[2]),r[0]&1&&(i.layout=o[0]),r[0]&16&&(i.scales=o[4]),r[0]&8&&(i.side=o[3]),e.$set(i)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){D(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function ml(n){let e,t,o,r,i,s,a=n[4].length>1&&n[5]&&In(n);return{c(){e=V("div"),t=V("canvas"),o=ce(),a&&a.c(),$(t,"id",n[8]),$(e,"id",n[7]),$(e,"style",n[6]),$(e,"class","nvjs-sidebar svelte-gpuvhh")},m(c,l){j(c,e,l),G(e,t),G(e,o),a&&a.m(e,null),r=!0,i||(s=[xe(e,"click",n[9]),xe(e,"mouseover",n[10]),xe(e,"mouseleave",n[11])],i=!0)},p(c,l){c[4].length>1&&c[5]?a?(a.p(c,l),l[0]&48&&Y(a,1)):(a=In(c),a.c(),Y(a,1),a.m(e,null)):a&&(pe(),D(a,1,1,()=>{a=null}),de()),(!r||l[0]&64)&&$(e,"style",c[6])},i(c){r||(Y(a),r=!0)},o(c){D(a),r=!1},d(c){c&&z(e),a&&a.d(),i=!1,$e(s)}}}function yl(n,e,t){let o,r,i,s,{id:a}=e,{props:c={}}=e,{layout:l={}}=e,{side:p}=e,{scales:f=[]}=e,h=[];function g(P){h=P}let y=Ae.instance(c.id),v=re.instance(c.id),u=p==="right"?1:0,d=`sb-${a}-${p}`,I=`${c.id}-sb-${a}-${p}`,x=`${c.id}-sb-canvas-${a}-${p}`,M=!1;v.on(`${d}:update-sb`,b);let J,R,O,F=1,N,_;Be(async()=>{await B()}),Me(()=>{v.off(`${d}`),O&&O.destroy()});async function B(){[J,R]=Ne.setup(x,l.sbMax[u],l.height),b(),r&&await m()}async function m(){const P=await Tt(()=>import("./hammer-f752c1fe-b75ce407.js"),[]).then(X=>X.h);O=new P.Manager(J),O.add(new P.Pan({direction:P.DIRECTION_VERTICAL,threshold:0})),O.add(new P.Tap({event:"doubletap",taps:2,posThreshold:50})),O.on("panstart",X=>{if(!r)return;let K=C();K?F=K.zoom:F=1,N=[r.$hi,r.$lo],_={y:X.center.y,z:F,mid:H.log_mid(N,l.height),A:r.A,B:r.B}}),O.on("panmove",X=>{_&&(F=E(X),v.emit("sidebar-transform",{gridId:a,scaleId:r.scaleSpecs.id,zoom:F,auto:!1,range:w(),drugging:!0,updateLayout:!0}),b())}),O.on("panend",()=>{_=null,r&&v.emit("sidebar-transform",{gridId:a,scaleId:r.scaleSpecs.id,drugging:!1,updateLayout:!0})}),O.on("doubletap",()=>{v.emit("sidebar-transform",{gridId:a,scaleId:r.scaleSpecs.id,zoom:1,auto:!0,updateLayout:!0}),F=1,b()})}function b(P=l){if(P){if(t(0,l=P),r=S(),!r)return Fe.error(c,l,p,R);Fe.body(c,l,r,p,R),T(),a&&Fe.upperBorder(c,l,R),c.cursor.y&&c.cursor.scales&&c.cursor.gridId===l.id&&Fe.panel(c,l,r,p,R)}}function T(){for(var P of h){let X=P.overlay;X.drawSidebar&&X.drawSidebar(R,p,r)}}function k(){J&&(Ne.resize(J,R,l.sbMax[u],l.height),b())}function E(P){let X=_.y-P.center.y,be=1+(X>0?3:1)*X/l.height;return A.clamp(_.z*be,.005,100)}function w(P=1,X=1){let K=F/_.z,be=(1/K-1)/2,Q=N.slice(),Je=Q[0]-Q[1];if(!r.log)Q[0]=Q[0]+Je*be*P,Q[1]=Q[1]-Je*be*X;else{let Se=l.height/2,L=Se-Se*(1/K),ze=Se+Se*(1/K),Xt=Ao=>H.exp((Ao-_.B)/_.A);Q.slice(),Q[0]=Xt(L),Q[1]=Xt(ze)}return Q}function S(){let P=l.scales,X=l.settings.scaleTemplate[u],K=P[l.settings.scaleSideIdxs[u]];return K&&X.includes(K.scaleSpecs.id)?K:null}function C(){if(!y.yTransforms[a])return;let P=r.scaleSpecs.id;return y.yTransforms[a][P]}function U(P){r&&v.emitSpec("hub","set-scale-index",{paneId:a,index:r.scaleSpecs.id,sideIdxs:l.settings.scaleSideIdxs})}function q(){t(5,M=!0)}function W(){t(5,M=!1)}return n.$$set=P=>{"id"in P&&t(1,a=P.id),"props"in P&&t(2,c=P.props),"layout"in P&&t(0,l=P.layout),"side"in P&&t(3,p=P.side),"scales"in P&&t(4,f=P.scales)},n.$$.update=()=>{n.$$.dirty[0]&5&&t(6,o=`
    left: ${u*(l.width+l.sbMax[0])}px;
    top: ${l.offset||0}px;
    position: absolute;
    background: ${c.colors.back};
    height: ${l.height}px;
`),n.$$.dirty[0]&1&&(r=S()),n.$$.dirty[0]&1&&t(14,i=l.width),n.$$.dirty[0]&1&&t(13,s=l.height),n.$$.dirty[0]&24576&&k()},[l,a,c,p,f,M,o,I,x,U,q,W,g,s,i]}class fo extends fe{constructor(e){super(),ue(this,e,yl,ml,ae,{id:1,props:2,layout:0,side:3,scales:4,setLayers:12},null,[-1,-1])}get setLayers(){return this.$$.ctx[12]}}function _n(n){let e;return{c(){e=V("div"),$(e,"id",n[3]),$(e,"style",n[1]),$(e,"class","nvjs-sidebar-stub svelte-yr5ja6")},m(t,o){j(t,e,o)},p(t,o){o&2&&$(e,"style",t[1])},d(t){t&&z(e)}}}function vl(n){let e,t=n[0].sbMax[n[2]]&&_n(n);return{c(){t&&t.c(),e=ge()},m(o,r){t&&t.m(o,r),j(o,e,r)},p(o,[r]){o[0].sbMax[o[2]]?t?t.p(o,r):(t=_n(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Z,o:Z,d(o){t&&t.d(o),o&&z(e)}}}function bl(n,e,t){let o,{id:r}=e,{props:i={}}=e,{layout:s={}}=e,{side:a}=e,c=a==="right"?1:0,l=`${i.id}-stub-${r}-${a}`;return n.$$set=p=>{"id"in p&&t(4,r=p.id),"props"in p&&t(5,i=p.props),"layout"in p&&t(0,s=p.layout),"side"in p&&t(6,a=p.side)},n.$$.update=()=>{n.$$.dirty&113&&t(1,o=`
    left: ${c*(s.width+s.sbMax[0])}px;
    top: ${s.offset||0}px;
    width: ${s.sbMax[c]-1}px;
    height: ${s.height-(r?1:0)}px;
    position: absolute;
    border: 1px solid;
    border-${a}: none;
    border-bottom: none;
    /* TODO: remove to-boder, it's in the pane now */
    border-top: ${r?"auto":"none"};
    border-color: ${i.colors.scale};
    background: ${i.colors.back}
`)},[s,o,c,l,r,i,a]}class ho extends fe{constructor(e){super(),ue(this,e,bl,vl,ae,{id:4,props:5,layout:0,side:6})}}const wl="data:image/png;base64,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",xl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAlJQTFRFAAAA7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIo7pIoTJ5QQQAAAMZ0Uk5TAAiA1fv+35cTG9b/6jUH0+4caZ0M7Lyi/SZztQGHmAMaz/czEuU2ePqsfZ4EHfUtD+LoPCdihoRgKH+ldaMFVoltCnDkbg0i1/Le60JVzfGOFQKhmwuSX7IGd8ov4e9T84zE7fmTirgJSNkjMWE0EPRZPulDGakpmWfmQFB5w2TdKr3cP03LW3xXwERH1HZS9lrwEbP4Xfw9ZtqITIXCsY8ukaCBNzDIqItUHiuCxxa2a0Y5MpXnLGO/ciVvyachGH6wxh8ghaUgOQAAA1JJREFUeJxjYBgFo2AUDAHAyMTMwsrGzkGufk4ubjDg4SVPPx8/NxQICJJlgBA3HAiTo19EFKRVTJwVSEpIkmGAFEi/tAyDLIiWkydZv4IiUJ+SMgODiiqQoapGsgHqGkB9miCWFsgJ2jok6tcFRYGePohpYAhkGhnjUy1jYmpmbmGJ7E8rFqAuawjbBuQEWzsk9YL2TA6OynARJ2cXkBI2Vze4EncPoICnCYQj4gXkePvAJe18/SSAIv4BgRB+UDArJLZZQkJhVgSAhMJgOsJBshGRUJ5OlB40eUSLgAV8JWDphSUMGlQxsUBeXCDMAB1QgHjGQw13TIAnsESwSBKIKZoMIlNcweEgkwpyQBrC0/YgfnoGWC4zDqTSXxWsCywLclBWdg7YHKXcIKBIHihMRPMRBsj7AQUKCkHMomJweJWUloFosCyIYcXAUA5SxF3gG8QgU8EKdx4UVIJExIDBzgsO76pqGYYaFANqgbRlHYjlWR8k6Q2kGxqRDQhsAjkvk8EHlCa4m1uA7mzFMIAhpg3ETG5nB1EdqKm/E5QuurqbQVKGPSB/YjFARq0XxI4DB4oJin4GjnRQGBuB5I1qwGZjMYAhqMgbFkF96NmvPwUqM2EiJK6xGcAQFD8Jooo5G00/w+QpEJmpNtAEhdUABvlpkFTiHIRuAEOrEkhCg4mRAZ8BQKdOAKXRUgz9DE62QInpHTIMBAxgsJjKzRqOqZ+BYYYet0QaImhwGsAwcxZ7PgMWEGnjNRspT+M2gEgw8AbModSA6lEDBp0Bc0k3oAduACgD85PcDmLUhhswD8SaX45ZAuADggtA5XQymN0+HWTCrNqFTsTqjpQUigaXO4vAXJnFkMKqwG/J0kCC7pCZvEyqDlrwLYda6bQCVjumxNatXLVwdT7W1oS8m+Ca1rVNDUqwgnfdepgUnzMPNwKk8DQrbghZsrFz02blLfr6Ocp5m1bN7Nga0ZZlpISkzDPAAMn01Qu2sXJjAawpKRLYxLmTrbejOVB3x85i7GoxTU1evmu3DAMG0NGt3rN4rwB+zf6K+/p69vPhDGO7A2u6TQ9WHEriqkpA1jfBKOvwFOEllT36nIw4NSNAkEjgEUl9ZSSw0PLoejfSG5tDAwAAOwrCzjMUsXkAAAAASUVORK5CYII=",Il="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABVxJREFUeJztmlmoVlUUx/30XjVLnFC0bJTsWlmZQwRlYlE+FIR2jQzRBpSISooGobKi0aLoRlSEUolU0EMDRQ9JUdFgiA9NFA0oDTfLVTaZZdb/39oXD/tb55x9vnvOPUp7wQ/u/c4e1lpnT2et3a9flChRokSJEiVKlChRokSJEiVKxSJdHYPBTeBD8BfYBb4ED4FRdetXqcDAA8BH4J8UtoDpdetZicCwQeD9DON7EDC+bn1LFxh1SYDxPayqW99SBQbtB34wDH0FPOHWgeTvf4OJdetdmsCYqwzjXwQN9/wO4/nDYEDduvdaYMT+YKNn3HYwNVFmJPjaK8P/Z9SpeykCI64Df3rGPWOUu8EYBatBWx16lyJQ/kBj5f8NTDbKDgObvbLd4KS+VroBjgAXgtvBrWAx6Cg6J1F+hTvsJI1am1H+amMUrAHtBfUfD+aLHrjuApdxyuW2gwJDwDLwlaEIT2uXg6GBihwGPvba+JnOzajD3eILr873YHZgn+2gE2xwO0mynW3gXjA6rXJ/8LixJSXh23wU7JujSMN15rfVFWDEIqPf58HAnHpt4Fo3xbLOGOvpaKuBTsNraU7oylqc8OxYsMmr92Oq95sN8dcNjpx5GXUabpj/EqA/ucdq5E2jIA8vW43fd7jp0LQmOGUeMN7+yjzjE23MN+q/DPZJ6W+Oc7CvJ4e9v73+Z5fVqT90PgETwJQU53AvvwD099qZJs1rCB05vIADBojO42Qbv4LzjLIzwXeGflyzTgXjwNP+c6tTv4EViWeTDIV6lOrscYJ7G48Yb695yOU7YanRDo/O7Yky0w1nk2/ALNl90jy7FQcs955zG3zDKMf5ebHoIjpRdNVOPv8cHNmCA0aDdcaom+Oez5bmcwP5DJySHJn4+6xeO8CV4eL2nlGW68T5okEN/9n10uKZHvXOleZzxGvgNGeo3xcdcoY0T8vSHMAhPgN8YJTnImStI6n7foADRokufv4C3G303+2GurUwl+MAV45DfaYx1C2uafXtJ/qb64zO6ud3sEBStuZSHZBwwjzwU4ZSjPlN6I3xrq8R4IWMfv4QPUKnHpRKd4Arz61qoaQfPpb5c7FVcQZsN/rgVybP+4MD6pfrgES9uW4IJuvyuDmuRXutPviNssbrY6foAtsIqF+dA1zdxW4osh737kUFbQzp42TZvcjyyL4ydH2p3AGu/hLwqehWGHzqK9D+QDfX+bV4pxT7RK7eAXuyRAdEB3Sc+X93wKzogOiA6IDogOiA6IBiDritBl0rEdEoUa4D/M9axub3+js7oneSVoc44HVjFDwnGhEu5bu+r0U0R3ifNEeXt1qFGdTcaTiBX3jLwTFgSA12FBLRr0ZGp3klZ71hD7nfqsiA52MpFQhzAMwN3AxOEA1b1z4ynN4Mmx0nehOFofusUN07qS9SNPLylOTnCBmk3OQ6uxuc40bIQWC4VHCpQTQEN9QN66NEv/BuEc0dMPdghcx83gZj8jridTbG87YENOg7hXUYr+eVmJdEM8kcMZeKxvhPByeK5uqPB5MdU9xv01wZOpQBFoa8HhTNDjMfwTB7d6CxSZi8YbZ6WBGP821yAflWslPmrbLLOW1HwIhrFSZs1oKjezP0eM3lIvCqaBKyKmXLciqN5jy/EhwuAUHTUEe0OWfwVHWF6IL5rujNzroMZvqb0+1J0SQMDzyHgkGlGJ3jEF5HGSu6IDFXxztFN4pmh58VTanzXjAztaEXF5Iw1M75znn/lmhyZJXomrLUGcv1g/ePM/MCfSqiWSPe9eE2ebDonkxFpxaEuwoz0oeAMaI7wN5/cXJPk38Bz1zMtWby+i0AAAAASUVORK5CYII=",Ot={"open-eye":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAelQTFRFAAAAmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYMxdw0QAAAKN0Uk5TAB1Pq7bV/v/5xZFHCw6h6NOCOQMRbNGwTgdo7PPOlIAlJDOSoNr7w0FL1+ubRRgCIVqz/CIKkPbpexsBPOFcJ/WDCBm5mULqye/BYocVtyxQDDIFjCpyslXi8j70d17PH5cEU+54V4anWUmeUmuatBS4c6ac58cgW/1Gsc0PE+Znn+S1Ott9LfAaEmlRFi+kxiNUNEhtK7p6nUzWcWEu2aKt90TEJrgAAALFSURBVHic7VZrWxJBFF5pdbxkRWkKSolGRYmhZBkYoWSIRaFkXjIx7GIWXSktzS6opVlJZvf7L+3MLpszuzvL9jz1bd8vMO8579mZMzPnDMcZMGDgPyPPtI7PL0CosIgvLln/l+JS04aNiMIm8+YtuuVl5VuRCioqLbrkFmuV4F9t27a9xg6ordvh2ClQu3br0Dv3YNe99a4GgtznbmzCtIffn0PefOAg+LUc8iosvtZ6PI3Dfk39ERv4BNra1a3Bo3gWHc1s/bEQOHS62Q7OMDh0NbDMxwPw+ROaU4ychAiOU+pGK9jCUTnb3RMkh7HTkIlAr5r+TCFC+cokt3dW97mIsa8f5jlQq9T3DIJeLfJZhIbOxQhiGCLEu+VuvZCe0IjazDh8As4nCGIUCF6+F7B/FyKqem4Yb95FkrkExGXaaQwyc0Vdz43jAAHqaF0F5hpJmIBIMvRiAHSdpCw3IGTZ2vgmJOBWTC6UcFsIEKY4Lxy5O2vDFEJ3R1h67p54mycocvI+QqPS4AFcICtT78+Wg3GankJo+mH2vyugEWCmhRkgLgXAS3hEL+HxkxnhN+F8KhUkegl+cgmcF5KYppI4i+bmn9nt/WMFkv45pV+AJFYQ4yh4lFMeVfKK2EFaLWnYxkWSwQdpkiReyPTKg7REfZCLw1F+SRJddIBcR5l7BTsRIi/DxACpf01eJnw0lxWFTXGdI00eSa7nOmcLSoYgYkmbsAdDdEF5gwvKilKvWtIyb1eTK3pLWraoypNDI5LGRfUdy1yJy3pao/k4Hbis17AdxMZiZjTR4HuckpRGY4HWVoxbW+jDgtLU+tGTu7UBPn0WmmuKaq4+d2Of0FzTGabwDyzz4j0YXP7yFXd3+7dV83exvU8v5ZZjLKo/MKZ0PjAwSk0/FE+c2URuHYW86E8ePzZ+FfF1JZqZN2DAwL/Ab6ixeYt2jKORAAAAAElFTkSuQmCC","closed-eye":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAblQTFRFAAAAmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYZNB/+AAAAJN0Uk5TAB1Pq7bV/v/5xZFHCw6h6NOCOQMRbNGwTgdo7PPOlIAlJDOSoNr7w0FL1+ubRRgCIVqz/CIKkPbpexsBPOFcJ/WDCBm5mULqye/BYocVtyxQBYwqclXiMvLkrF7PDB/9U+5XhqdZnlJrtBS4ppznW0axzQ/mtRoSURYvScYjMFQ0K7p6nUzWsn1xYS5t2aI6BK33FoqWFQAAAl5JREFUeJxjYBgFo2AU0BgwMjGzsLKxs3NwsnBx85ComZeJj58dBQgICgkTrV1EVIwdCxCXkCRKu6SUNFi9jKycvIIiECgpq6iqgYXUNYjQr6kFUqqto6uHJKhvYGgEEjZmMSGg3dTMHKjOwtIKQ8baRgfkDFs7vPrtZYFqHBydsMs6u4Bc4WqKW7+bO1CBhwFuBZqeQAVeerikvR2A1vvgdaKvH9AEVX/sklJAOc8AvPoZGAKDgCHhEIxNKoSDnZ2VUCADAzMU6M4wJUyJ8AigfgyTmSOjrNHFooEmxMSiiwYDg8c9DsPYeHZ2DAMYEoB+ZUGPC2D8JfpiugurAQxJQBOSUYVSgCGTiqkShwEMaUAT0pEFmIACGVgU4jJAMhNooQiCnwUMgOxAEgxgsAImuRwEN5edPQ8zAPEZwJAPlEmAcQqAGUgKqzLcBjAUsrMXFUPZug7kGRADMwDkhRISvWCH7AUGK2AglpIUiGXAQBRH4gcAo1GUBAMkS4HRWI4sAkpI+cQbAEpIFahCMcCkXEmsAViSMkMVMCbcMTMDVgOqgfprMAo27NkZmwHYszO0QKlFE3Suc0YTsa4HFSgNmPopL9KghSp64KAC31JQodqIS1oCVKyX4ikXNVVBxboCbgWQikUQRyXq3ASqWHLxVCzAqo0LVLW5N5dhStm0GBOu2oCgtQ1cueaiVK7WBobt4Mq1FD2asADJDkj1HlHT2QWq3RW7ewR7IdV7UQVh7SBQjr2BUUhkAwMEeJn6MJo4/ROI1g4BjAETWUCNjUmcLMrceEN+FIyCUUANAAAY0GNbcYUV2AAAAABJRU5ErkJggg==",king:wl,king2:xl,king3:Il};function _l(n){We(n,"svelte-1cdflqk",".nvjs-eye.svelte-1cdflqk{width:20px;height:20px;float:right;margin-right:2px;margin-left:7px}.nvjs-eye.svelte-1cdflqk:hover{filter:brightness(1.25)}")}function Al(n){let e,t,o;return{c(){e=V("div"),$(e,"class","nvjs-eye svelte-1cdflqk"),$(e,"style",n[0])},m(r,i){j(r,e,i),t||(o=xe(e,"click",Wn(n[1])),t=!0)},p(r,[i]){i&1&&$(e,"style",r[0])},i:Z,o:Z,d(r){r&&z(e),t=!1,o()}}}function Sl(n,e,t){let o,r,i,{gridId:s}=e,{ov:a}=e,{props:c}=e,{height:l}=e,p=re.instance(c.id);function f(){t(7,o=a.settings.display!==!1)}function h(){p.emitSpec("hub","display-overlay",{paneId:s,ovId:a.id,flag:a.settings.display===void 0?!1:!a.settings.display})}return n.$$set=g=>{"gridId"in g&&t(2,s=g.gridId),"ov"in g&&t(3,a=g.ov),"props"in g&&t(4,c=g.props),"height"in g&&t(5,l=g.height)},n.$$.update=()=>{n.$$.dirty&8&&t(7,o=a.settings.display!==!1),n.$$.dirty&128&&t(8,r=o?"open":"closed"),n.$$.dirty&288&&t(0,i=`
    background-image: url(${Ot[r+"-eye"]});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: ${(l-20)*.5-3}px;
    /* FIX 'overflow: hidden' changes baseline */
    margin-bottom: -2px;
`)},[i,h,s,a,c,l,f,o,r]}class kl extends fe{constructor(e){super(),ue(this,e,Sl,Al,ae,{gridId:2,ov:3,props:4,height:5,update:6},_l)}get update(){return this.$$.ctx[6]}}const Tl=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAAC0CAMAAAD8fySxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvpQTFRFAAAA///////////////+/////////////////////////////v/////////////////////////////////////////////////////////////////////////////////+//////////7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7////////+///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+///////////+//////////////////////////////////7////+////poUcigAAAP50Uk5TAD1AGUAtKyYkC/+5/5qTrNlmOjU5b2nMT+EDZMFjRT//7MT/aI+NGhUIM+YFusm38+0s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"];function $l(n){We(n,"svelte-5spisq",".nvjs-legend-line.svelte-5spisq{pointer-events:all;position:relative;user-select:none;border-radius:3px;padding:2px 5px;margin-bottom:2px;width:fit-content}.nvjs-logo.svelte-5spisq{width:35px;height:20px;float:left;margin-left:-5px;margin-right:2px;opacity:0.85}.nvjs-ll-data.svelte-5spisq{font-variant-numeric:tabular-nums}.nvjs-ll-value{margin-left:3px}.nvjs-ll-x{margin-left:3px}.nvjs-eye.svelte-5spisq{width:20px;height:20px;float:right;margin-right:2px;margin-left:7px}.nvjs-eye.svelte-5spisq:hover{filter:brightness(1.25)}.king-icon.svelte-5spisq{padding-left:8px;padding-right:8px;margin-right:4px;filter:grayscale()}")}function An(n,e,t){const o=n.slice();return o[44]=e[t],o[46]=t,o}function Sn(n,e,t){const o=n.slice();return o[44]=e[t],o[46]=t,o}function kn(n){let e,t,o,r,i,s,a,c,l,p,f,h=n[1].main&&n[2].showLogo&&Tn(n),g=n[1].main&&$n(n),y=n[7]&&!n[3]&&Mn(n),v=!n[7]&&!n[3]&&En(n),u=n[3]&&Yn(n);return{c(){e=V("div"),h&&h.c(),t=ce(),o=V("span"),r=Ye(n[19]),i=ce(),g&&g.c(),s=ce(),y&&y.c(),a=ce(),v&&v.c(),c=ce(),u&&u.c(),$(o,"class","nvjs-ll-name svelte-5spisq"),$(e,"class","nvjs-legend-line svelte-5spisq"),$(e,"style",n[14])},m(d,I){j(d,e,I),h&&h.m(e,null),G(e,t),G(e,o),G(o,r),G(o,i),g&&g.m(o,null),n[32](o),G(e,s),y&&y.m(e,null),G(e,a),v&&v.m(e,null),G(e,c),u&&u.m(e,null),n[34](e),l=!0,p||(f=[xe(e,"mousemove",n[20]),xe(e,"mouseleave",n[21]),xe(e,"click",n[22]),xe(e,"keypress",null)],p=!0)},p(d,I){d[1].main&&d[2].showLogo?h?h.p(d,I):(h=Tn(d),h.c(),h.m(e,t)):h&&(h.d(1),h=null),(!l||I[0]&524288)&&st(r,d[19]),d[1].main?g?g.p(d,I):(g=$n(d),g.c(),g.m(o,null)):g&&(g.d(1),g=null),d[7]&&!d[3]?y?y.p(d,I):(y=Mn(d),y.c(),y.m(e,a)):y&&(y.d(1),y=null),!d[7]&&!d[3]?v?v.p(d,I):(v=En(d),v.c(),v.m(e,c)):v&&(v.d(1),v=null),d[3]?u?(u.p(d,I),I[0]&8&&Y(u,1)):(u=Yn(d),u.c(),Y(u,1),u.m(e,null)):u&&(pe(),D(u,1,1,()=>{u=null}),de()),(!l||I[0]&16384)&&$(e,"style",d[14])},i(d){l||(Y(u),l=!0)},o(d){D(u),l=!1},d(d){d&&z(e),h&&h.d(),g&&g.d(),n[32](null),y&&y.d(),v&&v.d(),u&&u.d(),n[34](null),p=!1,$e(f)}}}function Tn(n){let e;return{c(){e=V("div"),$(e,"class","nvjs-logo svelte-5spisq"),$(e,"style",n[17])},m(t,o){j(t,e,o)},p(t,o){o[0]&131072&&$(e,"style",t[17])},d(t){t&&z(e)}}}function $n(n){let e;return{c(){e=V("span"),$(e,"class","king-icon svelte-5spisq"),$(e,"style",n[15])},m(t,o){j(t,e,o)},p(t,o){o[0]&32768&&$(e,"style",t[15])},d(t){t&&z(e)}}}function Mn(n){let e;function t(i,s){if(!i[13]&&!i[12])return Ol;if(i[12]&&i[8].length)return Cl;if(i[8].length)return Ml}let o=t(n),r=o&&o(n);return{c(){e=V("span"),r&&r.c(),$(e,"class","nvjs-ll-data svelte-5spisq"),$(e,"style",n[18])},m(i,s){j(i,e,s),r&&r.m(e,null)},p(i,s){o===(o=t(i))&&r?r.p(i,s):(r&&r.d(1),r=o&&o(i),r&&(r.c(),r.m(e,null))),s[0]&262144&&$(e,"style",i[18])},d(i){i&&z(e),r&&r.d()}}}function Ml(n){let e,t=n[13](n[8],n[11]),o=[];for(let r=0;r<t.length;r+=1)o[r]=Cn(An(n,t,r));return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=ge()},m(r,i){for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(r,i);j(r,e,i)},p(r,i){if(i[0]&8399104){t=r[13](r[8],r[11]);let s;for(s=0;s<t.length;s+=1){const a=An(r,t,s);o[s]?o[s].p(a,i):(o[s]=Cn(a),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=t.length}},d(r){Ue(o,r),r&&z(e)}}}function Cl(n){let e,t=n[12](n[8],n[11],n[23])+"",o;return{c(){e=new Bo(!1),o=ge(),e.a=o},m(r,i){e.m(t,r,i),j(r,o,i)},p(r,i){i[0]&6400&&t!==(t=r[12](r[8],r[11],r[23])+"")&&e.p(t)},d(r){r&&z(o),r&&e.d()}}}function Ol(n){let e,t=n[8],o=[];for(let r=0;r<t.length;r+=1)o[r]=On(Sn(n,t,r));return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=ge()},m(r,i){for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(r,i);j(r,e,i)},p(r,i){if(i[0]&8388864){t=r[8];let s;for(s=0;s<t.length;s+=1){const a=Sn(r,t,s);o[s]?o[s].p(a,i):(o[s]=On(a),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=t.length}},d(r){Ue(o,r),r&&z(e)}}}function Cn(n){let e,t=n[23](n[44][0])+"",o,r,i;return{c(){e=V("span"),o=Ye(t),r=ce(),$(e,"class","nvjs-ll-value"),$(e,"style",i=`color: ${n[44][1]}`)},m(s,a){j(s,e,a),G(e,o),G(e,r)},p(s,a){a[0]&10496&&t!==(t=s[23](s[44][0])+"")&&st(o,t),a[0]&10496&&i!==(i=`color: ${s[44][1]}`)&&$(e,"style",i)},d(s){s&&z(e)}}}function El(n){let e;function t(i,s){return i[44]!=null?Bl:Yl}let o=t(n),r=o(n);return{c(){r.c(),e=ge()},m(i,s){r.m(i,s),j(i,e,s)},p(i,s){o===(o=t(i))&&r?r.p(i,s):(r.d(1),r=o(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){r.d(i),i&&z(e)}}}function Yl(n){let e;return{c(){e=V("span"),e.textContent="x",$(e,"class","nvjs-ll-x")},m(t,o){j(t,e,o)},p:Z,d(t){t&&z(e)}}}function Bl(n){let e,t=n[23](n[44])+"",o,r;return{c(){e=V("span"),o=Ye(t),r=ce(),$(e,"class","nvjs-ll-value")},m(i,s){j(i,e,s),G(e,o),G(e,r)},p(i,s){s[0]&256&&t!==(t=i[23](i[44])+"")&&st(o,t)},d(i){i&&z(e)}}}function On(n){let e,t=n[46]>0&&El(n);return{c(){t&&t.c(),e=ge()},m(o,r){t&&t.m(o,r),j(o,e,r)},p(o,r){o[46]>0&&t.p(o,r)},d(o){t&&t.d(o),o&&z(e)}}}function En(n){let e;return{c(){e=V("div"),$(e,"class","nvjs-eye svelte-5spisq"),$(e,"style",n[16])},m(t,o){j(t,e,o)},p(t,o){o[0]&65536&&$(e,"style",t[16])},d(t){t&&z(e)}}}function Yn(n){let e,t,o={gridId:n[0],ov:n[1],props:n[2],height:n[6].height};return e=new kl({props:o}),n[33](e),{c(){le(e.$$.fragment)},m(r,i){ne(e,r,i),t=!0},p(r,i){const s={};i[0]&1&&(s.gridId=r[0]),i[0]&2&&(s.ov=r[1]),i[0]&4&&(s.props=r[2]),i[0]&64&&(s.height=r[6].height),e.$set(s)},i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){n[33](null),oe(e,r)}}}function Jl(n){let e,t,o=!n[9].noLegend&&kn(n);return{c(){o&&o.c(),e=ge()},m(r,i){o&&o.m(r,i),j(r,e,i),t=!0},p(r,i){r[9].noLegend?o&&(pe(),D(o,1,1,()=>{o=null}),de()):o?(o.p(r,i),i[0]&512&&Y(o,1)):(o=kn(r),o.c(),Y(o,1),o.m(e.parentNode,e))},i(r){t||(Y(o),t=!0)},o(r){D(o),t=!1},d(r){o&&o.d(r),r&&z(e)}}}function Rl(n,e,t){let o,r,i,s,a,c,l,p,f,h,g,y,v,u,d,I,x,M,J,R,O,{gridId:F}=e,{ov:N}=e,{props:_}=e,{layout:B}=e,m=Ae.instance(_.id),b=re.instance(_.id),T=!1,k,E,w,S=!1;Be(()=>{b.on(`${o}:update-ll`,C),b.on(`${o}:grid-mousedown`,P),b.on(`${o}:select-overlay`,P)}),Me(()=>{b.off(o)});function C(){t(7,R=N.settings.display!==!1),w&&w.update()}function U(L){L.clientX<g.x+g.width+35&&!T&&setTimeout(()=>{be(),t(3,T=!0)})}function q(L){setTimeout(()=>{be(),t(3,T=!1)})}function W(){b.emit("select-overlay",{index:[F,N.id]}),t(25,S=!0)}function P(L){t(25,S=!1)}function X(L,ze=J){return L==null?"x":typeof L!="number"?L:L.toFixed(ze)}function K(L){return Object.values(L).find(ze=>ze.scaleSpecs.ovIdxs.includes(N.id))||L[B.scaleIndex]}function be(){t(6,h=k.getBoundingClientRect())}function Q(L){ye[L?"unshift":"push"](()=>{E=L,t(5,E)})}function Je(L){ye[L?"unshift":"push"](()=>{w=L,t(10,w)})}function Se(L){ye[L?"unshift":"push"](()=>{k=L,t(4,k)})}return n.$$set=L=>{"gridId"in L&&t(0,F=L.gridId),"ov"in L&&t(1,N=L.ov),"props"in L&&t(2,_=L.props),"layout"in L&&t(24,B=L.layout)},n.$$.update=()=>{var L;n.$$.dirty[0]&3&&(o=`ll-${F}-${N.id}`),n.$$.dirty[0]&2&&t(19,r=(L=N.name)!=null?L:`${N.type||"Overlay"}-${N.id}`),n.$$.dirty[0]&4&&t(31,i=parseInt(_.config.FONT.split("px").shift())),n.$$.dirty[0]&50331654|n.$$.dirty[1]&1&&t(30,s=`
    font: ${_.config.FONT};
    font-size: ${i+(N.main?5:3)}px;
    font-weight: 300;
    color: ${_.colors.textLG};
    background: ${S?_.colors.back:_.colors.llBack};
    border: 1px solid transparent;
    margin-right: 30px;
    max-width: ${B.width-20}px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-color: ${S?_.colors.llSelect:"auto"} !important;
`),n.$$.dirty[0]&4&&t(29,a=`
    background: ${_.colors.back};
    border: 1px solid ${_.colors.grid};

`),n.$$.dirty[0]&6|n.$$.dirty[1]&1&&t(18,c=`
    font-size: ${i+(N.main?3:2)}px;
    color: ${_.colors.llValue}
`),n.$$.dirty[0]&2&&t(7,R=N.settings.display!==!1),n.$$.dirty[0]&128&&t(26,O=R?"open":"closed"),n.$$.dirty[0]&16&&t(6,h=k?k.getBoundingClientRect():{}),n.$$.dirty[0]&67108928&&t(16,p=`
    background-image: url(${Ot[O+"-eye"]});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: ${(h.height-20)*.5-3}px;
    margin-bottom: -2px;
`),n.$$.dirty[0]&64&&`${h.width}${h.height}`,n.$$.dirty[0]&4&&t(28,I=_.cursor.values||[]),n.$$.dirty[0]&268435459&&t(8,x=(I[F]||[])[N.id]||[]),n.$$.dirty[0]&392&&t(15,f=`
    background-image: url(${Ot.king3});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: ${T||!R||!x.length?7:3}px;
`),n.$$.dirty[0]&32&&(g=E?E.getBoundingClientRect():{}),n.$$.dirty[0]&1610612744&&t(14,y=s+(T?a:"")),n.$$.dirty[0]&3&&t(9,v=m.getLegendFns(F,N.id)||{}),n.$$.dirty[0]&512&&t(13,u=v.legend),n.$$.dirty[0]&512&&t(12,d=v.legendHtml),n.$$.dirty[0]&16777216&&t(27,M=K(B.scales)),n.$$.dirty[0]&134217728&&t(11,J=M.prec)},t(17,l=`
    background-image: url(${Tl[0]});
    background-size: contain;
    background-repeat: no-repeat;
`),[F,N,_,T,k,E,h,R,x,v,w,J,d,u,y,f,p,l,c,r,U,q,W,X,B,S,O,M,I,a,s,i,Q,Je,Se]}class Pl extends fe{constructor(e){super(),ue(this,e,Rl,Jl,ae,{gridId:0,ov:1,props:2,layout:24},$l,[-1,-1])}}function Dl(n){We(n,"svelte-16ib1si",".nvjs-legend.svelte-16ib1si{pointer-events:none}")}function Bn(n,e,t){const o=n.slice();return o[9]=e[t],o[11]=t,o}function Jn(n){let e,t,o=n[5].panes()[n[0]].overlays,r=[];for(let s=0;s<o.length;s+=1)r[s]=Rn(Bn(n,o,s));const i=s=>D(r[s],1,1,()=>{r[s]=null});return{c(){e=V("div");for(let s=0;s<r.length;s+=1)r[s].c();$(e,"class","nvjs-legend svelte-16ib1si"),$(e,"style",n[4])},m(s,a){j(s,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(s,a){if(a&39){o=s[5].panes()[s[0]].overlays;let c;for(c=0;c<o.length;c+=1){const l=Bn(s,o,c);r[c]?(r[c].p(l,a),Y(r[c],1)):(r[c]=Rn(l),r[c].c(),Y(r[c],1),r[c].m(e,null))}for(pe(),c=o.length;c<r.length;c+=1)i(c);de()}(!t||a&16)&&$(e,"style",s[4])},i(s){if(!t){for(let a=0;a<o.length;a+=1)Y(r[a]);t=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)D(r[a]);t=!1},d(s){s&&z(e),Ue(r,s)}}}function Rn(n){let e,t;return e=new Pl({props:{gridId:n[0],props:n[1],layout:n[2],ov:n[9]}}),{c(){le(e.$$.fragment)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r&1&&(i.gridId=o[0]),r&2&&(i.props=o[1]),r&4&&(i.layout=o[2]),r&1&&(i.ov=o[9]),e.$set(i)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){D(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function Pn(n){let e=n[5].panes()[n[0]],t,o,r=e&&Jn(n);return{c(){r&&r.c(),t=ge()},m(i,s){r&&r.m(i,s),j(i,t,s),o=!0},p(i,s){s&1&&(e=i[5].panes()[i[0]]),e?r?(r.p(i,s),s&1&&Y(r,1)):(r=Jn(i),r.c(),Y(r,1),r.m(t.parentNode,t)):r&&(pe(),D(r,1,1,()=>{r=null}),de())},i(i){o||(Y(r),o=!0)},o(i){D(r),o=!1},d(i){r&&r.d(i),i&&z(t)}}}function Ll(n){let e=n[3],t,o,r=Pn(n);return{c(){r.c(),t=ge()},m(i,s){r.m(i,s),j(i,t,s),o=!0},p(i,[s]){s&8&&ae(e,e=i[3])?(pe(),D(r,1,1,Z),de(),r=Pn(i),r.c(),Y(r,1),r.m(t.parentNode,t)):r.p(i,s)},i(i){o||(Y(r),o=!0)},o(i){D(r),o=!1},d(i){i&&z(t),r.d(i)}}}function Nl(n,e,t){let o,{id:r}=e,{props:i}=e,{main:s}=e,{layout:a}=e,c=_e.instance(i.id),l=re.instance(i.id),p=0;l.on(`legend-${r}:update-legend`,f),Me(()=>{l.off(`legend-${r}`)});function f(){t(3,p++,p)}return n.$$set=h=>{"id"in h&&t(0,r=h.id),"props"in h&&t(1,i=h.props),"main"in h&&t(6,s=h.main),"layout"in h&&t(2,a=h.layout)},n.$$.update=()=>{n.$$.dirty&4&&t(4,o=`
    left: ${a.sbMax[0]+5}px;
    top: ${(a.offset||0)+5}px;
    position: absolute;
`)},[r,i,a,p,o,c,s]}class Ul extends fe{constructor(e){super(),ue(this,e,Nl,Ll,ae,{id:0,props:1,main:6,layout:2},Dl)}}function Dn(n){let e,t,o,r,i,s,a,c,l,p,f,h={id:n[1],props:n[2],layout:n[0],main:n[3]};t=new dl({props:h}),n[10](t),r=new Ul({props:{id:n[1],props:n[2],layout:n[0],main:n[3]}});const g=[jl,zl],y=[];function v(x,M){return x[9].length?0:1}s=v(n),a=y[s]=g[s](n);const u=[Vl,Fl],d=[];function I(x,M){return x[8].length?0:1}return l=I(n),p=d[l]=u[l](n),{c(){e=V("div"),le(t.$$.fragment),o=ce(),le(r.$$.fragment),i=ce(),a.c(),c=ce(),p.c(),$(e,"class","nvjs-pane svelte-9o7s1l"),$(e,"style",n[7])},m(x,M){j(x,e,M),ne(t,e,null),G(e,o),ne(r,e,null),G(e,i),y[s].m(e,null),G(e,c),d[l].m(e,null),f=!0},p(x,M){const J={};M&2&&(J.id=x[1]),M&4&&(J.props=x[2]),M&1&&(J.layout=x[0]),M&8&&(J.main=x[3]),t.$set(J);const R={};M&2&&(R.id=x[1]),M&4&&(R.props=x[2]),M&1&&(R.layout=x[0]),M&8&&(R.main=x[3]),r.$set(R);let O=s;s=v(x),s===O?y[s].p(x,M):(pe(),D(y[O],1,1,()=>{y[O]=null}),de(),a=y[s],a?a.p(x,M):(a=y[s]=g[s](x),a.c()),Y(a,1),a.m(e,c));let F=l;l=I(x),l===F?d[l].p(x,M):(pe(),D(d[F],1,1,()=>{d[F]=null}),de(),p=d[l],p?p.p(x,M):(p=d[l]=u[l](x),p.c()),Y(p,1),p.m(e,null)),(!f||M&128)&&$(e,"style",x[7])},i(x){f||(Y(t.$$.fragment,x),Y(r.$$.fragment,x),Y(a),Y(p),f=!0)},o(x){D(t.$$.fragment,x),D(r.$$.fragment,x),D(a),D(p),f=!1},d(x){x&&z(e),n[10](null),oe(t),oe(r),y[s].d(),d[l].d()}}}function zl(n){let e,t;return e=new ho({props:{id:n[1],props:n[2],layout:n[0],side:"left"}}),{c(){le(e.$$.fragment)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r&2&&(i.id=o[1]),r&4&&(i.props=o[2]),r&1&&(i.layout=o[0]),e.$set(i)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){D(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function jl(n){let e,t,o={id:n[1],props:n[2],layout:n[0],side:"left",scales:n[9]};return e=new fo({props:o}),n[11](e),{c(){le(e.$$.fragment)},m(r,i){ne(e,r,i),t=!0},p(r,i){const s={};i&2&&(s.id=r[1]),i&4&&(s.props=r[2]),i&1&&(s.layout=r[0]),i&512&&(s.scales=r[9]),e.$set(s)},i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){n[11](null),oe(e,r)}}}function Fl(n){let e,t;return e=new ho({props:{id:n[1],props:n[2],layout:n[0],side:"right"}}),{c(){le(e.$$.fragment)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r&2&&(i.id=o[1]),r&4&&(i.props=o[2]),r&1&&(i.layout=o[0]),e.$set(i)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){D(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function Vl(n){let e,t,o={id:n[1],props:n[2],layout:n[0],side:"right",scales:n[8]};return e=new fo({props:o}),n[12](e),{c(){le(e.$$.fragment)},m(r,i){ne(e,r,i),t=!0},p(r,i){const s={};i&2&&(s.id=r[1]),i&4&&(s.props=r[2]),i&1&&(s.layout=r[0]),i&256&&(s.scales=r[8]),e.$set(s)},i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){n[12](null),oe(e,r)}}}function Hl(n){let e,t,o=n[0]&&Dn(n);return{c(){o&&o.c(),e=ge()},m(r,i){o&&o.m(r,i),j(r,e,i),t=!0},p(r,[i]){r[0]?o?(o.p(r,i),i&1&&Y(o,1)):(o=Dn(r),o.c(),Y(o,1),o.m(e.parentNode,e)):o&&(pe(),D(o,1,1,()=>{o=null}),de())},i(r){t||(Y(o),t=!0)},o(r){D(o),t=!1},d(r){o&&o.d(r),r&&z(e)}}}function Gl(n,e,t){let o,r,i,{id:s}=e,{props:a}=e,{main:c}=e,{layout:l}=e,p=re.instance(a.id),f,h,g;p.on(`pane-${s}:update-pane`,y),Be(()=>{}),Me(()=>{p.off(`pane-${s}`)});function y(I){if(!I.grids)return;t(0,l=I.grids[s]),p.emitSpec(`grid-${s}`,"update-grid",l);let x=g&&g.getLayers?g.getLayers():[];f&&f.setLayers(x),h&&h.setLayers(x),p.emitSpec(`sb-${s}-left`,"update-sb",l),p.emitSpec(`sb-${s}-right`,"update-sb",l)}function v(I){ye[I?"unshift":"push"](()=>{g=I,t(6,g)})}function u(I){ye[I?"unshift":"push"](()=>{f=I,t(4,f)})}function d(I){ye[I?"unshift":"push"](()=>{h=I,t(5,h)})}return n.$$set=I=>{"id"in I&&t(1,s=I.id),"props"in I&&t(2,a=I.props),"main"in I&&t(3,c=I.main),"layout"in I&&t(0,l=I.layout)},n.$$.update=()=>{n.$$.dirty&1&&t(9,o=A.getScalesBySide(0,l)),n.$$.dirty&1&&t(8,r=A.getScalesBySide(1,l)),n.$$.dirty&7&&t(7,i=`
    width: ${a.width}px;
    height: ${(l||{}).height}px;
    /* didn't work, coz canvas draws through the border
    border-top: ${s?"1px solid":"none"};
    border-color: ${a.colors.scale};
    box-sizing: border-box;*/
`)},[l,s,a,c,f,h,g,i,r,o,v,u,d]}class Wl extends fe{constructor(e){super(),ue(this,e,Gl,Hl,ae,{id:1,props:2,main:3,layout:0})}}const{MINUTE15:Xl,MINUTE:Ma,HOUR:jt,DAY:Et,WEEK:ql,MONTH:Kl,YEAR:Yt,MONTHMAP:go,HPX:Ln}=ee;function Ql(n,e,t){const o=e.botbar.width,r=e.botbar.height,i=e.main.sbMax[0];e.main.sbMax[1],t.font=n.config.FONT,t.clearRect(0,0,o,r),t.strokeStyle=n.colors.scale,t.beginPath(),t.moveTo(0,.5),t.lineTo(Math.floor(o+1),.5),t.stroke(),t.fillStyle=n.colors.text,t.beginPath();for(var s of e.botbar.xs){let a=ea(n,s),c=s[0]+i;t.moveTo(c+Ln,0),t.lineTo(c+Ln,4.5),na(n,s[1][0])||(t.globalAlpha=.85),t.textAlign="center",t.fillText(a,c,18),t.globalAlpha=1}t.stroke()}function Zl(n,e,t){let o=ta(n);t.fillStyle=n.colors.panel;let r=t.measureText(o+"    "),i=Math.floor(r.width+10),s=n.cursor.x+e.main.sbMax[0],a=Math.floor(s-i*.5),c=1,l=n.config.PANHEIGHT;oa(t,a,c,i,l+.5,3),t.fillStyle=n.colors.textHL,t.textAlign="center",t.fillText(o,s,c+16)}function ea(n,e){let t=e[1],r=n.timeFrame<Et?1:0,i=t+r*n.timezone*jt,s=new Date(i);if(e[2]===Yt||A.yearStart(t)===t)return s.getUTCFullYear();if(e[2]===Kl||A.monthStart(t)===t)return go[s.getUTCMonth()];if(A.dayStart(i)===i)return s.getUTCDate();let a=A.addZero(s.getUTCHours()),c=A.addZero(s.getUTCMinutes());return a+":"+c}function ta(n){let e=n.cursor.time;if(e===void 0)return"Out of range";let t=n.timeFrame,o=t<Et?1:0,r=new Date(e+o*n.timezone*jt);if(t===Yt)return r.getUTCFullYear();if(t<Yt)var i="`"+`${r.getUTCFullYear()}`.slice(-2),s=go[r.getUTCMonth()],a="01";t<=ql&&(a=r.getUTCDate());let c=`${a} ${s} ${i}`,l="";if(t<Et){let p=A.addZero(r.getUTCHours()),f=A.addZero(r.getUTCMinutes());l=p+":"+f}return`${c}  ${l}`}function na(n,e){let t=n.timeFrame;return e===0||A.monthStart(e)===e||A.dayStart(e)===e||t<=Xl&&e%jt===0}function oa(n,e,t,o,r,i){o<2*i&&(i=o/2),r<2*i&&(i=r/2),n.beginPath(),n.moveTo(e+i,t),n.arcTo(e+o,t,e+o,t+r,0),n.arcTo(e+o,t+r,e,t+r,i),n.arcTo(e,t+r,e,t,i),n.arcTo(e,t,e+o,t,0),n.closePath(),n.fill()}const Nn={body:Ql,panel:Zl};function ra(n){let e,t;return{c(){e=V("div"),t=V("canvas"),$(t,"id",n[2]),$(e,"class","nvjs-botbar svelte-8gplax"),$(e,"id",n[1]),$(e,"style",n[0])},m(o,r){j(o,e,r),G(e,t)},p(o,[r]){r&1&&$(e,"style",o[0])},i:Z,o:Z,d(o){o&&z(e)}}}function ia(n,e,t){let o,r,{props:i={}}=e,{layout:s={}}=e,a="botbar",c=`${i.id}-botbar`,l=`${i.id}-botbar-canvas`,p=re.instance(i.id);p.on(`${a}:update-bb`,y);let f,h;Be(()=>{g()}),Me(()=>{p.off(`${a}`)});function g(){let u=s.botbar;[f,h]=Ne.setup(l,u.width,u.height),y()}function y(u=s){t(3,s=u),s.botbar&&(Nn.body(i,s,h),i.cursor.x&&i.cursor.ti!==void 0&&Nn.panel(i,s,h))}function v(){let u=s.botbar;!f||!u||(Ne.resize(f,h,u.width,u.height),y())}return n.$$set=u=>{"props"in u&&t(4,i=u.props),"layout"in u&&t(3,s=u.layout)},n.$$.update=()=>{n.$$.dirty&24&&t(0,o=`
    background: ${i.colors.back};
    width: ${(s.botbar||{}).width}px;
    height: ${(s.botbar||{}).height}px;
`),n.$$.dirty&8&&t(5,r=(s.botbar||{}).width),n.$$.dirty&32&&v()},[o,c,l,s,i,r]}class sa extends fe{constructor(e){super(),ue(this,e,ia,ra,ae,{props:4,layout:3})}}function la(n){let e,t;return{c(){e=V("div"),t=Ye("No data ¯\\_( °﹏°)_/¯"),$(e,"class","nvjs-no-data-stub svelte-172ri4o"),$(e,"style",n[0])},m(o,r){j(o,e,r),G(e,t)},p(o,[r]){r&1&&$(e,"style",o[0])},i:Z,o:Z,d(o){o&&z(e)}}}function aa(n,e,t){let o,{props:r}=e;return n.$$set=i=>{"props"in i&&t(1,r=i.props)},n.$$.update=()=>{n.$$.dirty&2&&t(0,o=`
    display: flex;
    width: ${r.width}px;
    height: ${r.height}px;
    background: ${r.colors.back};
    color: ${r.colors.scale};
    font: ${r.config.FONT};
    font-size: 18px;
    font-style: italic;
    user-select: none;
    align-items:center;
    justify-content:center;
`)},[o,r]}class ca extends fe{constructor(e){super(),ue(this,e,aa,la,ae,{props:1})}}function Un(n,e,t){const o=n.slice();return o[25]=e[t],o[27]=t,o}function pa(n){let e,t;return e=new ca({props:{props:n[0]}}),{c(){le(e.$$.fragment)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r&1&&(i.props=o[0]),e.$set(i)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){D(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function da(n){let e,t,o,r=n[3].panes(),i=[];for(let a=0;a<r.length;a+=1)i[a]=zn(Un(n,r,a));const s=a=>D(i[a],1,1,()=>{i[a]=null});return t=new sa({props:{props:n[2],layout:n[1]}}),{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=ce(),le(t.$$.fragment)},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);j(a,e,c),ne(t,a,c),o=!0},p(a,c){if(c&14){r=a[3].panes();let p;for(p=0;p<r.length;p+=1){const f=Un(a,r,p);i[p]?(i[p].p(f,c),Y(i[p],1)):(i[p]=zn(f),i[p].c(),Y(i[p],1),i[p].m(e.parentNode,e))}for(pe(),p=r.length;p<i.length;p+=1)s(p);de()}const l={};c&4&&(l.props=a[2]),c&2&&(l.layout=a[1]),t.$set(l)},i(a){if(!o){for(let c=0;c<r.length;c+=1)Y(i[c]);Y(t.$$.fragment,a),o=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)D(i[c]);D(t.$$.fragment,a),o=!1},d(a){Ue(i,a),a&&z(e),oe(t,a)}}}function zn(n){let e,t;return e=new Wl({props:{id:n[27],layout:n[1].grids[n[27]],props:n[2],main:n[25]===n[3].chart}}),{c(){le(e.$$.fragment)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r&2&&(i.layout=o[1].grids[o[27]]),r&4&&(i.props=o[2]),e.$set(i)},i(o){t||(Y(e.$$.fragment,o),t=!0)},o(o){D(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function ua(n){let e,t,o,r;const i=[da,pa],s=[];function a(c,l){return c[1]&&c[1].main?0:1}return t=a(n),o=s[t]=i[t](n),{c(){e=V("div"),o.c(),$(e,"class","nvjs-chart svelte-pr5wst")},m(c,l){j(c,e,l),s[t].m(e,null),r=!0},p(c,[l]){let p=t;t=a(c),t===p?s[t].p(c,l):(pe(),D(s[p],1,1,()=>{s[p]=null}),de(),o=s[t],o?o.p(c,l):(o=s[t]=i[t](c),o.c()),Y(o,1),o.m(e,null))},i(c){r||(Y(o),r=!0)},o(c){D(o),r=!1},d(c){c&&z(e),s[t].d()}}}function fa(n,e,t){let o,{props:r={}}=e;function i(){return M}function s(){return u}function a(){return d}function c(m){var b;let T=!((b=m.preventDefault)==null||b);delete m.preventDefault,Object.assign(u,m),O(u,T)}function l(m){var b;let T=!((b=m.preventDefault)==null||b);delete m.preventDefault,Object.assign(d,m),J(d,T)}let p=_e.instance(r.id),f=Ae.instance(r.id),h=re.instance(r.id),g=zt.instance(r.id);g.init(r);let y=g.detectInterval(),v=g.getTimeframe(),u=g.defaultRange(),d=new lr(f),I={},x=new _r(r),M=null;g.calcIndexOffsets(),h.on("chart:cursor-changed",J),h.on("chart:cursor-locked",R),h.on("chart:range-changed",O),h.on("chart:update-layout",N),h.on("chart:full-update",_),Be(()=>{p.calcSubset(u),p.detectMain(),p.loadScripts(u,g.tf,!0),f.init(r),g.updatePanesHash(),t(1,M=new cn(o,p,f))}),Me(()=>{h.off("chart")});function J(m,b=!0){b&&h.emit("$cursor-update",m),m.mode&&t(12,d.mode=m.mode,d),d.mode!=="explore"&&(d.xSync(p,M,o,m),m.visible===!1&&setTimeout(()=>N())),N()}function R(m){d.scrollLock&&m||t(12,d.locked=m,d)}function O(m,b=!0){if(b&&h.emit("$range-update",m),B(m),p.updateRange(u),d.locked)return;d.xValues(p,M,o),d.yValues(M),N();let T=r.config.QUANTIZE_AFTER;T&&A.afterAll(I,F,T)}function F(){d.xSync(p,M,o,d),N()}function N(m={},b=!0){if(b&&h.emit("$chart-pre-update"),m.updateHash&&g.updatePanesHash(),g.panesChanged())return _();t(12,d=d),t(1,M=new cn(o,p,f)),h.emit("update-pane",M),h.emitSpec("botbar","update-bb",M),b&&h.emit("$chart-update")}function _(m={}){let b=g.ibMode;t(9,y=g.detectInterval()),t(10,v=g.getTimeframe());let T=g.ibMode!==b;(!u.length||m.resetRange||T)&&B(g.defaultRange()),g.calcIndexOffsets(),p.calcSubset(u),p.init(p.data),p.detectMain(),p.loadScripts(),f.init(r),f.restore(),g.updatePanesHash(),N(),h.emit("remake-grid")}function B(m){t(11,u=m),t(2,o.range=u,o)}return n.$$set=m=>{"props"in m&&t(0,r=m.props)},n.$$.update=()=>{n.$$.dirty&7681&&t(2,o=Object.assign({interval:y,timeFrame:v,range:u,ctx:x,cursor:d},r))},[r,M,o,p,i,s,a,c,l,y,v,u,d]}class ha extends fe{constructor(e){super(),ue(this,e,fa,ua,ae,{props:0,getLayout:4,getRange:5,getCursor:6,setRange:7,setCursor:8})}get getLayout(){return this.$$.ctx[4]}get getRange(){return this.$$.ctx[5]}get getCursor(){return this.$$.ctx[6]}get setRange(){return this.$$.ctx[7]}get setCursor(){return this.$$.ctx[8]}}function ga(n){We(n,"svelte-7z7hqo",".svelte-7z7hqo::after,.svelte-7z7hqo::before{box-sizing:content-box}.night-vision.svelte-7z7hqo{position:relative;direction:ltr}")}function ma(n){let e,t,o,r={props:n[1]};return t=new ha({props:r}),n[19](t),{c(){e=V("div"),le(t.$$.fragment),$(e,"class","night-vision svelte-7z7hqo"),$(e,"id",n[0]),$(e,"style",n[3])},m(i,s){j(i,e,s),ne(t,e,null),o=!0},p(i,[s]){const a={};s&2&&(a.props=i[1]),t.$set(a),(!o||s&1)&&$(e,"id",i[0]),(!o||s&8)&&$(e,"style",i[3])},i(i){o||(Y(t.$$.fragment,i),o=!0)},o(i){D(t.$$.fragment,i),o=!1},d(i){i&&z(e),n[19](null),oe(t)}}}function ya(n,e,t){let o,r,i,s,a,c;function l(){return c}let{showLogo:p=!1}=e,{id:f="nvjs"}=e,{width:h=750}=e,{height:g=420}=e,{colors:y={}}=e,{toolbar:v=!1}=e,{scripts:u=[]}=e,{config:d={}}=e,{indexBased:I=!1}=e,{timezone:x=0}=e,{data:M={}}=e,{autoResize:J=!1}=e;function R(O){ye[O?"unshift":"push"](()=>{c=O,t(2,c)})}return n.$$set=O=>{"showLogo"in O&&t(5,p=O.showLogo),"id"in O&&t(0,f=O.id),"width"in O&&t(6,h=O.width),"height"in O&&t(7,g=O.height),"colors"in O&&t(8,y=O.colors),"toolbar"in O&&t(9,v=O.toolbar),"scripts"in O&&t(10,u=O.scripts),"config"in O&&t(11,d=O.config),"indexBased"in O&&t(12,I=O.indexBased),"timezone"in O&&t(13,x=O.timezone),"data"in O&&t(14,M=O.data),"autoResize"in O&&t(15,J=O.autoResize)},n.$$.update=()=>{n.$$.dirty&2048&&t(16,o=Object.assign(ee.ChartConfig,d)),n.$$.dirty&2560&&t(18,r=v?d.TOOLBAR:0),n.$$.dirty&256&&t(17,i=Object.assign(ee.COLORS,y)),n.$$.dirty&468193&&t(1,s={showLogo:p,id:f,width:h-r,height:g,colors:i,scripts:u,config:o,timezone:x}),n.$$.dirty&2&&t(3,a=`
    width: ${s.width}px;
    height: ${s.height}px;
`)},[f,s,c,a,l,p,h,g,y,v,u,d,I,x,M,J,o,i,r,R]}let va=class extends fe{constructor(e){super(),ue(this,e,ya,ma,ae,{getChart:4,showLogo:5,id:0,width:6,height:7,colors:8,toolbar:9,scripts:10,config:11,indexBased:12,timezone:13,data:14,autoResize:15},ga)}get getChart(){return this.$$.ctx[4]}get showLogo(){return this.$$.ctx[5]}set showLogo(e){this.$$set({showLogo:e}),ie()}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),ie()}get width(){return this.$$.ctx[6]}set width(e){this.$$set({width:e}),ie()}get height(){return this.$$.ctx[7]}set height(e){this.$$set({height:e}),ie()}get colors(){return this.$$.ctx[8]}set colors(e){this.$$set({colors:e}),ie()}get toolbar(){return this.$$.ctx[9]}set toolbar(e){this.$$set({toolbar:e}),ie()}get scripts(){return this.$$.ctx[10]}set scripts(e){this.$$set({scripts:e}),ie()}get config(){return this.$$.ctx[11]}set config(e){this.$$set({config:e}),ie()}get indexBased(){return this.$$.ctx[12]}set indexBased(e){this.$$set({indexBased:e}),ie()}get timezone(){return this.$$.ctx[13]}set timezone(e){this.$$set({timezone:e}),ie()}get data(){return this.$$.ctx[14]}set data(e){this.$$set({data:e}),ie()}get autoResize(){return this.$$.ctx[15]}set autoResize(e){this.$$set({autoResize:e}),ie()}};function ba(n){new ResizeObserver(t=>{let o=n.root.getBoundingClientRect();n.width=o.width,n.height=o.height}).observe(n.root)}class wa{constructor(e,t={}){this._data=t.data||{},this._scripts=t.scripts||[];let o=t.id||"nvjs";this.ww=so.instance(o,this),this.se=eo.instance(o,this),this.hub=_e.instance(o),this.meta=Ae.instance(o),this.scan=zt.instance(o),this.events=re.instance(o),this.scriptHub=lo.instance(o),this.hub.init(this._data),this.scriptHub.init(this._scripts),this.root=document.getElementById(e),this.comp=new va({target:this.root,props:t}),t.autoResize&&ba(this),this.se.setRefs(this.hub,this.scan)}get id(){return this.comp.id}set id(e){this.comp.$set({id:e})}get width(){return this.comp.width}set width(e){this.comp.$set({width:e}),setTimeout(()=>this.update())}get height(){return this.comp.height}set height(e){this.comp.$set({height:e}),setTimeout(()=>this.update())}get colors(){return this.comp.colors}set colors(e){this.comp.$set({colors:e})}get showLogo(){return this.comp.showLogo}set showLogo(e){this.comp.$set({id:e})}get scripts(){return this._scripts}set scripts(e){this._scripts=e,this.scriptHub.init(this._scripts),this.update("full")}get data(){return this._data}set data(e){this._data=e,this.update("full")}get config(){return this.comp.config}set config(e){this.comp.$set({config:e})}get indexBased(){return this.comp.indexBased}set indexBased(e){this.comp.$set({indexBased:e})}get timezone(){return this.comp.timezone}set timezone(e){this.comp.$set({timezone:e}),setTimeout(()=>this.update())}get layout(){let e=this.comp.getChart();return e?e.getLayout():null}get range(){let e=this.comp.getChart();return e?e.getRange():null}set range(e){let t=this.comp.getChart();t&&t.setRange(e)}get cursor(){let e=this.comp.getChart();return e?e.getCursor():null}set cursor(e){let t=this.comp.getChart();t&&t.setCursor(e)}update(o="layout",t={}){var[o,r]=o.split("-");const i=this.events;switch(o){case"layout":i.emitSpec("chart","update-layout",t);break;case"data":this.hub.updateRange(this.range),this.meta.calcOhlcMap(),i.emitSpec("chart","update-layout",t);break;case"full":this.hub.init(this._data),i.emitSpec("chart","full-update",t);break;case"grid":if(r===void 0)i.emit("remake-grid");else{let s=`grid-${r}`;i.emitSpec(s,"remake-grid",t)}break;case"legend":if(r===void 0)i.emit("update-legend");else{let s=`legend-${r}`;i.emitSpec(s,"update-legend",t)}break}}fullReset(){this.update("full",{resetRange:!0})}goto(e){let t=this.range,o=t[1]-t[0];this.range=[e-o,e]}scroll(){if(this.cursor.locked)return;let e=this.hub.mainOv.data,t=e[e.length-1],o=this.hub.indexBased;if(!t)return;let r=o?e.length-1:t[0],i=this.range[1]-r,s=this.scan.interval;i>0&&this.goto(this.range[1]+s)}}class xa{constructor(){this.URL="https://api1.binance.com/api/v3/klines",this.SYM="BTCUSDT",this.TF="1m",this.loading=!1}async load(e){let t=`${this.URL}?symbol=${this.SYM}&interval=${this.TF}`,r=await(await fetch(t)).json();e({panes:[{overlays:[{name:"BTC Tether US Binance",type:"Candles",data:r.map(i=>this.format(i))}]}]})}async loadMore(e,t){if(this.loading)return;this.loading=!0;let o=`${this.URL}?symbol=${this.SYM}&interval=${this.TF}`;o+=`&endTime=${e}`;let i=await(await fetch(o)).json();t(i.map(s=>this.format(s))),this.loading=!1}format(e){return[e[0],parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4]),parseFloat(e[7])]}}var Ft=1/0,we=null,mo=()=>{},yo=()=>{},vo=()=>{},rt=!1,Bt=!1,it=[],bo=!1;function Vt(){return new Date().getTime()}async function wo(n){Bt||(it=n,xo(),setTimeout(()=>wo(it),1e4))}function xo(){var n=e=>({method:"SUBSCRIBE",params:e,id:1});we=new WebSocket("wss://stream.binance.com:9443/ws"),we.onmessage=function(e){try{let t=JSON.parse(e.data);if(!t.s)return _a(t);switch(t.e){case"aggTrade":mo({symbol:t.s.toUpperCase(),price:parseFloat(t.p),size:parseFloat(t.q)});break;case"ping":console.log("PING",t);break}Ft=Vt()}catch(t){console.log(t.toString())}},we.onopen=function(){try{let e=it.map(t=>t.toLowerCase()+"@aggTrade");console.log("SEND >>>",JSON.stringify(n(e))),we.send(JSON.stringify(n(e)))}catch(e){console.log(e.toString())}},we.onclose=function(e){switch(e){case 1e3:console.log("WebSocket: closed");break}},we.onerror=function(e){console.log("WS",e),Ht()}}function Ia(n){var e=t=>({op:"subscribe",channel:"trades",market:t});try{we.send(JSON.stringify(e(n)))}catch(t){console.log(t.toString())}}function Ht(){rt=!0,console.log("Reconnecting...");try{we.close(),setTimeout(()=>xo(it),1e3)}catch(n){console.log(n.toString())}}function _a(n){rt?vo():Bt||(console.log("Stream [OK]"),yo(),Bt=!0,Ft=Vt(),setTimeout(Jt,1e4)),rt=!1}function Jt(){bo||(Vt()-Ft>6e4?(console.log("No events for 60 seconds"),rt||Ht(),setTimeout(Jt,1e4)):setTimeout(Jt,1e3))}function Aa(){we.close(),bo=!0}const Gt={init:wo,add_symbol:Ia,reconnect:Ht,terminate:Aa,set ontrades(n){mo=n},set onquotes(n){},set ready(n){yo=n},set refine(n){vo=n}};function Sa(n,e,t=6e4){let o=n[n.length-1];if(!o)return;let r=e.price,i=e.volume||0,s=o[0]+t,a=new Date().getTime(),c=a>=s?a-a%t:o[0];if(c>=s&&r!==void 0){let l=[c,r,r,r,r,i];return n.push(l),!0}else if(r!==void 0)return o[2]=Math.max(r,o[2]),o[3]=Math.min(r,o[3]),o[4]=r,o[5]+=i,!1}document.querySelector("#app").innerHTML=`
<style>
body {
    background-color: #0c0d0e;
}
</style>
<div id="chart-container"></div>
`;let se=new wa("chart-container",{autoResize:!0,colors:{back:"#111113",grid:"#2e2f3055"},config:{}}),Wt=new xa;Wt.load(n=>{se.data=n,se.fullReset(),se.se.uploadAndExec()});function Io(){let n=se.hub.mainOv.data,e=n[0][0];se.range[0]<e&&Wt.loadMore(e-1,t=>{n.unshift(...t),se.update("data"),se.se.uploadAndExec()})}async function _o(){await se.se.updateData();var n;se.hub.mainOv.dataSubset.length<1e3?n=10:n=1e3,setTimeout(_o,n)}se.events.on("app:$range-update",Io);setInterval(Io,500);setTimeout(_o,0);Gt.init([Wt.SYM]);Gt.ontrades=n=>{if(!se.hub.mainOv)return;let e=se.hub.mainOv.data,t={price:n.price,volume:n.price*n.size};Sa(e,t)&&(se.update("data"),se.scroll())};window.wsx=Gt;export{qn as g};
