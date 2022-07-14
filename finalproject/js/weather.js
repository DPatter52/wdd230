
// select HTML elements in the document
const temperature = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weathericon');
const captionDesc = document.querySelector('.weathertype');
const windSpeed = document.querySelector('.windspeed');
const humidity = document.querySelector('.humidity');



// create url that stores api 
const url = `https://api.openweathermap.org/data/2.5/weather?q=bethesda&units=Imperial&appid=27815bec9f6207729f966614a7207170`;


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
}

  
apiFetch();

