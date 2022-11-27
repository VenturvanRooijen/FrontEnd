

var heroName = [{
    text : "Ana",
    image : "images/Ana.png"
},
{
    text : "Ashe",
    image : "images/Ashe.png"
},
{
    text : "Baptiste",
    image : "images/Baptiste.png"
},
{
    text : "Bastion",
    image : "images/Bastion.png"
},
{
    text : "Brigitte",
    image : "images/Brigitte.png"
},
{
    text : "Cassidy",
    image : "images/Cassidy.png"
},
{
    text : "D.Va",
    image : "images/D.Va.png"
},
{
    text : "Doomfist",
    image : "images/Doomfist.png"
},
{
    text : "Echo",
    image : "images/Echo.png"
},
{
    text : "Genji",
    image : "images/Genji.png"
},
{
    text : "Hanzo",
    image : "images/Ana.png"
},
{
    text : "Junkrat",
    image : "images/Junkrat.png"
},
{
    text : "Kiriko",
    image : "images/Kiriko.png"
},
{
    text : "Lucio",
    image : "images/Lucio.png"
},
{
    text : "Mei",
    image : "images/Mei.png"
},
{
    text : "Mercy",
    image : "images/Mercy.png"
},
{
    text : "Moira",
    image : "images/Moira.png"
},
{
    text : "Orisa",
    image : "images/Orisa.png"
},
{
    text : "Pharah",
    image : "images/Pharah.png"
},
{
    text : "Queen",
    image : "images/Queen.png"
},
{
    text : "Reaper",
    image : "images/Reaper.png"
},
{
    text : "Reinhardt",
    image : "images/Reinhardt.png"
},
{
    text : "Roadhog",
    image : "images/Roadhog.png"
},
{
    text : "Sigma",
    image : "images/Sigma.png"
},
{
    text : "Sojourn",
    image : "images/Sojourn.png"
},
{
    text : "Soldier",
    image : "images/Soldier.png"
},
{
    text : "Sombra",
    image : "images/Sombra.png"
},
{
    text : "Symmetra",
    image : "images/Symmetra.png"
},
{
    text : "Torbjorm",
    image : "images/Torbjorn.png"
},
{
    text : "Tracer",
    image : "images/Tracer.png"
},
{
    text : "Widowmaker",
    image : "images/Widowmaker.png"
},
{
    text : "Winston",
    image : "images/Winston.png"
},
{
    text : "Zarya",
    image : "images/Zarya.png"
},
{
    text : "Zenyatta",
    image : "images/Zenyatta.png"
}
];

var heroCount = 5;

if(heroCount <= 36 && heroCount >= 5) {

for(let i = 0; i < heroCount; i++) {

const randomHero = heroName[Math.floor(Math.random() * heroName.length)];
console.log(randomHero);



var container = document.getElementById("image-container");
var img = document.createElement('img');
img.src = randomHero.image;
img.style = "border:3px solid orange; border-radius:50px; width:100px";
container.appendChild(img);

};

}
else {
    document.getElementById("teVeel").textContent += "Aantal heroes moet tussen de 5 en 36 zijn";
    document.getElementById("teVeel").style = "display: block;"

}



