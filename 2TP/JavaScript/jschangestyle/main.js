function color() {
    var colorValue = document.getElementById("color").value;
    document.getElementById("p").style.color = colorValue;
}

function font(){
    var size = document.getElementById("font").value;
    document.getElementById("p").style.fontSize = size + "px";
}

function fontfam(){
    var fam = document.getElementById("fontFamily").value;
    document.getElementById("p").style.fontFamily = fam;
}

function reset(){
   
    document.getElementById("p").style.color = "white";
    document.getElementById("p").style.fontSize = "20px";
    document.getElementById("p").style.fontFamily = "Arial, sans-serif";
    
    document.getElementById("color").value = "#ffffff";
    document.getElementById("font").value = "";
}