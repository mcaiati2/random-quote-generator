// Add an input to the page that the user can type a city into
// When they submit or hit a button, you should grab the city they typed and make a request to the weather api
// to get the current weather by that city name
// Once you have the weather data, output the current temp, wind speed and humidity for that city
const cityForm = document.querySelector('#city-form');
function outputWeatherData(weatherData) {
    const cityOutput = document.querySelector('#city-name');
    const tempOutput = document.querySelector('#temp');
    const windOutput = document.querySelector('#wind');
    cityOutput.innerText = weatherData.name;
    tempOutput.innerHTML = `Temp: ${Math.round(weatherData.main.temp)}&deg;`;
    windOutput.innerText = weatherData.wind.speed + 'mph';
}
async function getWeatherData(eventObj) {
    eventObj.preventDefault();
    const cityInput = document.querySelector('#city-input');
    const apiKey = '3acc16ffae9e45df92a064e41646355f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=` + apiKey;
    const resObject = await fetch(url);
    const data = await resObject.json();
    outputWeatherData(data);
}
cityForm.addEventListener('submit', getWeatherData);
// async function getStarwarsData() {
//   const resObject = await fetch('https://swapi.dev/api/people');
//   const data = await resObject.json();
//   console.log(data);
// }
// const jd = {
//   name: 'JD',
//   age: 44
// }
// console.log(jd.age);
