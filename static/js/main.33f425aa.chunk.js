(this["webpackJsonpself-frontend"]=this["webpackJsonpself-frontend"]||[]).push([[0],{10:function(n,t,e){n.exports=e.p+"static/media/GiantRobotLTD_Logo.e533bd92.svg"},11:function(n,t,e){n.exports=e(23)},16:function(n,t,e){},22:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),o=e(6),i=e.n(o),c=(e(16),e(2)),s=e(0),b=e(3),l=e(4),u=e(8),f=e.n(u);function d(){var n=Object(c.a)(['\n  ::after {\n    content: " REQUIRED";\n    color: ',";\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(c.a)(["\n  border: 1px solid ",";\n  background-color: #fff;\n"]);return m=function(){return n},n}function p(){var n=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  &:focus {\n    outline: 0;\n    border: 1px solid ",";\n    background-color: #fff;\n  }\n"]);return p=function(){return n},n}var O="#00ADEE",j="#666666",g="#F7F7F7",v="#E70000",h=Object(s.a)(p(),g,j,g,O),x=Object(s.a)(m(),v),w=Object(s.a)(d(),v),y=function(n){var t=n.val,e=n.submit,r=n.labelText,a=n.name,o=n.formBase,i=n.handleFormUpdate,c=e&&!t.length;return Object(s.b)("div",null,Object(s.b)("label",{htmlFor:a,css:c?w:""},r.toUpperCase()),Object(s.b)("br",null),Object(s.b)("input",{type:"text",name:a,value:t,css:[o,h,c?x:""],style:{background:t.length?"#fff":""},onChange:i}))},k=function(n){var t=n.firstName,e=n.lastName,r=n.address,a=n.addressTwo,o=n.successHandler,i=n.buttonBase,c=n.modalButton,b=n.toggleDialog;return Object(s.b)("div",null,Object(s.b)("h3",null,"Thanks!"),Object(s.b)("p",null," Please confirm the following data is correct: "),Object(s.b)("div",null,"Name: ",t," ",e),Object(s.b)("div",null,"Address: ",r," ",a),Object(s.b)("button",{css:i,onClick:o},"Yes!"),Object(s.b)("button",{css:[i,c],onClick:function(n){n.preventDefault(),b(!1)}},"Hang On!"))},N=e(9),D=e.n(N);e(21);function T(){var n=Object(c.a)(["\n  margin-left: 22px;\n"]);return T=function(){return n},n}function B(){var n=Object(c.a)(["\n  margin-top: 48px;\n  font-size 16px;\n  font-weight: 700;\n   @media (min-width: 1200px) {\n    width: initial;\n    padding: 0 24px;\n    display: inline-block;\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(c.a)(["\n  background: #FFAB44;\n  margin-top: 22px;\n  font-size 16px;\n  color: #fff;\n  border: none;\n  outline: none;\n"]);return F=function(){return n},n}function P(){var n=Object(c.a)(["\n  font: 14px Roboto;\n  margin: 12px;\n  padding-left: 16px;\n  width: 80%;\n  height: 48px;\n  border-radius: 6px;\n"]);return P=function(){return n},n}function E(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function U(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(e,!0).forEach((function(t){Object(b.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):E(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var A={firstName:"",lastName:"",address:"",addressTwo:"",submit:!1},R=Object(s.a)(P()),C=Object(s.a)(F()),S=Object(s.a)(B()),z=Object(s.a)(T()),L=function(){var n=Object(r.useState)(A),t=Object(l.a)(n,2),e=t[0],a=t[1],o=Object(r.useState)(!1),i=Object(l.a)(o,2),c=i[0],u=i[1],d=function(n){a(U({},e,Object(b.a)({},n.target.name,n.target.value)))},m=function(n){n.preventDefault(),a(U({},A)),u(!1)},p=e.firstName,O=e.lastName,j=e.address,g=e.addressTwo,v=e.submit;return Object(s.b)("form",{onSubmit:function(n){n.preventDefault();var t=Object.values(e).slice(0,-2).every((function(n){return n.length}));e.submit&&t?u(!0):a(U({},e,{submit:!0}))}},Object(s.b)(y,{val:p,name:"firstName",submit:v,labelText:"First Name",formBase:R,handleFormUpdate:d}),Object(s.b)(y,{val:O,name:"lastName",submit:v,labelText:"Last Name",formBase:R,handleFormUpdate:d}),Object(s.b)(y,{val:j,name:"address",submit:v,labelText:"Address",formBase:R,handleFormUpdate:d}),Object(s.b)(y,{val:g,name:"addressTwo",submit:!1,labelText:"Address 2 (optional)",formBase:R,handleFormUpdate:d}),Object(s.b)("button",{type:"submit",css:[R,C,S]},"Next ",Object(s.b)("img",{src:D.a,alt:"arrow"})),Object(s.b)(f.a,{visible:c,onClose:m},Object(s.b)(k,{firstName:p,lastName:O,address:j,addressTwo:g,successHandler:m,buttonBase:C,modalButton:z,toggleDialog:u})))},W=e(10),H=e.n(W);e(22);function G(){var n=Object(c.a)(["\n  margin: 32px auto;\n  margin-left: 10%;\n  margin-right: auto;\n  @media (min-width: ","px) {\n    width: 38%;\n    margin 114px auto;\n    padding: 24px;\n    display: inline-block;\n  }\n"]);return G=function(){return n},n}function I(){var n=Object(c.a)(["\n  margin: 32px auto;\n  height: 26px;\n  width: 177px;\n"]);return I=function(){return n},n}function J(){var n=Object(c.a)(["\n  background-color: #585858;\n  font-size: 14px;\n  color: #ffffff;\n  padding: 2em;\n  h1 {\n    font-size: 24px;\n    font-weight: 700;\n    font-family: Roboto, sans-serif;\n  }\n  @media (min-width: ","px) {\n    height: 100vh;\n    width: 58%;\n    display: inline-block;\n    float: left;\n  }\n"]);return J=function(){return n},n}var _=Object(s.a)(J(),1200),Q=Object(s.a)(I()),Y=Object(s.a)(G(),1200),$=function(){return Object(s.b)("div",null,Object(s.b)("div",{css:_},Object(s.b)("img",{css:Q,src:H.a,alt:"Giant Robot LTD logo"}),Object(s.b)("h1",null,"Welcome"),Object(s.b)("p",null,"Please tell us a bit about yourself to get started")),Object(s.b)("div",{css:Y},Object(s.b)(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},9:function(n,t,e){n.exports=e.p+"static/media/White_Arrow.7ef17c69.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.33f425aa.chunk.js.map