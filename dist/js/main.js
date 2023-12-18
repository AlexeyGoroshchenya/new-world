/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__.burger)();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst burger = () => {\r\n\r\n    const menu = document.querySelector('.header__menu')\r\n    const donateBtn = document.querySelector('.header__donate')\r\n    const toggleMenuBtn = document.querySelector('.header__button')\r\n\r\n    // let coordX = null;\r\n\r\n    const moveMenu = () => {\r\n        menu.classList.toggle('active')\r\n    }\r\n\r\n    if (_helpers__WEBPACK_IMPORTED_MODULE_0__.isMobile.any()) {\r\n\r\n        \r\n\r\n        let copyNavMenu = donateBtn.cloneNode(true);\r\n\r\n        menu.append(copyNavMenu);\r\n\r\n        donateBtn.remove()\r\n\r\n\r\n\r\n\r\n        // document.querySelectorAll('.navigation-header__link-desktop').forEach((link) => {\r\n        //     link.classList.remove('navigation-header__link-desktop')\r\n        //     link.classList.add('menu-header__link')\r\n        // })\r\n\r\n        // document.querySelector('.navigation-header__list').classList.add('menu-header__linkbox')\r\n        // document.querySelector('.navigation-header__list-desktop').classList.remove('navigation-header__list-desktop')\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n\r\n    document.body.addEventListener('click', (e) => {\r\n\r\n    \r\n\r\n        if (document.querySelector('.header__menu.active')) {\r\n\r\n            if (e.target.closest('.menu-header__link') || e.target.closest('.header__donate') || !e.target.closest('.header__menu') ) {\r\n                e.preventDefault()\r\n                moveMenu()\r\n            }\r\n\r\n\r\n        } else  {\r\n            if (e.target.closest('.header__button')) {\r\n    \r\n                        moveMenu()\r\n                    }\r\n        }\r\n\r\n\r\n    })\r\n\r\n    // document.addEventListener('pointerdown', (e) => {\r\n    //     if (e.target.closest('.menu-header__list')) {\r\n    //         coordX = e.clientX;\r\n    //     }\r\n\r\n\r\n    // }, false)\r\n\r\n    // document.addEventListener('pointermove', (e) => {\r\n\r\n\r\n\r\n    //     if (!coordX) return\r\n\r\n    //     if (e.target.closest('.menu-header__list')) {\r\n    //         let touchEnd = e.clientX;\r\n\r\n    //         if (touchEnd < coordX) {\r\n    //             moveMenu()\r\n    //         }\r\n\r\n    //         coordX = null;\r\n    //     }\r\n\r\n\r\n    // }, false)\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\nconst isMobile = {\r\n    Android: function () {\r\n        return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n        return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n        return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n        return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n        return (\r\n            isMobile.Android()\r\n            || isMobile.BlackBerry()\r\n            || isMobile.iOS()\r\n            || isMobile.Opera()\r\n            || isMobile.Windows()\r\n        );\r\n    }\r\n}             // если isMobile.any() возвращает true пользователь пришел с мобильного устройства\r\n\r\nconst blockBody = () => {\r\n    function calcScroll() {\r\n        let scrollWidth = 0;\r\n        let scrollHeight = Math.max(\r\n            document.body.scrollHeight, document.documentElement.scrollHeight,\r\n            document.body.offsetHeight, document.documentElement.offsetHeight,\r\n            document.body.clientHeight, document.documentElement.clientHeight\r\n        );\r\n\r\n        if (scrollHeight > document.documentElement.clientHeight) {\r\n            let div = document.createElement('div');\r\n            div.style.width = '100px';\r\n            div.style.height = '100px';\r\n            div.style.overflowY = 'scroll';\r\n            div.style.visibility = 'hidden';\r\n            document.body.appendChild(div);\r\n            scrollWidth = (div.offsetWidth - div.clientWidth);\r\n            div.remove();\r\n        }\r\n        return scrollWidth;\r\n    }\r\n\r\n    document.body.style.paddingRight = `${calcScroll()}px`;\r\n    document.body.style.overflow = 'hidden'\r\n\r\n\r\n}\r\n\r\nconst unblockBody = () => {\r\n    document.body.style.paddingRight = '0';\r\n    document.body.style.overflow = 'auto';\r\n\r\n}\r\n\r\nconst openModal = (elem, className) => {\r\n    if (elem) {\r\n        elem.style.display = 'flex';\r\n        blockBody();\r\n\r\n        setTimeout(() => {\r\n            elem.classList.remove(className);\r\n        }, 300)\r\n    }\r\n}\r\n\r\nconst closeModal = (elem, className) => {\r\n    if (elem) {\r\n        unblockBody();\r\n\r\n        elem.classList.add(className);\r\n        setTimeout(() => {\r\n            elem.style.display = 'none';\r\n        }, 300)\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;