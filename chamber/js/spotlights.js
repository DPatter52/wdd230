const URL = 'https://raw.githubusercontent.com/DPatter52/wdd230/main/chamber/json/data.json';
const display = document.querySelector(".spotlightbox");

let countext = 0; 
let count = 0 ;
let random = 0;
let include = [];

fetch(URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    while (count< 3){
    businesses.forEach(displaybusinesses);
    }
  });


  function displaybusinesses(business) {
    random = getRandomInt(2);
    if ((business.membershiplvl == "Gold" || business.membershiplvl == "Silver" ) && count< 3 && random == 1) {
    count += 1;
    
    let card = document.createElement('div');
    let img = document.createElement('img');
    let p1 = document.createElement('p1');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');

    p1.textContent = `${business.businessname}`;
    p2.innerHTML = `<a href="${business.websiteURL}">${business.websiteURL}</a>`;
    p3.textContent = `${business.phonenumber}`;
    img.setAttribute('src', business.businessicon);
    img.setAttribute('alt', `Icon for ${business.businessname}`);
    img.setAttribute('loading', 'lazy');
    

    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    
  
    display.appendChild(card);
    }
  }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
