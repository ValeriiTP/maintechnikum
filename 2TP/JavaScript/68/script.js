/*W pliku JavaScript utwórz tablicę o nazwie auta (lub cokolwiek co lubisz bardziej lub mniej), która zawiera kilka marek samochodów(albo co tam chcesz), np.:
BMW
Audi
Opel
Skoda
Mercedes

Na stronie przygotuj przyciskiUtwórz przyciski, które będą wykonywać operacje na tablicy po kliknięciu.
Każdy przycisk powinien wywoływać odpowiednią funkcję JavaScript.

Zaimplementuj funkcje:
Pokaż tablicę
wyświetla wszystkie elementy tablicy w elemencie div

Dodaj auto (push)
dodaje nową markę samochodu na koniec tablicy

Usuń ostatnie auto (pop)
usuwa ostatni element z tablicy

Dodaj auto na początek (unshift)
dodaje nowy element na początek tablicy

Usuń pierwsze auto (shift)
usuwa pierwszy element z tablicy

Sprawdź czy jest Skoda
sprawdza czy w tablicy znajduje się „Skoda”
wyświetla komunikat czy Skoda jest w tablicy

Sortuj
sortuje tablicę alfabetycznie

Pierwsza pozycja
wyświetla pierwszy element tablicy

Liczba elementów
wyświetla liczbę elementów w tablicy

Pierwsza i druga
wyświetla pierwszy oraz drugi element tablicy

W oddzielnych liniach
wyświetla wszystkie elementy tablicy
każdy element w nowej linii


Wynik działania
Wyniki operacji wyświetl w elemencie:
<div id="wynik"></div>*/
let auta = ["BMW", "Audi", "Opel", "Skoda", "Mercedes"];

function pokazTablice() {
    document.getElementById("wynik").innerText = auta.join(", ");
}

function dodajAuto() {
    let noweAuto = prompt("Podaj markę samochodu do dodania:");
    auta.push(noweAuto);
    pokazTablice();
}

function usunOstatnieAuto() {
    auta.pop();
    pokazTablice();
}

function dodajAutoNaPoczatek() {    let noweAuto = prompt("Podaj markę samochodu do dodania na początek:");
    auta.unshift(noweAuto);
    pokazTablice();
}

function usunPierwszeAuto() {
    auta.shift();
    pokazTablice();
}

function sprawdzSkoda() {
    if (auta.includes("Skoda")) {
        document.getElementById("wynik").innerText = "Skoda jest w tablicy.";
    } else {
        document.getElementById("wynik").innerText = "Skoda nie jest w tablicy.";
    }
}

function sortuj() {
    auta.sort();
    pokazTablice();
}
function pierwszaPozycja() {
    document.getElementById("wynik").innerText = "Pierwsza pozycja: " + auta[0];
}
function liczbaElementow() {
    document.getElementById("wynik").innerText = "Liczba elementów: " + auta.length;
}   
function pierwszaIDruga() {
    document.getElementById("wynik").innerText = "Pierwsza pozycja: " + auta[0] + ", Druga pozycja: " + auta[1];
}
function wOddzielnychLiniach() {
    document.getElementById("wynik").innerHTML = auta.join("<br>");
}
