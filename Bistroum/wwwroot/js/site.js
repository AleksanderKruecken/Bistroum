// Write your Javascript code.


function pritisk(event) {
    izbraniKrogec = event.target.id;
    izbraniKrogecString = "'" + izbraniKrogec + "'";
    izbraniGumb = event.button;

    // Izpiše izbrani krogec in gumb za debug
    document.getElementById("spanIzbraniKrogec").innerHTML = izbraniKrogec;

    // Tukaj pride Martina koda za premik vseh potrebnih krogcev
    // Ta spodnja koda premakne pritisnjeni krogec na y=0
    document.getElementById(izbraniKrogec).setAttribute('cy', 0);

/*
    if (izbraniGumb == leviGumbKoda) {
        leviGumb(izbraniKrogec);
    }
    if (izbraniGumb == desniGumbKoda) {
        desniGumb();
    }
    preveriKonecIgre();
*/
}


function poslusajDogodke() {
    // Vsem td elementom dodeli event listener
    var celice = document.querySelectorAll("ellipse");
    for (var i = 0; i < celice.length; i++) {
        celice[i].addEventListener("mousedown", pritisk);
    };

}

// Globalne spremenljivke
leviGumbKoda = 0;
desniGumbKoda = 2;

poslusajDogodke();