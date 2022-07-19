
const URL = 'https://raw.githubusercontent.com/DPatter52/wdd230/main/finalproject/json/data.json';
const cards = document.querySelector('.grid');
 

async function getTemples(){
    let response = await fetch(URL);
    if (response.ok){
        let data = await response.json();

        displayTemples(data);
    } else {
        throw Error(response.statusText);
    }
}

function displayTemples(data) {
    data.temples.forEach(temple => {
        let card = document.createElement('section');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let p3 = document.createElement('p3');
        let p4 = document.createElement('p4');
        let p5 = document.createElement('p5');
        let img = document.createElement('img');

    
        
        p1.innerHTML = `${temple.templename}`;
        p2.innerHTML = `${temple.telephone}`;
        p3.innerHTML = `${temple.services}`;
        p4.innerHTML = `${temple.history}`;
        p5.innerHTML = `${temple.templeclosure}`;
        img.setAttribute('src', temple.templeicon);
        img.setAttribute('alt', `Icon for ${temple.templename}`);
        img.setAttribute('loading', 'lazy');

        card.append(img);
        card.append(p1);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        card.append(p5);
        
        cards.appendChild(card);
    });

};

getTemples();




 