
const URL = '';
const cards = document.querySelector('.grid');
 

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
        let p4 = document.createElement('p4');
        let p5 = document.createElement('p5');
        let img = document.createElement('img');

    
        
        p1.innerHTML = `${business.address}`;
        p2.innerHTML = `${business.phonenumber}`;
        p3.innerHTML = `<a href="${business.websiteURL}">${business.websiteURL}</a>`;
        p4.innerHTML = `${business.businessname}`;
        p5.innerHTML = `Membership: ${business.membershiplvl}`
        img.setAttribute('src', business.businessicon);
        img.setAttribute('alt', `Icon for ${business.businessname}`);
        img.setAttribute('loading', 'lazy');

        card.append(img);
        card.append(p4);
        card.append(p1);
        card.append(p2);
        card.append(p3);
        card.append(p5);
        
        

        cards.appendChild(card);
    });

};

getBusinesses();


const gridbutton = document.querySelector("#gridbttn");
const listbutton = document.querySelector("#listbttn");
const display = document.querySelector(".grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}



 