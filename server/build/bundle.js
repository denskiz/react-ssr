!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict";var n=l(r(3)),u=l(r(4)),o=l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}var i=(0,n.default)();i.use(n.default.static("public")),i.get("*",function(e,t){var r=(0,o.default)();t.send((0,u.default)(e,r))}),i.listen(3e3,function(){console.log("Listening on port 3000")})},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(0)),u=r(5),o=r(1),l=r(6),i=c(r(7));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return'\n  <html>\n    <head></head>\n    <body>\n      <div id="root">'+(0,u.renderToString)(n.default.createElement(l.Provider,{store:t},n.default.createElement(o.StaticRouter,{location:e.path,context:{}},n.default.createElement(i.default,null))))+'</div>\n      <script src="bundle.js"><\/script>\n    </body> \n  </html>'}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(0)),u=r(1),o=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("div",null,n.default.createElement(u.Route,{exact:!0,path:"/",component:o.default}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(){return n.default.createElement("div",null,n.default.createElement("div",null,"I'm the VERY VERY best home component"),n.default.createElement("button",{onClick:function(){return console.log("Hi There")}},"Press Me!"))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),u=function(e){return e&&e.__esModule?e:{default:e}}(r(11));t.default=function(){return(0,n.createStore)(reducers,{},(0,n.applyMiddleware)(u.default))}},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-thunk")}]);