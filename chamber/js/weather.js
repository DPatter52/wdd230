
// select HTML elements in the document
const temperature = document.querySelector('.temp');
const weatherIcon = document.querySelector('.wvcweather');
const captionDesc = document.querySelector('.weathertype');
const windSpeed = document.querySelector('.windspeed');
const chillFactor = document.querySelector('.windchill')  


// create url that stores api 
const url = `https://api.openweathermap.org/data/2.5/weather?q=west+valley+city+&units=Imperial&appid=27815bec9f6207729f966614a7207170`;


async function apiFetch() {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    }
  

function  displayResults(weatherData) {
  temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}° F</strong>`;
        windSpeed.innerHTML = `Wind Speed: ${weatherData.wind.speed.toFixed(0)}mph`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const upperDesc = desc.toUpperCase()

  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = upperDesc;


  if (weatherData.main.temp <= 50 && weatherData.wind.speed >= 3 ){
        windChillFactor = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 
        0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);
        console.log(windChillFactor)
        windChillFactor = Math.floor(windChillFactor);
        chillFactor.innerHTML =` ${windChillFactor}° F`;


}   else if (weatherData.main.temp > 50 || weatherData.wind.speed < 3){
        windChillFactor = 'N/A';
        console.log(windChillFactor)
        chillFactor.innerHTML =`${windChillFactor}`;
}

}

  
apiFetch();

