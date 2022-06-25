// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// create url that stores api 
const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=27815bec9f6207729f966614a7207170`;


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
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const upperDesc = desc.toUpperCase()

  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = upperDesc;

}

  
apiFetch();










