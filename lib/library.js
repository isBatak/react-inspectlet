!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("library",[],t):"object"==typeof exports?exports.library=t():e.library=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),d=i(o);t["default"]={ReactInspectlet:d["default"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="[react-inspeclet]",i={initialize:function(e,t){return e?(window.__insp=window.__insp||[],window.__insp.push(["wid",e]),t&&t.debug&&window.__insp.push(["debug",!0]),void function(){function e(){if("undefined"==typeof window.__inspld){window.__inspld=1;var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.id="inspsync",e.src=("https:"==document.location.protocol?"https":"http")+"://cdn.inspectlet.com/inspectlet.js";var t=document.getElementsByTagName("head")[0];t.appendChild(e)}}setTimeout(e,500),"complete"!=document.readyState?window.attachEvent?window.attachEvent("onload",e):window.addEventListener("load",e,!1):e()}()):void console.warn(n,"wid is required")},virtualPage:function(){window.__insp.push(["virtualPage"])}};t["default"]=i}])});
//# sourceMappingURL=library.js.map