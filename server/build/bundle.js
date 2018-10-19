!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUsers=t.FETCH_USERS=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(12));var u=t.FETCH_USERS="fetch_users";t.fetchUsers=function(){return function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(u,o){try{var i=t[u](o),c=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}("next")})}}(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.default.get("http://react-ssr-api.herokuapp.com/users");case 2:r=e.sent,t({type:u,payload:r});case 4:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";var n=i(r(6)),u=i(r(7)),o=i(r(13));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,n.default)();c.use(n.default.static("public")),c.get("*",function(e,t){var r=(0,o.default)();t.send((0,u.default)(e,r))}),c.listen(3e3,function(){console.log("Listening on port 3000")})},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r(0)),u=r(8),o=r(1),i=r(2),c=r(17),a=f(r(9));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return'\n  <html>\n    <head></head>\n    <body>\n      <div id="root">'+(0,u.renderToString)(n.default.createElement(i.Provider,{store:t},n.default.createElement(o.StaticRouter,{location:e.path,context:{}},n.default.createElement("div",null,(0,c.renderRoutes)(a.default)))))+'</div>\n      <script src="bundle.js"><\/script>\n    </body> \n  </html>'}},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(r(0));var n=o(r(10)),u=o(r(11));function o(e){return e&&e.__esModule?e:{default:e}}t.default=[{path:"/",component:n.default,exact:!0},{path:"/users",component:u.default}]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(){return n.default.createElement("div",null,n.default.createElement("div",null,"I'm the VERY VERY best home component"),n.default.createElement("button",{onClick:function(){return console.log("Hi There")}},"Press Me!"))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(u),i=r(2),c=r(3);var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),n(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e){return o.default.createElement("li",{key:e.id},e.name)})}},{key:"render",value:function(){return o.default.createElement("div",null,"Here's a big list of users:",o.default.createElement("ul",null,this.renderUsers()),";")}}]),t}();t.default=(0,i.connect)(function(e){return{users:e.users}},{fetchUsers:c.fetchUsers})(a)},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),u=i(r(14)),o=i(r(15));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return(0,n.createStore)(o.default,{},(0,n.applyMiddleware)(u.default))}},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),u=function(e){return e&&e.__esModule?e:{default:e}}(r(16));t.default=(0,n.combineReducers)({users:u.default})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.FETCH_USERS:return t.payload.data;default:return e}}},function(e,t){e.exports=require("react-router-config")}]);