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
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c970425d8dc34c1aab0191907232607&q=${searchedWeather}&days=5&aqi=no&alerts=no`);
        const weather = await response.json();
        console.log(weather);

        currentCondition.innerText = weather.current.condition.text
        weatherImage.src = weather.current.condition.icon
        weatherLocation.innerText = weather.location.name
        weatherLocationSpecific.innerText = weather.location.region
        weatherTemperature.innerText = weather.current.temp_f + '\u00B0' + 'F'

        day1.innerText = weather.forecast.forecastday[0].date
        day1Img.src = weather.forecast.forecastday[0].day.condition.icon
        day2.innerText = weather.forecast.forecastday[1].date
        day2Img.src = weather.forecast.forecastday[1].day.condition.icon
        day3.innerText = weather.forecast.forecastday[2].date
        day3Img.src = weather.forecast.forecastday[2].day.condition.icon
        day4.innerText = weather.forecast.forecastday[3].date
        day4Img.src = weather.forecast.forecastday[3].day.condition.icon
        day5.innerText = weather.forecast.forecastday[4].date
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


  