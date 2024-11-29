import './style.css';
import { getForecast, getWeather } from "./get-weather.js"
import { apiData } from './api'
import { render } from "./DOM"

const location = "philadelphia"
const day = 0;


// apiData.getData(location, day);
apiData.weekArray(location, day);
render.displayBox();


// apiData.printData(location);
// getForecast(location);
// getWeather(city);


let forecastBox = document.getElementById('forecast');

