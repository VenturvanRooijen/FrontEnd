
const heroName = [
    "Ana",
    "Ashe",
    "Baptiste"
];



const randomHero = heroName[Math.floor(Math.random() * heroName.length)];


document.getElementById("hero").src = "images/" + randomHero + ".png";

