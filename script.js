
const heroName = [
    "Ana",
    "Ashe",
    "Baptiste",
    "Bastion",
    "Brigitte",
    "Cassidy",
    "D.Va",
    "Doomfist",
    "Echo",
    "Genji",
    "Hanzo",
    "Junkrat",
    "Kiriko",
    "Lucio",
    "Mei",
    "Mercy",
    "Moira",
    "Orisa",
    "Pharah",
    "Queen",
    "Reaper",
    "Reinhardt",
    "Roadhog",
    "Sigma",
    "Sojourn",
    "Soldier",
    "Sombra",
    "Symmetra",
    "Torbjorn",
    "Tracer",
    "Widowmaker",
    "Winston",
    "Zarya",
    "Zenyatta"
];



const randomHero = heroName[Math.floor(Math.random() * heroName.length)];
console.log(randomHero)

const image = document.getElementsByClassName('hero');

image[0].src = "images/" + randomHero + ".png";

