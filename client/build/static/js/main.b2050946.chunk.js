(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(24),s=n.n(a),i=n(15),o=n(4),l=n(25),u=n(38),j=n(37),b=n(41),d=n(5),h=n(8),O=n(14),m=n(74),p="CREATE_NEW_DOG",f="GET_ALL_BREEDS",x="GET_BREED_DETAIL",g="GET_ALL_TEMPERAMENTS",v="FILTER_BY_TEMPERAMENT",N="FILTER_BY_ORIGIN",y="SORT_BREEDS_BY_NAME",E="SORT_BREEDS_BY_WEIGHT",w="CHANGE_PAGE",k="CLEAR_SEARCH",C="CLEAR_FILTERS",A="LOADING_BREEDS",D=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){var c;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n({type:A}),c=[],!e){t.next=9;break}return t.next=6,m.a.get("http://localhost:3001/dogs/name?name=".concat(e));case 6:c=t.sent,t.next=12;break;case 9:return t.next=11,m.a.get("http://localhost:3001/dogs");case 11:c=t.sent;case 12:n({type:f,payload:c.data}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){var c;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("http://localhost:3001/dogs/id/".concat(e));case 3:c=t.sent,n({type:x,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("http://localhost:3001/dogs/temperaments");case 3:n=e.sent,t({type:g,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:y,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:E,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:w,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:C});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:k});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L={newDog:null,breeds:[],breedDetail:{},allTemperaments:[],selectedTemperament:null,selectedOrigin:null,searchResults:[],sortOrder:"",currentPage:1,breedsPerPage:8,error:"",loadingBreeds:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},e),{},{newDog:t.payload,error:""});case A:return Object(d.a)(Object(d.a)({},e),{},{loadingBreeds:!0,error:""});case x:return Object(d.a)(Object(d.a)({},e),{},{breedDetail:t.payload,error:""});case f:return Object(d.a)(Object(d.a)({},e),{},{breeds:t.payload,currentPage:1,breedsPerPage:8,error:"",loadingBreeds:!1});case g:return Object(d.a)(Object(d.a)({},e),{},{allTemperaments:t.payload,error:""});case v:return Object(d.a)(Object(d.a)({},e),{},{selectedTemperament:t.payload,currentPage:1,error:""});case N:return Object(d.a)(Object(d.a)({},e),{},{selectedOrigin:t.payload,currentPage:1,error:""});case y:case E:return Object(d.a)(Object(d.a)({},e),{},{sortOrder:t.payload});case w:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.payload,error:""});case k:return Object(d.a)(Object(d.a)({},e),{},{searchResults:[],error:""});case C:return Object(d.a)(Object(d.a)({},e),{},{filteredByTemperament:null,filteredByOrigin:null,sortOrder:"",breeds:Object(b.a)(e.breeds),error:""});default:return e}},W=[u.a],G=Object(l.createStore)(I,Object(j.composeWithDevTools)(l.applyMiddleware.apply(void 0,W))),H=(n(53),n(7)),M=n(16),q=n(17),Y=n(39),z=n(40),J=(n(54),n(0)),Z=function(e){Object(Y.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(M.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleEnterClick=function(){e.props.history.push("/home")},e}return Object(q.a)(n,[{key:"render",value:function(){return Object(J.jsxs)("div",{className:"landing-page",children:[Object(J.jsx)("h1",{children:"Welcome To Henry Dogs"}),Object(J.jsx)("button",{onClick:this.handleEnterClick,children:"Enter To Store"})]})}}]),n}(c.Component),$=Object(H.f)(Z),K=n(9),Q=(n(61),function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(K.a)(t,2),r=n[0],a=n[1];return Object(J.jsxs)("div",{className:"search-bar",children:[Object(J.jsx)("input",{className:"input-search",type:"text",placeholder:"Search by breed name...",value:r,onChange:function(e){a(e.target.value)}}),r&&Object(J.jsx)("button",{type:"reset",className:"clear-button",onClick:function(){return a("")},children:"x"}),Object(J.jsx)("button",{type:"search",className:"search-button",onClick:function(t){t.preventDefault(),e(D(r.trim())),a(""),console.log(r)},children:"Search"})]})}),U=n.p+"static/media/favicon2.41f4ff62.png",V=(n(62),function(){var e=Object(H.e)(),t=Object(o.b)(),n=function(){t(D()),e.push("/home"),window.location.reload(),t(S()),t(R()),t(F())};return Object(J.jsx)("header",{className:"header",children:Object(J.jsxs)("div",{className:"header-container",children:[Object(J.jsxs)("div",{className:"header-left",children:[Object(J.jsx)(i.b,{to:"/home",onClick:n,children:Object(J.jsx)("img",{src:U,alt:"Dog App Logo"})}),Object(J.jsx)("h1",{children:"Henry Dogs Store"})]}),Object(J.jsxs)("div",{className:"header-right",children:[Object(J.jsx)("button",{onClick:n,className:"button_home",children:"Home"}),Object(J.jsx)("button",{onClick:function(){e.push("/")},className:"button_exit",children:"Exit"})]})]})})}),X=(n(63),function(e){var t=e.temperaments;return Array.isArray(t)?Object(J.jsx)(J.Fragment,{children:t.map((function(e,t){return Object(J.jsx)("li",{children:e},t)}))}):null}),ee=function(e){var t=e.breed,n=Object(o.b)();return Object(J.jsxs)("div",{className:"breed-card",onClick:function(){n(T(t.id))},children:[Object(J.jsx)("div",{className:"breed-image",children:Object(J.jsx)("img",{width:120,src:t.image,alt:t.name})}),Object(J.jsxs)("div",{className:"breed-info",children:[Object(J.jsx)("h1",{children:t.name}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"Temperaments:"}),Object(J.jsx)("h5",{children:Object(J.jsx)(X,{temperaments:t.temperaments},t.id)})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"Weight:"}),Object(J.jsx)("h5",{children:t.weight})]}),Object(J.jsx)("div",{className:"button-detail",children:Object(J.jsx)("button",{children:Object(J.jsx)(i.b,{to:{pathname:"/dogs/".concat(t.id),state:{breed:t}},children:"See details"})})})]})]})},te=(n(64),function(e){var t=e.total,n=Object(o.b)(),r=Object(o.c)((function(e){return e.breedsPerPage})),a=Object(o.c)((function(e){return e.currentPage})),s=Object(c.useState)(!1),i=Object(K.a)(s,2),l=i[0],u=i[1],j=Object(c.useState)(!1),b=Object(K.a)(j,2),d=b[0],h=b[1];Object(c.useEffect)((function(){u(a>1),h(a<Math.ceil(t/r))}),[a,t,r]);return Object(J.jsx)("nav",{className:"pagination-bar",children:Object(J.jsxs)("div",{className:"pagination",children:[Object(J.jsx)("button",{disabled:!l,onClick:function(){n(B(a-1))},className:"page-button",children:"Prev"}),Array.from(Array(Math.ceil(t/r)).keys()).map((function(e){return Object(J.jsx)("button",{onClick:function(){n(B(e+1))},className:"page-button ".concat(a===e+1?"active":""),children:e+1},e)})),Object(J.jsx)("button",{disabled:!d,onClick:function(){n(B(a+1))},className:"page-button",children:"Next"})]})})}),ne=(n(65),function(){var e,t=Object(o.c)((function(e){return e.breeds})),n=Object(o.c)((function(e){return e.currentPage})),r=Object(o.c)((function(e){return e.breedsPerPage})),a=Object(o.c)((function(e){return e.selectedOrigin})),s=Object(o.c)((function(e){return e.selectedTemperament})),i=Object(o.c)((function(e){return e.sortOrder})),l=Object(c.useState)([]),u=Object(K.a)(l,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){var e=t;return a&&(e=e.filter((function(e){return e.source===a}))),s&&(e=e.filter((function(e){var t;return null===(t=e.temperaments)||void 0===t?void 0:t.some((function(e){return e===s}))}))),i&&("ascName"===i?e.sort((function(e,t){return e.name.localeCompare(t.name)})):"descName"===i&&e.sort((function(e,t){return t.name.localeCompare(e.name)})),"ascWeight"===i?e.sort((function(e,t){return parseInt(e.weight)-parseInt(t.weight)})):"descWeight"===i&&e.sort((function(e,t){return parseInt(t.weight)-parseInt(e.weight)}))),b(e),function(){b(t)}}),[a,s,t,i]),Object(J.jsxs)("div",{className:"dogsList",children:[Object(J.jsx)("div",{className:"pagination",children:Object(J.jsx)(te,{total:j.length})}),Object(J.jsx)("div",{className:"dogCardAllDogs",children:(e=j,e.slice((n-1)*r,n*r)).map((function(e){return Object(J.jsx)(ee,{breed:e},e.id)}))})]})}),ce=(n(66),function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(K.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(K.a)(s,2),l=i[0],u=i[1],j=Object(o.c)((function(e){return e.allTemperaments}));Object(c.useEffect)((function(){e(D()),e(S())}),[e]);var b=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:N,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r))},d=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:v,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l))},m=function(t){t.preventDefault(),e(R()),a(""),u("")};return Object(J.jsxs)("div",{className:"filters",children:[Object(J.jsxs)("form",{className:"originfilter",onSubmit:b,children:[Object(J.jsx)("label",{htmlFor:"origin",children:"Filter by origin:"}),Object(J.jsxs)("select",{id:"origin",value:r,onChange:function(e){a(e.target.value)},children:[Object(J.jsx)("option",{value:"",children:"Any"}),Object(J.jsx)("option",{value:"api",children:"Api"}),Object(J.jsx)("option",{value:"db",children:"DataBase"})]}),Object(J.jsx)("button",{className:"originfilter-button",onClick:b,type:"submit",children:"Apply"}),r&&Object(J.jsx)("button",{className:"clearfilters-button",onClick:m,children:"Clear Filters"})]}),Object(J.jsxs)("form",{className:"temperamentfilter",onSubmit:d,children:[Object(J.jsx)("label",{htmlFor:"temperament",children:"Filter by temperament:"}),Object(J.jsxs)("select",{id:"temperament",value:l,onChange:function(e){u(e.target.value)},children:[Object(J.jsx)("option",{value:"",children:"All temperaments"}),j.map((function(e,t){return Object(J.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(J.jsx)("button",{className:"temperamentfilter-button",onClick:d,type:"submit",children:"Apply"}),l&&Object(J.jsx)("button",{className:"clearfilters-button",onClick:m,children:"Clear Filters"})]})]})}),re=(n(67),function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(K.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(K.a)(s,2),l=i[0],u=i[1];return Object(J.jsxs)("div",{className:"sorting",children:[Object(J.jsx)("label",{children:"Sort by:"}),Object(J.jsxs)("button",{className:"namesorting-button",onClick:function(){"asc"===r||""===r?(e(_("descName")),a("desc")):(e(_("ascName")),a("asc")),u("")},children:["Name ","desc"===r?"\u25bc":"asc"===r?"\u25b2":""]}),Object(J.jsxs)("button",{className:"weightsorting-button",onClick:function(){"asc"===l||""===l?(e(P("descWeight")),u("desc")):(e(P("ascWeight")),u("asc")),a("")},children:["Weight ","desc"===l?"\u25bc":"asc"===l?"\u25b2":""]})]})}),ae=(n(68),function(){var e=Object(H.e)(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.breeds})),r=Object(o.c)((function(e){return e.loadingBreeds})),a=Object(c.useState)(!1),s=Object(K.a)(a,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){t(D()),t(S()),t(R()),t(F())}),[]),Object(J.jsxs)("div",{className:"home-page",children:[Object(J.jsx)("div",{className:"header",children:Object(J.jsx)(V,{onReload:function(){l(!i)}})}),Object(J.jsx)("div",{className:"search-bar",children:Object(J.jsx)(Q,{})}),Object(J.jsxs)("div",{className:"filtersAndSorting",children:[Object(J.jsx)(ce,{}),Object(J.jsx)(re,{})]}),Object(J.jsx)("button",{className:"create-newdog",onClick:function(){return e.push("/create")},children:"Created New Dog"}),Object(J.jsxs)("div",{className:"dogs-list",children:[Object(J.jsx)("div",{className:"loading",children:r&&Object(J.jsx)("h2",{children:"Loading..."})}),Object(J.jsx)("div",{className:"dog-notfound",children:!r&&0===n.length&&Object(J.jsx)("h2",{children:"No dog found with the entered name"})}),!r&&n.length>0&&Object(J.jsx)(ne,{},i)]})]})}),se=(n(69),function(e){var t=e.temperaments;return Array.isArray(t)?Object(J.jsx)(J.Fragment,{children:t.map((function(e,t){return Object(J.jsx)("li",{children:e},t)}))}):null}),ie=function(e){var t,n=Object(o.b)(),r=Object(o.c)((function(e){return e.breedDetail})),a=e.match.params.id;Object(c.useEffect)((function(){n(T(a))}),[n,a]);return Object(J.jsxs)("div",{className:"breeddetail-container",children:[Object(J.jsx)("div",{className:"header",children:Object(J.jsx)(V,{})}),Object(J.jsxs)("div",{className:"breeddetail-view",children:[Object(J.jsxs)("div",{className:"breed-id-detail",children:[Object(J.jsxs)("h2",{children:[" id # ",r.id]}),Object(J.jsx)("hr",{})]}),Object(J.jsx)("hr",{}),Object(J.jsx)("div",{className:"breed-image-detail",children:Object(J.jsx)("img",{src:null===(t=r.image)||void 0===t?void 0:t.url,alt:r.name})}),Object(J.jsxs)("div",{className:"breed-info-detail",children:[Object(J.jsx)("hr",{}),Object(J.jsx)("h2",{children:r.name}),Object(J.jsx)("hr",{}),Object(J.jsx)("h4",{children:"Weight:"}),Object(J.jsxs)("h5",{children:[r.weight," "]}),Object(J.jsx)("h4",{children:"Height:"}),Object(J.jsxs)("h5",{children:[r.height," "]}),Object(J.jsx)("h4",{children:"Lifespan:"}),Object(J.jsx)("h5",{children:r.life_span}),Object(J.jsx)("hr",{}),Object(J.jsxs)("div",{className:"breed-detail-temps",children:[Object(J.jsx)("strong",{children:"Temperaments:"}),Object(J.jsx)(se,{temperaments:r.temperaments},r.id)]})]}),Object(J.jsx)("div",{className:"back-button-detail",children:Object(J.jsx)("button",{onClick:function(){e.history.goBack()},children:"Go Back"})})]})]})},oe=n(26),le=(n(70),function(e){var t=Object(H.e)(),n=Object(o.b)(),r=Object(c.useState)({name:"",height:"",weight:"",life_span:"",temperaments:[]}),a=Object(K.a)(r,2),s=a[0],i=a[1],l=function(e){var t=e.target,n=t.name,c=t.value;i(Object(d.a)(Object(d.a)({},s),{},Object(oe.a)({},n,c)))},u=function(e){e.preventDefault();var c,r=s.name,a=s.height,i=s.weight,o=s.temperaments;r?/^[a-zA-Z\s]*$/.test(r)?a&&i?o&&0!==o.length?n((c=s,function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("dogData :>> ",c),e.next=4,m.a.post("http://localhost:3001/dogs",c);case 4:n=e.sent,alert("Perro creado correctamente!"),t({type:p,payload:n.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Error al crear el perro"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())).then((function(){return t.push("/home")})):alert("Debe seleccionar al menos un temperamento"):alert("Debe completar todos los campos de altura y peso"):alert("El nombre no puede contener n\xfameros ni caracteres especiales"):alert("Debe ingresar un nombre para la raza")};return Object(J.jsx)("div",{className:"form-create",children:Object(J.jsxs)("form",{onSubmit:u,className:"form-createnewdog",children:[Object(J.jsx)("div",{className:"header",children:Object(J.jsx)(V,{})}),Object(J.jsx)("h2",{children:"DATA TO CREATE A NEW DOG"}),Object(J.jsx)("label",{className:"form-name",htmlFor:"name",children:"Name:"}),Object(J.jsx)("input",{className:"input-createdog",type:"text",id:"name",name:"name",value:s.name,placeholder:"Breed name... Ej. Pitbull",onChange:l,required:!0}),Object(J.jsx)("br",{}),Object(J.jsx)("label",{className:"form-height",htmlFor:"Height",children:"Height:"}),Object(J.jsx)("input",{className:"input-createdog",type:"number",id:"height",name:"height",placeholder:"Ej. 45-54 cm",value:s.height,onChange:l,required:!0}),Object(J.jsx)("br",{}),Object(J.jsx)("label",{className:"form-weight",htmlFor:"Weight",children:"Weight:"}),Object(J.jsx)("input",{className:"input-createdog",type:"number",id:"weight",name:"weight",placeholder:"Ej. 45-54 kg",value:s.weight,onChange:l,required:!0}),Object(J.jsx)("br",{}),Object(J.jsx)("label",{className:"form-lifespan",htmlFor:"life_span",children:"Life Span:"}),Object(J.jsx)("input",{className:"input-createdog",type:"number",id:"life_span",name:"life_span",value:s.life_span,placeholder:"Ej. 8-13 years",onChange:l,required:!0}),Object(J.jsx)("br",{}),Object(J.jsx)("label",{className:"form-temperament",htmlFor:"temperaments",children:"Temperaments:"}),Object(J.jsx)("input",{className:"input-createdog",type:"text",id:"temperaments",name:"temperaments",placeholder:"Temperaments... Ej. Active, Curious, Playful, Confident, Intelligent, Courageous",value:s.temperaments,onChange:function(e){var t=e.target.value.split(",");i(Object(d.a)(Object(d.a)({},s),{},{temperaments:t}))}}),Object(J.jsx)("br",{}),Object(J.jsx)("button",{className:"createdNewDog",type:"submit",onClick:u,children:"Create New Dog"}),Object(J.jsx)("div",{className:"back-button-detail",children:Object(J.jsx)("button",{onClick:function(){e.history.goBack()},children:"Go Back"})})]})})});var ue=function(){return Object(J.jsxs)(i.a,{children:[Object(J.jsx)(H.a,{exact:!0,path:"/",component:$}),Object(J.jsx)(H.a,{path:"/home",component:ae}),Object(J.jsx)(H.a,{path:"/create",component:le}),Object(J.jsx)(H.a,{path:"/dogs/:id",component:ie})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(71);s.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(o.a,{store:G,children:Object(J.jsx)(i.a,{children:Object(J.jsx)(ue,{})})})}),document.getElementById("root")),je()}},[[72,1,2]]]);
//# sourceMappingURL=main.b2050946.chunk.js.map