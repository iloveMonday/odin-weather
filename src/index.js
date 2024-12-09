import './style.css';
import { apiData } from './api';


let location = "philadelphia";

apiData.getData(location, true);

//TOGGLE FAHRENHEIT/CELCIUS
const celButton = document.getElementById("cel");
const farButton = document.getElementById("far");
const submit = document.getElementById("submit");

celButton.addEventListener("click", () => {
  celButton.classList.add("bold");
  farButton.classList.remove("bold");
  apiData.getData(location, false);
});

farButton.addEventListener("click", () => {
  farButton.classList.add("bold");
  celButton.classList.remove("bold");
  apiData.getData(location, true);
});

submit.addEventListener("click", () => {
    let input = document.getElementById("city-input").value;
    location = input;
    farButton.classList.add("bold");
    celButton.classList.remove("bold");
    apiData.getData(location, true);
  });