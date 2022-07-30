/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLoader": () => (/* binding */ renderLoader),
/* harmony export */   "slideStart": () => (/* binding */ slideStart)
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/query.js");

const mainContainer = document.querySelector('main');

function setHomeScreen() {
    let headerContainer = document.createElement('header')
    let header = document.createElement('span')
    header.textContent = " 'Weather"
    let headerIcon = document.createElement('img')
    headerIcon.src = './svg/wi-alien.svg'
    header.classList.add('header-text')

    headerContainer.appendChild(headerIcon)
    headerContainer.appendChild(header)

    let inputContainer = document.createElement('div')

    inputContainer.classList.add('input-container')
    let inputSubContainer = document.createElement('div')
    inputSubContainer.classList.add('input-sub-container')
    let inputBox = document.createElement('input')
    inputBox.placeholder = ' '
    inputBox.setAttribute('id', 'home-input')
    let label = document.createElement('label')
    label.setAttribute('for', 'home-input')

    label.textContent = 'City...'
    inputBox.classList.add('home-screen-input')

    inputSubContainer.appendChild(inputBox)
    inputSubContainer.appendChild(label)
    inputContainer.appendChild(inputSubContainer)

    mainContainer.appendChild(headerContainer)
    mainContainer.appendChild(inputContainer)
    document.body.appendChild(mainContainer)

}

function renderLoader(){
    mainContainer.innerHTML = '<div class="loader">Loading...</div>'
}
function slideShow(data) {

    let backgroundImgContainer = document.createElement('div')
    backgroundImgContainer.classList.add('backgroundSlideContainer')
    backgroundImgContainer.classList.add(data.name.replace(/\s+/g, '-').toLowerCase())

    let infoContainer = document.createElement('div')
    infoContainer.classList.add('info-container')

    let cityName = document.createElement('div')
    cityName.classList.add('loading-screen-city-name')
    cityName.textContent = `${data.name}, ${data.sys.country}`

    let temp = document.createElement('div')
    temp.classList.add('loading-screen-city-temp')
    temp.textContent = `${Math.round(data.main.temp - 275)}°C`

    let weather = document.createElement('div')
    weather.classList.add('loading-screen-city-weather')
    let weatherString = data.weather[0].description
    weather.textContent = weatherString.charAt(0).toUpperCase() + weatherString.slice(1)

    infoContainer.appendChild(temp)
    infoContainer.appendChild(weather)
    infoContainer.appendChild(cityName)


    mainContainer.appendChild(infoContainer)
    document.body.appendChild(backgroundImgContainer)

}

function slideStart() {
    let currentDisplayed = 0;
    let toggle = 'old';
    let displayedCities = ['tokyo', 'New York', 'france']
    setHomeScreen()

    ;(0,_query__WEBPACK_IMPORTED_MODULE_0__["default"])(displayedCities[displayedCities.length - 1])
        .then((response) => {
            slideShow(response)
            document.querySelector('.backgroundSlideContainer').classList.add(`${toggle}`)
            document.querySelector('.info-container').classList.add(`${toggle}`)
        })

    setInterval(async () => {
        let retrievedData = await (0,_query__WEBPACK_IMPORTED_MODULE_0__["default"])(displayedCities[currentDisplayed++])
        slideShow(retrievedData)

        document.querySelectorAll(`.${toggle}`).forEach(el=>el.classList.add('fadeout'))

        setTimeout(() => {
            document.querySelectorAll(`.${toggle}`).forEach(el=>el.remove())

            toggle = toggle == 'old' ? 'new' : 'old';
            document.querySelector('.backgroundSlideContainer').classList.add(`${toggle}`)
            document.querySelector('.info-container').classList.add(`${toggle}`)

            if (currentDisplayed >= displayedCities.length) {
                currentDisplayed = 0
            }
        }, 1000)





    }, 10000)


}
function clear(element) {
    while (document.querySelector(element).firstChild) {
        document.querySelector(element).removeChild(document.querySelector(element).firstChild)
    }
}
function displayQueried() {
    clear();

    let mainContainer = document.createElement('main')
    let backgroundImgContainer = document.createElement('div')

    let headerContainer = document.createElement('header')
    let header = document.createElement('span')
    header.textContent = "O'Weather"
    header.classList.add('header-text')
    headerContainer.appendChild(header)


    let infoContainer = document.createElement('div')
    infoContainer.classList.add('info-container')
    let cityName = document.createElement('div')
    cityName.textContent = 'Tokyo, Japan'
    let temp = document.createElement('div')
    temp.textContent = '39'
    let weather = document.createElement('div')
    weather.textContent = 'cloudy'

    let subInfoContainer = document.createElement('div')
    subInfoContainer.classList.add('sub-info-container')
    let humidityInfoContainer = document.createElement('div')
    let humidityIcon = document.createElement('img')
    humidityIcon.src = './dropIcon.png'
    let humidityInfo = document.createElement('div')
    humidityInfoContainer.appendChild(humidityIcon)
    humidityInfoContainer.appendChild(humidityInfo)

    let cloudsInfoContainer = document.createElement('div')
    let cloudsIcon = document.createElement('img')
    let cloudsInfo = document.createElement('div')
    cloudsInfoContainer.appendChild(cloudsIcon)
    cloudsInfoContainer.appendChild(cloudsInfo)

    let windInfoContainer = document.createElement('div')
    let windIcon = document.createElement('img')
    let windInfo = document.createElement('div')
    windInfoContainer.appendChild(windIcon)
    windInfoContainer.appendChild(windInfo)


    subInfoContainer.appendChild(humidityInfoContainer)
    subInfoContainer.appendChild(cloudsInfoContainer)
    subInfoContainer.appendChild(windInfoContainer)

    infoContainer.appendChild(cityName)
    infoContainer.appendChild(temp)
    infoContainer.appendChild(weather)
    infoContainer.appendChild(subInfoContainer)

    mainContainer.appendChild(headerContainer)
    mainContainer.appendChild(infoContainer)
    document.body.appendChild(backgroundImgContainer)
    document.body.appendChild(mainContainer)
}


/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ queryClimate)
/* harmony export */ });
async function queryClimate(location) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=14680de0af166b3e9cfe19b841f217ef`, { mode: 'cors' })
        console.log(response)
        let retrievedData = await response.json()
        console.log(retrievedData)
        return retrievedData

    } catch (error) {
        console.log(error)
    }

}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/query.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");


(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.slideStart)()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVUsSUFBSSxpQkFBaUI7O0FBRTdEO0FBQ0E7QUFDQSwwQkFBMEIsaUNBQWlDOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFDQSxpRkFBaUYsT0FBTztBQUN4Rix1RUFBdUUsT0FBTztBQUM5RSxTQUFTOztBQUVUO0FBQ0Esa0NBQWtDLGtEQUFZO0FBQzlDOztBQUVBLHNDQUFzQyxPQUFPOztBQUU3QztBQUNBLDBDQUEwQyxPQUFPOztBQUVqRDtBQUNBLGlGQUFpRixPQUFPO0FBQ3hGLHVFQUF1RSxPQUFPOztBQUU5RTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7Ozs7QUFNVCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlLZTtBQUNmO0FBQ0EsdUZBQXVGLFNBQVMsNENBQTRDLGNBQWM7QUFDMUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ3lCO0FBQzVELDhEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVlcnlDbGltYXRlIGZyb20gXCIuL3F1ZXJ5XCJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmZ1bmN0aW9uIHNldEhvbWVTY3JlZW4oKSB7XG4gICAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiICdXZWF0aGVyXCJcbiAgICBsZXQgaGVhZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaGVhZGVySWNvbi5zcmMgPSAnLi9zdmcvd2ktYWxpZW4uc3ZnJ1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGV4dCcpXG5cbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbilcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpXG4gICAgbGV0IGlucHV0U3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnB1dFN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1zdWItY29udGFpbmVyJylcbiAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnICdcbiAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtaW5wdXQnKVxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdob21lLWlucHV0JylcblxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0NpdHkuLi4nXG4gICAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnaG9tZS1zY3JlZW4taW5wdXQnKVxuXG4gICAgaW5wdXRTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpXG4gICAgaW5wdXRTdWJDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRTdWJDb250YWluZXIpXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTG9hZGVyKCl7XG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRlclwiPkxvYWRpbmcuLi48L2Rpdj4nXG59XG5mdW5jdGlvbiBzbGlkZVNob3coZGF0YSkge1xuXG4gICAgbGV0IGJhY2tncm91bmRJbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJhY2tncm91bmRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZFNsaWRlQ29udGFpbmVyJylcbiAgICBiYWNrZ3JvdW5kSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZGF0YS5uYW1lLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgbGV0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWluZXInKVxuXG4gICAgbGV0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLXNjcmVlbi1jaXR5LW5hbWUnKVxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWBcblxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctc2NyZWVuLWNpdHktdGVtcCcpXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXAgLSAyNzUpfcKwQ2BcblxuICAgIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctc2NyZWVuLWNpdHktd2VhdGhlcicpXG4gICAgbGV0IHdlYXRoZXJTdHJpbmcgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICB3ZWF0aGVyLnRleHRDb250ZW50ID0gd2VhdGhlclN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdlYXRoZXJTdHJpbmcuc2xpY2UoMSlcblxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TmFtZSlcblxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZ0NvbnRhaW5lcilcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2xpZGVTdGFydCgpIHtcbiAgICBsZXQgY3VycmVudERpc3BsYXllZCA9IDA7XG4gICAgbGV0IHRvZ2dsZSA9ICdvbGQnO1xuICAgIGxldCBkaXNwbGF5ZWRDaXRpZXMgPSBbJ3Rva3lvJywgJ05ldyBZb3JrJywgJ2ZyYW5jZSddXG4gICAgc2V0SG9tZVNjcmVlbigpXG5cbiAgICBxdWVyeUNsaW1hdGUoZGlzcGxheWVkQ2l0aWVzW2Rpc3BsYXllZENpdGllcy5sZW5ndGggLSAxXSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzbGlkZVNob3cocmVzcG9uc2UpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZFNsaWRlQ29udGFpbmVyJykuY2xhc3NMaXN0LmFkZChgJHt0b2dnbGV9YClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoYCR7dG9nZ2xlfWApXG4gICAgICAgIH0pXG5cbiAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCByZXRyaWV2ZWREYXRhID0gYXdhaXQgcXVlcnlDbGltYXRlKGRpc3BsYXllZENpdGllc1tjdXJyZW50RGlzcGxheWVkKytdKVxuICAgICAgICBzbGlkZVNob3cocmV0cmlldmVkRGF0YSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0b2dnbGV9YCkuZm9yRWFjaChlbD0+ZWwuY2xhc3NMaXN0LmFkZCgnZmFkZW91dCcpKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dG9nZ2xlfWApLmZvckVhY2goZWw9PmVsLnJlbW92ZSgpKVxuXG4gICAgICAgICAgICB0b2dnbGUgPSB0b2dnbGUgPT0gJ29sZCcgPyAnbmV3JyA6ICdvbGQnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmRTbGlkZUNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoYCR7dG9nZ2xlfWApXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKGAke3RvZ2dsZX1gKVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudERpc3BsYXllZCA+PSBkaXNwbGF5ZWRDaXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERpc3BsYXllZCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMClcblxuXG5cblxuXG4gICAgfSwgMTAwMDApXG5cblxufVxuZnVuY3Rpb24gY2xlYXIoZWxlbWVudCkge1xuICAgIHdoaWxlIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVF1ZXJpZWQoKSB7XG4gICAgY2xlYXIoKTtcblxuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbGV0IGJhY2tncm91bmRJbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTydXZWF0aGVyXCJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRleHQnKVxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG5cblxuICAgIGxldCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFpbmVyJylcbiAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gJ1Rva3lvLCBKYXBhbidcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcC50ZXh0Q29udGVudCA9ICczOSdcbiAgICBsZXQgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd2VhdGhlci50ZXh0Q29udGVudCA9ICdjbG91ZHknXG5cbiAgICBsZXQgc3ViSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc3ViSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItaW5mby1jb250YWluZXInKVxuICAgIGxldCBodW1pZGl0eUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGh1bWlkaXR5SWNvbi5zcmMgPSAnLi9kcm9wSWNvbi5wbmcnXG4gICAgbGV0IGh1bWlkaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHVtaWRpdHlJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbilcbiAgICBodW1pZGl0eUluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbmZvKVxuXG4gICAgbGV0IGNsb3Vkc0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBjbG91ZHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsZXQgY2xvdWRzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2xvdWRzSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG91ZHNJY29uKVxuICAgIGNsb3Vkc0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWRzSW5mbylcblxuICAgIGxldCB3aW5kSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IHdpbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsZXQgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdpbmRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRJY29uKVxuICAgIHdpbmRJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRJbmZvKVxuXG5cbiAgICBzdWJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5SW5mb0NvbnRhaW5lcilcbiAgICBzdWJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3Vkc0luZm9Db250YWluZXIpXG4gICAgc3ViSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kSW5mb0NvbnRhaW5lcilcblxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcilcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkluZm9Db250YWluZXIpXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nQ29udGFpbmVyKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q2xpbWF0ZShsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9MTQ2ODBkZTBhZjE2NmIzZTljZmUxOWI4NDFmMjE3ZWZgLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgbGV0IHJldHJpZXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2cocmV0cmlldmVkRGF0YSlcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlZERhdGFcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHF1ZXJ5Q2xpbWF0ZSBmcm9tIFwiLi9xdWVyeVwiO1xuaW1wb3J0IHtzbGlkZVN0YXJ0LCByZW5kZXJMb2FkZXJ9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCJcbnNsaWRlU3RhcnQoKVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9