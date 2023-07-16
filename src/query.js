const apiKey = process.env.API_KEY;

export async function queryClimate(location) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9fb86b3bf0a618afade8094fdbad3d95`, { mode: 'cors' })
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
export async function queryForecast(location){
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=9fb86b3bf0a618afade8094fdbad3d95`, { mode: 'cors' })
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