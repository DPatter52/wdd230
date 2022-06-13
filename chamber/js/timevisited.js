


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;

} else {
    visitsDisplay.textContent = `This is your first time here! Check out our Join page to get started with the Chamber!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);