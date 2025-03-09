import {getCurrentWeather} from "./getWeather";

export function searchLocation() {
    const form = document.getElementById("form");
    const searchIcon = document.querySelector(".search-icon");

    // if user clicks on search icon
    searchIcon.addEventListener("click", showWeather);

    // if user presses enter on the search
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        showWeather();
    });

    function showWeather() {
        const location = document.getElementById("location-input").value.trim();

        if (!location) {
            console.warn("Please enter a location!");
            return;
        }

        getCurrentWeather(location)
            .then(weather => {
                if (weather) {
                    console.log(weather);
                } else {
                    console.error("Given location not found!");
                }
            });
    }
}


