"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{962:function(t,e,r){r.d(e,{Z:function(){return w}});var n,a,o,c=r(439),s=r(791),i=r(689),u=r(87),p=r(729),f=r(168),v=r(867),l=v.zo.p(n||(n=(0,f.Z)(["\nfont-weight: 600;\ntext-align: center;\nwidth: 130px;\n"]))),h=v.zo.div(a||(a=(0,f.Z)(["\ndisplay: flex;\nwidth: 200px;\nbackground-color: silver;\nborder-radius: 10px;\nalign-items: center;\n"]))),d=v.zo.section(o||(o=(0,f.Z)(["\n display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n"]))),m=r(184),w=function(t){var e=t.trendFilms,r=(0,s.useState)([]),n=(0,c.Z)(r,2),a=n[0],o=n[1],f=(0,s.useState)(!1),v=(0,c.Z)(f,2),w=v[0],Z=v[1],g=(0,i.TH)();(0,s.useEffect)((function(){var t=e.map((function(t){return t.poster_path?new Promise((function(e){var r=new Image;r.src="https://image.tmdb.org/t/p/original/".concat(t.poster_path),r.onload=function(){return e()},r.onerror=function(){return e()}})):Promise.resolve()}));Promise.all(t).then((function(){Z(!0)})).catch((function(){console.log("Error loading images")})),o(e)}),[e]);return w&&(0,m.jsx)(d,{children:a.map((function(t){return(0,m.jsx)(u.rU,{style:{textDecoration:"none",color:"black"},to:(e=t.id,"/movies/".concat(e)),state:{from:g},children:(0,m.jsxs)(h,{children:[(0,m.jsx)("img",{width:70,src:t.poster_path?"https://image.tmdb.org/t/p/original/".concat(t.poster_path):p,alt:"",onError:function(t){t.target.src=p}}),(0,m.jsx)(l,{children:t.title})]})},t.id);var e}))})}},266:function(t,e,r){r.r(e);var n=r(165),a=r(861),o=r(439),c=r(791),s=r(962),i=r(721),u=r(184);e.default=function(){var t=(0,c.useState)([]),e=(0,o.Z)(t,2),r=e[0],p=e[1],f=(0,c.useState)(!1),v=(0,o.Z)(f,2),l=v[0],h=v[1];return(0,c.useEffect)((function(){(0,a.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i._L)();case 3:e=t.sent,p(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:return t.prev=10,h(!0),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()}),[]),(0,u.jsx)("div",{children:l?(0,u.jsx)(s.Z,{trendFilms:r}):(0,u.jsx)("div",{})})}},721:function(t,e,r){r.d(e,{MI:function(){return i},Wf:function(){return s},_L:function(){return c},q5:function(){return p},yo:function(){return u}});var n=r(165),a=r(861),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var c=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e,r,a,c=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,t.prev=1,t.next=4,o.Z.get("/trending/movie/day",{params:{page:e}});case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),new Error("Oops, there is no movies");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="/search/movie?query=".concat(e,"&"),t.next=4,o.Z.get(r);case 4:return a=t.sent,c=a.data,t.abrupt("return",c);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("Oops, there is no movie");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(e));case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,a=r.data,t.abrupt("return",a.cast);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(e,"/reviews"));case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},729:function(t,e,r){t.exports=r.p+"static/media/no-poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=266.12dbfec0.chunk.js.map