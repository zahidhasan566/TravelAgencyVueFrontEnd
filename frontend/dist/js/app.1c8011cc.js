(function(e){function n(n){for(var c,a,r=n[0],h=n[1],d=n[2],l=0,i=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&i.push(u[a][0]),u[a]=0;for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(e[c]=h[c]);f&&f(n);while(i.length)i.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var r=t[a];0!==u[r]&&(c=!1)}c&&(o.splice(n--,1),e=h(h.s=t[0]))}return e}var c={},a={app:0},u={app:0},o=[];function r(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-1e5cf429":"99721c1b","chunk-2d0a3cd4":"6f43d07c","chunk-2d0d0f0b":"9c1acaf7","chunk-2d22c92e":"b253a61f","chunk-379d44be":"f15b21f4","chunk-4ef6b558":"8be69a84","chunk-95c671e0":"67f747fa","chunk-00ac08fc":"91fc33b3","chunk-05e17fbb":"dae1bbb0","chunk-2d0aa5b8":"ed5e0cc7","chunk-1d7d5f3e":"cbb76b2e","chunk-5c1c87e8":"02e5ac6d","chunk-2d0b9de6":"0f84ee3f","chunk-2d0c1795":"2384ab92","chunk-2d21a073":"a75f0fe0","chunk-2d21a986":"45a2d4a6","chunk-2d226347":"b4791b8c","chunk-32b7a818":"659d4bc5","chunk-5aac700d":"27b6f0cb","chunk-98c5b3fc":"03cad9af","chunk-a64febb4":"6b0ce8ed","chunk-ef3e2d12":"583c8808"}[e]+".js"}function h(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-1e5cf429":1,"chunk-379d44be":1,"chunk-4ef6b558":1,"chunk-00ac08fc":1,"chunk-05e17fbb":1,"chunk-1d7d5f3e":1,"chunk-5c1c87e8":1,"chunk-32b7a818":1,"chunk-5aac700d":1,"chunk-98c5b3fc":1,"chunk-a64febb4":1,"chunk-ef3e2d12":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-1e5cf429":"8342e05a","chunk-2d0a3cd4":"31d6cfe0","chunk-2d0d0f0b":"31d6cfe0","chunk-2d22c92e":"31d6cfe0","chunk-379d44be":"e53fcfbe","chunk-4ef6b558":"cd3798e5","chunk-95c671e0":"31d6cfe0","chunk-00ac08fc":"d034cfe6","chunk-05e17fbb":"188b8277","chunk-2d0aa5b8":"31d6cfe0","chunk-1d7d5f3e":"16f431c1","chunk-5c1c87e8":"e96b1b85","chunk-2d0b9de6":"31d6cfe0","chunk-2d0c1795":"31d6cfe0","chunk-2d21a073":"31d6cfe0","chunk-2d21a986":"31d6cfe0","chunk-2d226347":"31d6cfe0","chunk-32b7a818":"58840bed","chunk-5aac700d":"65eb16a7","chunk-98c5b3fc":"e53fcfbe","chunk-a64febb4":"46aa270e","chunk-ef3e2d12":"1ab4383f"}[e]+".css",u=h.p+c,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var d=o[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===u))return n()}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){d=i[r],l=d.getAttribute("data-href");if(l===c||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],f.parentNode.removeChild(f),t(o)},f.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){a[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,h.nc&&l.setAttribute("nonce",h.nc),l.src=r(e);var i=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",i.name="ChunkLoadError",i.type=c,i.request=a,t[1](i)}u[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},h.m=e,h.c=c,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)h.d(t,c,function(n){return e[n]}.bind(null,c));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="/",h.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var i=0;i<d.length;i++)n(d[i]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},5665:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));const c=[{path:"/",redirect:"/home"},{path:"/home/main",name:"home2",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-05e17fbb")]).then(t.bind(null,"57da")),children:[{path:"/home",name:"home",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-a64febb4")]).then(t.bind(null,"e312"))},{path:"/customer",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d0aa5b8"),t.e("chunk-5c1c87e8")]).then(t.bind(null,"9107"))},{path:"/register",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d0b9de6")]).then(t.bind(null,"357e"))},{path:"/about",component:()=>t.e("chunk-4ef6b558").then(t.bind(null,"1fc5"))},{path:"/service",component:()=>t.e("chunk-2d0a3cd4").then(t.bind(null,"0471"))},{path:"/filter",component:()=>t.e("chunk-ef3e2d12").then(t.bind(null,"407a"))},{path:"/client-mixin",component:()=>t.e("chunk-1e5cf429").then(t.bind(null,"12d2"))},{path:"/blog",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-5aac700d")]).then(t.bind(null,"7654"))},{path:"/chat",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d21a986")]).then(t.bind(null,"bbd4"))},{path:"/chat/room/:id",name:"chat",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d0c1795")]).then(t.bind(null,"45ca"))}]},{path:"/login",name:"login",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d0aa5b8"),t.e("chunk-1d7d5f3e")]).then(t.bind(null,"7e92"))},{path:"/login/dashboard",name:"login_dashboard",meta:{appbar_close:!0},component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-98c5b3fc")]).then(t.bind(null,"4d71")),children:[{path:"/login/post",name:"login_post",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-00ac08fc")]).then(t.bind(null,"9b28"))},{path:"/login/current-user-dashboard",name:"current_user_dashboard",component:()=>t.e("chunk-2d22c92e").then(t.bind(null,"f48b"))},{path:"/admin/post-create",name:"post_create",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d226347")]).then(t.bind(null,"e853"))},{path:"/chat/customer",name:"chat_customer",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-32b7a818")]).then(t.bind(null,"2aa8"))},{path:"/chat/room/admin/:id",name:"chat_admin",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-2d21a073")]).then(t.bind(null,"ba86"))}]},{path:"/customer/dashboard",name:"customer_dashboard",component:()=>t.e("chunk-2d0d0f0b").then(t.bind(null,"69b4"))},{path:"/Admin/sidebar",name:"admin_sidebar",component:()=>t.e("chunk-379d44be").then(t.bind(null,"7b37"))},{path:"/test",name:"test",component:()=>Promise.all([t.e("chunk-95c671e0"),t.e("chunk-00ac08fc")]).then(t.bind(null,"9b28"))}];n["a"]=c},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("2b0e"),a=function(){var e=this,n=e._self._c;return n("v-app",[n("v-main",[n("router-view")],1)],1)},u=[],o=(t("14d9"),{name:"App",components:{},data:()=>({loginNext:[{href:(void 0).$router.push({name:"login"})}]}),computed:{},methods:{appbar_close(){return this.$route.meta.appbar_close},loginPage(){return"/login/dashboard"!=this.$route.path&&"/login/current-user-dashboard"!=this.$route.path&&"/login/post"!=this.$route.path&&"/admin/post-create"!=this.$route.path},goToHome(){this.$router.push({name:"login"})}}}),r=o,h=t("2877"),d=Object(h["a"])(r,a,u,!1,null,null,null),l=d.exports,i=(t("7b17"),t("f9e3"),t("4989"),t("28dd")),f=t("8c4f"),s=t("5665"),b=t("5f5b"),p=t("6c42"),m=(t("da96"),t("ce5b")),k=t.n(m);t("bf40");c["default"].use(k.a);var g=new k.a({theme:{themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),v=(t("d5e8"),t("5363"),t("4776")),y=t.n(v),w=t("b9eb"),P=t.n(w),_=t("d004"),O=t.n(_),j=t("5638");window.Pusher=t("782e"),window.Echo=new j["a"]({broadcaster:"pusher",key:"anykey",cluster:"ap2",wsHost:"127.0.0.1",wsPort:6001,wssPort:6001,forceTLS:!1,disableStats:!0,enabledTransports:["ws","wss"]});const T=new f["a"]({routes:s["b"],mode:"history"});c["default"].use(f["a"]),c["default"].use(b["a"]),c["default"].use(p["a"]),c["default"].use(y.a),c["default"].use(P.a),c["default"].component("pagination",t("7211")),c["default"].use(O.a,{appKey:"8d0ff70de61b27f22f3e",cluster:"ap2",debug:!0,debugLevel:"all"}),c["default"].use(i["a"]),c["default"].config.productionTip=!1,new c["default"]({router:T,vuetify:g,render:e=>e(l)}).$mount("#app"),c["default"].filter("removeText",e=>e.slice(1))}});
//# sourceMappingURL=app.1c8011cc.js.map