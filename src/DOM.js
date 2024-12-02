import { apiData } from './api'
// import {  } './icons'

export const render = (() => {

    function displayBox(data){

        //CURRENT FORECAST
        const city = document.getElementById("city");
        const temp = document.getElementById("temp");
        const condition = document.getElementById("conditions");
        const high = document.getElementById("high");
        const low = document.getElementById("low");

        city.innerHTML = data.location.city;
        temp.innerHTML = data.current.temp;
        condition.innerHTML = data.current.conditions;
        high.innerHTML = `High: ${data.week[0].tempmax}`;
        low.innerHTML = `Low: ${data.week[0].tempmin}`;


        //WEEKLY FORECAST
        const weekBox = document.getElementById("week-box");

        for (let i=0; i<data.week.length; i++){
            let newDay = document.createElement("div")
            newDay.className = "day-card";

            let weekday = document.createElement("h3");
            let icon = document.createElement("img");
            let high = document.createElement("h3");
            let low = document.createElement("h3")

            weekday.innerHTML = data.week[i].weekday;
            weekday.className = "weekday-name";
            icon.src = `../src/icons/${data.week[i].icon}.svg`
            icon.className = "forecast-icon";
            high.innerHTML = `H: ${data.week[i].tempmax}`;
            high.className = "forecast-high";
            low.innerHTML = `L: ${data.week[i].tempmin}`;
            low.className = "forecast-low";

            newDay.appendChild(weekday);
            newDay.appendChild(icon);
            newDay.appendChild(high);
            newDay.appendChild(low);
            weekBox.append(newDay);
        }

    }


    return { displayBox }
})();