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
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage),
/* harmony export */   "renderLoader": () => (/* binding */ renderLoader),
/* harmony export */   "renderQueriedCity": () => (/* binding */ renderQueriedCity)
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/query.js");

const homeDisplayedCities = ['tokyo','roma', 'france', 'new york', 'athens', 'london']

function renderHomePage() {
    clear();
    let mainContainer = document.createElement('main');
    mainContainer.classList.add('main-container-home');

    let cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container-home');

    let header = document.createElement('header');
    let logoContainer = document.createElement('div')
    logoContainer.classList.add('logo-default')
    let logo = document.createElement('h1')
    logo.classList.add('logo-text-default')
    logo.textContent = 'W·e·a·t·h·e·r'
    logoContainer.appendChild(logo)

    let inputContainer = document.createElement('div')
    inputContainer.classList.add('input-container-home')
    let inputBox = document.createElement('input')
    inputBox.classList.add('input-home')
    inputBox.placeholder = 'City...'
    let inputSpan = document.createElement('span')
    

    let searchButton = document.createElement('img')
    searchButton.classList.add('submit-home')
    searchButton.src = './svg/magnify.svg'

    inputContainer.appendChild(inputBox)
    inputContainer.appendChild(inputSpan)
    inputContainer.appendChild(searchButton)
    header.appendChild(logoContainer)
    header.appendChild(inputContainer)
    homeDisplayedCities.forEach(async(city) => {
        let cityRetrievedData = await (0,_query__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
        let card = document.createElement('div');
        card.classList.add('card-home')
        card.classList.add(city.replace(/\s+/g, '-'))

        let cityName = document.createElement('div');
        cityName.textContent = cityRetrievedData.name;
        cityName.classList.add('city-name-home')

        let cityTemp = document.createElement('div');
        cityTemp.classList.add('city-temp-home')
        cityTemp.textContent = `${Math.round(cityRetrievedData.main.temp - 275)}°C`;

        let cityWeather = document.createElement('div')
        cityWeather.classList.add('city-weather-home')
        cityWeather.textContent =  cityRetrievedData.weather[0].description.charAt(0).toUpperCase() + cityRetrievedData.weather[0].description.slice(1)
        
        card.appendChild(cityName)
        card.appendChild(cityWeather)
        card.appendChild(cityTemp)
        cardsContainer.appendChild(card)
    })

    mainContainer.appendChild(header)
    mainContainer.appendChild(cardsContainer)

    document.body.appendChild(mainContainer)
}

function renderQueriedCity() {
    clear();
}

function clear() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
}


function renderLoader(){
    mainContainer.innerHTML = '<div class="loader">Loading...</div>'
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



(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2xDOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxrREFBWTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsOENBQThDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRWU7QUFDZjtBQUNBLHVGQUF1RixTQUFTLDRDQUE0QyxjQUFjO0FBQzFKO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDZTs7QUFFbEQsa0VBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeUNsaW1hdGUgZnJvbSBcIi4vcXVlcnlcIlxuY29uc3QgaG9tZURpc3BsYXllZENpdGllcyA9IFsndG9reW8nLCdyb21hJywgJ2ZyYW5jZScsICduZXcgeW9yaycsICdhdGhlbnMnLCAnbG9uZG9uJ11cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICAgIGNsZWFyKCk7XG4gICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1ob21lJyk7XG5cbiAgICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcy1jb250YWluZXItaG9tZScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tZGVmYXVsdCcpXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLXRleHQtZGVmYXVsdCcpXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdXwrdlwrdhwrd0wrdowrdlwrdyJ1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbylcblxuICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLWhvbWUnKVxuICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ob21lJylcbiAgICBpbnB1dEJveC5wbGFjZWhvbGRlciA9ICdDaXR5Li4uJ1xuICAgIGxldCBpbnB1dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBcblxuICAgIGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtaG9tZScpXG4gICAgc2VhcmNoQnV0dG9uLnNyYyA9ICcuL3N2Zy9tYWduaWZ5LnN2ZydcblxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0U3BhbilcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKVxuICAgIGhvbWVEaXNwbGF5ZWRDaXRpZXMuZm9yRWFjaChhc3luYyhjaXR5KSA9PiB7XG4gICAgICAgIGxldCBjaXR5UmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShjaXR5KTtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhvbWUnKVxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2l0eS5yZXBsYWNlKC9cXHMrL2csICctJykpXG5cbiAgICAgICAgbGV0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY2l0eVJldHJpZXZlZERhdGEubmFtZTtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lLWhvbWUnKVxuXG4gICAgICAgIGxldCBjaXR5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaXR5VGVtcC5jbGFzc0xpc3QuYWRkKCdjaXR5LXRlbXAtaG9tZScpXG4gICAgICAgIGNpdHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChjaXR5UmV0cmlldmVkRGF0YS5tYWluLnRlbXAgLSAyNzUpfcKwQ2A7XG5cbiAgICAgICAgbGV0IGNpdHlXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnY2l0eS13ZWF0aGVyLWhvbWUnKVxuICAgICAgICBjaXR5V2VhdGhlci50ZXh0Q29udGVudCA9ICBjaXR5UmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2l0eVJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKVxuICAgICAgICBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5TmFtZSlcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5V2VhdGhlcilcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5VGVtcClcbiAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICB9KVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclF1ZXJpZWRDaXR5KCkge1xuICAgIGNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMb2FkZXIoKXtcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGVyXCI+TG9hZGluZy4uLjwvZGl2Pidcbn0iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBxdWVyeUNsaW1hdGUobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTE0NjgwZGUwYWYxNjZiM2U5Y2ZlMTliODQxZjIxN2VmYCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgICAgbGV0IHJldHJpZXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2cocmV0cmlldmVkRGF0YSlcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlZERhdGFcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHF1ZXJ5Q2xpbWF0ZSBmcm9tIFwiLi9xdWVyeVwiO1xuaW1wb3J0IHtyZW5kZXJIb21lUGFnZX0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIlxuXG5yZW5kZXJIb21lUGFnZSgpXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=