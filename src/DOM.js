import { apiData } from './api'

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
        high.innerHTML = `H: ${data.week[0].tempmax}`;
        low.innerHTML = `L: ${data.week[0].tempmin}`;


        //WEEKLY FORECAST
        const weekBox = document.getElementById("week-box");

        for (let i=0; i<data.week.length; i++){
            let newDay = document.createElement("div")
            newDay.className = "day-card";
            let weekday = document.createElement("h3");
            weekday.innerHTML = data.week[i].weekday;
            newDay.appendChild(weekday);
            weekBox.append(newDay);
        }

    }


    return { displayBox }
})();