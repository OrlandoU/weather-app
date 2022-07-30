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
/* harmony export */   "renderQueriedCity": () => (/* binding */ renderQueriedCity)
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./src/query.js");

const homeDisplayedCities = ['tokyo', 'roma', 'france', 'new york', 'athens', 'london']

async function renderHomePage() {
    try {
        renderLoader('Loading Home Page...')
        let cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-container-home');
        cardsContainer.classList.add('main-sub-container')
        for (const city of homeDisplayedCities) {
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
            cityWeather.textContent = cityRetrievedData.weather[0].description.charAt(0).toUpperCase() + cityRetrievedData.weather[0].description.slice(1)

            card.appendChild(cityName)
            card.appendChild(cityWeather)
            card.appendChild(cityTemp)
            cardsContainer.appendChild(card)
        }
        let mainContainer = document.createElement('main');
        mainContainer.classList.add('main-container-home');



        let header = document.createElement('header');
        let logoContainer = document.createElement('div')
        logoContainer.classList.add('logo-default')
        let logo = document.createElement('h1')
        logo.classList.add('logo-text-default')
        logo.textContent = 'W·e·a·t·h·e·r'
        logo.addEventListener('click', renderHomePage)
        logoContainer.appendChild(logo)

        let inputContainer = document.createElement('form')
        inputContainer.addEventListener('submit', (e) => {
            e.preventDefault()
            renderQueriedCity().catch((error) => {
                console.log(error)
            })
        })
        inputContainer.classList.add('input-container-home')
        let inputBox = document.createElement('input')
        inputBox.classList.add('input-home')
        
        inputBox.placeholder = 'City...'
        let inputSpan = document.createElement('span')


        let searchButton = document.createElement('img')
        searchButton.classList.add('submit-home')
        searchButton.src = './svg/magnify.svg'
        searchButton.addEventListener('click', renderQueriedCity)

        inputContainer.appendChild(inputBox)
        inputContainer.appendChild(inputSpan)
        inputContainer.appendChild(searchButton)
        header.appendChild(logoContainer)
        header.appendChild(inputContainer)

        mainContainer.appendChild(header)
        mainContainer.appendChild(cardsContainer)

        clear()

        document.body.appendChild(mainContainer)
    }catch(error){
        let errorPromise = await error
        renderError(errorPromise.message.charAt(0).toUpperCase() + errorPromise.message.slice(1))
    }
}


async function renderQueriedCity() {
    try {
        renderLoader('Retrieving Data...')
        let retrievedData = await (0,_query__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('input'))
        let mainContainer = document.createElement('main');
        mainContainer.classList.add('main-container-home');

        let header = document.createElement('header');
        let logoContainer = document.createElement('div')
        logoContainer.classList.add('logo-default')
        let logo = document.createElement('h1')
        logo.classList.add('logo-text-default')
        logo.textContent = 'W·e·a·t·h·e·r'
        logo.addEventListener('click', renderHomePage)
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
        searchButton.addEventListener('click', renderQueriedCity)

        inputContainer.appendChild(inputBox)
        inputContainer.appendChild(inputSpan)
        inputContainer.appendChild(searchButton)
        header.appendChild(logoContainer)
        header.appendChild(inputContainer)
        mainContainer.appendChild(header)

        clear()
        document.body.appendChild(mainContainer)
    } catch (error) {
        let errorPromise = await error
        renderError(errorPromise.message.charAt(0).toUpperCase() + errorPromise.message.slice(1))
    }
}

function clear() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
}

function renderError(text) {
    clear()
    let errorScreen = document.createElement('div')
    errorScreen.classList.add('error-screen')

    let errorIcon = document.createElement('div')
    errorIcon.classList.add('error-icon')

    let errorText = document.createElement('h1')
    errorText.textContent = text

    errorScreen.appendChild(errorIcon)
    errorScreen.appendChild(errorText)
    document.body.appendChild(errorScreen)

    setTimeout(renderHomePage, 4000)
}

function renderLoader(text) {
    clear()
    let loadingScreen = document.createElement('div')
    loadingScreen.classList.add('loading-screen')

    let loaderSpinner = document.createElement('div')
    loaderSpinner.classList.add('loader')
    loaderSpinner.textContent = 'Loading...'

    let loadingText = document.createElement('h1')
    loadingText.textContent = text

    loadingScreen.appendChild(loaderSpinner)
    loadingScreen.appendChild(loadingText)
    document.body.appendChild(loadingScreen)
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
        if(!response.ok){
            throw(response.json())
        }

        let retrievedData = await response.json()
        console.log(retrievedData)
        return retrievedData;
    } catch (error) {
        throw error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0RBQVk7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUE4Qzs7QUFFcEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0Esa0NBQWtDLGtEQUFZO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hLZTtBQUNmO0FBQ0EsdUZBQXVGLFNBQVMsNENBQTRDLGNBQWM7QUFDMUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tQztBQUM2Qjs7QUFFaEUsa0VBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeUNsaW1hdGUgZnJvbSBcIi4vcXVlcnlcIlxuY29uc3QgaG9tZURpc3BsYXllZENpdGllcyA9IFsndG9reW8nLCAncm9tYScsICdmcmFuY2UnLCAnbmV3IHlvcmsnLCAnYXRoZW5zJywgJ2xvbmRvbiddXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpIHtcbiAgICB0cnkge1xuICAgICAgICByZW5kZXJMb2FkZXIoJ0xvYWRpbmcgSG9tZSBQYWdlLi4uJylcbiAgICAgICAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lci1ob21lJyk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tc3ViLWNvbnRhaW5lcicpXG4gICAgICAgIGZvciAoY29uc3QgY2l0eSBvZiBob21lRGlzcGxheWVkQ2l0aWVzKSB7XG4gICAgICAgICAgICBsZXQgY2l0eVJldHJpZXZlZERhdGEgPSBhd2FpdCBxdWVyeUNsaW1hdGUoY2l0eSk7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhvbWUnKVxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNpdHkucmVwbGFjZSgvXFxzKy9nLCAnLScpKVxuXG4gICAgICAgICAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY2l0eVJldHJpZXZlZERhdGEubmFtZTtcbiAgICAgICAgICAgIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZS1ob21lJylcblxuICAgICAgICAgICAgbGV0IGNpdHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaXR5VGVtcC5jbGFzc0xpc3QuYWRkKCdjaXR5LXRlbXAtaG9tZScpXG4gICAgICAgICAgICBjaXR5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoY2l0eVJldHJpZXZlZERhdGEubWFpbi50ZW1wIC0gMjc1KX3CsENgO1xuXG4gICAgICAgICAgICBsZXQgY2l0eVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2l0eVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnY2l0eS13ZWF0aGVyLWhvbWUnKVxuICAgICAgICAgICAgY2l0eVdlYXRoZXIudGV4dENvbnRlbnQgPSBjaXR5UmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2l0eVJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKVxuXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNpdHlOYW1lKVxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5V2VhdGhlcilcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2l0eVRlbXApXG4gICAgICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICB9XG4gICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyLWhvbWUnKTtcblxuXG5cbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1kZWZhdWx0JylcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby10ZXh0LWRlZmF1bHQnKVxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ1fCt2XCt2HCt3TCt2jCt2XCt3InXG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJIb21lUGFnZSlcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBpbnB1dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZW5kZXJRdWVyaWVkQ2l0eSgpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLWhvbWUnKVxuICAgICAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWhvbWUnKVxuICAgICAgICBcbiAgICAgICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eS4uLidcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG5cbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtaG9tZScpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5zcmMgPSAnLi9zdmcvbWFnbmlmeS5zdmcnXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxuXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcblxuICAgICAgICBjbGVhcigpXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGxldCBlcnJvclByb21pc2UgPSBhd2FpdCBlcnJvclxuICAgICAgICByZW5kZXJFcnJvcihlcnJvclByb21pc2UubWVzc2FnZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVycm9yUHJvbWlzZS5tZXNzYWdlLnNsaWNlKDEpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUXVlcmllZENpdHkoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVuZGVyTG9hZGVyKCdSZXRyaWV2aW5nIERhdGEuLi4nKVxuICAgICAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpKVxuICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1ob21lJyk7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1kZWZhdWx0JylcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby10ZXh0LWRlZmF1bHQnKVxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ1fCt2XCt2HCt3TCt2jCt2XCt3InXG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJIb21lUGFnZSlcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci1ob21lJylcbiAgICAgICAgbGV0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ob21lJylcbiAgICAgICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eS4uLidcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG5cbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtaG9tZScpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5zcmMgPSAnLi9zdmcvbWFnbmlmeS5zdmcnXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxuXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICAgICAgY2xlYXIoKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbGV0IGVycm9yUHJvbWlzZSA9IGF3YWl0IGVycm9yXG4gICAgICAgIHJlbmRlckVycm9yKGVycm9yUHJvbWlzZS5tZXNzYWdlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXJyb3JQcm9taXNlLm1lc3NhZ2Uuc2xpY2UoMSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRXJyb3IodGV4dCkge1xuICAgIGNsZWFyKClcbiAgICBsZXQgZXJyb3JTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVycm9yU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLXNjcmVlbicpXG5cbiAgICBsZXQgZXJyb3JJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlcnJvckljb24uY2xhc3NMaXN0LmFkZCgnZXJyb3ItaWNvbicpXG5cbiAgICBsZXQgZXJyb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IHRleHRcblxuICAgIGVycm9yU2NyZWVuLmFwcGVuZENoaWxkKGVycm9ySWNvbilcbiAgICBlcnJvclNjcmVlbi5hcHBlbmRDaGlsZChlcnJvclRleHQpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlcnJvclNjcmVlbilcblxuICAgIHNldFRpbWVvdXQocmVuZGVySG9tZVBhZ2UsIDQwMDApXG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvYWRlcih0ZXh0KSB7XG4gICAgY2xlYXIoKVxuICAgIGxldCBsb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctc2NyZWVuJylcblxuICAgIGxldCBsb2FkZXJTcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsb2FkZXJTcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpXG4gICAgbG9hZGVyU3Bpbm5lci50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJ1xuXG4gICAgbGV0IGxvYWRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGxvYWRpbmdUZXh0LnRleHRDb250ZW50ID0gdGV4dFxuXG4gICAgbG9hZGluZ1NjcmVlbi5hcHBlbmRDaGlsZChsb2FkZXJTcGlubmVyKVxuICAgIGxvYWRpbmdTY3JlZW4uYXBwZW5kQ2hpbGQobG9hZGluZ1RleHQpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkaW5nU2NyZWVuKVxufSIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q2xpbWF0ZShsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9MTQ2ODBkZTBhZjE2NmIzZTljZmUxOWI4NDFmMjE3ZWZgLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgICAgICBpZighcmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgdGhyb3cocmVzcG9uc2UuanNvbigpKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldHJpZXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2cocmV0cmlldmVkRGF0YSlcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlZERhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBxdWVyeUNsaW1hdGUgZnJvbSBcIi4vcXVlcnlcIjtcbmltcG9ydCB7cmVuZGVySG9tZVBhZ2UsIHJlbmRlckxvYWRlcn0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIlxuXG5yZW5kZXJIb21lUGFnZSgpXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9