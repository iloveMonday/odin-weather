import { render } from './DOM'

export const apiData = (() => {
    

    async function getData(location, fah){
        let isFah = fah;

        if (!location){
            throw new Error("need city!")
        }
        try{
            const apiKey = "XHQ2FS7MCXRK4Y5U8MFGWP8RV";
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`, 
            { mode: "cors" });
            const data = await response.json();
            console.log(data);
            const processedData = returnWeatherData(data);
            console.log(processedData);
            if (processedData) {
                if (isFah){
                render.displayBox(processedData, true)}
                else{
                    render.displayBox(processedData, false)
                };
            }
            return processedData;
        }
        catch(err){
            console.log("OPPS, you got a " + err);
            return null;
        }
    }


    function getWeekday(obj){
        const currentDateTime = new Date(obj);
        // console.log(`${currentDateTime} is the currentDateTime`)
        const today = currentDateTime.getDay();

        const dayList = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];

        const weekday = dayList[today];
        return weekday;
    }



    function fahrenheitToCelsius(fahrenheit) {
        const celsius = ((fahrenheit - 32) * 5/9).toFixed(0);
        return celsius;
      }

    

    function returnWeatherData(weatherData) {
        if (!weatherData) return null;

        const current = weatherData.currentConditions;

        return {
            location:{
                city: weatherData.resolvedAddress,
                timezone: weatherData.timezone,
            },
            current: {
                day: 'Today',
                temp: (current.temp).toFixed(0),
                tempcel: fahrenheitToCelsius(current.temp),
                conditions: current.conditions,
                icon: current.icon,
                precipprob: current.precipprob,
                windspeed: current.windspeed,
                description: weatherData.description,
                humidity: current.humidity,
                sunrise: current.sunrise,
                sunset: current.sunset,
            },
            week: weatherData.days.slice(0, 5).map(day =>({
                weekday: getWeekday(day.datetime),
                datetime: day.datetime,
                tempmax: (day.tempmax).toFixed(0),
                tempmin: (day.tempmin).toFixed(0),
                tempmaxcel: fahrenheitToCelsius(day.tempmax),
                tempmincel: fahrenheitToCelsius(day.tempmin),
                conditions: day.conditions,
                icon: day.icon,
            })),
            lastUpdated: current.datetime,
        };
    };


    return { getData, returnWeatherData, }
})();