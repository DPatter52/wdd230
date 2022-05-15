const datefield = document.querySelector(".headerDate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


const lastModified = new Date (document.lastModified);
document.querySelector("#currentdate").textContent = lastModified;



const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};