import './style.css';
import { getWeather } from "./get-weather.js"
import { getGif } from "./get-gif"

console.log("we're so back, baby");

export const city = "philadelphia, pa"

getWeather(city);
console.log("HEY " + getGif("partially cloudy"));