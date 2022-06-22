
const URL = 'https://raw.githubusercontent.com/DPatter52/wdd230/main/chamber/json/data.json';
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
    data.businesses.forEach(business => {
        let card = document.createElement('section');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let p3 = document.createElement('p3');
        let img = document.createElement('img');

    
        
        p1.innerHTML = `${business.address}`;
        p2.innerHTML = `${business.phonenumber}`;
        p3.innerHTML = `<a href="${business.websiteURL}">${business.websiteURL}</a>`;
        img.setAttribute('src', business.businessicon);
        img.setAttribute('alt', `Icon for ${business.businessname}`);
        img.setAttribute('loading', 'lazy');
        
        card.append(p1);
        card.append(p2)
        card.append(p3);
        card.append(img);

        cards.appendChild(card);
    });

};

getBusinesses();
    
 