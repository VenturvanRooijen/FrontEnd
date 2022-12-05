

var images = [{
    text : "Ana",
    image : "images/Ana.png",
    used : false
},
{
    text : "Ashe",
    image : "images/Ashe.png",
    used : false
},
{
    text : "Baptiste",
    image : "images/Baptiste.png",
    used : false
},
{
    text : "Bastion",
    image : "images/Bastion.png",
    used : false
},
{
    text : "Brigitte",
    image : "images/Brigitte.png",
    used : false
},
{
    text : "Cassidy",
    image : "images/Cassidy.png",
    used : false
},
{
    text : "D.Va",
    image : "images/D.Va.png",
    used : false
},
{
    text : "Doomfist",
    image : "images/Doomfist.png",
    used : false
},
{
    text : "Echo",
    image : "images/Echo.png",
    used : false
},
{
    text : "Genji",
    image : "images/Genji.png",
    used : false
},
{
    text : "Hanzo",
    image : "images/Ana.png",
    used : false
},
{
    text : "Junkrat",
    image : "images/Junkrat.png",
    used : false
},
{
    text : "Kiriko",
    image : "images/Kiriko.png",
    used : false
},
{
    text : "Lucio",
    image : "images/Lucio.png",
    used : false
},
{
    text : "Mei",
    image : "images/Mei.png",
    used : false
},
{
    text : "Mercy",
    image : "images/Mercy.png",
    used : false
},
{
    text : "Moira",
    image : "images/Moira.png",
    used : false
},
{
    text : "Orisa",
    image : "images/Orisa.png",
    used : false
},
{
    text : "Pharah",
    image : "images/Pharah.png",
    used : false
},
{
    text : "Queen",
    image : "images/Queen.png",
    used : false
},
{
    text : "Reaper",
    image : "images/Reaper.png",
    used : false
},
{
    text : "Reinhardt",
    image : "images/Reinhardt.png",
    used : false
},
{
    text : "Roadhog",
    image : "images/Roadhog.png",
    used : false
},
{
    text : "Sigma",
    image : "images/Sigma.png",
    used : false
},
{
    text : "Sojourn",
    image : "images/Sojourn.png",
    used : false
},
{
    text : "Soldier",
    image : "images/Soldier.png",
    used : false
},
{
    text : "Sombra",
    image : "images/Sombra.png",
    used : false
},
{
    text : "Symmetra",
    image : "images/Symmetra.png",
    used : false
},
{
    text : "Torbjorn",
    image : "images/Torbjorn.png",
    used : false
},
{
    text : "Tracer",
    image : "images/Tracer.png",
    used : false
},
{
    text : "Widowmaker",
    image : "images/Widowmaker.png",
    used : false
},
{
    text : "Winston",
    image : "images/Winston.png",
    used : false
},
{
    text : "Zarya",
    image : "images/Zarya.png",
    used : false
},
{
    text : "Zenyatta",
    image : "images/Zenyatta.png",
    used : false
}
];

var counter = 0; var randomIndex=0; 
 

var displayImages=34; 

 if(displayImages >= 5 && displayImages <= 34){

while(counter !== displayImages){ 
	randomIndex = Math.floor(Math.random()*images.length); 
	if(images[randomIndex]["used"] === false){ 
		images[randomIndex]["used"] = true; 
 
		var container = document.getElementById("image-container");
        var img = document.createElement('img');
        img.src = images[randomIndex]["image"];
        img.style = "border:3px solid orange; border-radius:50px; width:100px; margin:5px";
        container.appendChild(img);
        console.log(images);

        var names = document.getElementById("name-container");
        var button = document.createElement('button');
        button.innerHTML = images[randomIndex]["text"];
        button.style = "border:3px solid orange; border-radius:14px; width:120px; height:50px; margin:5px";
        names.appendChild(button);
		 
 
		counter++; 
	} 
} 

} else{
    document.getElementById("invalidAmount").textContent += "Aantal heroes moet tussen de 5 en 34 zijn";
    document.getElementById("invalidAmount").style = "display: block;"
};
