export async function getWeather(city){
    try{
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city +'?key=XHQ2FS7MCXRK4Y5U8MFGWP8RV');
        const data = await weather.json();
        const forecast = data.currentConditions.conditions;
        console.log(data)
        console.log("what is up is: " + forecast);
        return forecast;
    }
    catch(err){
            console.log("Opp, you got a " + err);
        }
}

