import queryClimate from "./query"
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

export function renderLoader(){
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

export function slideStart() {
    let currentDisplayed = 0;
    let toggle = 'old';
    let displayedCities = ['tokyo', 'New York', 'france']
    setHomeScreen()

    queryClimate(displayedCities[displayedCities.length - 1])
        .then((response) => {
            slideShow(response)
            document.querySelector('.backgroundSlideContainer').classList.add(`${toggle}`)
            document.querySelector('.info-container').classList.add(`${toggle}`)
        })

    setInterval(async () => {
        let retrievedData = await queryClimate(displayedCities[currentDisplayed++])
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
