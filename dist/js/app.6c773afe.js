(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1df7749a":"11eed542","chunk-36e98869":"c7a7fa2d","chunk-b8803670":"bd1c0ce2"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var s=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4988:function(t,e,n){var r=n("e224");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("95b91962",r,!0,{})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),o=n("6925"),c=n("19a3"),u=(n("c5f6"),n("f414"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}l({},Object(i["c"])(["currentMusic","currentTime","playerStatus"]),{percent:function(){return Number((this.currentTime/this.duration*100).toFixed(2))}}),l({},Object(i["d"])(["setCurrentTime","changePlayerStatus","setMiniPlayer"]),{timeupdate:function(t){this.duration=t.target.duration,this.setCurrentTime(t.target.currentTime)},gotoPlayerPage:function(){this.setMiniPlayer(!1),this.$router.push({path:"/player"})}}),u["a"];function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={data:function(){return{duration:0}},computed:f({},Object(i["c"])(["currentMusic","currentTime","playerStatus"]),{percent:function(){return Number((this.currentTime/this.duration*100).toFixed(2))}}),methods:f({},Object(i["d"])(["setCurrentTime","changePlayerStatus","setMiniPlayer"]),{timeupdate:function(t){this.duration=t.target.duration,this.setCurrentTime(t.target.currentTime)},gotoPlayerPage:function(){this.setMiniPlayer(!1),this.$router.push({path:"/player"})}}),watch:{playerStatus:function(t){var e=this.$refs.player;t?e.play():e.pause()}},components:{XProgress:u["a"]}},b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btm_player"},[n("span",{staticClass:"play_icon",class:{stop_btn:!t.playerStatus},on:{click:t.changePlayerStatus}}),t._v(" "),n("div",{staticClass:"musicInfo"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentMusic.imgUrl,expression:"currentMusic.imgUrl"}],attrs:{alt:"歌曲图片"},on:{click:t.gotoPlayerPage}}),t._v(" "),n("p",[n("span",[t._v(t._s(t.currentMusic.song))]),t._v(" -\n      "),n("span",[t._v(t._s(t.currentMusic.singer))])]),t._v(" "),n("div",{staticClass:"process"},[n("x-progress",{attrs:{percent:t.percent,"show-cancel":!1}})],1)]),t._v(" "),n("audio",{ref:"player",attrs:{src:t.currentMusic.url,loop:"",autoplay:""},on:{timeupdate:t.timeupdate}},[t._v("你的浏览器暂时不支持H5播放")])])},y=[],g=n("2455");function m(t){n("4988")}var h=!1,v=m,O="data-v-2c648eae",j=null,w=Object(g["a"])(d,b,y,h,v,O,j),P=w.exports;function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}T({},Object(i["c"])(["isLoad","isMiniPlayer","isToast"])),T({},Object(i["d"])(["setToast"]),{totast:function(){this.setToast(!1)}}),o["a"],c["a"];function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={data:function(){return{loadText:"加载中..."}},computed:M({},Object(i["c"])(["isLoad","isMiniPlayer","isToast"])),methods:M({},Object(i["d"])(["setToast"]),{totast:function(){this.setToast(!1)}}),components:{MiniPlayer:P,Loading:o["a"],Toast:c["a"]}},A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1),t._v(" "),n("Loading",{attrs:{show:t.isLoad,text:t.loadText}}),t._v(" "),n("Toast",{attrs:{text:"歌曲暂无版权",type:"cancel",time:1e3,value:t.isToast},on:{"on-hide":t.totast}}),t._v(" "),n("MiniPlayer",{directives:[{name:"show",rawName:"v-show",value:t.isMiniPlayer,expression:"isMiniPlayer"}],ref:"miniPlayer"})],1)},S=[];function D(t){n("9a51")}var L=!1,E=D,C=null,I=null,z=Object(g["a"])(_,A,S,L,E,C,I),R=z.exports,U=n("8c4f");r["a"].use(U["a"]);var N=function(){return n.e("chunk-b8803670").then(n.bind(null,"d1d5"))},$=function(){return n.e("chunk-36e98869").then(n.bind(null,"778b"))},B=function(){return n.e("chunk-1df7749a").then(n.bind(null,"2f8e"))},H=new U["a"]({routes:[{path:"/",component:N},{path:"/playlist/detail",component:$},{path:"/player",component:B}]}),F={isLoad:!1,isToast:!1,currentMusic:{},isMiniPlayer:!1,listDetail:{},currentTime:0,playerStatus:!1},J=F,q={isLoad:function(t){return t.isLoad},isToast:function(t){return t.isToast},currentMusic:function(t){return t.currentMusic},isMiniPlayer:function(t){return t.isMiniPlayer},listDetail:function(t){return t.listDetail},currentTime:function(t){return t.currentTime},playerStatus:function(t){return t.playerStatus}},G=q,Q={setLoad:function(t,e){t.isLoad=e},setToast:function(t,e){t.isToast=e},setCurrentMusic:function(t,e){t.currentMusic=e},setMiniPlayer:function(t,e){t.isMiniPlayer=e},setListDetail:function(t,e){t.listDetail=e},setCurrentTime:function(t,e){t.currentTime=e},changePlayerStatus:function(t){t.playerStatus?t.playerStatus=!1:t.playerStatus=!0}},X=Q,K=(n("7f7f"),n("96cf"),n("3b8d")),V=n("bdaa");n("a481"),n("4917"),n("28a5");function W(t){return{lyric:Y(t.lrc.lyric||"")}}function Y(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;r++){var a=decodeURIComponent(e[r]),i=/\[\d*:\d*((\.|:)\d*)*\]/g,o=a.match(i);if(o)for(var c=a.replace(i,""),u=0,s=o.length;u<s;u++){var l=o[u],p=Number(String(l.match(/\[\d*/i)).slice(1)),f=Number(String(l.match(/:\d*/i)).slice(1)),d=60*p+f;""!==c&&n.push({time:d,content:c})}}return n}var Z={getMusicData:function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,i,o,c,u,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Object(V["a"])(n.id);case 3:if(a=t.sent,!a.data.success){t.next=21;break}return t.next=7,Object(V["e"])(n.id);case 7:return i=t.sent,t.next=10,Object(V["d"])(n.id);case 10:return o=t.sent,t.next=13,Object(V["c"])(n.id);case 13:if(c=t.sent,u=W(c.data),s=u.lyric,l={id:n.id,url:i.data.data[0].url,imgUrl:o.data.songs[0].al.picUrl,singer:n.artists,song:n.title,lyric:s},l.url){t.next=18;break}return t.abrupt("return",Promise.reject("false"));case 18:r("setCurrentMusic",l),t.next=22;break;case 21:return t.abrupt("return",Promise.reject("false"));case 22:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),getListDetail:function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Object(V["g"])(n);case 3:a=t.sent,i=a.data.playlist.tracks.slice(0,25),o=i.map((function(t,e){var n="";return n=t.ar.length>=2?t.ar[0].name+"/"+t.ar[1].name:t.ar[0].name,{id:t.id,title:t.name,alias:t.alia[0],artists:n,album:t.al.name,rank:e+1}})),c={tags:a.data.playlist.tags,des:a.data.playlist.description,music:o,name:a.data.playlist.name,imgUrl:a.data.playlist.coverImgUrl},r("setListDetail",c);case 8:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},tt=Z;r["a"].use(i["a"]);var et=new i["a"].Store({state:J,getters:G,mutations:X,actions:tt}),nt=n("caf9"),rt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",at={install:function(t){t.use(nt["a"],{loading:rt,error:rt})}};r["a"].config.productionTip=!1,r["a"].use(at),new r["a"]({router:H,store:et,render:function(t){return t(R)}}).$mount("#app")},"75a6":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n* {\n  padding: 0;\n  margin: 0;\n}\na {\n  text-decoration: none;\n  color: black;\n}\n#app {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font: 14px/1.5 Helvetica, sans-serif;\n  color: #333;\n}\n.weui-progress__inner-bar {\n  background: #d43c33 !important;\n}\n",""])},"9a51":function(t,e,n){var r=n("75a6");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("52a0949e",r,!0,{})},bdaa:function(t,e,n){"use strict";n.d(e,"k",(function(){return o})),n.d(e,"j",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"g",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return y})),n.d(e,"b",(function(){return g}));var r=n("bc3a"),a=n.n(r),i="https://api.mtnhao.com",o=function(){return a.a.get("".concat(i,"/search/hot"))},c=function(t){return a.a.get("".concat(i,"/search?keywords=").concat(t))},u=function(){return a.a.get("".concat(i,"/top/list?idx=1"))},s=function(){return a.a.get("".concat(i,"/personalized"))},l=function(){return a.a.get("".concat(i,"/personalized/newsong"))},p=function(t){return a.a.get("".concat(i,"/song/url?id=").concat(t))},f=function(t){return a.a.get("".concat(i,"/playlist/detail?id=").concat(t))},d=function(t){return a.a.get("".concat(i,"/song/detail?ids=").concat(t))},b=function(t){return a.a.get("".concat(i,"/check/music?id=").concat(t))},y=function(t){return a.a.get("".concat(i,"/lyric?id=").concat(t))},g=function(t){return a.a.get("".concat(i,"/comment/hot?id=").concat(t,"&type=0"))}},c3fe:function(t,e,n){t.exports=n.p+"img/playbar.db568b1c.png"},e224:function(t,e,n){var r=n("b041");e=t.exports=n("2350")(!1),e.push([t.i,"\n.btm_player[data-v-2c648eae] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  height: 53px;\n  width: 100vw;\n  background: url("+r(n("c3fe"))+") repeat-x;\n}\n.musicInfo[data-v-2c648eae] {\n  position: relative;\n  max-width: 80%;\n  margin-left: 18%;\n}\n.musicInfo img[data-v-2c648eae] {\n  position: absolute;\n  width: 13vw;\n  height: 13vw;\n  top: -3vw;\n  left: 0;\n}\n.musicInfo p[data-v-2c648eae] {\n  position: absolute;\n  left: 15vw;\n  top: 2vw;\n  color: #e8e8e8;\n  font-size: 0.8rem;\n  height: 5vw;\n  overflow: hidden;\n}\n.process[data-v-2c648eae] {\n  position: absolute;\n  top: 8vw;\n  left: 15vw;\n  width: 60vw;\n}\n.play_icon[data-v-2c648eae] {\n  position: absolute;\n  left: 4%;\n  top: 2vw;\n  width: 36px;\n  height: 36px;\n  background: url("+r(n("c3fe"))+") no-repeat;\n  background-position: 0 -165px;\n}\n.stop_btn[data-v-2c648eae] {\n  background-position: 0 -204px;\n}\n",""])}});
//# sourceMappingURL=app.6c773afe.js.map