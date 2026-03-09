/*
− Funkcje modyfikują style CSS bloków (ilustracje 2, 5, 6)
− Gdy zostanie kliknięty Blok 1:
− Kolor tła bloku 1 zmienia się na MistyRose, pozostałe na #FFAEA5
− Sposób wyświetlania Sekcji 1 zmienia się na blokowy, pozostałe są usunięte
− Gdy zostanie kliknięty Blok 2:
− Kolor tła bloku 2 zmienia się na MistyRose, pozostałe na #FFAEA5
− Sposób wyświetlania Sekcji 2 zmienia się na blokowy, pozostałe są usunięte
− Gdy zostanie kliknięty Blok 3:
− Kolor tła bloku 3 zmienia się na MistyRose, pozostałe na #FFAEA5
− Sposób wyświetlania Sekcji 3 zmienia się na blokowy, pozostałe są usunięte*/
function pokazBaze() {
    document.getElementById("baza").style.backgroundColor = "MistyRose";
    document.getElementById("opisy").style.backgroundColor = "#FFAEA5";
    document.getElementById("galeria").style.backgroundColor = "#FFAEA5";
    document.getElementById("sekcja1").style.display = "block";
    document.getElementById("sekcja2").style.display = "none";
    document.getElementById("sekcja3").style.display = "none";
}
function pokazOpisy() {
    document.getElementById("baza").style.backgroundColor = "#FFAEA5";
    document.getElementById("opisy").style.backgroundColor = "MistyRose";
    document.getElementById("galeria").style.backgroundColor = "#FFAEA5";
    document.getElementById("sekcja1").style.display = "none";
    document.getElementById("sekcja2").style.display = "block";
    document.getElementById("sekcja3").style.display = "none";
}
function pokazGalerie() {
    document.getElementById("baza").style.backgroundColor = "#FFAEA5";
    document.getElementById("opisy").style.backgroundColor = "#FFAEA5";
    document.getElementById("galeria").style.backgroundColor = "MistyRose";
    document.getElementById("sekcja1").style.display = "none";
    document.getElementById("sekcja2").style.display = "none";
    document.getElementById("sekcja3").style.display = "block";
}