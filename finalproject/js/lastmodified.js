const now = new Date();



const lastModified = new Date (document.lastModified);
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle:"full"}).format(lastModified);

document.querySelector("#currentdate").textContent = fulldate;