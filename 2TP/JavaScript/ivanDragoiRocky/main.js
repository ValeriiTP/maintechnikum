function a(){
    let liczba = document.getElementById("moc").value;
    if(liczba.trim()==""){
        document.getElementById("wynik").innerHTML = "Podaj wartość – bez tego nie ma walki.";

    }
    else if(isNaN(liczba)){
        document.getElementById("wynik").innerHTML = "To nie jest liczba.";
    }
    else if (liczba<30){
        document.getElementById("wynik").innerHTML = "Za słaby cios – Rocky nawet tego nie poczuł";
    }
    else if (liczba >= 30 && liczba <= 69){
        document.getElementById("wynik").innerHTML = "Walka wyrównana – Drago nadal groźny";
    }
    else if (70<liczba<99){
        document.getElementById("wynik").innerHTML = "Mocny cios – Drago ma przewagę";
    }
    else if (liczba>=100){
        document.getElementById("wynik").innerHTML = "IF HE DIES, HE DIES – Drago wygrywa walkę";
    }
    
}
