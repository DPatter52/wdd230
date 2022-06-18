
const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
 

async function getProphets(){
    let response = await fetch(URL);
    if (response.ok){
        let data = await response.json();

        displayProphets(data);
    } else {
        throw Error(response.statusText);
    }
}

function displayProphets(data) {
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

    
        h2.innerHTML = prophet.name;
       // p.innerHTML = `Location of Birth: ${prophet.birthplace}`;
       //img.innerHTML('src', prophet.imageurl);
       // img.innerHTML('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
       // img.innerHTML('loading', 'lazy');

    
        
        card.appendChild(h2);
       // card.appendChild(p);
       // card.appendChild(img);

        cards.append(card);
    });

};

    
 