import "./styles.css";
import { getCurrentWeather } from "./weather";

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = document.getElementById("location-input").value;

    getCurrentWeather(location)
        .then(weather => {
            if (weather) {
                console.log(weather);
            } else {
                console.error("Given location not found!");
            }
        });
});

