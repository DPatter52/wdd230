
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
        let p6 = document.createElement('p6');
        let p7 = document.createElement('p7');
        let p8 = document.createElement('p8');
        let p9 = document.createElement('p9');
        let p10 = document.createElement('p10');

        let img = document.createElement('img');
        let button = document.createElement('button')

    
        p1.innerHTML = `${temple.templename}`;
        p2.innerHTML = `${temple.telephone}`;
        p3.innerHTML = `${temple.address}`;
        p4.innerHTML = `${temple.clothing}`;
        p5.innerHTML = `${temple.cafeteria}`;
        p6.innerHTML = `${temple.patronhousing}`;
        p7.innerHTML = `${temple.distributioncenter}`;
        p8.innerHTML = `${temple.history1}`;
        p9.innerHTML = `${temple.history2}`;
        p10.innerHTML = `${temple.history3}`;

        img.setAttribute('src', temple.templeicon);
        img.setAttribute('alt', `Icon for ${temple.templename}`);
        img.setAttribute('loading', 'lazy');


        card.append(img);
        card.append(p1);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        card.append(p5);
        card.append(p6);
        card.append(p7);
        card.append(p8);
        card.append(p9);
        card.append(p10);
        
        cards.appendChild(card);
    });

};

getTemples();




 