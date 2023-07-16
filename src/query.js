const apiKey = process.env.API_KEY;

export async function queryClimate(location) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/3.0/weather?q=${location}&appid=9fb86b3bf0a618afade8094fdbad3d95`, { mode: 'cors' })
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
        let response = await fetch(`http://api.openweathermap.org/data/3.0/forecast?q=${location}&appid=9fb86b3bf0a618afade8094fdbad3d95`, { mode: 'cors' })
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