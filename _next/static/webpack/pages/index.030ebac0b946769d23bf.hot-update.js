webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/people/people.tsx":
/*!******************************************!*\
  !*** ./src/components/people/people.tsx ***!
  \******************************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"People\", function() { return People; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var styles_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/styled */ \"./src/styles/styled/index.ts\");\n/* harmony import */ var components_nav_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/nav/nav */ \"./src/components/nav/nav.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/rohank/Documents/Rohan/Projects/couchsync-website/src/components/people/people.tsx\",\n    _this = undefined;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: white;\\n  width: 100vw;\\n  min-height: 100vh;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 150px;\\n  height: 150px;\\n  border-radius: 99999px;\\n  margin-bottom: \", \"px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 275px;\\n  height: 300px;\\n  border: 2px solid \", \";\\n  border-radius: \", \"px;\\n  box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar Team = [{\n  name: 'Ryan Jacobs',\n  avatar: 'https://avatars1.githubusercontent.com/u/41042843?s=460&u=26238ab649548a08ea1ef6efa35cebd4809455b4&v=4',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7',\n    linkedin: 'https://www.linkedin.com/in/rkrishn',\n    website: 'https://www.rohankrishnaswamy.com'\n  }\n}, {\n  name: 'Rohan Krishnaswamy',\n  role: 'Lead Developer',\n  avatar: 'https://avatars1.githubusercontent.com/u/47869999?s=460&u=fb1cbe84fad8f56e4f1dfbac37a5946dd0ebe1a4&v=4',\n  social: {\n    github: 'https://www.github.com/rkrishn7',\n    linkedin: 'https://www.linkedin.com/in/rkrishn',\n    website: 'https://www.rohankrishnaswamy.com'\n  }\n}, {\n  name: 'Brandon Paiz',\n  avatar: 'https://avatars2.githubusercontent.com/u/11904831?s=460&u=cce5062ff13716b63a6eda773ede8f2067d46140&v=4',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}, {\n  name: 'Sterling Nicholson',\n  avatar: 'https://avatars2.githubusercontent.com/u/52950000?s=460&v=4',\n  role: 'Developer',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}, {\n  name: 'Zachary Zulanas',\n  role: 'Developer',\n  avatar: 'https://avatars3.githubusercontent.com/u/14898614?s=88&u=553e0703975d6daf6473366ca723d8d14ef3701d&v=4',\n  social: {\n    github: 'https://www.github.com/rkrishn7'\n  }\n}];\nvar MemberCard = Object(styles_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Card\"])(_templateObject(), function (p) {\n  return p.theme.colors.grey;\n}, function (p) {\n  return p.theme.radii[2];\n});\n_c = MemberCard;\nvar CardContainer = Object(styles_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Box\"])(_templateObject2());\n_c2 = CardContainer;\nvar Avatar = styles_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img(_templateObject3(), function (p) {\n  return p.theme.space[3];\n});\n_c3 = Avatar;\nvar Container = Object(styles_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"])(_templateObject4());\n_c4 = Container;\n\nvar SocialLinks = function SocialLinks(_ref) {\n  var github = _ref.github,\n      linkedin = _ref.linkedin,\n      website = _ref.website;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    alignItems: \"space-evenly\",\n    width: \"100%\",\n    children: [github && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_nav_nav__WEBPACK_IMPORTED_MODULE_7__[\"Social\"], {\n      href: github,\n      target: \"_blank\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faGithub\"],\n        size: \"2x\",\n        color: \"black\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), linkedin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_nav_nav__WEBPACK_IMPORTED_MODULE_7__[\"Social\"], {\n      href: linkedin,\n      target: \"_blank\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faLinkedin\"],\n        size: \"2x\",\n        color: \"black\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), website && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_nav_nav__WEBPACK_IMPORTED_MODULE_7__[\"Social\"], {\n      href: website,\n      target: \"_blank\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faGlobe\"],\n        size: \"2x\",\n        color: \"black\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 3\n  }, _this);\n};\n\n_c5 = SocialLinks;\nvar People = function People() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      fontSize: [3, 4, 5],\n      color: \"primary\",\n      fontWeight: \"600\",\n      textAlign: \"center\",\n      children: \"a team of student developers\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n      px: 5,\n      flexWrap: \"wrap\",\n      children: Team.map(function (member) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CardContainer, {\n          width: [1, 1, 1 / 3],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MemberCard, {\n            m: 3,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n              fontSize: 3,\n              color: \"secondary\",\n              fontWeight: \"600\",\n              children: member.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n              fontSize: 2,\n              color: \"secondary\",\n              fontWeight: \"400\",\n              py: 1,\n              children: member.role\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Avatar, {\n              src: member.avatar\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SocialLinks, {\n              github: member.social.github,\n              linkedin: member.social.linkedin,\n              website: member.social.website\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n_c6 = People;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"MemberCard\");\n$RefreshReg$(_c2, \"CardContainer\");\n$RefreshReg$(_c3, \"Avatar\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"SocialLinks\");\n$RefreshReg$(_c6, \"People\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS50c3g/MTU4YSJdLCJuYW1lcyI6WyJUZWFtIiwibmFtZSIsImF2YXRhciIsInJvbGUiLCJzb2NpYWwiLCJnaXRodWIiLCJsaW5rZWRpbiIsIndlYnNpdGUiLCJNZW1iZXJDYXJkIiwic3R5bGVkIiwiQ2FyZCIsInAiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXkiLCJyYWRpaSIsIkNhcmRDb250YWluZXIiLCJCb3giLCJBdmF0YXIiLCJpbWciLCJzcGFjZSIsIkNvbnRhaW5lciIsIkZsZXgiLCJTb2NpYWxMaW5rcyIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsImZhR2xvYmUiLCJQZW9wbGUiLCJtYXAiLCJtZW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxNQUFJLEVBQUUsYUFEUjtBQUVFQyxRQUFNLEVBQUUsd0dBRlY7QUFHRUMsTUFBSSxFQUFFLFdBSFI7QUFJRUMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRSxpQ0FERjtBQUVOQyxZQUFRLEVBQUUscUNBRko7QUFHTkMsV0FBTyxFQUFFO0FBSEg7QUFKVixDQURXLEVBV1g7QUFDRU4sTUFBSSxFQUFFLG9CQURSO0FBRUVFLE1BQUksRUFBRSxnQkFGUjtBQUdFRCxRQUFNLEVBQUUsd0dBSFY7QUFJRUUsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRSxpQ0FERjtBQUVOQyxZQUFRLEVBQUUscUNBRko7QUFHTkMsV0FBTyxFQUFFO0FBSEg7QUFKVixDQVhXLEVBcUJYO0FBQ0VOLE1BQUksRUFBRSxjQURSO0FBRUVDLFFBQU0sRUFBRSx3R0FGVjtBQUdFQyxNQUFJLEVBQUUsV0FIUjtBQUlFQyxRQUFNLEVBQUU7QUFDTkMsVUFB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QURhO0FBQUEsT0FBZjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBeUJELENBMUJNO01BQU1vQixNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIENhcmQgfSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUdpdGh1YiwgZmFMaW5rZWRpbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFHbG9iZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVzL3N0eWxlZCc7XG5pbXBvcnQgSW1hZ2VzIGZyb20gJ2Fzc2V0cy9pbWFnZXMnO1xuXG5pbXBvcnQgeyBTb2NpYWwgfSBmcm9tICdjb21wb25lbnRzL25hdi9uYXYnO1xuXG5jb25zdCBUZWFtID0gW1xuICB7XG4gICAgbmFtZTogJ1J5YW4gSmFjb2JzJyxcbiAgICBhdmF0YXI6ICdodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzQxMDQyODQzP3M9NDYwJnU9MjYyMzhhYjY0OTU0OGEwOGVhMWVmNmVmYTM1Y2ViZDQ4MDk0NTViNCZ2PTQnLFxuICAgIHJvbGU6ICdEZXZlbG9wZXInLFxuICAgIHNvY2lhbDoge1xuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9ya3Jpc2huNycsXG4gICAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ya3Jpc2huJyxcbiAgICAgIHdlYnNpdGU6ICdodHRwczovL3d3dy5yb2hhbmtyaXNobmFzd2FteS5jb20nLFxuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSb2hhbiBLcmlzaG5hc3dhbXknLFxuICAgIHJvbGU6ICdMZWFkIERldmVsb3BlcicsXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS80Nzg2OTk5OT9zPTQ2MCZ1PWZiMWNiZTg0ZmFkOGY1NmU0ZjFkZmJhYzM3YTU5NDZkZDBlYmUxYTQmdj00JyxcbiAgICBzb2NpYWw6IHtcbiAgICAgIGdpdGh1YjogJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vcmtyaXNobjcnLFxuICAgICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmtyaXNobicsXG4gICAgICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cucm9oYW5rcmlzaG5hc3dhbXkuY29tJyxcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQnJhbmRvbiBQYWl6JyxcbiAgICBhdmF0YXI6ICdodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzExOTA0ODMxP3M9NDYwJnU9Y2NlNTA2MmZmMTM3MTZiNjNhNmVkYTc3M2VkZThmMjA2N2Q0NjE0MCZ2PTQnLFxuICAgIHJvbGU6ICdEZXZlbG9wZXInLFxuICAgIHNvY2lhbDoge1xuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9ya3Jpc2huNycsXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0ZXJsaW5nIE5pY2hvbHNvbicsXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMi5naXRodWJ1c2VyY29udGVudC5jb20vdS81Mjk1MDAwMD9zPTQ2MCZ2PTQnLFxuICAgIHJvbGU6ICdEZXZlbG9wZXInLFxuICAgIHNvY2lhbDoge1xuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9ya3Jpc2huNycsXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1phY2hhcnkgWnVsYW5hcycsXG4gICAgcm9sZTogJ0RldmVsb3BlcicsXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xNDg5ODYxND9zPTg4JnU9NTUzZTA3MDM5NzVkNmRhZjY0NzMzNjZjYTcyM2Q4ZDE0ZWYzNzAxZCZ2PTQnLFxuICAgIHNvY2lhbDoge1xuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9ya3Jpc2huNycsXG4gICAgfVxuICB9LFxuXTtcblxuY29uc3QgTWVtYmVyQ2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgd2lkdGg6IDI3NXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAke3AgPT4gcC50aGVtZS5jb2xvcnMuZ3JleX07XG4gIGJvcmRlci1yYWRpdXM6ICR7cCA9PiBwLnRoZW1lLnJhZGlpWzJdfXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKEJveClgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgQXZhdGFyID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTk5OXB4O1xuICBtYXJnaW4tYm90dG9tOiAke3AgPT4gcC50aGVtZS5zcGFjZVszXX1weDtcbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4KWBcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmludGVyZmFjZSBTb2NpYWxMaW5rc1Byb3BzIHtcbiAgZ2l0aHViPzogc3RyaW5nO1xuICBsaW5rZWRpbj86IHN0cmluZztcbiAgd2Vic2l0ZT86IHN0cmluZztcbn1cblxuY29uc3QgU29jaWFsTGlua3M6IFJlYWN0LkZDPFNvY2lhbExpbmtzUHJvcHM+ID0gKHsgZ2l0aHViLCBsaW5rZWRpbiwgd2Vic2l0ZSB9KSA9PiAoXG4gIDxGbGV4IGFsaWduSXRlbXM9XCJzcGFjZS1ldmVubHlcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICB7Z2l0aHViICYmIChcbiAgICAgIDxTb2NpYWwgaHJlZj17Z2l0aHVifSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cIjJ4XCIgY29sb3I9XCJibGFja1wiIC8+XG4gICAgICA8L1NvY2lhbD5cbiAgICApfVxuICAgIHtsaW5rZWRpbiAmJiAoXG4gICAgICA8U29jaWFsIGhyZWY9e2xpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmtlZGlufSBzaXplPVwiMnhcIiBjb2xvcj1cImJsYWNrXCIgLz5cbiAgICAgIDwvU29jaWFsPlxuICAgICl9XG4gICAge3dlYnNpdGUgJiYgKFxuICAgICAgPFNvY2lhbCBocmVmPXt3ZWJzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSBzaXplPVwiMnhcIiBjb2xvcj1cImJsYWNrXCIgLz5cbiAgICAgIDwvU29jaWFsPlxuICAgICl9XG4gIDwvRmxleD5cbik7XG5cbmV4cG9ydCBjb25zdCBQZW9wbGU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZyBmb250U2l6ZT17WyAzLCA0LCA1IF19IGNvbG9yPVwicHJpbWFyeVwiIGZvbnRXZWlnaHQ9XCI2MDBcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBhIHRlYW0gb2Ygc3R1ZGVudCBkZXZlbG9wZXJzXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxDb250YWluZXIgcHg9ezV9IGZsZXhXcmFwPSd3cmFwJz5cbiAgICAgICAge1xuICAgICAgICAgIFRlYW0ubWFwKG1lbWJlciA9PiAoXG4gICAgICAgICAgICA8Q2FyZENvbnRhaW5lciB3aWR0aD17WzEsIDEsIDEvM119PlxuICAgICAgICAgICAgICA8TWVtYmVyQ2FyZCBtPXszfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17M30gY29sb3I9XCJzZWNvbmRhcnlcIiBmb250V2VpZ2h0PVwiNjAwXCI+XG4gICAgICAgICAgICAgICAgICB7bWVtYmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPXsyfSBjb2xvcj1cInNlY29uZGFyeVwiIGZvbnRXZWlnaHQ9XCI0MDBcIiBweT17MX0+XG4gICAgICAgICAgICAgICAgICB7bWVtYmVyLnJvbGV9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXttZW1iZXIuYXZhdGFyfSAvPlxuICAgICAgICAgICAgICAgIDxTb2NpYWxMaW5rcyBnaXRodWI9e21lbWJlci5zb2NpYWwuZ2l0aHVifSBsaW5rZWRpbj17bWVtYmVyLnNvY2lhbC5saW5rZWRpbn0gd2Vic2l0ZT17bWVtYmVyLnNvY2lhbC53ZWJzaXRlfSAvPlxuICAgICAgICAgICAgICA8L01lbWJlckNhcmQ+XG4gICAgICAgICAgICA8L0NhcmRDb250YWluZXI+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/people/people.tsx\n");

/***/ })

})