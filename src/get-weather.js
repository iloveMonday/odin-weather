export function getWeather(city){
  getForecast(city);
  getTemp(city);
}

export async function getForecast(city){
    try{
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city +'?key=XHQ2FS7MCXRK4Y5U8MFGWP8RV', 
        { mode: "cors" });
        const data = await weather.json();
        const forecast = data.currentConditions.conditions;
        console.log(data);
        console.log("what is up is: " + forecast);
        // const gify = await getGif(forecast);
        return forecast;
    }
    catch(err){
            console.log("Opp, you got a " + err);
        }
}

export async function getTemp(city){
  try{
      const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city +'?key=XHQ2FS7MCXRK4Y5U8MFGWP8RV',
      { mode: "cors" });
      const data = await weather.json();
      const temp = data.currentConditions.temp;
      console.log("The temp is: " + temp);
      return temp;
  }
  catch(err){
          console.log("Opp, you got a " + err);
      }
}


export async function getGif(weather) {
    const img = document.getElementById('gif')
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=hJgcDFOgvsDsgDbLF5LWEcItLjmu0mlc&s=` + weather,
        { mode: "cors" }
      );
      const gifData = await response.json();
      img.src = gifData.data.images.original.url;
      // console.log("your gif search is " + weather)
    return gifData.data.images.original.url;
      
    } catch (err) {
      console.log("Opp! you got a " + err);
    }
  }