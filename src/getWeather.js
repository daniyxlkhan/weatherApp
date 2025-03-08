const API_KEY = "SYRZ7YCFF93B8SKQ87KZHEYRU";

// gets weather from visual crossing's API
async function getWeatherFromAPI(city) {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=${encodeURIComponent(API_KEY)}&contentType=json`;

    try{
        let response = await fetch(url, {mode: 'cors'});
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw error;  // Rethrow the error so the caller can handle it
    }
}

// returns current weather conditions
async function getCurrentWeather(city) {
    try {
        let weather = await getWeatherFromAPI(city);
        if (!weather) throw new Error("Weather data is empty");
        // console.log(weather);
        return {
            temperature: weather.currentConditions.temp,
            feelsLike: weather.currentConditions.feelslike,
            humidity: weather.currentConditions.humidity,
            wind: weather.currentConditions.windspeed,
            condition: weather.currentConditions.conditions,
            description: weather.description,
            address: weather.resolvedAddress,
        };
    } catch (error) {
        console.error(`Error retrieving weather for ${city}:`, error);
    }
}

export { getCurrentWeather };