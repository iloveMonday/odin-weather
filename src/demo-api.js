// import { render } from './DOM'

// export const apiData = (() => {
//     const apiKey = "XHQ2FS7MCXRK4Y5U8MFGWP8RV";

//     async function fetchData(location){
//         try{
//             const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`, 
//             { mode: "cors" });
//             const data = await response.json();
//             // console.log(data);
//             return data;
//         }
//         catch(err){
//             console.log("OPPS, you got a " + err);
//         }
//     }


//     const week = [];


//     function getData(location, day){
//         fetchData(location)
//         .then((data) =>{
//             const dayObj = returnWeatherData(
//                     data.days[day].temp,
//                     data.days[day].description,
//                     data.days[day].datetime,
//                     data.days[day].datetimeEpoch,
//                     data.resolvedAddress,
//                     data.days[day].tempmax,
//                     data.days[day].tempmin,
//                     data.days[day].windspeed,
//                     data.days[day].pressure,
//                     data.days[day].humidity,
//                     data.days[day].uvindex,
//                     data.days[day].sunrise,
//                     data.days[day].sunset,
//                     data.days[day].icon,
//                     getWeekday(data.days[day].datetime)
//                 );
//                 week.push(dayObj);
//                 // console.log(week);
//                 return dayObj
//         })
//         // .then(() => {
//         //     console.log(week[3]);
//         // })
//     }

//     async function weekArray(location, day){
//         for (let i=day; i<day+5; i++){
//             getData(location, i)
//         }
//         return week;
//     }

//     function getWeek(){
//         return week;
//     }


//     function sendIt(location, day){
//         weekArray(location, day)
//         .then((week) => {
//             console.log(week)
//             render.displayBox(week);
//         })
//     }



//     function getWeekday(obj){
//         const currentDateTime = new Date(obj);
//         // console.log(`${currentDateTime} is the currentDateTime`)
//         const today = currentDateTime.getDay();

//         const dayList = [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//           ];

//         const weekday = dayList[today];
//         return weekday;
//     }


//     function returnWeatherData(
//         temperature,
//         description,
//         dateTime,
//         time,
//         location,
//         tempmax,
//         tempmin,
//         wind,
//         pressure,
//         humidity,
//         uvindex,
//         sunrise,
//         sunset,
//         icon,
//         weekday
//     ) {
//         return {temperature,
//             description,
//             dateTime,
//             time,
//             location,
//             tempmax,
//             tempmin,
//             wind,
//             pressure,
//             humidity,
//             uvindex,
//             sunrise,
//             sunset,
//             icon,
//             weekday};
//     };






//     return { fetchData, getData, returnWeatherData, weekArray, getWeek, sendIt }
// })();