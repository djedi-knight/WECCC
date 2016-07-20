webpackHotUpdate(0,{

/***/ 257:
/*!***********************************!*\
  !*** ./src/components/Voting.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 152);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Winner = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Winner\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Winner2 = _interopRequireDefault(_Winner);
	
	var _Vote = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Vote\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Vote2 = _interopRequireDefault(_Vote);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Voting',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.props.winner ? _react2.default.createElement(_Winner2.default, { ref: 'winner', winner: this.props.winner }) : _react2.default.createElement(_Vote2.default, this.props)
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 258); if (makeExportsHot(module, __webpack_require__(/*! react */ 152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Voting.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.cbb5bb22151ef423eb6d.hot-update.js.map