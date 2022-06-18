
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
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let img = document.createElement('img');

    
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        img.setAttribute('loading', 'lazy');
        
        card.append(h2);
        card.append(p1);
        card.append(p2)
        card.append(img);

        cards.appendChild(card);
    });

};

getProphets();
    
 