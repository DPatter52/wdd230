let greetbanner;
const currentDay = new Date().getDay();

switch(currentDay) {
    case 0:
        greetbanner = '';
        break;
    case 1:
        greetbanner = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
        break;

    case 2:
        greetbanner = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
        break;
    
    case 3:
        greetbanner = '';
        break;

    case 4:
        greetbanner = '';
        break;

    case 5:
        greetbanner = '';
        break;

    case 6:
        greetbanner = '';
        break;
}  
    
document.getElementById("greetbanner").innerHTML = greetbanner;