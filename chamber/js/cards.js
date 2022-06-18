
const URL = 'https://github.com/DPatter52/wdd230/blob/main/chamber/json/data.json';
const cards = document.querySelector('.cards');
 

async function getBusinesses(){
    let response = await fetch(URL);
    if (response.ok){
        let data = await response.json();

        displayBusinesses(data);
    } else {
        throw Error(response.statusText);
    }
}

function displayBusinesses(data) {
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let img = document.createElement('img');

    
        h2.innerHTML = `${} ${}`;
        p1.innerHTML = `Date of Birth: ${}`;
        p2.innerHTML = `Place of Birth: ${}`;
        img.setAttribute('src', );
        img.setAttribute('alt', `Portrait of ${} ${}`);
        img.setAttribute('loading', 'lazy');
        
        card.append(h2);
        card.append(p1);
        card.append(p2)
        card.append(img);

        cards.appendChild(card);
    });

};

getBusinesses();
    
 