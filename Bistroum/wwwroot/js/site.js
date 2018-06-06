// Write your Javascript code.


function pritisk(event) {
    izbranaCelica = event.target.id;
    izbraniGumb = event.button;

    // Izpiše izbrano celico in gumb za debug

    document.getElementById("spanIzbraniKrogec").innerHTML = izbranaCelica;

/*
    if (izbraniGumb == leviGumbKoda) {
        leviGumb(izbranaCelica);
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