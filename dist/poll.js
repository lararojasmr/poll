!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).poll={})}(this,(function(e){"use strict";e.default=async function(e,t,o=(()=>!1)){t=Math.max(0,t);do{if(await e(),o())break;await new Promise((e=>setTimeout(e,t)))}while(!o())},Object.defineProperty(e,"__esModule",{value:!0})}));
