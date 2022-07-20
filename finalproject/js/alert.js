const weatheralert = document.querySelector('.alert');
const weatherdesc = document.querySelector('.alert-desc');

const alerturl = `https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=Imperial&exclude=daily&exclude=minutely&exclude=hourly&exclude=daily&appid=27815bec9f6207729f966614a7207170`;

async function apiFetch() {
    const response = await fetch(alerturl);
    if (response.ok) {
      const data = await response.json();
      
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  }

  function  displayResults(weatherData) {
   weatheralert.innerHTML = weatherData.alerts.event;
    weatherdesc.innerHTML = weatherData.alerts.description;
  
  }


  if (weatheralert==true) {
    alert(weatheralert, weatherdesc)

} else {
    weatheralert.innerHTML = "N/A"
    weatherdesc.innerHTML = "N/A"
 }
  apiFetch();
