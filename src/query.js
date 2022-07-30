export default async function queryClimate(location) {
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