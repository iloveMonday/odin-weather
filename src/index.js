import './style.css';
import { getForecast, getWeather } from "./get-weather.js"
// import { apiData } from './api'
import { apiData } from './api2';
import { render } from "./DOM"

const location = "philadelphia"
const day = 0;


apiData.getData(location);
// apiData.weekArray(location, day);
// render.displayBox();
// apiData.sendIt(location, day);


// apiData.printData(location);
// getForecast(location);
// getWeather(city);


let forecastBox = document.getElementById('forecast');

