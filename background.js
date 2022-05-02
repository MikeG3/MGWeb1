//Get window size
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

console.log("Window width = " + windowWidth);
console.log("Window height = " + windowHeight);

var wh = windowHeight + "px"
var ww = windowWidth + "px"


function setDimensions() {
    //document.getElementById("videocontainer").style.width = ww;
    document.getElementById("backgroundvideo").style.width = ww;
    console.log("Resized width");
    //document.getElementById("videocontainer").style.height = wh;
    document.getElementById("backgroundvideo").style.height = wh;
    console.log("Resized height");
}


setDimensions();
