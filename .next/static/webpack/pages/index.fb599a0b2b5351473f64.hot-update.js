webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\WINDOWS\\Desktop\\APP\\nslive2.0\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Example = function Example(props) {
  var opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var $ = document.querySelector.bind(document);
  var player, iframe;

  var callReady = function callReady() {
    iframe = $('#player');
    console.log('acho q deu certo');
  };

  function playFullscreen() {
    console.log('acho q deu certo2');
    console.log(ref);
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }

    console.log(requestFullScreen);
  }

  return __jsx("div", {
    id: "player",
    onClick: playFullscreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }), ";");
};

_c = Example;
/* harmony default export */ __webpack_exports__["default"] = (Example);

var _c;

$RefreshReg$(_c, "Example");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCIkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmluZCIsInBsYXllciIsImlmcmFtZSIsImNhbGxSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJwbGF5RnVsbHNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxLQURHO0FBRVhDLFNBQUssRUFBRSxLQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjtBQVFBLE1BQUlDLEdBQUcsZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBVjtBQUNBLE1BQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCQyxJQUF2QixDQUE0QkYsUUFBNUIsQ0FBUjtBQUNBLE1BQUlHLE1BQUosRUFBWUMsTUFBWjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBQ3JCRCxVQUFNLEdBQUdMLENBQUMsQ0FBQyxTQUFELENBQVY7QUFDRU8sV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSCxHQUhEOztBQUtBLFdBQVNDLGNBQVQsR0FBMEI7QUFDeEJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxHQUFaO0FBQ0EsUUFBSWEsaUJBQWlCLEdBQUdMLE1BQU0sQ0FBQ0ssaUJBQVAsSUFBNEJMLE1BQU0sQ0FBQ00sb0JBQW5DLElBQTJETixNQUFNLENBQUNPLHVCQUExRjs7QUFDQSxRQUFJRixpQkFBSixFQUF1QjtBQUNyQkEsdUJBQWlCLENBQUNQLElBQWxCLENBQXVCRSxNQUF2QjtBQUNEOztBQUNERSxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsaUJBQVo7QUFDRDs7QUFFRCxTQUNBO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBa0IsV0FBTyxFQUFFRCxjQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxxREFBRDtBQUFVLFdBQU8sRUFBQyxhQUFsQjtBQUFnQyxRQUFJLEVBQUVqQixJQUF0QztBQUE0QyxXQUFPLEVBQUVjLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxNQURBO0FBSUQsQ0FoQ0Q7O0tBQU1oQixPO0FBa0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjU5OWEwYjJiNTM1MTQ3M2Y2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5cbmNvbnN0IEV4YW1wbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICczOTAnLFxuICAgIHdpZHRoOiAnNjQwJyxcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICBhdXRvcGxheTogMSxcbiAgICB9LFxuICB9O1xuICBsZXQgcmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIHZhciAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KTtcbiAgdmFyIHBsYXllciwgaWZyYW1lO1xuXG4gIGNvbnN0IGNhbGxSZWFkeSA9ICgpID0+e1xuICAgIGlmcmFtZSA9ICQoJyNwbGF5ZXInKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhY2hvIHEgZGV1IGNlcnRvJyk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5RnVsbHNjcmVlbiAoKXtcbiAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bzInKTtcbiAgICBjb25zb2xlLmxvZyhyZWYpO1xuICAgIHZhciByZXF1ZXN0RnVsbFNjcmVlbiA9IGlmcmFtZS5yZXF1ZXN0RnVsbFNjcmVlbiB8fCBpZnJhbWUubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHwgaWZyYW1lLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuO1xuICAgIGlmIChyZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgcmVxdWVzdEZ1bGxTY3JlZW4uYmluZChpZnJhbWUpKCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3RGdWxsU2NyZWVuKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gIDxkaXYgaWQ9XCJwbGF5ZXJcIiAgb25DbGljaz17cGxheUZ1bGxzY3JlZW59PlxuICA8WW91VHViZSAgdmlkZW9JZD1cIllqRjg1X0U0cDcwXCIgb3B0cz17b3B0c30gb25SZWFkeT17Y2FsbFJlYWR5fSAvPjtcbiAgPC9kaXY+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwic291cmNlUm9vdCI6IiJ9