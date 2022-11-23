

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
}
];



const randomHero = heroName[Math.floor(Math.random() * heroName.length)];
console.log(randomHero)

var container = document.getElementById("image-container");
var img = document.createElement('img');
img.src = randomHero.image;
img.className = "w3-round";
container.appendChild(img);



