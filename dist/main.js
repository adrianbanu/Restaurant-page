!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],u=n.base?o[0]+n.base:o[0],l=t[u]||0,d="".concat(u," ").concat(l);t[u]=l+1;var s=c(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:d,updater:g(f,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,s=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function f(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,m=0;function g(e,n){var t,r,a;if(n.singleton){var o=m++;t=b||(b=l(n)),r=f.bind(null,t,o,!1),a=f.bind(null,t,o,!0)}else t=l(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=u(e,n),l=0;l<t.length;l++){var d=c(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=o}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n  background-color: burlywood;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n#page-title {\r\n  text-align: center;\r\n}\r\n\r\n#page-subtitle{\r\n  text-align: center;\r\n  height: 50px;\r\n  background-repeat:no-repeat;\r\n  background-position: center;\r\n  background-size: 120px 40px;\r\n}\r\n\r\n.tabs {\r\n  max-width: 800px;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  border: 5px solid #ccc;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.tabs button {\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.5s;\r\n  font-size: 17px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\nbutton.active {\r\n  background-color: #ccc;\r\n}\r\n\r\n.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border: 5px solid #ccc;\r\n  border-top: none;\r\n  max-width: 800px;\r\n  margin: auto;\r\n  background-color: #fff;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var r=function(){let e=document.createElement("h1"),n=document.getElementById("content"),t=document.createElement("div"),r=document.createElement("div");return r.classList.add("tabs"),t.id="page-subtitle",e.textContent="Fancy restaurant",e.id="page-title",n.appendChild(e),n.appendChild(t),n.appendChild(r),{menuHeader:r}}();var a=function(e,n,t,a){let o=document.createElement("button");o.textContent=e,o.classList.add("tablinks"),o.id="button-"+n,r.menuHeader.appendChild(o);let i=document.createElement("div");i.id="tab-"+n,i.classList.add("tabcontent"),document.body.appendChild(i);let c=document.createElement("h3");c.textContent=t,i.appendChild(c);let u=document.createElement("p");u.innerHTML=a,i.appendChild(u)};var o=function(){a("Menu","menu","Meniul de azi","MENIU GRILL : PIEPT DE PUI + GARNITURA SI SALATA DE VARZA <b>..... 16 RON</b> <br><br>             MENIU GRILL : MUSCHI DE PORC + GARNITURA SI SALATA DE VARZA <b>..... 17 RON</b> <br><br>             GRILL SIMPLU : PIEPT DE PUI / CARNATI AFUMATI PORC <b>..... 12 RON</b> <br><br>              GRILL SIMPLU : MUSCHI DE PORC / CEAFĂ DE PORC <b>..... 13 RON</b> <br><br>             MICI SELGROS + CARTOFI PRAJITI, SALATA DE VARZA SI MUSTAR <b>..... 16 RON</b> <br><br>              CARNATI CABANOS AFUMATI + GARNITURA SI SALATA DE VARZA <b>..... 16 RON</b> <br><br>               MIX GRILL + GARNITURA SI SALATA DE VARZA <b>..... 20 RON</b>")};var i=function(){a("Contact","contact","Intrebari?","Vă rugăm să nu ezitați să luați legătura cu noi. <br><br>             Adresa: Bdul Iuliu Maniu, Nr 7, Corp-parcela 78, incinta APACA, Sector 6, Bucuresti. <br><br>             Program Livrari <br> Luni-Vineri: 09:30 - 14:00 <br><br>             Comenzi Telefonice <br> 0734 253 429 <br> 0755 773 782 <br><br>             Comenzi E-mail: fantasydelivery@gmail.com")};function c(e,n){var t,r,a;for(r=document.getElementsByClassName("tabcontent"),t=0;t<r.length;t++)r[t].style.display="none";for(a=document.getElementsByClassName("tablinks"),t=0;t<a.length;t++)a[t].className=a[t].className.replace(" active","");document.getElementById(n).style.display="block",e.currentTarget.className+=" active"}(function(){a("Home","home","Misiunea noastra","Ideea cu care am plecat la drum a fost aceea de a oferi clientilor nostri             cele trei calitati pe care le cauta la o firma de catering, mancare delicioasa             preparata intotdeauna cu ingrediente proaspete, preturi atractive si un timp de             livrare cat mai redus. <br><br>             Diversitatea preparatelor este o alta calitate a restaurantului, astfel inlaturand             orice urma de indoiala asupra prospetimii mancarii, pentru asta dar si pentru a evita             rutina, bucatarii nostri schimba zilnic meniul, poftele dvs. culinare fiind intotdeauna satisfacute.")})(),o(),i(),document.getElementById("button-home").addEventListener("click",(function(){c(event,"tab-home")})),document.getElementById("button-menu").addEventListener("click",(function(){c(event,"tab-menu")})),document.getElementById("button-contact").addEventListener("click",(function(){c(event,"tab-contact")})),document.getElementById("tab-home").style.display="block",document.body.style.backgroundImage="url('images/food.png')",document.getElementById("page-subtitle").style.backgroundImage="url('images/michelin-star-png-2.png')"}]);