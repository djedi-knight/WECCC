webpackHotUpdate(0,{

/***/ 325:
/*!************************************!*\
  !*** ./src/components/Results.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 152);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(/*! react-addons-pure-render-mixin */ 320);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Results',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	  getPair: function getPair() {
	    return this.props.pair || [];
	  },
	  getVotes: function getVotes(entry) {
	    if (this.props.tally && this.props.tally.has(entry)) {
	      return this.props.tally.get(entry);
	    }
	    return 0;
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'results' },
	      this.getPair().map(function (entry) {
	        return _react2.default.createElement(
	          'div',
	          { key: entry, className: 'entry' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            entry
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'voteCount' },
	            _this.getVotes(entry)
	          )
	        );
	      })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 316); if (makeExportsHot(module, __webpack_require__(/*! react */ 152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Results.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.e86b26ca3c5239f80aa9.hot-update.js.map