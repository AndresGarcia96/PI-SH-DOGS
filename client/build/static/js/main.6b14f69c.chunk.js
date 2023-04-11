(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(24),s=n.n(a),i=n(17),o=n(4),l=n(25),u=n(37),j=n(36),b=n(40),d=n(6),h=n(8),O=n(14),p=n(67),f="GET_ALL_BREEDS",m="GET_BREED_DETAIL",x="GET_ALL_TEMPERAMENTS",v="FILTER_BY_TEMPERAMENT",g="FILTER_BY_ORIGIN",y="SORT_BREEDS_BY_NAME",N="SORT_BREEDS_BY_WEIGHT",k="CHANGE_PAGE",E="CLEAR_SEARCH",w="CLEAR_FILTERS",C="LOADING_BREEDS",A=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){var c;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n({type:C}),c=[],!e){t.next=9;break}return t.next=6,p.a.get("http://localhost:3001/dogs/name?name=".concat(e));case 6:c=t.sent,t.next=12;break;case 9:return t.next=11,p.a.get("http://localhost:3001/dogs");case 11:c=t.sent;case 12:n({type:f,payload:c.data}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){var c;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:3001/dogs/id/".concat(e));case 3:c=t.sent,n({type:m,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:3001/dogs/temperaments");case 3:n=e.sent,t({type:x,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:y,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:N,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:w});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:E});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R={breeds:[],breedDetail:{},allTemperaments:[],selectedTemperament:null,selectedOrigin:null,searchResults:[],sortOrder:"",currentPage:1,breedsPerPage:8,error:"",loadingBreeds:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(d.a)(Object(d.a)({},e),{},{loadingBreeds:!0,error:""});case m:return Object(d.a)(Object(d.a)({},e),{},{breedDetail:t.payload,error:""});case f:return Object(d.a)(Object(d.a)({},e),{},{breeds:t.payload,currentPage:1,breedsPerPage:8,error:"",loadingBreeds:!1});case x:return Object(d.a)(Object(d.a)({},e),{},{allTemperaments:t.payload,error:""});case v:return Object(d.a)(Object(d.a)({},e),{},{selectedTemperament:t.payload,currentPage:1,error:""});case g:return Object(d.a)(Object(d.a)({},e),{},{selectedOrigin:t.payload,currentPage:1,error:""});case y:case N:return Object(d.a)(Object(d.a)({},e),{},{sortOrder:t.payload});case k:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.payload,error:""});case E:return Object(d.a)(Object(d.a)({},e),{},{searchResults:[],error:""});case w:return Object(d.a)(Object(d.a)({},e),{},{filteredByTemperament:null,filteredByOrigin:null,sortOrder:"",breeds:Object(b.a)(e.breeds),error:""});default:return e}},F=[u.a],I=Object(l.createStore)(L,Object(j.composeWithDevTools)(l.applyMiddleware.apply(void 0,F))),W=(n(52),n(7)),G=n(15),M=n(16),H=n(38),Y=n(39),J=(n(53),n(0)),V=function(e){Object(H.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleEnterClick=function(){e.props.history.push("/home")},e}return Object(M.a)(n,[{key:"render",value:function(){return Object(J.jsxs)("div",{className:"landing-page",children:[Object(J.jsx)("h1",{children:"Bienvenido a Henry Dogs"}),Object(J.jsx)("button",{onClick:this.handleEnterClick,children:"Ingresar"})]})}}]),n}(c.Component),q=Object(W.f)(V),z=n(9),K=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(z.a)(t,2),r=n[0],a=n[1];return Object(J.jsxs)("div",{className:"search-bar",children:[Object(J.jsx)("input",{className:"input-search",type:"text",placeholder:"Search by breed name...",value:r,onChange:function(e){a(e.target.value)}}),r&&Object(J.jsx)("button",{type:"reset",className:"clear-button",onClick:function(){return a("")},children:"x"}),Object(J.jsx)("button",{type:"search",className:"search-button",onClick:function(t){t.preventDefault(),e(A(r.trim())),a(""),console.log(r)},children:"Search"})]})},Q=n.p+"static/media/favicon2.41f4ff62.png",U=(n(60),function(){var e=Object(W.e)(),t=Object(o.b)(),n=function(){t(A()),e.push("/home"),t(S()),t(B()),t(P())};return Object(J.jsx)("header",{className:"header",children:Object(J.jsxs)("div",{className:"header-container",children:[Object(J.jsxs)("div",{className:"header-left",children:[Object(J.jsx)(i.b,{to:"/home",onClick:n,children:Object(J.jsx)("img",{src:Q,alt:"Dog App Logo"})}),Object(J.jsx)("h1",{children:"Henry Dogs Store"})]}),Object(J.jsxs)("div",{className:"header-right",children:[Object(J.jsx)("button",{onClick:n,className:"button_home",children:"Home"}),Object(J.jsx)("button",{onClick:function(){e.push("/")},className:"button_exit",children:"Exit"})]})]})})}),X=(n(61),function(e){var t=e.temperaments;return Array.isArray(t)?Object(J.jsx)(J.Fragment,{children:t.map((function(e,t){return Object(J.jsx)("li",{children:e},t)}))}):null}),Z=function(e){var t=e.breed,n=Object(o.b)();return Object(J.jsxs)("div",{className:"breed-card",onClick:function(){n(T(t.id))},children:[Object(J.jsx)("div",{className:"breed-image",children:Object(J.jsx)("img",{width:120,src:t.image,alt:t.name})}),Object(J.jsxs)("div",{className:"breed-info",children:[Object(J.jsx)("h1",{children:t.name}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"Temperaments:"}),Object(J.jsx)("h5",{children:Object(J.jsx)(X,{temperaments:t.temperaments},t.id)})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"Weight:"}),Object(J.jsx)("h5",{children:t.weight})]}),Object(J.jsx)("div",{className:"button-detail",children:Object(J.jsx)("button",{children:Object(J.jsx)(i.b,{to:{pathname:"/dogs/".concat(t.id),state:{breed:t}},children:"Ver detalle"})})})]})]})},$=(n(62),function(e){var t=e.total,n=Object(o.b)(),c=Object(o.c)((function(e){return e.breedsPerPage})),r=function(e){n(function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:k,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(J.jsx)("nav",{className:"pagination-bar",children:Object(J.jsx)("div",{className:"pagination",children:Array.from(Array(Math.ceil(t/c)).keys()).map((function(e){return Object(J.jsx)("button",{onClick:function(){return r(e+1)},className:"page-button",children:e+1},e)}))})})}),ee=function(){var e,t=Object(o.c)((function(e){return e.breeds})),n=Object(o.c)((function(e){return e.currentPage})),r=Object(o.c)((function(e){return e.breedsPerPage})),a=Object(o.c)((function(e){return e.selectedOrigin})),s=Object(o.c)((function(e){return e.selectedTemperament})),i=Object(o.c)((function(e){return e.sortOrder})),l=Object(c.useState)([]),u=Object(z.a)(l,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){var e=t;return a&&(e=e.filter((function(e){return e.source===a}))),s&&(e=e.filter((function(e){var t;return null===(t=e.temperaments)||void 0===t?void 0:t.some((function(e){return e===s}))}))),i&&("ascName"===i?e.sort((function(e,t){return e.name.localeCompare(t.name)})):"descName"===i&&e.sort((function(e,t){return t.name.localeCompare(e.name)})),"ascWeight"===i?e.sort((function(e,t){return parseInt(e.weight)-parseInt(t.weight)})):"descWeight"===i&&e.sort((function(e,t){return parseInt(t.weight)-parseInt(e.weight)}))),b(e),function(){b(t)}}),[a,s,t,i]),Object(J.jsxs)("div",{className:"dogsList",children:[Object(J.jsx)("div",{className:"pagination",children:Object(J.jsx)($,{total:j.length})}),Object(J.jsx)("div",{className:"dogCardAllDogs",children:(e=j,e.slice((n-1)*r,n*r)).map((function(e){return Object(J.jsx)(Z,{breed:e},e.id)}))})]})},te=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(z.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(z.a)(s,2),l=i[0],u=i[1],j=Object(o.c)((function(e){return e.allTemperaments}));Object(c.useEffect)((function(){e(A()),e(S())}),[e]);var b=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:g,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r))},d=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:v,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l))},p=function(t){t.preventDefault(),e(B()),a(""),u("")};return Object(J.jsxs)("div",{className:"filters",children:[Object(J.jsxs)("form",{className:"originfilter",onSubmit:b,children:[Object(J.jsx)("label",{htmlFor:"origin",children:"Filter by origin:"}),Object(J.jsxs)("select",{id:"origin",value:r,onChange:function(e){a(e.target.value)},children:[Object(J.jsx)("option",{value:"",children:"Any"}),Object(J.jsx)("option",{value:"api",children:"Api"}),Object(J.jsx)("option",{value:"db",children:"DataBase"})]}),Object(J.jsx)("button",{className:"originfilter-button",onClick:b,type:"submit",children:"Apply"}),r&&Object(J.jsx)("button",{className:"clearfilters-button",onClick:p,children:"Clear Filters"})]}),Object(J.jsxs)("form",{className:"temperamentfilter",onSubmit:d,children:[Object(J.jsx)("label",{htmlFor:"temperament",children:"Filter by temperament:"}),Object(J.jsxs)("select",{id:"temperament",value:l,onChange:function(e){u(e.target.value)},children:[Object(J.jsx)("option",{value:"",children:"All temperaments"}),j.map((function(e,t){return Object(J.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(J.jsx)("button",{className:"temperamentfilter-button",onClick:d,type:"submit",children:"Apply"}),l&&Object(J.jsx)("button",{className:"clearfilters-button",onClick:p,children:"Clear Filters"})]})]})},ne=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(z.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(z.a)(s,2),l=i[0],u=i[1];return Object(J.jsxs)("div",{className:"sorting",children:[Object(J.jsx)("label",{children:"Sort by:"}),Object(J.jsxs)("button",{className:"namesorting-button",onClick:function(){"asc"===r||""===r?(e(_("descName")),a("desc")):(e(_("ascName")),a("asc")),u("")},children:["Name ","desc"===r?"\u25bc":"asc"===r?"\u25b2":""]}),Object(J.jsxs)("button",{className:"weightsorting-button",onClick:function(){"asc"===l||""===l?(e(D("descWeight")),u("desc")):(e(D("ascWeight")),u("asc")),a("")},children:["Weight ","desc"===l?"\u25bc":"asc"===l?"\u25b2":""]})]})},ce=(n(63),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.breeds})),n=Object(o.c)((function(e){return e.loadingBreeds}));return Object(c.useEffect)((function(){e(A()),e(S()),e(B()),e(P())}),[]),Object(J.jsxs)("div",{className:"home-page",children:[Object(J.jsx)("div",{className:"header",children:Object(J.jsx)(U,{})}),Object(J.jsx)("div",{className:"search-bar",children:Object(J.jsx)(K,{})}),Object(J.jsxs)("div",{className:"filtersAndSorting",children:[Object(J.jsx)(te,{}),Object(J.jsx)(ne,{})]}),Object(J.jsxs)("div",{className:"dogs-list",children:[Object(J.jsx)("div",{className:"loading",children:n&&Object(J.jsx)("h2",{children:"Loading..."})}),Object(J.jsx)("div",{className:"dog-notfound",children:!n&&0===t.length&&Object(J.jsx)("h2",{children:"No dog found with the entered name"})}),!n&&t.length>0&&Object(J.jsx)(ee,{})]})]})}),re=function(e){var t=e.temperaments;return Array.isArray(t)?Object(J.jsx)(J.Fragment,{children:t.map((function(e,t){return Object(J.jsx)("li",{children:e},t)}))}):null},ae=function(e){var t,n=Object(o.b)(),r=Object(o.c)((function(e){return e.breedDetail})),a=e.match.params.id;Object(c.useEffect)((function(){n(T(a))}),[n,a]);return Object(J.jsxs)("div",{className:"breed-detail",children:[Object(J.jsx)("div",{className:"header",children:Object(J.jsx)(U,{})}),Object(J.jsxs)("div",{className:"breed-detail",children:[Object(J.jsx)("div",{className:"breed-id",children:Object(J.jsx)("h2",{children:r.id})}),Object(J.jsx)("hr",{}),Object(J.jsx)("div",{className:"breed-image",children:Object(J.jsx)("img",{src:null===(t=r.image)||void 0===t?void 0:t.url,alt:r.name})}),Object(J.jsxs)("div",{className:"breed-info",children:[Object(J.jsx)("hr",{}),Object(J.jsx)("h2",{children:r.name}),Object(J.jsx)("hr",{}),Object(J.jsx)("h4",{children:"Weight:"}),Object(J.jsxs)("h5",{children:[r.weight," "]}),Object(J.jsx)("h4",{children:"Height:"}),Object(J.jsxs)("h5",{children:[r.height," "]}),Object(J.jsx)("h4",{children:"Lifespan:"}),Object(J.jsx)("h5",{children:r.life_span}),Object(J.jsx)("hr",{}),Object(J.jsxs)("div",{children:[Object(J.jsx)("strong",{children:"Temperaments:"}),Object(J.jsx)(re,{temperaments:r.temperaments},r.id)]})]})]}),Object(J.jsx)("div",{className:"back-button-container",children:Object(J.jsx)("button",{className:"back-button",onClick:function(){e.history.goBack()},children:"Volver atr\xe1s"})})]})};var se=function(){return Object(J.jsxs)(i.a,{children:[Object(J.jsx)(W.a,{exact:!0,path:"/",component:q}),Object(J.jsx)(W.a,{path:"/home",component:ce}),Object(J.jsx)(W.a,{path:"/dogs/:id",component:ae})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(64);s.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(o.a,{store:I,children:Object(J.jsx)(i.a,{children:Object(J.jsx)(se,{})})})}),document.getElementById("root")),ie()}},[[65,1,2]]]);
//# sourceMappingURL=main.6b14f69c.chunk.js.map