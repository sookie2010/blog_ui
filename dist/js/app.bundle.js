/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports) {

$(function() {
  window.scrollDom = window.scrollDom || {};
  window.scrollDom.button = document.getElementById("scrollBtn");
  window.scrollDom.sideBar = document.getElementById("sideBarMain");
  var scrollCallback = function(e) {
    //控制 回到顶部 浮动按钮的显示与隐藏
    var _scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    if(!window.scrollDom.toggleSide) {
      //由于嵌入的内容是异步加载, 可能初始化的时候无法取到这个对象
      window.scrollDom.toggleSide = document.getElementById("toggle-side");
    }
    if (_scrollTop >= 160) {
      window.scrollDom.button.style.display = "block";
      window.scrollDom.sideBar.className = "side-fix";
      window.scrollDom.toggleSide.style.display = "block";
    } else {
      window.scrollDom.button.style.display = "none";
      window.scrollDom.sideBar.className = "";
      window.scrollDom.toggleSide.style.display = "none";
    }
  };
  $(window).on("scroll", scrollCallback);
  scrollCallback.call(null);

  $("#scrollBtn").on("click",function(){
    $.smoothScroll(0); //滚动至页面顶部
  });
  $("#toggle-side").on("click", function(){
    var sideContianer = $("#sideBar");
    if(sideContianer.is(":hidden")) {
      sideContianer.show(300);
    } else {
      sideContianer.hide(300);
    }
  })
});


/***/ })

/******/ });