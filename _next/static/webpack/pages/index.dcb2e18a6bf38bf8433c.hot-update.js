webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/people/people.tsx":
/*!******************************************!*\
  !*** ./src/components/people/people.tsx ***!
  \******************************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"People\", function() { return People; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var styles_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styled */ \"./src/styles/styled/index.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/rohank/Documents/Rohan/Projects/couchsync-website/src/components/people/people.tsx\",\n    _this = undefined;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: white;\\n  width: 100vw;\\n  min-height: 100vh;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 75px;\\n  height: 75px;\\n  border-radius: 99999px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 275px;\\n  height: 300px;\\n  border: 2px solid \", \";\\n  border-radius: \", \"px;\\n  box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Team = [{\n  name: 'Rohan Krishnaswamy',\n  role: 'Lead Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}, {\n  name: 'Ryan Jacobs',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}, {\n  name: 'Brandon Paiz',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}, {\n  name: 'Sterling Nicholson',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}, {\n  name: 'Zachary Zulanas',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}];\nvar MemberCard = Object(styles_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Card\"])(_templateObject(), function (p) {\n  return p.theme.colors.primary;\n}, function (p) {\n  return p.theme.radii[2];\n});\n_c = MemberCard;\nvar CardContainer = Object(styles_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Box\"])(_templateObject2());\n_c2 = CardContainer;\nvar Avatar = styles_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject3());\nvar Container = Object(styles_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"])(_templateObject4());\n_c3 = Container;\nvar People = function People() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      fontSize: [3, 4, 5],\n      color: \"primary\",\n      fontWeight: \"600\",\n      textAlign: \"center\",\n      children: \"a team of student developers\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n      px: 5,\n      flexWrap: \"wrap\",\n      children: Team.map(function (member) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CardContainer, {\n          width: [1, 1, 1 / 3],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MemberCard, {\n            m: 3,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n              fontSize: 3,\n              color: \"primary\",\n              fontWeight: \"600\",\n              children: member.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n_c4 = People;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MemberCard\");\n$RefreshReg$(_c2, \"CardContainer\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"People\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS50c3g/MTU4YSJdLCJuYW1lcyI6WyJUZWFtIiwibmFtZSIsInJvbGUiLCJzb2NpYWwiLCJnaXRodWIiLCJNZW1iZXJDYXJkIiwic3R5bGVkIiwiQ2FyZCIsInAiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJyYWRpaSIsIkNhcmRDb250YWluZXIiLCJCb3giLCJBdmF0YXIiLCJpbWciLCJDb250YWluZXIiLCJGbGV4IiwiUGVvcGxlIiwibWFwIiwibWVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBR0EsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBSSxFQUFFLG9CQURSO0FBRUVDLE1BQUksRUFBRSxnQkFGUjtBQUdFQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREY7QUFIVixDQURXLEVBUVg7QUFDRUgsTUFBSSxFQUFFLGFBRFI7QUFFRUMsTUFBSSxFQUFFLFdBRlI7QUFHRUMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQURGO0FBSFYsQ0FSVyxFQWVYO0FBQ0VILE1BQUksRUFBRSxjQURSO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERjtBQUhWLENBZlcsRUFzQlg7QUFDRUgsTUFBSSxFQUFFLG9CQURSO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERjtBQUhWLENBdEJXLEVBNkJYO0FBQ0VILE1BQUksRUFBRSxpQkFEUjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREY7QUFIVixDQTdCVyxDQUFiO0FBc0NBLElBQU1DLFVBQVUsR0FBR0MsNkRBQU0sQ0FBQ0MsMkNBQUQsQ0FBVCxvQkFHTSxVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsT0FBbkI7QUFBQSxDQUhQLEVBSUcsVUFBQUgsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsS0FBRixDQUFRRyxLQUFSLENBQWMsQ0FBZCxDQUFKO0FBQUEsQ0FKSixDQUFoQjtLQUFNUCxVO0FBV04sSUFBTVEsYUFBYSxHQUFHUCw2REFBTSxDQUFDUSwwQ0FBRCxDQUFULG9CQUFuQjtNQUFNRCxhO0FBS04sSUFBTUUsTUFBTSxHQUFHVCxxREFBTSxDQUFDVSxHQUFWLG9CQUFaO0FBTUEsSUFBTUMsU0FBUyxHQUFHWCw2REFBTSxDQUFDWSwyQ0FBRCxDQUFULG9CQUFmO01BQU1ELFM7QUFTQyxJQUFNRSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQ3BDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsOENBQUQ7QUFBUyxjQUFRLEVBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBbkI7QUFBZ0MsV0FBSyxFQUFDLFNBQXRDO0FBQWdELGdCQUFVLEVBQUMsS0FBM0Q7QUFBaUUsZUFBUyxFQUFDLFFBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQyxTQUFEO0FBQVcsUUFBRSxFQUFFLENBQWY7QUFBa0IsY0FBUSxFQUFDLE1BQTNCO0FBQUEsZ0JBRUluQixJQUFJLENBQUNvQixHQUFMLENBQVMsVUFBQUMsTUFBTTtBQUFBLDRCQUNiLHFFQUFDLGFBQUQ7QUFBZSxlQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQUUsQ0FBVCxDQUF0QjtBQUFBLGlDQUNFLHFFQUFDLFVBQUQ7QUFBWSxhQUFDLEVBQUUsQ0FBZjtBQUFBLG1DQUNFLHFFQUFDLDhDQUFEO0FBQVMsc0JBQVEsRUFBRSxDQUFuQjtBQUFzQixtQkFBSyxFQUFDLFNBQTVCO0FBQXNDLHdCQUFVLEVBQUMsS0FBakQ7QUFBQSx3QkFDR0EsTUFBTSxDQUFDcEI7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFmO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFvQkQsQ0FyQk07TUFBTWtCLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgQ2FyZCB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlcy9zdHlsZWQnO1xuaW1wb3J0IEltYWdlcyBmcm9tICdhc3NldHMvaW1hZ2VzJztcblxuY29uc3QgVGVhbSA9IFtcbiAge1xuICAgIG5hbWU6ICdSb2hhbiBLcmlzaG5hc3dhbXknLFxuICAgIHJvbGU6ICdMZWFkIERldmVsb3BlcicsXG4gICAgc29jaWFsOiB7XG4gICAgICBnaXRodWI6ICdodHRwczovL3d3dy5naXRodWIuY29tL3JrcmlzaG43JyxcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUnlhbiBKYWNvYnMnLFxuICAgIHJvbGU6ICdEZXZlbG9wZXInLFxuICAgIHNvY2lhbDoge1xuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9ya3Jpc2huNycsXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0JyYW5kb24gUGFpeicsXG4gICAgcm9sZTogJ0RldmVsb3BlcicsXG4gICAgc29jaWFsOiB7XG4gICAgICBnaXRodWI6ICdodHRwczovL3d3dy5naXRodWIuY29tL3JrcmlzaG43JyxcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RlcmxpbmcgTmljaG9sc29uJyxcbiAgICByb2xlOiAnRGV2ZWxvcGVyJyxcbiAgICBzb2NpYWw6IHtcbiAgICAgIGdpdGh1YjogJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vcmtyaXNobjcnLFxuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdaYWNoYXJ5IFp1bGFuYXMnLFxuICAgIHJvbGU6ICdEZXZlbG9wZXInLFxuICAgIHNvY2lhbDoge1xuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9ya3Jpc2huNycsXG4gICAgfVxuICB9LFxuXTtcblxuY29uc3QgTWVtYmVyQ2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgd2lkdGg6IDI3NXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAke3AgPT4gcC50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cCA9PiBwLnRoZW1lLnJhZGlpWzJdfXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKEJveClgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgQXZhdGFyID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OTlweDtcbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4KWBcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQZW9wbGU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZyBmb250U2l6ZT17WyAzLCA0LCA1IF19IGNvbG9yPVwicHJpbWFyeVwiIGZvbnRXZWlnaHQ9XCI2MDBcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBhIHRlYW0gb2Ygc3R1ZGVudCBkZXZlbG9wZXJzXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxDb250YWluZXIgcHg9ezV9IGZsZXhXcmFwPSd3cmFwJz5cbiAgICAgICAge1xuICAgICAgICAgIFRlYW0ubWFwKG1lbWJlciA9PiAoXG4gICAgICAgICAgICA8Q2FyZENvbnRhaW5lciB3aWR0aD17WzEsIDEsIDEvM119PlxuICAgICAgICAgICAgICA8TWVtYmVyQ2FyZCBtPXszfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17M30gY29sb3I9XCJwcmltYXJ5XCIgZm9udFdlaWdodD1cIjYwMFwiPlxuICAgICAgICAgICAgICAgICAge21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9NZW1iZXJDYXJkPlxuICAgICAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/people/people.tsx\n");

/***/ })

})