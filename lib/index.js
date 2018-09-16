!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("history"),require("react-router"),require("react-spring"));else if("function"==typeof define&&define.amd)define(["react","history","react-router","react-spring"],t);else{var n="object"==typeof exports?t(require("react"),require("history"),require("react-router"),require("react-spring")):t(e.react,e.history,e["react-router"],e["react-spring"]);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},
/*!******************************!*\
  !*** ./src/routerHistory.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hashChange=f,Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return r.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return r.Router}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return r.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return r.Redirect}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return r.Switch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return r.withRouter}}),t.goToHome=t.position=t.historyRemoveListen=t.historyAddListen=t.nowHistory=t.history=void 0;var o=n(/*! history */10),r=n(/*! react-router */11),i="#";t.position=i;var u=(0,o.createMemoryHistory)();t.history=u;var a={index:0,length:1,pathname:"/",search:"",hash:"",state:void 0,key:""};t.nowHistory=a;var c={},s=0;t.historyAddListen=function(e){return c[s+=1]=e,s};function f(){try{if(window.location.href.split(i)[1]!==a.pathname){for(var e=u.entries[u.length-2].pathname,t=0;t<u.length;t++)u.index>1&&u.goBack();u.push(e,{noAnime:!0})}}catch(e){}}t.historyRemoveListen=function(e){c[e]=void 0},u.listen(function(e){try{for(var n in a.key!==e.key&&(t.nowHistory=a={index:u.index,length:u.length,pathname:e.pathname,search:e.search,hash:e.hash,state:e.state,key:e.key},window.location&&(window.location.href=i+e.pathname)),c)c[n]&&c[n](u,e)}catch(e){}}),window.location||(window.location={href:"",hash:"",pathname:"",hostname:"",port:""});try{if("onhashchange"in window&&(void 0===document.documentMode||8===document.documentMode))window.onhashchange=f;else{var l=window.location.hash;setInterval(function(){l===window.location.hash&&f()},350)}}catch(e){}t.goToHome=function(){for(var e=u.entries[1].pathname,t=0;t<u.length;t++)u.index>1&&u.goBack();u.push(e)}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ../helpers/typeof */13),r=n(/*! ./assertThisInitialized */14);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ./setPrototypeOf */15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(t,n){t.exports=e},
/*!**************************!*\
  !*** ./src/isIphoneX.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=/iphone/gi.test(navigator.userAgent)&&812===window.screen.height&&375===window.screen.width;t.default=o},
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var o=n(/*! @babel/runtime/helpers/interopRequireDefault */0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hashChange",{enumerable:!0,get:function(){return r.hashChange}}),Object.defineProperty(t,"history",{enumerable:!0,get:function(){return r.history}}),Object.defineProperty(t,"nowHistory",{enumerable:!0,get:function(){return r.nowHistory}}),Object.defineProperty(t,"position",{enumerable:!0,get:function(){return r.position}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return r.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return r.Redirect}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return r.Router}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return r.Route}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return r.Switch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return r.withRouter}}),Object.defineProperty(t,"historyAddListen",{enumerable:!0,get:function(){return r.historyAddListen}}),Object.defineProperty(t,"historyRemoveListen",{enumerable:!0,get:function(){return r.historyRemoveListen}}),Object.defineProperty(t,"goToHome",{enumerable:!0,get:function(){return r.goToHome}}),Object.defineProperty(t,"NaviBar",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NaviRoute",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"isIphoneX",{enumerable:!0,get:function(){return a.default}});var r=n(/*! ./routerHistory */1),i=o(n(/*! ./NaviBar */12)),u=o(n(/*! ./NaviRoute */16)),a=o(n(/*! ./isIphoneX */8))},
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,n){e.exports=t},
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=n},
/*!************************!*\
  !*** ./src/NaviBar.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var o=n(/*! @babel/runtime/helpers/interopRequireDefault */0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,u=o(n(/*! @babel/runtime/helpers/classCallCheck */2)),a=o(n(/*! @babel/runtime/helpers/createClass */3)),c=o(n(/*! @babel/runtime/helpers/possibleConstructorReturn */4)),s=o(n(/*! @babel/runtime/helpers/getPrototypeOf */5)),f=o(n(/*! @babel/runtime/helpers/inherits */6)),l=o(n(/*! react */7)),p=n(/*! ./routerHistory */1),d=o(n(/*! ./isIphoneX */8)),h=50,m="web"===window.plan?0:d.default?42:20;function y(){p.history.goBack()}i=r=function(e){function t(){var e,n;(0,u.default)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=(0,c.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(r)))).historyAddListenID=0,n}return(0,f.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return l.default.createElement(View,{style:[b.container,this.props.style]},!this.props.root&&this.props.leftButton(this.props.leftTitle),this.props.middleButton(this.props.title),this.props.rightButton())}}]),t}(l.default.PureComponent),r.defaultProps={leftTitle:"< goback",title:"home",middleButton:function(e){return l.default.createElement("div",null,e)},leftButton:function(e){return l.default.createElement("div",{onClick:y,style:b.leftButton},e)},rightButton:function(){return null}};var b={container:{flexDirection:"row",flex:1,maxHeight:h+m,minHeight:h+m,padding:16,paddingTop:16+m,width:"100%",alignItems:"center",justifyContent:"center"},leftButton:{position:"absolute",maxHeight:h,minHeight:h,left:16,top:m,alignItems:"center",justifyContent:"center"},rightButton:{position:"absolute",maxHeight:h,minHeight:h,right:16,top:m,alignItems:"center",justifyContent:"center"}},g=i;t.default=g},
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},
/*!**************************!*\
  !*** ./src/NaviRoute.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var o=n(/*! @babel/runtime/helpers/interopRequireDefault */0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,u=o(n(/*! @babel/runtime/helpers/objectSpread */17)),a=o(n(/*! @babel/runtime/helpers/classCallCheck */2)),c=o(n(/*! @babel/runtime/helpers/createClass */3)),s=o(n(/*! @babel/runtime/helpers/possibleConstructorReturn */4)),f=o(n(/*! @babel/runtime/helpers/getPrototypeOf */5)),l=o(n(/*! @babel/runtime/helpers/inherits */6)),p=o(n(/*! react */7)),d=n(/*! ./routerHistory */1),h=n(/*! react-spring */19),m={exact:!1,always:!1,path:"",component:void 0,render:void 0,children:[],backgroundColor:"#fff",animed:!0,root:!1};i=r=function(e){function t(){var e,n;(0,a.default)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(r)))).listen=0,n.state={isImmediate:!1,nowRoute:!1,onAnime:!1,index:n.props.root?1:0,isNearPage:!0,moveAnimeA:n.props.root?0:window.innerWidth,moveAnimeB:window.innerWidth},n.onHistoryChange=function(e){for(var t=0,o=n.props.path.replace("*",""),r=0;r<e.entries.length;r++){e.entries[r].pathname===o&&(t=r)}var i=e.index-t==1;t!==e.index||n.state.nowRoute?t>e.index&&n.state.nowRoute?n.setState({isNearPage:i,isImmediate:!!e.location.state&&e.location.state.noAnime,onAnime:!0,nowRoute:!1,index:0,moveAnimeA:0,moveAnimeB:window.innerWidth}):t<e.index&&n.state.nowRoute&&n.setState({isNearPage:i,isImmediate:!!e.location.state&&e.location.state.noAnime,onAnime:!0,nowRoute:!1,index:0,moveAnimeA:0,moveAnimeB:-window.innerWidth}):n.setState({isNearPage:i,isImmediate:!!e.location.state&&e.location.state.noAnime,onAnime:!0,nowRoute:!0,index:1,moveAnimeA:window.innerWidth*n.props.fixNumber,moveAnimeB:0})},n.onRest=function(){n.setState({onAnime:!1})},n}return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.listen=(0,d.historyAddListen)(this.onHistoryChange)}},{key:"componentWillUnmount",value:function(){(0,d.historyRemoveListen)(this.listen)}},{key:"render",value:function(){var e=this,t=this.props.path;return(this.props.always||this.state.isNearPage||this.state.onAnime)&&(t="*"),p.default.createElement(h.Spring,{onRest:this.onRest,native:!0,isImmediate:this.state.isImmediate,config:{tension:190,friction:23,velocity:0,restDisplacementThreshold:.002,restSpeedThreshold:.002},from:{transform:"perspective(600px) translate3d(".concat(this.state.moveAnimeA,"px,0,0)")},to:{transform:"perspective(600px) translate3d(".concat(this.state.moveAnimeB,"px,0,0)")}},function(n){return p.default.createElement(h.animated.div,{style:{width:"100%",height:"100%",position:"fixed",backgroundColor:e.props.backgroundColor,zIndex:10*e.state.index,transform:n.transform}},p.default.createElement(d.Route,{exact:e.props.exact,path:t,component:e.props.component,render:e.props.render,children:e.props.children}))})}}]),t}(p.default.PureComponent),r.defaultProps=(0,u.default)({},m);var y=i;t.default=y},
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var o=n(/*! ./defineProperty */18);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=o}])});
//# sourceMappingURL=index.js.map