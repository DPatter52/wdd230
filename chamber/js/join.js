//----Join Page Form Submission----//
const subdate = document.querySelector("#submissiondate");

const dateOfSub = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

subdate.innerHTML = `<em>${fulldate}</em>`; 

console.log(dateOfSub)
