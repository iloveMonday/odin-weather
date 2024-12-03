import './style.css';
import { getForecast, getWeather } from "./get-weather.js"
// import { apiData } from './api'
import { apiData } from './api';
import { render } from "./DOM"

const location = "philadelphia";


apiData.getData(location, true);

const celButton = document.getElementById("cel");
const farButton = document.getElementById("far");

celButton.addEventListener("click", () => {
  console.log("celcior!");
  celButton.classList.add("bold");
  farButton.classList.remove("bold");
  apiData.getData(location, false);
});

farButton.addEventListener("click", () => {
  console.log("fart!");
  farButton.classList.add("bold");
  celButton.classList.remove("bold");
  apiData.getData(location, true);
});