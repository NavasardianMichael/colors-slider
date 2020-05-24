(this["webpackJsonpcolors-slider"]=this["webpackJsonpcolors-slider"]||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),l=a.n(r),o=(a(28),a(6)),s=a(20),m=a(4),i=a(10),u=a(3),d={selectedColors:[],selectedImagesUrl:[],selectedImagesFiles:[],itemsToShow:[]};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA/ADD_NEW_COLOR":return Object(u.a)(Object(u.a)({},e),{},{selectedColors:[].concat(Object(i.a)(e.selectedColors),[t.newColor])});case"DATA/ADD_NEW_IMG_URL":return Object(u.a)(Object(u.a)({},e),{},{selectedImagesUrl:[].concat(Object(i.a)(e.selectedImagesUrl),[t.newImgUrl])});case"DATA/ADD_NEW_IMG_FILE":return Object(u.a)(Object(u.a)({},e),{},{selectedImagesFiles:[].concat(Object(i.a)(e.selectedImagesFiles),[t.newImgFile])});case"DATA/ADD_NEW_ITEM":return Object(u.a)(Object(u.a)({},e),{},{itemsToShow:[].concat(Object(i.a)(e.itemsToShow),[t.newItem])});case"DATA/REMOVE_COLOR":return Object(u.a)(Object(u.a)({},e),{},{selectedColors:e.selectedColors.filter((function(e){return e!==t.color}))});case"DATA/REMOVE_IMG":return Object(u.a)(Object(u.a)({},e),{},{selectedImagesUrl:e.selectedImagesUrl.filter((function(e){return e!==t.imgUrl}))});case"DATA/REMOVE_ITEM":return Object(u.a)(Object(u.a)({},e),{},{itemsToShow:e.itemsToShow.filter((function(e){return e!==t.item}))});default:return e}},b=Object(o.c)({data:E}),v=a(9);function g(e){return{type:"DATA/ADD_NEW_ITEM",newItem:e}}function f(e){return{type:"DATA/REMOVE_ITEM",item:e}}function O(e){return function(t){t(function(e){return{type:"DATA/ADD_NEW_IMG_URL",newImgUrl:e}}(e)),t(g(e))}}var h=Object(m.b)((function(e){return{selectedColors:e.data.selectedColors}}),null)((function(e){var t=Object(m.c)(),a=Object(c.useState)(""),r=Object(v.a)(a,2),l=r[0],o=r[1];function s(e){var a;t((a=e.target.getAttribute("removeitem"),function(e){e(function(e){return{type:"DATA/REMOVE_COLOR",color:e}}(a)),e(f(a))}))}var i=e.selectedColors.map((function(e){return n.a.createElement("div",{className:"col-sm-6 col-md-3 border p-0 preview-item",key:e},n.a.createElement("div",{style:{backgroundColor:e,height:100}}),n.a.createElement("button",{type:"button",removeitem:e,className:"remove-btn btn btn-danger",onClick:s},"\xd7"))}));return n.a.createElement("div",{className:"choose-color-area"},n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-md-3 my-auto"},n.a.createElement("label",null,"Choose color: ")),n.a.createElement("div",{className:"col"},n.a.createElement("input",{className:"form-control",type:"color",value:l,onChange:function(e){var a;o(e.target.value),t((a=e.target.value,function(e){e(function(e){return{type:"DATA/ADD_NEW_COLOR",newColor:e}}(a)),e(g(a))}))}}))),n.a.createElement("div",{className:"chosen-colors"},n.a.createElement("div",{className:"row"},i)))}));a(19);var p=Object(m.b)((function(e){return{selectedImagesUrl:e.data.selectedImagesUrl}}),null)((function(e){var t=Object(m.c)(),a=Object(c.useState)(),r=Object(v.a)(a,2),l=(r[0],r[1]),o=Object(c.useState)(""),s=Object(v.a)(o,2);function i(e){var a;t((a=e.target.getAttribute("removeitem"),function(e){e(function(e){return{type:"DATA/REMOVE_IMG",imgUrl:e}}(a)),e(f(a))}))}s[0],s[1];var u=e.selectedImagesUrl.map((function(e){return n.a.createElement("div",{className:"col-sm-6 col-md-4 p-0 border preview-item",key:e},n.a.createElement("img",{src:e}),n.a.createElement("button",{type:"button",className:"remove-btn btn btn-danger",removeitem:e,onClick:i},"\xd7"))}));return n.a.createElement("div",{className:"choose-image-area"},n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col pl-0"},n.a.createElement("button",{type:"button",className:"btn btn-secondary w-100",onClick:function(){var e="https://source.unsplash.com/random/".concat(Math.ceil(10*Math.random()));l(e),t(O(e))}},"Random image")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputFile",accept:"image/jpeg, image/png",onChange:function(e){var a=e.target.files[0],c=new FileReader;c.onload=function(e){l(e.target.result),t(O(e.target.result))},c.readAsDataURL(a)}}),n.a.createElement("label",{className:"custom-file-label m-0",htmlFor:"inputFile"},"Upload"))),n.a.createElement("div",{className:"row mt-2"},u))}));var N=function(){return n.a.createElement("div",{className:"my-3 choose-area"},n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col my-2"},n.a.createElement(h,null))),n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col my-2"},n.a.createElement(p,null))))},w=a(12);var A=Object(m.b)((function(e){return{itemsToShow:e.data.itemsToShow}}),null)((function(e){var t=e.itemsToShow.map((function(e){return 0===e.indexOf("#")?n.a.createElement(w.a.Item,{key:"colorItem".concat(e)},n.a.createElement("div",{className:"border",style:{backgroundColor:e,height:500}})):n.a.createElement(w.a.Item,{key:"imgItem".concat(e),className:"text-center border"},n.a.createElement("img",{src:e,style:{height:500}}))}));return n.a.createElement(w.a,{style:{height:500},className:"border"},t.length?t:n.a.createElement("h4",{className:"text-center mt-5"},"Add colors and images to make an amazing slideshow"))}));var j=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(N,null)),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(o.d)(b,Object(o.a)(s.a)),D=n.a.createElement(m.a,{store:I},n.a.createElement(j,null));window.store=I,l.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.38be7f43.chunk.js.map