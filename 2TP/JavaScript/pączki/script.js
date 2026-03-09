function oblicz() {
    let ilosc = document.getElementById("ilosc").value;
    let lukier = document.getElementById("lukier").checked;
    let x2nadzenie = document.getElementById("cukier").checked;
    let typ = document.getElementById("typ").value;
    let wynik = ilosc * typ;

    if (lukier) {
        wynik += 100;
    }

    if (x2nadzenie) {
        wynik += 200;
    }

if (wynik < 2000) {
    document.getElementById("wynik").innerHTML = "Słabo zjadłeś tylko: " + wynik + " kalorii";
}
else if (wynik == 0) {
    document.getElementById("wynik").innerHTML = "Nie zjadłeś niczego :(";
}
else{
    document.getElementById("wynik").innerHTML = "Mocno zjadłeś aż: " + wynik + " kalorii";
}
}