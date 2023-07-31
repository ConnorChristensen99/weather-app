// SEARCH BAR
let searchWeather = document.getElementById("search-weather-button")
let searchBar = document.getElementById('weather-search')
// TEMPERATURE INFORMATION
let currentCondition = document.getElementById('current-condition')
let weatherImage = document.getElementById('weather-image')
let weatherLocation = document.getElementById('weather-location')
let weatherLocationSpecific = document.getElementById('weather-location-specific')
let weatherTemperature = document.getElementById('weather-temperature')
// FORECAST INFORMATION
let day1 = document.getElementById('day1')
let day2 = document.getElementById('day2')
let day3 = document.getElementById('day3')
let day4 = document.getElementById('day4')
let day5 = document.getElementById('day5')
let day1Img = document.getElementById('day1Img')
let day2Img = document.getElementById('day2Img')
let day3Img = document.getElementById('day3Img')
let day4Img = document.getElementById('day4Img')
let day5Img = document.getElementById('day5Img')
let tempHigh1 = document.getElementById('temp-high1')
let tempHigh2 = document.getElementById('temp-high2')
let tempHigh3 = document.getElementById('temp-high3')
let tempHigh4 = document.getElementById('temp-high4')
let tempHigh5 = document.getElementById('temp-high5')
let tempLow1 = document.getElementById('temp-low1')
let tempLow2 = document.getElementById('temp-low2')
let tempLow3 = document.getElementById('temp-low3')
let tempLow4 = document.getElementById('temp-low4')
let tempLow5 = document.getElementById('temp-low5')
//API Fetch to get Weather
searchWeather.addEventListener('click', () => {
    console.log(searchBar.value)
    let searchedWeather = searchBar.value
    async function getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c970425d8dc34c1aab0191907232607&q=${searchedWeather}&days=5&aqi=no&alerts=no`);
        const weather = await response.json();
        console.log(weather);

        currentCondition.innerText = weather.current.condition.text
        weatherImage.src = weather.current.condition.icon
        weatherLocation.innerText = weather.location.name
        weatherLocationSpecific.innerText = weather.location.region
        weatherTemperature.innerText = weather.current.temp_f + '\u00B0' + 'F'

        const d = new Date(`${weather.forecast.forecastday[0].hour[1].time}`);
        let day11 = d.getDay();
        if (day11 === 0) {
          day11 = "Sunday"
        } else if (day11 === 1) {
          day11 = "Monday"
        } else if (day11 === 2) {
          day11 = "Tuesday"
        } else if (day11 === 3) {
          day11 = "Wednesday"
        } else if (day11 === 4) {
          day11 = "Thursday"
        } else if (day11 === 5) {
          day11 = "Friday"
        } else if (day11 === 6) {
          day11 = "Saturday"
        }
        day1.innerText = day11
        day1Img.src = weather.forecast.forecastday[0].day.condition.icon


        const d1 = new Date(`${weather.forecast.forecastday[1].hour[1].time}`);
        let day12 = d1.getDay();
        if (day12 === 0) {
          day12 = "Sunday"
        } else if (day12 === 1) {
          day12 = "Monday"
        } else if (day12 === 2) {
          day12 = "Tuesday"
        } else if (day12 === 3) {
          day12 = "Wednesday"
        } else if (day12 === 4) {
          day12 = "Thursday"
        } else if (day12 === 5) {
          day12 = "Friday"
        } else if (day12 === 6) {
          day12 = "Saturday"
        }
        day2.innerText = day12
        day2Img.src = weather.forecast.forecastday[1].day.condition.icon


        const d2 = new Date(`${weather.forecast.forecastday[2].hour[1].time}`);
        let day13 = d2.getDay();
        if (day13 === 0) {
          day13 = "Sunday"
        } else if (day13 === 1) {
          day13 = "Monday"
        } else if (day13 === 2) {
          day13 = "Tuesday"
        } else if (day13 === 3) {
          day13 = "Wednesday"
        } else if (day13 === 4) {
          day13 = "Thursday"
        } else if (day13 === 5) {
          day13 = "Friday"
        } else if (day13 === 6) {
          day13 = "Saturday"
        }
        day3.innerText = day13
        day3Img.src = weather.forecast.forecastday[2].day.condition.icon


        const d3 = new Date(`${weather.forecast.forecastday[3].hour[1].time}`);
        let day14 = d3.getDay();
        if (day14 === 0) {
          day14 = "Sunday"
        } else if (day14 === 1) {
          day14 = "Monday"
        } else if (day14 === 2) {
          day14 = "Tuesday"
        } else if (day14 === 3) {
          day14 = "Wednesday"
        } else if (day14 === 4) {
          day14 = "Thursday"
        } else if (day14 === 5) {
          day14 = "Friday"
        } else if (day14 === 6) {
          day14 = "Saturday"
        }
        day4.innerText = day14
        day4Img.src = weather.forecast.forecastday[3].day.condition.icon


        const d4 = new Date(`${weather.forecast.forecastday[4].hour[1].time}`);
        let day15 = d4.getDay();
        if (day15 === 0) {
          day15 = "Sunday"
        } else if (day15 === 1) {
          day15 = "Monday"
        } else if (day15 === 2) {
          day15 = "Tuesday"
        } else if (day15 === 3) {
          day15 = "Wednesday"
        } else if (day15 === 4) {
          day15 = "Thursday"
        } else if (day15 === 5) {
          day15 = "Friday"
        } else if (day15 === 6) {
          day15 = "Saturday"
        }
        day5.innerText = day15
        day5Img.src = weather.forecast.forecastday[4].day.condition.icon



        tempHigh1.innerText = weather.forecast.forecastday[0].day.maxtemp_f
        tempLow1.innerText = weather.forecast.forecastday[0].day.mintemp_f
        tempHigh2.innerText = weather.forecast.forecastday[1].day.maxtemp_f
        tempLow2.innerText = weather.forecast.forecastday[1].day.mintemp_f
        tempHigh3.innerText = weather.forecast.forecastday[2].day.maxtemp_f
        tempLow3.innerText = weather.forecast.forecastday[2].day.mintemp_f
        tempHigh4.innerText = weather.forecast.forecastday[3].day.maxtemp_f
        tempLow4.innerText = weather.forecast.forecastday[3].day.mintemp_f
        tempHigh5.innerText = weather.forecast.forecastday[4].day.maxtemp_f
        tempLow5.innerText = weather.forecast.forecastday[4].day.mintemp_f
        
      }

      getWeather()
})


  