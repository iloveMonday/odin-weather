import './style.css';
import { getForecast, getWeather } from "./get-weather.js"
// import { apiData } from './api'
import { apiData } from './api2';
import { render } from "./DOM"

const location = "philadelphia"
const day = 0;


apiData.getData(location);

