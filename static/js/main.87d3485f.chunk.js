(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),c=a.n(s),i=a(7),o=a(1),m=a(15),l=a.n(m),u=a(29),v=a(10),p=a(11),d=a(13),E=a(12),_=a(30),y=a.n(_);a(55);var f=function(e){return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(e.id),state:{year:e.year,title:e.title,summary:e.summary,poster:e.poster,genres:e.genres}}},r.a.createElement("img",{src:e.poster,alt:e.title,title:e.title}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},e.title),r.a.createElement("h5",{className:"movie__year"},e.year),r.a.createElement("ul",{className:"movie__genres"},e.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},e.summary.slice(0,180),"..."))))},g=(a(61),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var h=function(e){return r.a.createElement("div",{className:"about__container"},"about page")},b=(a(63),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state;return r.a.createElement("div",{className:"detail_movie"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t.title),r.a.createElement("h5",{className:"movie__year"},t.year),r.a.createElement("ul",{className:"movie__genres"},t.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},t.summary)))}return null}}]),a}(r.a.Component));a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"about"},"About"))};a(65);var j=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null),r.a.createElement(o.a,{path:"/",exact:!0,component:g}),r.a.createElement(o.a,{path:"/about",component:h}),r.a.createElement(o.a,{path:"/movie/:id",component:b}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.87d3485f.chunk.js.map