try{self["workbox:core:6.5.3"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:6.5.3"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=s(t)}}class i extends n{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class o{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:o}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let c=o&&o.handler;const r=t.method;if(!c&&this.i.has(r)&&(c=this.i.get(r)),!c)return;let a;try{a=c.handle({url:s,request:t,event:e,params:i})}catch(t){a=Promise.reject(t)}const u=o&&o.catchHandler;return a instanceof Promise&&(this.o||u)&&(a=a.catch((async n=>{if(u)try{return await u.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),a}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const o of i){let i;const c=o.match({url:t,sameOrigin:e,request:s,event:n});if(c)return i=c,(Array.isArray(i)&&0===i.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(i=void 0),{route:o,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let c;const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=t=>[r.prefix,t,r.suffix].filter((t=>t&&t.length>0)).join("-"),u=t=>t||a(r.precache),h=t=>t||a(r.runtime);function l(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.5.3"]&&_()}catch(t){}function f(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),o=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:o.href}}class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class w{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.u.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.u=t}}let p;async function y(t,s){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const i=t.clone(),o={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},c=s?s(o):o,r=function(){if(void 0===p){const t=new Response("");if("body"in t)try{new Response(t.body),p=!0}catch(t){p=!1}p=!1}return p}()?i.body:await i.blob();return new Response(r,c)}function m(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class g{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const v=new Set;try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}function b(t){return"string"==typeof t?new Request(t):t}class q{constructor(t,e){this.h={},Object.assign(this,e),this.event=e.event,this.l=t,this.p=new g,this.m=[],this.g=[...t.plugins],this.v=new Map;for(const t of this.g)this.v.set(t,{});this.event.waitUntil(this.p.promise)}async fetch(t){const{event:s}=this;let n=b(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const o=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.l.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:o,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:i.clone(),request:o.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=b(t);let s;const{cacheName:n,matchOptions:i}=this.l,o=await this.getCacheKey(e,"read"),c=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(o,c);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:o,event:this.event})||void 0;return s}async cachePut(t,s){const n=b(t);var i;await(i=0,new Promise((t=>setTimeout(t,i))));const o=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(c=o.url,new URL(String(c),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var c;const r=await this.q(s);if(!r)return!1;const{cacheName:a,matchOptions:u}=this.l,h=await self.caches.open(a),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(t,e,s,n){const i=m(e.url,s);if(e.url===i)return t.match(e,n);const o=Object.assign(Object.assign({},n),{ignoreSearch:!0}),c=await t.keys(e,o);for(const e of c)if(i===m(e.url,s))return t.match(e,n)}(h,o.clone(),["__WB_REVISION__"],u):null;try{await h.put(o,l?r.clone():r)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of v)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:a,oldResponse:f,newResponse:r.clone(),request:o,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.h[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=b(await t({mode:e,request:n,event:this.event,params:this.params}));this.h[s]=n}return this.h[s]}hasCallback(t){for(const e of this.l.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.l.plugins)if("function"==typeof e[t]){const s=this.v.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.m.push(t),t}async doneWaiting(){let t;for(;t=this.m.shift();)await t}destroy(){this.p.resolve(null)}async q(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class R{constructor(t={}){this.cacheName=h(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new q(this,{event:e,request:s,params:n}),o=this.R(i,s,e);return[o,this.U(o,i,s,e)]}async R(t,s,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.L(s,t),!i||"error"===i.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const o of t.iterateCallbacks("handlerDidError"))if(i=await o({error:e,event:n,request:s}),i)break;if(!i)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))i=await e({event:n,request:s,response:i});return i}async U(t,e,s,n){let i,o;try{i=await t}catch(o){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(o=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:o}),e.destroy(),o)throw o}}class U extends R{constructor(t={}){t.cacheName=u(t.cacheName),super(t),this._=!1!==t.fallbackToNetwork,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}async L(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.j(t,e):await this.C(t,e))}async C(t,s){let n;const i=s.params||{};if(!this._)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=i.integrity,o=t.integrity,c=!o||o===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?o||e:void 0})),e&&c&&"no-cors"!==t.mode&&(this.O(),await s.cachePut(t,n.clone()))}return n}async j(t,s){this.O();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}O(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==U.copyRedirectedCacheableResponsesPlugin&&(n===U.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await y(t):t};class L{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.N=new Map,this.k=new Map,this.T=new Map,this.l=new U({cacheName:u(t),plugins:[...e,new w({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(t){this.addToCacheList(t),this.K||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.K=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:i}=f(n),o="string"!=typeof n&&n.revision?"reload":"default";if(this.N.has(i)&&this.N.get(i)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this.N.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.T.has(t)&&this.T.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:i});this.T.set(t,n.integrity)}if(this.N.set(i,t),this.k.set(i,o),s.length>0){const t=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return l(t,(async()=>{const e=new d;this.strategy.plugins.push(e);for(const[e,s]of this.N){const n=this.T.get(s),i=this.k.get(e),o=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:o,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return l(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.N.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.N}getCachedURLs(){return[...this.N.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.N.get(e.href)}getIntegrityForCacheKey(t){return this.T.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let z;const j=()=>(z||(z=new L),z);class C extends n{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const i of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const o=new URL(t,location.href);o.hash="",yield o.href;const c=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(o,e);if(yield c.href,s&&c.pathname.endsWith("/")){const t=new URL(c.href);t.pathname+=s,yield t.href}if(n){const t=new URL(c.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:o});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(i);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}function E(t){const s=j();!function(t,s,r){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new n((({url:t})=>t.href===e.href),s,r)}else if(t instanceof RegExp)a=new i(t,s,r);else if("function"==typeof t)a=new n(t,s,r);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}(c||(c=new o,c.addFetchListener(),c.addCacheListener()),c).registerRoute(a)}(new C(s,t))}var x;self.addEventListener("message",(t=>{t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),x={},function(t){j().precache(t)}([{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/css/chunk-vendors.e92fd658.css",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/css/index.96320423.css",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/favicon.ico",revision:"48a6fc8173bd729879ce02238e7971ca"},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/JetBrainsMono-Regular.a1cf4a5c.ttf",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/PingFang-Jian-ChangGuiTi-2.2268eadc.ttf",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/element-icons.ff18efd1.woff",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/方正准圆繁体.5e2cc3fe.ttf",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/方正小篆体.8e6361e8.ttf",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/fonts/霞鹜文楷.50514f3a.ttf",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/js/butterchurn-presets.5854f33e.js",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/js/butterchurn.849b3267.js",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/js/chunk-vendors.035c3133.js",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/js/index.ecdb6381.js",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/js/static-assets.bdc10e02.js",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/media/empty.f6bff8af.wav",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/media/本兮 - 下雪的季节.2f3cea0f.mp3",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/media/胡芳芳 - Black River.bb68c74a.mp3",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/media/茅原実里 - 渚のパフューム.d5180912.mp3",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/media/路绮欧 - 发现.bba378fd.mp3",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/media/陈奕迅 - 与我常在.e369afe4.mp3",revision:null},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/preview.gif",revision:"13a47c841b73a7b8041dce43feb68ec8"},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/project.json",revision:"8eaf2e3f0521f968363a61803d101f8b"},{url:"https://bzmusic.oss-cn-qingdao.aliyuncs.com/zip/bz-music-blazor.9e422599.zip",revision:null},{url:"index.html",revision:"04d74fe8f5efef42d3b6ebfd1d49669e"}]),E(x),self.__WB_DISABLE_DEV_LOGS=!0;
