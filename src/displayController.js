import queryClimate from "./query"
const homeDisplayedCities = ['tokyo','roma', 'france', 'new york', 'athens', 'london']

export function renderHomePage() {
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

export function renderQueriedCity() {
    clear();
}

function clear() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
}


export function renderLoader(){
    mainContainer.innerHTML = '<div class="loader">Loading...</div>'
}