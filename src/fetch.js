const API_KEY = "SYRZ7YCFF93B8SKQ87KZHEYRU";

export async function getWeatherFromAPI(city) {
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

// fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=SYRZ7YCFF93B8SKQ87KZHEYRU&contentType=json`, {mode: 'cors'})
// .then(function(response) {
//     return response.json();
// })
// .then(function(result) {
//     console.log(result);
// })