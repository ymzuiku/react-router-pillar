!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("history"),require("react-router"),require("react-spring"));else if("function"==typeof define&&define.amd)define(["react","history","react-router","react-spring"],t);else{var n="object"==typeof exports?t(require("react"),require("history"),require("react-router"),require("react-spring")):t(e.react,e.history,e["react-router"],e["react-spring"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([
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
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hashChange=f,Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return o.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return o.Router}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return o.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return o.Redirect}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return o.Switch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return o.withRouter}}),t.goToHome=t.position=t.historyRemoveListen=t.historyAddListen=t.nowHistory=t.history=void 0;var r=n(/*! history */10),o=n(/*! react-router */11),i="#";t.position=i;var u=(0,r.createMemoryHistory)();t.history=u;var a={index:0,length:1,pathname:"/",search:"",hash:"",state:void 0,key:""};t.nowHistory=a;var c={},s=0;t.historyAddListen=function(e){return c[s+=1]=e,s};function f(){try{if(window.location.href.split(i)[1]!==a.pathname){for(var e=u.entries[u.length-2].pathname,t=0;t<u.length;t++)u.index>1&&u.goBack();u.push(e)}}catch(e){}}t.historyRemoveListen=function(e){c[e]=void 0},u.listen(function(e){try{for(var n in a.key!==e.key&&(t.nowHistory=a={index:u.index,length:u.length,pathname:e.pathname,search:e.search,hash:e.hash,state:e.state,key:e.key},window.location&&(window.location.href=i+e.pathname)),c)c[n]&&c[n](u,e)}catch(e){}}),window.location||(window.location={href:"",hash:"",pathname:"",hostname:"",port:""});try{if("onhashchange"in window&&(void 0===document.documentMode||8===document.documentMode))window.onhashchange=f;else{var l=window.location.hash;setInterval(function(){l===window.location.hash&&f()},350)}}catch(e){}t.goToHome=function(){for(var e=u.entries[1].pathname,t=0;t<u.length;t++)u.index>1&&u.goBack();u.push(e)}},
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
function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var r=n(/*! ../helpers/typeof */13),o=n(/*! ./assertThisInitialized */14);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},
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
function(e,t,n){var r=n(/*! ./setPrototypeOf */15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},
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
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=/iphone/gi.test(navigator.userAgent)&&812===window.screen.height&&375===window.screen.width;t.default=r},
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hashChange",{enumerable:!0,get:function(){return o.hashChange}}),Object.defineProperty(t,"history",{enumerable:!0,get:function(){return o.history}}),Object.defineProperty(t,"nowHistory",{enumerable:!0,get:function(){return o.nowHistory}}),Object.defineProperty(t,"position",{enumerable:!0,get:function(){return o.position}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return o.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return o.Redirect}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return o.Router}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return o.Route}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return o.Switch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return o.withRouter}}),Object.defineProperty(t,"historyAddListen",{enumerable:!0,get:function(){return o.historyAddListen}}),Object.defineProperty(t,"historyRemoveListen",{enumerable:!0,get:function(){return o.historyRemoveListen}}),Object.defineProperty(t,"goToHome",{enumerable:!0,get:function(){return o.goToHome}}),Object.defineProperty(t,"NaviBar",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NaviRoute",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"isIphoneX",{enumerable:!0,get:function(){return a.default}});var o=n(/*! ./routerHistory */1),i=r(n(/*! ./NaviBar */12)),u=r(n(/*! ./NaviRoute */16)),a=r(n(/*! ./isIphoneX */8))},
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
function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,u=r(n(/*! @babel/runtime/helpers/classCallCheck */2)),a=r(n(/*! @babel/runtime/helpers/createClass */3)),c=r(n(/*! @babel/runtime/helpers/possibleConstructorReturn */4)),s=r(n(/*! @babel/runtime/helpers/getPrototypeOf */5)),f=r(n(/*! @babel/runtime/helpers/inherits */6)),l=r(n(/*! react */7)),p=n(/*! ./routerHistory */1),d=r(n(/*! ./isIphoneX */8)),h=50,y="web"===window.plan?0:d.default?42:20;function m(){p.history.goBack()}i=o=function(e){function t(){var e,n;(0,u.default)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=(0,c.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(o)))).historyAddListenID=0,n}return(0,f.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return l.default.createElement(View,{style:[b.container,this.props.style]},!this.props.root&&this.props.leftButton(this.props.leftTitle),this.props.middleButton(this.props.title),this.props.rightButton())}}]),t}(l.default.PureComponent),o.defaultProps={leftTitle:"< goback",title:"home",middleButton:function(e){return l.default.createElement("div",null,e)},leftButton:function(e){return l.default.createElement("div",{onClick:m,style:b.leftButton},e)},rightButton:function(){return null}};var b={container:{flexDirection:"row",flex:1,maxHeight:h+y,minHeight:h+y,padding:16,paddingTop:16+y,width:"100%",alignItems:"center",justifyContent:"center"},leftButton:{position:"absolute",maxHeight:h,minHeight:h,left:16,top:y,alignItems:"center",justifyContent:"center"},rightButton:{position:"absolute",maxHeight:h,minHeight:h,right:16,top:y,alignItems:"center",justifyContent:"center"}},g=i;t.default=g},
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},
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
function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},
/*!**************************!*\
  !*** ./src/NaviRoute.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,u=r(n(/*! @babel/runtime/helpers/objectSpread */17)),a=r(n(/*! @babel/runtime/helpers/classCallCheck */2)),c=r(n(/*! @babel/runtime/helpers/createClass */3)),s=r(n(/*! @babel/runtime/helpers/possibleConstructorReturn */4)),f=r(n(/*! @babel/runtime/helpers/getPrototypeOf */5)),l=r(n(/*! @babel/runtime/helpers/inherits */6)),p=r(n(/*! react */7)),d=n(/*! ./routerHistory */1),h=n(/*! react-spring */19),y={exact:!1,always:!1,path:"",component:void 0,render:void 0,children:[],backgroundColor:"#fff",animed:!0,root:!1};i=o=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(o)))).listen=0,n.state={nowRoute:!1,onAnime:!1,index:n.props.root?1:0,isNearPage:!0,moveAnimeA:n.props.root?0:window.innerWidth,moveAnimeB:window.innerWidth},n.onHistoryChange=function(e){for(var t=0,r=n.props.path.replace("*",""),o=0;o<e.entries.length;o++){e.entries[o].pathname===r&&(t=o)}var i=e.index-t==1;t!==e.index||n.state.nowRoute?t>e.index&&n.state.nowRoute?n.setState({isNearPage:i,onAnime:!0,nowRoute:!1,index:0,moveAnimeA:0,moveAnimeB:window.innerWidth}):t<e.index&&n.state.nowRoute&&n.setState({isNearPage:i,onAnime:!0,nowRoute:!1,index:0,moveAnimeA:0,moveAnimeB:-window.innerWidth}):n.setState({isNearPage:i,onAnime:!0,nowRoute:!0,index:1,moveAnimeA:window.innerWidth*n.props.fixNumber,moveAnimeB:0})},n.onRest=function(){n.setState({onAnime:!1})},n}return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.listen=(0,d.historyAddListen)(this.onHistoryChange)}},{key:"componentWillUnmount",value:function(){(0,d.historyRemoveListen)(this.listen)}},{key:"render",value:function(){var e=this,t=this.props.path;return(this.props.always||this.state.isNearPage||this.state.onAnime)&&(t="*"),p.default.createElement(h.Spring,{onRest:this.onRest,config:{tension:190,friction:23,velocity:0,restDisplacementThreshold:.002,restSpeedThreshold:.002},native:!0,from:{transform:"perspective(600px) translate3d(".concat(this.state.moveAnimeA,"px,0,0)")},to:{transform:"perspective(600px) translate3d(".concat(this.state.moveAnimeB,"px,0,0)")}},function(n){return p.default.createElement(h.animated.div,{style:{width:"100%",height:"100%",position:"absolute",backgroundColor:e.props.backgroundColor,zIndex:10*e.state.index,transform:n.transform}},p.default.createElement(d.Route,{exact:e.props.exact,path:t,component:e.props.component,render:e.props.render,children:e.props.children}))})}}]),t}(p.default.PureComponent),o.defaultProps=(0,u.default)({},y);var m=i;t.default=m},
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,n){var r=n(/*! ./defineProperty */18);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},
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
function(e,t){e.exports=r}])});
//# sourceMappingURL=index.js.map