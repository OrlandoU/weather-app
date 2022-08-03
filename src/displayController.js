import { queryClimate, queryForecast } from "./query"
import { format, add, max } from 'date-fns'
import { te } from "date-fns/locale";
const homeDisplayedCities = ['tokyo', 'roma', 'france', 'new york', 'athens', 'london']

export async function renderHomePage() {
    try {
        renderLoader('Loading Home Page...')
        let cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-container-home');
        cardsContainer.classList.add('main-sub-container')
        for (const city of homeDisplayedCities) {
            let cityRetrievedData = await queryClimate(city);
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
            card.addEventListener('click', ()=>{
                renderQueriedCity(cityRetrievedData.name)
            })
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
        logo.addEventListener('click', ()=>{
            window.location.href = window.location.href;
        })
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
    } catch (error) {
        let errorPromise = await error
        console.log(error)
        renderError(errorPromise.message.charAt(0).toUpperCase() + errorPromise.message.slice(1))
    }
}


export async function renderQueriedCity(city=document.querySelector('input').value) {
    try {
        let forecast = await queryForecast(city)
        let timezone = forecast.city.timezone;
        let arrForecast = forecast.list;
        let retrievedData = await queryClimate(city)

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
        logo.addEventListener('click', ()=>{
            window.location.href = window.location.href;
        })
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

        // hourly container
        let queriedHourlyForecastContainer = document.createElement('div')
        queriedHourlyForecastContainer.classList.add('hourly-forecast-container-queried')
        let queriedHourlyForecastSubContainer = document.createElement('div')
        queriedHourlyForecastSubContainer.classList.add('hourly-sub-container-queried')

        let currentForecastContainer = document.createElement('div')
        currentForecastContainer.classList.add('hourly-forecast-item-queried')
        let hourlyForecastHeader = document.createElement('div')
        hourlyForecastHeader.classList.add('hourly-header-queried')
        hourlyForecastHeader.textContent = 'Now'
        let hourlyIcon = document.createElement('img')
        hourlyIcon.src = `http://openweathermap.org/img/wn/${retrievedData.weather[0].icon}@2x.png`
        let hourlyTemp = document.createElement('div')
        hourlyTemp.classList.add('hourly-temp-queried')
        hourlyTemp.textContent = `${Math.round(retrievedData.main.temp - 275)}°`

        currentForecastContainer.appendChild(hourlyForecastHeader)
        currentForecastContainer.appendChild(hourlyIcon)
        currentForecastContainer.appendChild(hourlyTemp)
        queriedHourlyForecastSubContainer.appendChild(currentForecastContainer)


        arrForecast.forEach((currentForecast) => {
            let currentForecastContainer = document.createElement('div')
            currentForecastContainer.classList.add('hourly-forecast-item-queried')
            let hourlyForecastHeader = document.createElement('div')
            hourlyForecastHeader.classList.add('hourly-header-queried')
            hourlyForecastHeader.textContent = format(add(new Date(currentForecast.dt_txt), { seconds: timezone }), 'p')
            let hourlyIcon = document.createElement('img')
            hourlyIcon.src = `http://openweathermap.org/img/wn/${currentForecast.weather[0].icon}@2x.png`
            let hourlyTemp = document.createElement('div')
            hourlyTemp.classList.add('hourly-temp-queried')
            hourlyTemp.textContent = `${Math.round(currentForecast.main.temp - 275)}°`

            currentForecastContainer.appendChild(hourlyForecastHeader)
            currentForecastContainer.appendChild(hourlyIcon)
            currentForecastContainer.appendChild(hourlyTemp)

            queriedHourlyForecastSubContainer.appendChild(currentForecastContainer)
        })

        let hourlyHeader = document.createElement('div')
        hourlyHeader.classList.add('hourly-header-main-queried')
        hourlyHeader.textContent = 'HOURLY FORECAST'

        queriedHourlyForecastContainer.appendChild(hourlyHeader)
        queriedHourlyForecastContainer.appendChild(queriedHourlyForecastSubContainer)

        // last container
        let queriedDailyForecastContainer = document.createElement('div')
        queriedDailyForecastContainer.classList.add('daily-forecast-container-queried')
        let queriedDailyForecastSubContainer = document.createElement('div')
        queriedDailyForecastSubContainer.classList.add('daily-sub-container-queried')
        //sorting and formatting data
        arrForecast = arrForecast.map((crr) => {
            let formattedDate = format(add(new Date(crr.dt_txt), { seconds: timezone }), 'EEEE')
            let main = crr.main.temp
            let icon = crr.weather[0].icon
            return { formattedDate, main, icon }
        })

        let newObjForecast = {}
        arrForecast.forEach((crr) => {
            if (!newObjForecast[crr.formattedDate]) {
                newObjForecast[crr.formattedDate] =
                {
                    max_temp: crr.main,
                    min_temp: crr.main,
                    icon: { [crr.icon]: 1 },
                    finalIcon : crr.icon
                }
                return
            }
            if (!newObjForecast[crr.formattedDate].icon[crr.icon]) {
                newObjForecast[crr.formattedDate].icon[crr.icon] = 1;
            }
            else {
                newObjForecast[crr.formattedDate].icon[crr.icon]++;
            }
            let maxNum = 0;
            for(const keys in newObjForecast[crr.formattedDate].icon){
                if(newObjForecast[crr.formattedDate].icon[keys] > maxNum){
                    newObjForecast[crr.formattedDate].finalIcon = keys;
                    maxNum = newObjForecast[crr.formattedDate].icon[keys]
                }
            }
            newObjForecast[crr.formattedDate].max_temp = Math.max(newObjForecast[crr.formattedDate].max_temp, crr.main)
            newObjForecast[crr.formattedDate].min_temp = Math.min(newObjForecast[crr.formattedDate].min_temp, crr.main)

        })
        console.log(newObjForecast)
        for (const keys in newObjForecast) {
            let currentForecastContainer = document.createElement('div')
            currentForecastContainer.classList.add('daily-forecast-item-queried')
            let dailyForecastHeader = document.createElement('div')
            dailyForecastHeader.classList.add('daily-header-queried')
            dailyForecastHeader.textContent = keys
            let dailyIcon = document.createElement('img')
            dailyIcon.src = `http://openweathermap.org/img/wn/${newObjForecast[keys].finalIcon}@2x.png`
            let tempsContainer = document.createElement('div')
            tempsContainer.classList.add('temps-container-queried')

            let dailyMaxTemp = document.createElement('div')
            dailyMaxTemp.classList.add('daily-max-temp-queried')
            dailyMaxTemp.textContent = `${Math.round(newObjForecast[keys].max_temp - 275)}°`
            let dailyMinTemp = document.createElement('div')
            dailyMinTemp.classList.add('daily-min-temp-queried')
            dailyMinTemp.textContent = `${Math.round(newObjForecast[keys].min_temp - 275)}°`

            tempsContainer.appendChild(dailyMaxTemp)
            tempsContainer.appendChild(dailyMinTemp)
            currentForecastContainer.appendChild(dailyForecastHeader)
            currentForecastContainer.appendChild(dailyIcon)
            currentForecastContainer.appendChild(tempsContainer)

            queriedDailyForecastSubContainer.appendChild(currentForecastContainer)
        }

        let dailyHeader = document.createElement('div')
        dailyHeader.classList.add('daily-header-main-queried')
        dailyHeader.textContent = 'DAILY FORECAST'

        queriedDailyForecastContainer.appendChild(dailyHeader)
        queriedDailyForecastContainer.appendChild(queriedDailyForecastSubContainer)

        queriedMainContainer.appendChild(queriedHeader)
        queriedMainContainer.appendChild(queriedAdditionalContainer)
        queriedMainContainer.appendChild(queriedHourlyForecastContainer)
        queriedMainContainer.appendChild(queriedDailyForecastContainer)

        mainContainer.appendChild(header)
        mainContainer.appendChild(queriedMainContainer)


        setTimeout(() => {
            clear()
            document.body.appendChild(mainContainer)
            let todayHeader = document.querySelector('.daily-header-queried')
            todayHeader.textContent = 'Today'
        }, 500)

    } catch (error) {
        console.log(error)
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