// rgb colors with js by david

let previewBtnEl = document.getElementById("preview-btn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOut = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
// event listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);


function rgbPreview(){
    //input
    let rValue = +redInEl.value;
    let gValue = +greenInEl.value;
    let bValue = +blueInEl.value;

    //validate colors (constrain colors between 0-255)
    //check rValue
    if(rValue < 0){
        rValue = 0;
        redInEl.value = 0;
    }else if(rValue > 255){
        rValue = 255;
        redInEl.value = 255;
    }

    if(gValue < 0){
        gValue = 0;
        greenInEl.value = 0;
    }else if(gValue > 255){
        gValue = 255;
        greenInEl.value = 255;
    }

    if(bValue < 0){
        bValue = 0;
        blueInEl.value = 0;
    }else if(bValue > 255){
        bValue = 255;
        blueInEl.value = 255;
    }

    //process
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
    //output
    rgbStringOut.innerHTML = rgbString;
    displayEl.style.background = rgbString;

}