(this["webpackJsonpcolors-slider"]=this["webpackJsonpcolors-slider"]||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),o=(a(28),a(6)),s=a(19),m=a(4),i=a(9),u=a(3),d={selectedColors:[],selectedImagesUrl:[],itemsToShow:[]};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA/ADD_NEW_COLOR":return Object(u.a)(Object(u.a)({},e),{},{selectedColors:[].concat(Object(i.a)(e.selectedColors),[t.newColor])});case"DATA/ADD_NEW_IMG_URL":return Object(u.a)(Object(u.a)({},e),{},{selectedImagesUrl:[].concat(Object(i.a)(e.selectedImagesUrl),[t.newImgUrl])});case"DATA/ADD_NEW_IMG_FILE":return Object(u.a)(Object(u.a)({},e),{},{selectedImagesFiles:[].concat(Object(i.a)(e.selectedImagesFiles),[t.newImgFile])});case"DATA/ADD_NEW_ITEM":return Object(u.a)(Object(u.a)({},e),{},{itemsToShow:[].concat(Object(i.a)(e.itemsToShow),[t.newItem])});case"DATA/REMOVE_COLOR":return Object(u.a)(Object(u.a)({},e),{},{selectedColors:e.selectedColors.filter((function(e){return e!==t.color}))});case"DATA/REMOVE_IMG":return Object(u.a)(Object(u.a)({},e),{},{selectedImagesUrl:e.selectedImagesUrl.filter((function(e){return e!==t.imgUrl}))});case"DATA/REMOVE_ITEM":return Object(u.a)(Object(u.a)({},e),{},{itemsToShow:e.itemsToShow.filter((function(e){return e!==t.item}))});default:return e}},v=Object(o.c)({data:E}),b=a(22);function g(e){return{type:"DATA/ADD_NEW_ITEM",newItem:e}}function f(e){return{type:"DATA/ADD_NEW_IMG_URL",newImgUrl:e}}function h(e){return{type:"DATA/REMOVE_ITEM",item:e}}function O(e,t){return function(a){if("file"===t)a(f(e)),a(g(e));else if("url"===t){var n="https://source.unsplash.com/random/".concat(Math.ceil(10*Math.random()));a(f(n)),a(g(n))}}}var N=Object(m.b)((function(e){return{selectedColors:e.data.selectedColors}}),null)((function(e){var t=Object(m.c)(),a=Object(n.useState)(""),r=Object(b.a)(a,2),l=r[0],o=r[1];function s(e){var a;t((a=e.target.getAttribute("removeitem"),function(e){e(function(e){return{type:"DATA/REMOVE_COLOR",color:e}}(a)),e(h(a))}))}var i=e.selectedColors.map((function(e){return c.a.createElement("div",{className:"col-sm-6 col-md-3 border p-0 preview-item",key:e},c.a.createElement("div",{style:{backgroundColor:e,height:100}}),c.a.createElement("button",{type:"button",removeitem:e,className:"remove-btn btn btn-danger",onClick:s},"\xd7"))}));return c.a.createElement("div",{className:"choose-color-area"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("div",{className:"col-md-3 my-auto"},c.a.createElement("label",null,"Choose a color: ")),c.a.createElement("div",{className:"col"},c.a.createElement("input",{className:"form-control",type:"color",value:l,onChange:function(e){var a;o(e.target.value),t((a=e.target.value,function(e){e(function(e){return{type:"DATA/ADD_NEW_COLOR",newColor:e}}(a)),e(g(a))}))}}))),c.a.createElement("div",{className:"chosen-colors"},c.a.createElement("div",{className:"row"},i)))}));a(18);var p=Object(m.b)((function(e){return{selectedImagesUrl:e.data.selectedImagesUrl}}),null)((function(e){var t=Object(m.c)();function a(e){var a;t((a=e.target.getAttribute("removeitem"),function(e){e(function(e){return{type:"DATA/REMOVE_IMG",imgUrl:e}}(a)),e(h(a))}))}var n=e.selectedImagesUrl.map((function(e){return c.a.createElement("div",{className:"col-sm-6 col-md-4 p-0 border preview-item",key:e},c.a.createElement("img",{src:e,alt:e}),c.a.createElement("button",{type:"button",className:"remove-btn btn btn-danger",removeitem:e,onClick:a},"\xd7"))}));return c.a.createElement("div",{className:"choose-image-area"},c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col my-2"},c.a.createElement("button",{type:"button",className:"btn btn-secondary w-100",onClick:function(){t(O(null,"url"))}},"Random image")),c.a.createElement("div",{className:"col-sm-6 my-2"},c.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputFile",accept:"image/jpeg, image/png",onChange:function(e){var a=e.target.files[0],n=new FileReader;n.onload=function(e){t(O(e.target.result,"file"))},n.readAsDataURL(a)}}),c.a.createElement("label",{className:"custom-file-label m-0",htmlFor:"inputFile"},"Upload"))),c.a.createElement("div",{className:"row mt-2"},n))}));var w=function(){return c.a.createElement("div",{className:"choose-area"},c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col my-2"},c.a.createElement(N,null))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col my-2"},c.a.createElement(p,null))))},A=a(11);var I=Object(m.b)((function(e){return{itemsToShow:e.data.itemsToShow}}),null)((function(e){var t=e.itemsToShow.map((function(e){return 0===e.indexOf("#")?c.a.createElement(A.a.Item,{key:"colorItem".concat(e)},c.a.createElement("div",{className:"border",style:{backgroundColor:e,height:500}})):c.a.createElement(A.a.Item,{key:"imgItem".concat(e),className:"text-center border"},c.a.createElement("img",{src:e,width:"100%",style:{height:500},alt:e}))}));return c.a.createElement(A.a,{style:{height:500},className:"border"},t.length?t:c.a.createElement("h4",{className:"text-center mt-5"},"Add colors and images to make an amazing slideshow"))}));var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(w,null)),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(I,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=Object(o.d)(v,Object(o.a)(s.a)),D=c.a.createElement(m.a,{store:y},c.a.createElement(j,null));window.store=y,l.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4e53d6df.chunk.js.map