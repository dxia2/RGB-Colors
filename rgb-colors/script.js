// rgb colors with js by david

// event listener
document.getElementById("preview-btn").addEventListener("click", rgbPreview);

function rgbPreview(){
    //input
    let rValue = document.getElementById("redIn").value;
    let gValue = document.getElementById("greenIn").value;
    let bValue = document.getElementById("blueIn").value;
    //process
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
    //output
    document.getElementById("rgbStrOut").innerHTML = rgbString;
    document.getElementById("display").style.background = rgbString;
}