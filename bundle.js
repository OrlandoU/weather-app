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
        let logoIcon = document.createElement('img')
        logoIcon.src = './head-icon.gif'
        let logo = document.createElement('h1')
        logo.classList.add('logo-text-default')
        logo.textContent = 'W·e·a·t·h·e·r'
        logo.addEventListener('click', renderHomePage)
        logoContainer.appendChild(logoIcon)
        logoContainer.appendChild(logo)

        let inputContainer = document.createElement('form')
        inputContainer.addEventListener('submit', (e) => {
            e.preventDefault()
            renderQueriedCity()
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
    } catch(error) {
        let errorPromise = await error
        console.log(error)
        renderError(errorPromise.message.charAt(0).toUpperCase() + errorPromise.message.slice(1))
    }
}


async function renderQueriedCity() {
    try {
        let retrievedData = await (0,_query__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('input').value)
        renderLoader('Retrieving Data...')
        
        let mainContainer = document.createElement('main');
        mainContainer.classList.add('main-container-home');

        let header = document.createElement('header');
        let logoContainer = document.createElement('div')
        logoContainer.classList.add('logo-default')
        let logoIcon = document.createElement('img')
        logoIcon.src = './head-icon.gif'
        let logo = document.createElement('h1')
        logo.classList.add('logo-text-default')
        logo.textContent = 'W·e·a·t·h·e·r'
        logo.addEventListener('click', renderHomePage)
        logoContainer.appendChild(logoIcon)
        logoContainer.appendChild(logo)

        let inputContainer = document.createElement('form')
        inputContainer.addEventListener('submit', (e) => {
            e.preventDefault()
            renderQueriedCity()
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

        let queriedMainContainer = document.createElement('div')
        queriedMainContainer.classList.add('main-container-queried')

        // top header
        let queriedHeader = document.createElement('div')
        queriedHeader.classList.add('sub-header-queried')

        let cityName = document.createElement('div')
        cityName.classList.add('city-name-queried')
        cityName.textContent = retrievedData.name
        let cityCountry = document.createElement('span')
        cityCountry.classList.add('city-country-queried')
        cityCountry.textContent = retrievedData.sys.country
        cityName.appendChild(cityCountry)

        let cityTemp = document.createElement('div')
        cityTemp.classList.add('city-temp-queried')
        cityTemp.textContent = `${Math.round(retrievedData.main.temp - 275)}°`
        let weatherIcon = document.createElement('img')
        weatherIcon.src = `http://openweathermap.org/img/wn/${retrievedData.weather[0].icon}@2x.png`
        cityTemp.appendChild(weatherIcon)

        let cityWeatherDescription = document.createElement('div')
        cityWeatherDescription.classList.add('city-weather-queried')
        cityWeatherDescription.textContent = retrievedData.weather[0].description.charAt(0).toUpperCase() + retrievedData.weather[0].description.slice(1)

        queriedHeader.appendChild(cityName)
        queriedHeader.appendChild(cityTemp)
        queriedHeader.appendChild(cityWeatherDescription)

        // middle container
        let queriedAdditionalContainer = document.createElement('div')
        queriedAdditionalContainer.classList.add('middle-container-queried')
        
        let cityHumidity = document.createElement('div')
        cityHumidity.classList.add('city-humidity-container-queried')
        let cityHumidityIcon = document.createElement('img')
        cityHumidityIcon.classList.add('city-humidity-icon-queried')
        cityHumidityIcon.src = './svg/drop.png'
        let cityHumidityMainText = document.createElement('div')
        cityHumidityMainText.classList.add('city-humidity-mainText-queried')
        cityHumidityMainText.textContent = 'Humidity'
        let cityHumidityText = document.createElement('div')
        cityHumidityText.classList.add('city-humidity-text-queried')
        cityHumidityText.textContent = `${retrievedData.main.humidity}%`
        cityHumidity.appendChild(cityHumidityIcon)
        cityHumidity.appendChild(cityHumidityMainText)
        cityHumidity.appendChild(cityHumidityText)

        let cityClouds = document.createElement('div')
        cityClouds.classList.add('city-clouds-container-queried')
        let cityCloudsIcon = document.createElement('img')
        cityCloudsIcon.classList.add('city-clouds-icon-queried')
        cityCloudsIcon.src = './svg/cloud.png'
        let cityCloudsMainText = document.createElement('div')
        cityCloudsMainText.classList.add('city-clouds-mainText-queried')
        cityCloudsMainText.textContent = 'Clouds'
        let cityCloudsText = document.createElement('div')
        cityCloudsText.classList.add('city-clouds-text-queried')
        cityCloudsText.textContent = `${retrievedData.clouds.all}%`
        cityClouds.appendChild(cityCloudsIcon)
        cityClouds.appendChild(cityCloudsMainText)
        cityClouds.appendChild(cityCloudsText)

        let cityVisibility = document.createElement('div')
        cityVisibility.classList.add('city-visibility-container-queried')
        let cityVisibilityIcon = document.createElement('img')
        cityVisibilityIcon.classList.add('city-visibility-icon-queried')
        cityVisibilityIcon.src = './svg/visibility.png'
        let cityVisibilityMainText = document.createElement('div')
        cityVisibilityMainText.classList.add('city-visibility-mainText-queried')
        cityVisibilityMainText.textContent = 'Visibility'
        let cityVisibilityText = document.createElement('div')
        cityVisibilityText.classList.add('city-visibility-text-queried')
        cityVisibilityText.textContent = `${(retrievedData.visibility / 1000).toFixed(2)} km`
        cityVisibility.appendChild(cityVisibilityIcon)
        cityVisibility.appendChild(cityVisibilityMainText)
        cityVisibility.appendChild(cityVisibilityText)

        queriedAdditionalContainer.appendChild(cityHumidity)
        queriedAdditionalContainer.appendChild(cityClouds)
        queriedAdditionalContainer.appendChild(cityVisibility)


        // last container
        let queriedAdditionalForecastContainer = document.createElement('div')

        queriedMainContainer.appendChild(queriedHeader)
        queriedMainContainer.appendChild(queriedAdditionalContainer)
        queriedMainContainer.appendChild(queriedAdditionalForecastContainer)

        mainContainer.appendChild(header)
        mainContainer.appendChild(queriedMainContainer)
        setTimeout(()=>{
            clear()
            document.body.appendChild(mainContainer)
        },500)

    } catch (error) {
        renderError(error.message.charAt(0).toUpperCase() + error.message.slice(1))
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

    setTimeout(renderHomePage, 3000)
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
            throw(await response.json())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3F1ZXJ5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5Q2xpbWF0ZSBmcm9tIFwiLi9xdWVyeVwiXG5jb25zdCBob21lRGlzcGxheWVkQ2l0aWVzID0gWyd0b2t5bycsICdyb21hJywgJ2ZyYW5jZScsICduZXcgeW9yaycsICdhdGhlbnMnLCAnbG9uZG9uJ11cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJlbmRlckxvYWRlcignTG9hZGluZyBIb21lIFBhZ2UuLi4nKVxuICAgICAgICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZHMtY29udGFpbmVyLWhvbWUnKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1zdWItY29udGFpbmVyJylcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGhvbWVEaXNwbGF5ZWRDaXRpZXMpIHtcbiAgICAgICAgICAgIGxldCBjaXR5UmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShjaXR5KTtcbiAgICAgICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaG9tZScpXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2l0eS5yZXBsYWNlKC9cXHMrL2csICctJykpXG5cbiAgICAgICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBjaXR5UmV0cmlldmVkRGF0YS5uYW1lO1xuICAgICAgICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lLWhvbWUnKVxuXG4gICAgICAgICAgICBsZXQgY2l0eVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNpdHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2NpdHktdGVtcC1ob21lJylcbiAgICAgICAgICAgIGNpdHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChjaXR5UmV0cmlldmVkRGF0YS5tYWluLnRlbXAgLSAyNzUpfcKwQ2A7XG5cbiAgICAgICAgICAgIGxldCBjaXR5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaXR5V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdjaXR5LXdlYXRoZXItaG9tZScpXG4gICAgICAgICAgICBjaXR5V2VhdGhlci50ZXh0Q29udGVudCA9IGNpdHlSZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjaXR5UmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNsaWNlKDEpXG5cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNpdHlXZWF0aGVyKVxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjaXR5VGVtcClcbiAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXItaG9tZScpO1xuXG5cblxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWRlZmF1bHQnKVxuICAgICAgICBsZXQgbG9nb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsb2dvSWNvbi5zcmMgPSAnLi9oZWFkLWljb24uZ2lmJ1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLXRleHQtZGVmYXVsdCcpXG4gICAgICAgIGxvZ28udGV4dENvbnRlbnQgPSAnV8K3ZcK3YcK3dMK3aMK3ZcK3cidcbiAgICAgICAgbG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckhvbWVQYWdlKVxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JY29uKVxuICAgICAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pXG5cbiAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJlbmRlclF1ZXJpZWRDaXR5KClcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLWhvbWUnKVxuICAgICAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWhvbWUnKVxuICAgICAgICBcbiAgICAgICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eS4uLidcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG5cbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtaG9tZScpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5zcmMgPSAnLi9zdmcvbWFnbmlmeS5zdmcnXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxuXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcilcbiAgICAgICAgXG4gICAgICAgIGNsZWFyKClcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBsZXQgZXJyb3JQcm9taXNlID0gYXdhaXQgZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHJlbmRlckVycm9yKGVycm9yUHJvbWlzZS5tZXNzYWdlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXJyb3JQcm9taXNlLm1lc3NhZ2Uuc2xpY2UoMSkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJRdWVyaWVkQ2l0eSgpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGF3YWl0IHF1ZXJ5Q2xpbWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlKVxuICAgICAgICByZW5kZXJMb2FkZXIoJ1JldHJpZXZpbmcgRGF0YS4uLicpXG4gICAgICAgIFxuICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1ob21lJyk7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1kZWZhdWx0JylcbiAgICAgICAgbGV0IGxvZ29JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbG9nb0ljb24uc3JjID0gJy4vaGVhZC1pY29uLmdpZidcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby10ZXh0LWRlZmF1bHQnKVxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ1fCt2XCt2HCt3TCt2jCt2XCt3InXG4gICAgICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJIb21lUGFnZSlcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSWNvbilcbiAgICAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBpbnB1dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZW5kZXJRdWVyaWVkQ2l0eSgpXG4gICAgICAgIH0pXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci1ob21lJylcbiAgICAgICAgbGV0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ob21lJylcbiAgICAgICAgaW5wdXRCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eS4uLidcbiAgICAgICAgbGV0IGlucHV0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG5cbiAgICAgICAgbGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtaG9tZScpXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5zcmMgPSAnLi9zdmcvbWFnbmlmeS5zdmcnXG4gICAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclF1ZXJpZWRDaXR5KVxuXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNwYW4pXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcblxuICAgICAgICBsZXQgcXVlcmllZE1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBxdWVyaWVkTWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lci1xdWVyaWVkJylcblxuICAgICAgICAvLyB0b3AgaGVhZGVyXG4gICAgICAgIGxldCBxdWVyaWVkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcXVlcmllZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGVyLXF1ZXJpZWQnKVxuXG4gICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZS1xdWVyaWVkJylcbiAgICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSByZXRyaWV2ZWREYXRhLm5hbWVcbiAgICAgICAgbGV0IGNpdHlDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGNpdHlDb3VudHJ5LmNsYXNzTGlzdC5hZGQoJ2NpdHktY291bnRyeS1xdWVyaWVkJylcbiAgICAgICAgY2l0eUNvdW50cnkudGV4dENvbnRlbnQgPSByZXRyaWV2ZWREYXRhLnN5cy5jb3VudHJ5XG4gICAgICAgIGNpdHlOYW1lLmFwcGVuZENoaWxkKGNpdHlDb3VudHJ5KVxuXG4gICAgICAgIGxldCBjaXR5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNpdHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2NpdHktdGVtcC1xdWVyaWVkJylcbiAgICAgICAgY2l0eVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHJldHJpZXZlZERhdGEubWFpbi50ZW1wIC0gMjc1KX3CsGBcbiAgICAgICAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcbiAgICAgICAgY2l0eVRlbXAuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pXG5cbiAgICAgICAgbGV0IGNpdHlXZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaXR5V2VhdGhlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NpdHktd2VhdGhlci1xdWVyaWVkJylcbiAgICAgICAgY2l0eVdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKVxuXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eVRlbXApXG4gICAgICAgIHF1ZXJpZWRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eVdlYXRoZXJEZXNjcmlwdGlvbilcblxuICAgICAgICAvLyBtaWRkbGUgY29udGFpbmVyXG4gICAgICAgIGxldCBxdWVyaWVkQWRkaXRpb25hbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHF1ZXJpZWRBZGRpdGlvbmFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21pZGRsZS1jb250YWluZXItcXVlcmllZCcpXG4gICAgICAgIFxuICAgICAgICBsZXQgY2l0eUh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eUh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2NpdHktaHVtaWRpdHktY29udGFpbmVyLXF1ZXJpZWQnKVxuICAgICAgICBsZXQgY2l0eUh1bWlkaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNpdHlIdW1pZGl0eUljb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS1pY29uLXF1ZXJpZWQnKVxuICAgICAgICBjaXR5SHVtaWRpdHlJY29uLnNyYyA9ICcuL3N2Zy9kcm9wLnBuZydcbiAgICAgICAgbGV0IGNpdHlIdW1pZGl0eU1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eUh1bWlkaXR5TWFpblRleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1odW1pZGl0eS1tYWluVGV4dC1xdWVyaWVkJylcbiAgICAgICAgY2l0eUh1bWlkaXR5TWFpblRleHQudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknXG4gICAgICAgIGxldCBjaXR5SHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eUh1bWlkaXR5VGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LWh1bWlkaXR5LXRleHQtcXVlcmllZCcpXG4gICAgICAgIGNpdHlIdW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHtyZXRyaWV2ZWREYXRhLm1haW4uaHVtaWRpdHl9JWBcbiAgICAgICAgY2l0eUh1bWlkaXR5LmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eUljb24pXG4gICAgICAgIGNpdHlIdW1pZGl0eS5hcHBlbmRDaGlsZChjaXR5SHVtaWRpdHlNYWluVGV4dClcbiAgICAgICAgY2l0eUh1bWlkaXR5LmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eVRleHQpXG5cbiAgICAgICAgbGV0IGNpdHlDbG91ZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaXR5Q2xvdWRzLmNsYXNzTGlzdC5hZGQoJ2NpdHktY2xvdWRzLWNvbnRhaW5lci1xdWVyaWVkJylcbiAgICAgICAgbGV0IGNpdHlDbG91ZHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgY2l0eUNsb3Vkc0ljb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtaWNvbi1xdWVyaWVkJylcbiAgICAgICAgY2l0eUNsb3Vkc0ljb24uc3JjID0gJy4vc3ZnL2Nsb3VkLnBuZydcbiAgICAgICAgbGV0IGNpdHlDbG91ZHNNYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNpdHlDbG91ZHNNYWluVGV4dC5jbGFzc0xpc3QuYWRkKCdjaXR5LWNsb3Vkcy1tYWluVGV4dC1xdWVyaWVkJylcbiAgICAgICAgY2l0eUNsb3Vkc01haW5UZXh0LnRleHRDb250ZW50ID0gJ0Nsb3VkcydcbiAgICAgICAgbGV0IGNpdHlDbG91ZHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eUNsb3Vkc1RleHQuY2xhc3NMaXN0LmFkZCgnY2l0eS1jbG91ZHMtdGV4dC1xdWVyaWVkJylcbiAgICAgICAgY2l0eUNsb3Vkc1RleHQudGV4dENvbnRlbnQgPSBgJHtyZXRyaWV2ZWREYXRhLmNsb3Vkcy5hbGx9JWBcbiAgICAgICAgY2l0eUNsb3Vkcy5hcHBlbmRDaGlsZChjaXR5Q2xvdWRzSWNvbilcbiAgICAgICAgY2l0eUNsb3Vkcy5hcHBlbmRDaGlsZChjaXR5Q2xvdWRzTWFpblRleHQpXG4gICAgICAgIGNpdHlDbG91ZHMuYXBwZW5kQ2hpbGQoY2l0eUNsb3Vkc1RleHQpXG5cbiAgICAgICAgbGV0IGNpdHlWaXNpYmlsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuY2xhc3NMaXN0LmFkZCgnY2l0eS12aXNpYmlsaXR5LWNvbnRhaW5lci1xdWVyaWVkJylcbiAgICAgICAgbGV0IGNpdHlWaXNpYmlsaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5SWNvbi5jbGFzc0xpc3QuYWRkKCdjaXR5LXZpc2liaWxpdHktaWNvbi1xdWVyaWVkJylcbiAgICAgICAgY2l0eVZpc2liaWxpdHlJY29uLnNyYyA9ICcuL3N2Zy92aXNpYmlsaXR5LnBuZydcbiAgICAgICAgbGV0IGNpdHlWaXNpYmlsaXR5TWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaXR5VmlzaWJpbGl0eU1haW5UZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktdmlzaWJpbGl0eS1tYWluVGV4dC1xdWVyaWVkJylcbiAgICAgICAgY2l0eVZpc2liaWxpdHlNYWluVGV4dC50ZXh0Q29udGVudCA9ICdWaXNpYmlsaXR5J1xuICAgICAgICBsZXQgY2l0eVZpc2liaWxpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2l0eVZpc2liaWxpdHlUZXh0LmNsYXNzTGlzdC5hZGQoJ2NpdHktdmlzaWJpbGl0eS10ZXh0LXF1ZXJpZWQnKVxuICAgICAgICBjaXR5VmlzaWJpbGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHsocmV0cmlldmVkRGF0YS52aXNpYmlsaXR5IC8gMTAwMCkudG9GaXhlZCgyKX0ga21gXG4gICAgICAgIGNpdHlWaXNpYmlsaXR5LmFwcGVuZENoaWxkKGNpdHlWaXNpYmlsaXR5SWNvbilcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlNYWluVGV4dClcbiAgICAgICAgY2l0eVZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHlUZXh0KVxuXG4gICAgICAgIHF1ZXJpZWRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eSlcbiAgICAgICAgcXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUNsb3VkcylcbiAgICAgICAgcXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eVZpc2liaWxpdHkpXG5cblxuICAgICAgICAvLyBsYXN0IGNvbnRhaW5lclxuICAgICAgICBsZXQgcXVlcmllZEFkZGl0aW9uYWxGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEhlYWRlcilcbiAgICAgICAgcXVlcmllZE1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZEFkZGl0aW9uYWxDb250YWluZXIpXG4gICAgICAgIHF1ZXJpZWRNYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJpZWRBZGRpdGlvbmFsRm9yZWNhc3RDb250YWluZXIpXG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlcmllZE1haW5Db250YWluZXIpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGNsZWFyKClcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbiAgICAgICAgfSw1MDApXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZW5kZXJFcnJvcihlcnJvci5tZXNzYWdlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXJyb3IubWVzc2FnZS5zbGljZSgxKSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJFcnJvcih0ZXh0KSB7XG4gICAgY2xlYXIoKVxuICAgIGxldCBlcnJvclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZXJyb3JTY3JlZW4uY2xhc3NMaXN0LmFkZCgnZXJyb3Itc2NyZWVuJylcblxuICAgIGxldCBlcnJvckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVycm9ySWNvbi5jbGFzc0xpc3QuYWRkKCdlcnJvci1pY29uJylcblxuICAgIGxldCBlcnJvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gdGV4dFxuXG4gICAgZXJyb3JTY3JlZW4uYXBwZW5kQ2hpbGQoZXJyb3JJY29uKVxuICAgIGVycm9yU2NyZWVuLmFwcGVuZENoaWxkKGVycm9yVGV4dClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yU2NyZWVuKVxuXG4gICAgc2V0VGltZW91dChyZW5kZXJIb21lUGFnZSwgMzAwMClcbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9hZGVyKHRleHQpIHtcbiAgICBjbGVhcigpXG4gICAgbGV0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1zY3JlZW4nKVxuXG4gICAgbGV0IGxvYWRlclNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvYWRlclNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJylcbiAgICBsb2FkZXJTcGlubmVyLnRleHRDb250ZW50ID0gJ0xvYWRpbmcuLi4nXG5cbiAgICBsZXQgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbG9hZGluZ1RleHQudGV4dENvbnRlbnQgPSB0ZXh0XG5cbiAgICBsb2FkaW5nU2NyZWVuLmFwcGVuZENoaWxkKGxvYWRlclNwaW5uZXIpXG4gICAgbG9hZGluZ1NjcmVlbi5hcHBlbmRDaGlsZChsb2FkaW5nVGV4dClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRpbmdTY3JlZW4pXG59IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcXVlcnlDbGltYXRlKGxvY2F0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0xNDY4MGRlMGFmMTY2YjNlOWNmZTE5Yjg0MWYyMTdlZmAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgICAgIGlmKCFyZXNwb25zZS5vayl7XG4gICAgICAgICAgICB0aHJvdyhhd2FpdCByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXRyaWV2ZWREYXRhKVxuICAgICAgICByZXR1cm4gcmV0cmlldmVkRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHF1ZXJ5Q2xpbWF0ZSBmcm9tIFwiLi9xdWVyeVwiO1xuaW1wb3J0IHtyZW5kZXJIb21lUGFnZSwgcmVuZGVyTG9hZGVyfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiXG5cbnJlbmRlckhvbWVQYWdlKClcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=