function wyslij() {
    let wiadomosc = document.getElementById('message').value;
   const blok =`
        <section class="jolantames">
            <img src="Jolka.jpg" alt="Jolanta Nowak" id="jolka">
            <p>${wiadomosc}</p>
        </section>`
        document.getElementById('chat').innerHTML += blok;
}



function generujlosowaodp() {
    const odpowiedzi = [
        "Świetnie!",
        "Kto gra główną rolę?",
        "Lubisz filmy tego reżysera?",
        "Będę 10 minut wcześniej",
        "Może kupimy sobie popcorn?",
        "Ja wolę Colę",
        "Zaproszę jeszcze Grześka",
        "Tydzień temu też byłem w kinie na Diunie",
        "Ja funduję bilety"
    ];

   const blok =`<section class="krzysztofmes">
            <img src="Krzysiek.jpg" alt="Krzysztof Łukasiński">
            <p>${odpowiedzi[Math.floor(Math.random() * odpowiedzi.length)]}</p>
        </section>`
        document.getElementById('chat').innerHTML += blok;
}