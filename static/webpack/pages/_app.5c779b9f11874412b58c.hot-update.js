self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/waifus.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/waifus.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body { height: 100%; width: 100%; margin: 0; }\r\n\r\n.body {\r\n    margin-top: 4rem;\r\n    height: 100%;\r\n}\r\n\r\n.waifu_card {\r\n    margin: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n    height: 40%;\r\n    width: 90%;\r\n\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n\r\n    position: relative;\r\n\r\n    z-index: 2;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.waifu_card .waifu_card_bg_layer {\r\n    position: absolute;\r\n    z-index: 1;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.671);\r\n    border-radius: 5px;\r\n}\r\n\r\n.waifu_card:hover .waifu_card_bg {\r\n    width: 105%;\r\n    height: 105%;\r\n}\r\n\r\n.waifu_card .waifu_card_bg {\r\n    position: absolute;\r\n    z-index: 0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.waifu_card .waifu_card_content {\r\n    z-index: 1;\r\n    position: relative;\r\n    display: flex;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_left {\r\n    width: 20%;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_left .waifu_card_img {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_right {\r\n    flex: 1 1;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_right .waifu_card_name {\r\n    font-size: 3rem;\r\n    color: var(--dark_white);\r\n    margin-left: 1%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_right .waifu_card_anime {\r\n    font-size: 1.5rem;\r\n    color: var(--discord_blue);\r\n    margin-left: 1%;\r\n    font-weight: 200px;\r\n}\r\n\r\n/* Tablet */\r\n@media only screen and (max-width: 1340px) and (min-width: 800px) {\r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_name {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_anime {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .waifu_card .waifu_card_content {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .waifu_card .waifu_card_content .waifu_card_left {\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        display: block;\r\n    }\r\n\r\n    .waifu_card .waifu_card_content .waifu_card_right {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_name {\r\n        font-size: 1.5rem;\r\n        text-align: center;\r\n    }\r\n    \r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_anime {\r\n        font-size: 1.2rem;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n:root {\r\n    --display_red: #e94560;\r\n    --discord_blue: #7289da;\r\n    --top_card_border: #7289da;\r\n    --bot_card_border: #7289da;\r\n    --discord_blue_lighter: #8496d8;\r\n    --discord_light_grey: #99aab5;\r\n    --discord_grey: #2c2f33;\r\n    --discord_dark_grey: #23272a;\r\n    --dark_white: #ececec;\r\n\r\n    --read_font: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\r\n}", "",{"version":3,"sources":["webpack://styles/waifus.css"],"names":[],"mappings":"AAAA,aAAa,YAAY,EAAE,WAAW,EAAE,SAAS,EAAE;;AAEnD;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;;IAElB,WAAW;IACX,UAAU;;IAEV,kBAAkB;IAClB,gBAAgB;;IAEhB,kBAAkB;;IAElB,UAAU;;IAEV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;;IAEV,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;;IAEV,WAAW;IACX,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,kBAAkB;QAClB,iBAAiB;QACjB,cAAc;IAClB;;IAEA;QACI,aAAa;QACb,mBAAmB;QACnB,uBAAuB;IAC3B;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;IACtB;AACJ;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,0BAA0B;IAC1B,+BAA+B;IAC/B,6BAA6B;IAC7B,uBAAuB;IACvB,4BAA4B;IAC5B,qBAAqB;;IAErB,oIAAoI;AACxI","sourcesContent":["html, body { height: 100%; width: 100%; margin: 0; }\r\n\r\n.body {\r\n    margin-top: 4rem;\r\n    height: 100%;\r\n}\r\n\r\n.waifu_card {\r\n    margin: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n    height: 40%;\r\n    width: 90%;\r\n\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n\r\n    position: relative;\r\n\r\n    z-index: 2;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.waifu_card .waifu_card_bg_layer {\r\n    position: absolute;\r\n    z-index: 1;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.671);\r\n    border-radius: 5px;\r\n}\r\n\r\n.waifu_card:hover .waifu_card_bg {\r\n    width: 105%;\r\n    height: 105%;\r\n}\r\n\r\n.waifu_card .waifu_card_bg {\r\n    position: absolute;\r\n    z-index: 0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.waifu_card .waifu_card_content {\r\n    z-index: 1;\r\n    position: relative;\r\n    display: flex;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_left {\r\n    width: 20%;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_left .waifu_card_img {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_right {\r\n    flex: 1;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_right .waifu_card_name {\r\n    font-size: 3rem;\r\n    color: var(--dark_white);\r\n    margin-left: 1%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.waifu_card .waifu_card_content .waifu_card_right .waifu_card_anime {\r\n    font-size: 1.5rem;\r\n    color: var(--discord_blue);\r\n    margin-left: 1%;\r\n    font-weight: 200px;\r\n}\r\n\r\n/* Tablet */\r\n@media only screen and (max-width: 1340px) and (min-width: 800px) {\r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_name {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_anime {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .waifu_card .waifu_card_content {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .waifu_card .waifu_card_content .waifu_card_left {\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        display: block;\r\n    }\r\n\r\n    .waifu_card .waifu_card_content .waifu_card_right {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_name {\r\n        font-size: 1.5rem;\r\n        text-align: center;\r\n    }\r\n    \r\n    .waifu_card .waifu_card_content .waifu_card_right .waifu_card_anime {\r\n        font-size: 1.2rem;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n:root {\r\n    --display_red: #e94560;\r\n    --discord_blue: #7289da;\r\n    --top_card_border: #7289da;\r\n    --bot_card_border: #7289da;\r\n    --discord_blue_lighter: #8496d8;\r\n    --discord_light_grey: #99aab5;\r\n    --discord_grey: #2c2f33;\r\n    --discord_dark_grey: #23272a;\r\n    --dark_white: #ececec;\r\n\r\n    --read_font: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3dhaWZ1cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLHNEQUFzRCxjQUFjLGFBQWEsV0FBVyxFQUFFLGVBQWUseUJBQXlCLHFCQUFxQixLQUFLLHFCQUFxQixxQkFBcUIsMEJBQTBCLDJCQUEyQix3QkFBd0IsbUJBQW1CLCtCQUErQix5QkFBeUIsK0JBQStCLHVCQUF1Qiw2QkFBNkIsS0FBSywwQ0FBMEMsMkJBQTJCLG1CQUFtQix3QkFBd0IscUJBQXFCLCtDQUErQywyQkFBMkIsS0FBSywwQ0FBMEMsb0JBQW9CLHFCQUFxQixLQUFLLG9DQUFvQywyQkFBMkIsbUJBQW1CLHdCQUF3QixxQkFBcUIsNkJBQTZCLDZCQUE2QiwyQkFBMkIseUJBQXlCLEtBQUsseUNBQXlDLG1CQUFtQiwyQkFBMkIsc0JBQXNCLEtBQUssMERBQTBELG1CQUFtQixLQUFLLDBFQUEwRSxxQkFBcUIsb0JBQW9CLEtBQUssMkRBQTJELGtCQUFrQixLQUFLLDRFQUE0RSx3QkFBd0IsaUNBQWlDLHdCQUF3Qix5QkFBeUIsS0FBSyw2RUFBNkUsMEJBQTBCLG1DQUFtQyx3QkFBd0IsMkJBQTJCLEtBQUssMkZBQTJGLDRFQUE0RSw4QkFBOEIsU0FBUyxxRkFBcUYsOEJBQThCLFNBQVMsS0FBSyxtREFBbUQseUNBQXlDLG1DQUFtQyxTQUFTLDhEQUE4RCwrQkFBK0IsOEJBQThCLDJCQUEyQixTQUFTLCtEQUErRCwwQkFBMEIsZ0NBQWdDLG9DQUFvQyxTQUFTLG9GQUFvRiw4QkFBOEIsK0JBQStCLFNBQVMscUZBQXFGLDhCQUE4QiwrQkFBK0IsU0FBUyxLQUFLLGVBQWUsK0JBQStCLGdDQUFnQyxtQ0FBbUMsbUNBQW1DLHdDQUF3QyxzQ0FBc0MsZ0NBQWdDLHFDQUFxQyw4QkFBOEIsaUpBQWlKLEtBQUssT0FBTyxzSEFBc0gsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsV0FBVyxZQUFZLGNBQWMsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsc0NBQXNDLGNBQWMsYUFBYSxXQUFXLEVBQUUsZUFBZSx5QkFBeUIscUJBQXFCLEtBQUsscUJBQXFCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLHdCQUF3QixtQkFBbUIsK0JBQStCLHlCQUF5QiwrQkFBK0IsdUJBQXVCLDZCQUE2QixLQUFLLDBDQUEwQywyQkFBMkIsbUJBQW1CLHdCQUF3QixxQkFBcUIsK0NBQStDLDJCQUEyQixLQUFLLDBDQUEwQyxvQkFBb0IscUJBQXFCLEtBQUssb0NBQW9DLDJCQUEyQixtQkFBbUIsd0JBQXdCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLHlCQUF5QixLQUFLLHlDQUF5QyxtQkFBbUIsMkJBQTJCLHNCQUFzQixLQUFLLDBEQUEwRCxtQkFBbUIsS0FBSywwRUFBMEUscUJBQXFCLG9CQUFvQixLQUFLLDJEQUEyRCxnQkFBZ0IsS0FBSyw0RUFBNEUsd0JBQXdCLGlDQUFpQyx3QkFBd0IseUJBQXlCLEtBQUssNkVBQTZFLDBCQUEwQixtQ0FBbUMsd0JBQXdCLDJCQUEyQixLQUFLLDJGQUEyRiw0RUFBNEUsOEJBQThCLFNBQVMscUZBQXFGLDhCQUE4QixTQUFTLEtBQUssbURBQW1ELHlDQUF5QyxtQ0FBbUMsU0FBUyw4REFBOEQsK0JBQStCLDhCQUE4QiwyQkFBMkIsU0FBUywrREFBK0QsMEJBQTBCLGdDQUFnQyxvQ0FBb0MsU0FBUyxvRkFBb0YsOEJBQThCLCtCQUErQixTQUFTLHFGQUFxRiw4QkFBOEIsK0JBQStCLFNBQVMsS0FBSyxlQUFlLCtCQUErQixnQ0FBZ0MsbUNBQW1DLG1DQUFtQyx3Q0FBd0Msc0NBQXNDLGdDQUFnQyxxQ0FBcUMsOEJBQThCLGlKQUFpSixLQUFLLG1CQUFtQjtBQUM3b1A7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVjNzc5YjlmMTE4NzQ0MTJiNThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgbWFyZ2luOiAwOyB9XFxyXFxuXFxyXFxuLmJvZHkge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDQwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2JnX2xheWVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2FpZnVfY2FyZDpob3ZlciAud2FpZnVfY2FyZF9iZyB7XFxyXFxuICAgIHdpZHRoOiAxMDUlO1xcclxcbiAgICBoZWlnaHQ6IDEwNSU7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2JnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9sZWZ0IC53YWlmdV9jYXJkX2ltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfcmlnaHQge1xcclxcbiAgICBmbGV4OiAxIDE7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfcmlnaHQgLndhaWZ1X2NhcmRfbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmtfd2hpdGUpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMSU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfcmlnaHQgLndhaWZ1X2NhcmRfYW5pbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpc2NvcmRfYmx1ZSk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUYWJsZXQgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNDBweCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfcmlnaHQgLndhaWZ1X2NhcmRfbmFtZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9yaWdodCAud2FpZnVfY2FyZF9hbmltZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2FpZnVfY2FyZCAud2FpZnVfY2FyZF9jb250ZW50IC53YWlmdV9jYXJkX2xlZnQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2FpZnVfY2FyZCAud2FpZnVfY2FyZF9jb250ZW50IC53YWlmdV9jYXJkX3JpZ2h0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfcmlnaHQgLndhaWZ1X2NhcmRfbmFtZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9yaWdodCAud2FpZnVfY2FyZF9hbmltZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tZGlzcGxheV9yZWQ6ICNlOTQ1NjA7XFxyXFxuICAgIC0tZGlzY29yZF9ibHVlOiAjNzI4OWRhO1xcclxcbiAgICAtLXRvcF9jYXJkX2JvcmRlcjogIzcyODlkYTtcXHJcXG4gICAgLS1ib3RfY2FyZF9ib3JkZXI6ICM3Mjg5ZGE7XFxyXFxuICAgIC0tZGlzY29yZF9ibHVlX2xpZ2h0ZXI6ICM4NDk2ZDg7XFxyXFxuICAgIC0tZGlzY29yZF9saWdodF9ncmV5OiAjOTlhYWI1O1xcclxcbiAgICAtLWRpc2NvcmRfZ3JleTogIzJjMmYzMztcXHJcXG4gICAgLS1kaXNjb3JkX2RhcmtfZ3JleTogIzIzMjcyYTtcXHJcXG4gICAgLS1kYXJrX3doaXRlOiAjZWNlY2VjO1xcclxcblxcclxcbiAgICAtLXJlYWRfZm9udDogUm9ib3RvLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvd2FpZnVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFOztBQUVuRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxVQUFVOztJQUVWLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGtCQUFrQjs7SUFFbEIsVUFBVTs7SUFFVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQU87QUFDWDs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHFCQUFxQjs7SUFFckIsb0lBQW9JO0FBQ3hJXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDA7IH1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfYmdfbGF5ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkOmhvdmVyIC53YWlmdV9jYXJkX2JnIHtcXHJcXG4gICAgd2lkdGg6IDEwNSU7XFxyXFxuICAgIGhlaWdodDogMTA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfbGVmdCB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfbGVmdCAud2FpZnVfY2FyZF9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FpZnVfY2FyZCAud2FpZnVfY2FyZF9jb250ZW50IC53YWlmdV9jYXJkX3JpZ2h0IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9yaWdodCAud2FpZnVfY2FyZF9uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFya193aGl0ZSk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9yaWdodCAud2FpZnVfY2FyZF9hbmltZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGlzY29yZF9ibHVlKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxldCAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM0MHB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9yaWdodCAud2FpZnVfY2FyZF9uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAud2FpZnVfY2FyZCAud2FpZnVfY2FyZF9jb250ZW50IC53YWlmdV9jYXJkX3JpZ2h0IC53YWlmdV9jYXJkX2FuaW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfbGVmdCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53YWlmdV9jYXJkIC53YWlmdV9jYXJkX2NvbnRlbnQgLndhaWZ1X2NhcmRfcmlnaHQge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLndhaWZ1X2NhcmQgLndhaWZ1X2NhcmRfY29udGVudCAud2FpZnVfY2FyZF9yaWdodCAud2FpZnVfY2FyZF9uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAud2FpZnVfY2FyZCAud2FpZnVfY2FyZF9jb250ZW50IC53YWlmdV9jYXJkX3JpZ2h0IC53YWlmdV9jYXJkX2FuaW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1kaXNwbGF5X3JlZDogI2U5NDU2MDtcXHJcXG4gICAgLS1kaXNjb3JkX2JsdWU6ICM3Mjg5ZGE7XFxyXFxuICAgIC0tdG9wX2NhcmRfYm9yZGVyOiAjNzI4OWRhO1xcclxcbiAgICAtLWJvdF9jYXJkX2JvcmRlcjogIzcyODlkYTtcXHJcXG4gICAgLS1kaXNjb3JkX2JsdWVfbGlnaHRlcjogIzg0OTZkODtcXHJcXG4gICAgLS1kaXNjb3JkX2xpZ2h0X2dyZXk6ICM5OWFhYjU7XFxyXFxuICAgIC0tZGlzY29yZF9ncmV5OiAjMmMyZjMzO1xcclxcbiAgICAtLWRpc2NvcmRfZGFya19ncmV5OiAjMjMyNzJhO1xcclxcbiAgICAtLWRhcmtfd2hpdGU6ICNlY2VjZWM7XFxyXFxuXFxyXFxuICAgIC0tcmVhZF9mb250OiBSb2JvdG8sLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=