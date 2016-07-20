webpackHotUpdate(0,{

/***/ 76:
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(/*! react */ 152);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 168);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 257);
	
	var _redux = __webpack_require__(/*! redux */ 314);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 327);
	
	var _socket = __webpack_require__(/*! socket.io-client */ 335);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _reducer = __webpack_require__(/*! ./reducer */ 392);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _action_creators = __webpack_require__(/*! ./action_creators */ 379);
	
	var _remote_action_middleware = __webpack_require__(/*! ./remote_action_middleware */ 383);
	
	var _remote_action_middleware2 = _interopRequireDefault(_remote_action_middleware);
	
	var _App = __webpack_require__(/*! ./components/App.jsx */ 384);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Voting = __webpack_require__(/*! ./components/Voting.jsx */ 385);
	
	var _Results = __webpack_require__(/*! ./components/Results.jsx */ 391);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var socket = (0, _socket2.default)(location.protocol + '//' + location.hostname + ':8090');
	socket.on('state', function (state) {
	  return store.dispatch((0, _action_creators.setState)(state));
	});
	
	var createStoreWithMiddleware = (0, _redux.applyMiddleware)((0, _remote_action_middleware2.default)(socket))(_redux.createStore);
	var store = createStoreWithMiddleware(_reducer2.default);
	
	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { component: _App2.default },
	  _react2.default.createElement(_reactRouter.Route, { path: '/results', component: _Results.ResultsContainer }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Voting.VotingContainer })
	);
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    routes
	  )
	), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 4)(module)))

/***/ },

/***/ 392:
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 380); if (makeExportsHot(module, __webpack_require__(/*! react */ 152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "reducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.ff0baaa259ceb10af342.hot-update.js.map