import { getWeatherFromAPI } from "./fetch";

// getWeatherFromAPI().then((result) => console.log(result));
export async function getCurrentWeather(city) {
    try {
        let weather = await getWeatherFromAPI(city);
        if (!weather) throw new Error("Weather data is empty");

        console.log(weather);
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

