!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.dynamicWidth=e():t.dynamicWidth=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){var r,i,a;r=t,i=e,a=o[e],(i=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}t.r(e),t.d(e,{calcWidth:()=>c,dynamicHeaderWidth:()=>f});var i={text:"",fontSize:14,font:"zh"===localStorage.lang?"PuHuiZh":"PuHuiEn",padding:24,sortWidth:24,deviation:0,extraWidth:0},a=document.createElement("canvas").getContext("2d"),c=function(t){if("object"===n(t)&&t instanceof Element)return t.offsetWidth;var e=t=o(o({},i),t),r=e.text,c=e.font,u=e.fontSize,f=e.padding,l=e.sortWidth,d=e.deviation,p=e.extraWidth,y=getComputedStyle(document.documentElement).fontFamily.split(","),b=y.length?y[0]:c;a.font="".concat(u,"px ").concat(b);var m=f+l+d+p,s=a.measureText(r).width+m;return Math.ceil(s)},u=function(t,e){return e.length-t.length},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o({},i),r=t.data,n=t.headerList,a=t.dynamicColumn,f={};a.forEach((function(t){var e=r.map((function(e){return e[t]})).sort(u)[0];f[t]=e})),a.forEach((function(t){var r=n.find((function(e){return e.prop===t}));if(r){var a=r.extraWidth,u=r.label,l=r.sortable,d=o(o({},i),{},{text:u});l||(d.sortWidth=0,e.sortWidth=0),a&&(d.extraWidth=a,e.extraWidth=a);var p=c(d),y=f[t];if(!y)return void(r.width=p);e.text=y;var b=c(e);r.width=Math.max(b,p)}}))};return e})()));