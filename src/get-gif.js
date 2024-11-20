import { getWeather } from "./get-weather"

export async function getGif(weather) {
    const img = document.getElementById('gif')
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=hJgcDFOgvsDsgDbLF5LWEcItLjmu0mlc&s=` + weather,
        { mode: "cors" }
      );
      const gifData = await response.json();
      img.src = gifData.data.images.original.url;
    return gifData.data.images.original.url;
      console.log("your gif search is " + weather)
    } catch (err) {
      console.log("Opp! you got a " + err);
    }
  }