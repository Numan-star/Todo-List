(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(10),a(1)),s=a(4);a(12);function m(){return l.a.createElement("footer",{className:"footer bg-dark text-light mt-5"},l.a.createElement("div",{className:"container text-center py-2"},l.a.createElement("p",null,"Copyright \xa9 Numan | Star ")))}function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About"))),e.serachBar?l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"Numan | Star")))}function u(e){var t=e.todo,a=e.onDelete;return l.a.createElement("div",{className:"my-4"},l.a.createElement("h3",null,t.title),l.a.createElement("p",null,t.description),l.a.createElement("button",{className:"btn-sm btn-danger btn",onClick:function(){a(t)}},"Delete"))}function d(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{minHeight:"31vh"}},l.a.createElement("h3",{className:"text-center my-4"},"Todos List"),0===e.todos.length?"No Todos To Display":e.todos.map(function(t){return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})," ",l.a.createElement("hr",null))})))}function b(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(c.a)(a,2),o=r[0],s=r[1],m=Object(n.useState)(""),i=Object(c.a)(m,2),u=i[0],d=i[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"text-center my-3"},"Add Todos"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&u?(t(o,u),s(""),d("")):alert("Title and Description is not blanked")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo Title"),l.a.createElement("input",{type:"text",value:o,onChange:function(e){return s(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Todo Description"),l.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)},className:"form-control",id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success"},"Add Todo")))}i.defaultProps={};var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(r))},[r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"Todos List",searchBar:!0}),l.a.createElement(b,{addTodo:function(e,t){console.log("Add Todo",e,t);var a={sno:0===r.length?0:r[r.length-1].sno+1,title:e,description:t};o([].concat(Object(s.a)(r),[a])),console.log(a)}}),l.a.createElement(d,{todos:r,onDelete:function(e){console.log("I am on delete",e),o(r.filter(function(t){return t!==e})),localStorage.setItem("todos",JSON.stringify(r))}}),l.a.createElement(m,null))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,15)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),E()},5:function(e,t,a){e.exports=a(14)}},[[5,3,2]]]);
//# sourceMappingURL=main.e917c979.chunk.js.map