import { apiData } from './api'

export const render = (() => {

    function displayBox(){
        const weekArray = apiData.weekArray();
        console.log(weekArray)

        for (let i = 0; i < weekArray.length; i++){

        let weekBox = document.getElementById("week-box");
        let newDay = document.createElement("div");
        newDay.className = "day-card";
        let weekday = document.createElement("h2");
        weekday.innerHTML = weekArray[i].weekday;
        newDay.appendChild(weekday);
        weekBox.appendChild(newDay);
        console.log(weekArray[i].weekday)
        console.log("hi guy")
    }


    }

    return { displayBox }
})();