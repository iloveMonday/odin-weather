import './style.css';
import { getForecast, getWeather } from "./get-weather.js"
// import { apiData } from './api'
import { apiData } from './api';
import { render } from "./DOM"

let location = "philadelphia";


apiData.getData(location, true);

const celButton = document.getElementById("cel");
const farButton = document.getElementById("far");
const submit = document.getElementById("submit");

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

submit.addEventListener("click", () => {
    let input = document.getElementById("city-input").value;
    location = input;
    console.log(input);
    apiData.getData(location, true);
  });