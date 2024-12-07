export const render = (() => {
  function displayBox(data, fah) {
    let isFah = fah;

    //CURRENT FORECAST
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const condition = document.getElementById("conditions");
    const high = document.getElementById("high");
    const low = document.getElementById("low");
    const body = document.getElementById("body");
    const tempBox = document.getElementById("temp-box");
    const desc = document.getElementById("desc");
    const updated = document.getElementById("updated");
    const prec = document.getElementById("prec");
    const hum = document.getElementById("humid");
    const wind = document.getElementById("wind");


    city.innerHTML = data.location.city;
    condition.innerHTML = data.current.conditions;
    high.innerHTML = `High: ${data.week[0].tempmax}°`;
    low.innerHTML = `Low: ${data.week[0].tempmin}°`;
    desc.innerHTML = data.current.description;
    // body.style.backgroundImage = `url(../src/color-icons/${data.current.icon}.svg)`;
    tempBox.style.backgroundImage = `url(../src/color-icons/${data.current.icon}.svg)`;
    updated.innerHTML = `Last Updated at ${data.lastUpdated}`;
    prec.innerHTML = `Precipitation: ${data.current.precipprob}%`;
    console.log(data.current.precipprob);
    hum.innerHTML = `Humidity: ${data.current.humidity}%`;
    wind.innerHTML = `Wind: ${data.current.windspeed}mph`;

    if (isFah) {
      temp.innerHTML = data.current.temp;
    } else {
      temp.innerHTML = data.current.tempcel;
    }

    //WEEKLY FORECAST
    const weekBox = document.getElementById("week-box");
    weekBox.innerHTML = "";

    for (let i = 0; i < data.week.length; i++) {
      let newDay = document.createElement("div");
      newDay.className = "day-card";

      let weekday = document.createElement("h3");
      let icon = document.createElement("img");
      let slash = document.createElement("p")
      let high = document.createElement("h3");
      let low = document.createElement("h3");

      weekday.innerHTML = data.week[i].weekday;
      weekday.className = "weekday-name";
      icon.src = `../src/icons/${data.week[i].icon}.svg`;
      icon.className = "forecast-icon";
      slash.innerHTML = "|"
      high.className = "forecast-high";
      low.className = "forecast-low";

    if (isFah){
        high.innerHTML = `H: ${data.week[i].tempmax}`;
        low.innerHTML = `L: ${data.week[i].tempmin}`;
      }
    else{
        high.innerHTML = `H: ${data.week[i].tempmaxcel}`;
        low.innerHTML = `L: ${data.week[i].tempmincel}`
      }

      newDay.appendChild(weekday);
      newDay.appendChild(icon);
      newDay.appendChild(high);
      newDay.appendChild(slash);
      newDay.appendChild(low);
      weekBox.append(newDay);
    }
  }

  return { displayBox };
})();
