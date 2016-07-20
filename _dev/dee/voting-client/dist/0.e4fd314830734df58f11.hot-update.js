webpackHotUpdate(0,{

/***/ 257:
/*!***********************************!*\
  !*** ./src/components/Voting.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 152);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: "Voting",
	
	  getPair: function getPair() {
	    return this.props.pair || [];
	  },
	  isDisabled: function isDisabled() {
	    return !!this.props.hasVoted;
	  },
	  hasVotedFor: function hasVotedFor(entry) {
	    return this.props.hasVoted === entry;
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      "div",
	      { className: "voting" },
	      this.getPair().map(function (entry) {
	        return _react2.default.createElement(
	          "button",
	          { key: entry,
	            disabled: _this.isDisabled(),
	            onClick: function onClick() {
	              return _this.props.vote(entry);
	            } },
	          _react2.default.createElement(
	            "h1",
	            null,
	            entry
	          ),
	          _this.hasVotedFor(entry) ? _react2.default.createElement(
	            "div",
	            { className: "label" },
	            "Voted"
	          ) : null
	        );
	      })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 258); if (makeExportsHot(module, __webpack_require__(/*! react */ 152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Voting.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.e4fd314830734df58f11.hot-update.js.map