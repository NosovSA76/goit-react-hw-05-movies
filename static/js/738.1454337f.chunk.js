"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[738],{738:function(e,r,t){t.r(r),t.d(r,{default:function(){return z}});var n,a,s,c,o,i,u=t(165),p=t(861),v=t(439),l=t(791),h=t(689),f=t(87),d=t(126),m=t(721),w=t(729),x=t(168),Z=t(867),g=Z.zo.section(n||(n=(0,x.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),j=Z.zo.img(a||(a=(0,x.Z)(["\n\n"]))),b=Z.zo.div(s||(s=(0,x.Z)(["\n\n"]))),_=Z.zo.h2(c||(c=(0,x.Z)(["\n\n"]))),k=Z.zo.p(o||(o=(0,x.Z)(["\n\n"]))),y=Z.zo.h3(i||(i=(0,x.Z)(["\n"]))),O=t(184),z=function(){var e=(0,l.useState)({}),r=(0,v.Z)(e,2),t=r[0],n=r[1],a=(0,l.useState)(!1),s=(0,v.Z)(a,2),c=s[0],o=s[1],i=(0,h.UO)().moviesID,x=(0,h.TH)();(0,l.useEffect)((function(){(0,p.Z)((0,u.Z)().mark((function e(){var r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.MI)(i);case 3:r=e.sent,n(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:return e.prev=10,o(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[i]),console.log(x);var Z=new Date(t.release_date).getFullYear(),z=Math.round(10*t.vote_average),E=t.overview,U=t.genres;console.log("location From MovieDetal: ",x);var C=(0,h.s0)();return c&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("button",{onClick:function(){return function(){var e;C((null===x||void 0===x||null===(e=x.state)||void 0===e?void 0:e.from)||"/")}()},children:[(0,O.jsx)(d.And,{}),"Go back"]}),(0,O.jsxs)(g,{children:[(0,O.jsx)(j,{width:170,src:t.poster_path?"https://image.tmdb.org/t/p/original/".concat(t.poster_path):w,alt:""}),(0,O.jsxs)(b,{children:[(0,O.jsxs)(_,{children:[t.title," ",Z]}),(0,O.jsxs)(k,{children:["User score ",z," %"]}),(0,O.jsx)(y,{children:"Overview"}),(0,O.jsx)(k,{children:E}),(0,O.jsx)(y,{children:"Genres"}),U&&U.map((function(e){return(0,O.jsxs)("span",{children:[e.name,", "]},e.id)}))]})]}),(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)(f.rU,{to:"cast",state:{from:x.state.from},children:"Casts"})}),(0,O.jsx)("li",{children:(0,O.jsx)(f.rU,{to:"review",state:{from:x.state.from},children:"Reviews"})})]}),(0,O.jsx)(h.j3,{})]})}},721:function(e,r,t){t.d(r,{MI:function(){return i},Wf:function(){return o},_L:function(){return c},q5:function(){return p},yo:function(){return u}});var n=t(165),a=t(861),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a,c=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:1,e.prev=1,e.next=4,s.Z.get("/trending/movie/day",{params:{page:r}});case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Oops, there is no movies");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/search/movie?query=".concat(r,"&"),e.next=4,s.Z.get(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Oops, there is no movie");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/credits"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.cast);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/reviews"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.results);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},729:function(e,r,t){e.exports=t.p+"static/media/no-poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=738.1454337f.chunk.js.map