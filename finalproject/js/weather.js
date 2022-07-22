const temperature = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weathericon');
const captionDesc = document.querySelector('.weathertype');
const windSpeed = document.querySelector('.windspeed');
const humidity = document.querySelector('.humidity');

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=Imperial&appid=27815bec9f6207729f966614a7207170`;


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
  temperature.innerHTML = `<strong>${weatherData.current.temp.toFixed(1)}° F</strong>`;
        windSpeed.innerHTML = `Wind Speed: ${weatherData.current.wind_speed.toFixed(0)}mph`;
        humidity.innerHTML = `Humidity: ${weatherData.current.humidity}`;


  const iconsrc = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`;
  const desc = weatherData.current.weather[0].description;
  const upperDesc = desc.toUpperCase()

  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = upperDesc;

}

  
apiFetch();





