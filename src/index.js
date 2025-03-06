import "./styles.css";

let city = "london";
const API_KEY = "SYRZ7YCFF93B8SKQ87KZHEYRU";

// fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=SYRZ7YCFF93B8SKQ87KZHEYRU&contentType=json`, {mode: 'cors'})
// .then(function(response) {
//     return response.json();
// })
// .then(function(result) {
//     console.log(result);
// })

async function getWeatherFromAPI() {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=us&key=${encodeURIComponent(API_KEY)}&contentType=json`
    try{
        let response = await fetch(url, {mode: 'cors'});
        let result = await response.json();
        return result;
    } catch (error) {
        console.log("ERROR OCCURED: ", error);
    }
}


getWeatherFromAPI().then((result) => console.log(result));