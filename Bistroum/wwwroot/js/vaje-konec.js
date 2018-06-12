function izberiNakljucno(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function preveriRezultat(rezultat) {
    var vrednostNaSorobanu = vrednostSorobana();

    if (rezultat == vrednostNaSorobanu) {
        alert('Pravilno');
    } else {
        alert('Nepravilno');
    }
}


function zapisStevilEnomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function zapisStevilDvomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}



function direktnoRacunanjeSestevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');


    var i1 = izberiNakljucno(1, 3);
    var v1 = 0;
    if (Math.random() < 0.5) {
        v1 = 5;
    }

    var stevilo1 = i1 + v1;

    var i2 = izberiNakljucno(0, 4 - i1);
    var v2 = 0;
    if (v1 == 0) {
        if (Math.random() < 0.5) {
            v2 = 5;
        }
    }

    var stevilo2 = i2 + v2;

    var i3 = izberiNakljucno(0, 4 - i1 - i2);
    var v3 = 0;
    if ((v1 == 0) && (v2 == 0)) {
        if (Math.random() < 0.5) {
            v3 = 5;
        }
    }

    var stevilo3 = i3 + v3;
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append(stevilo1 + "<br/>" + stevilo2 + "<br/>" + stevilo3 + "<br/>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + sestevek + ")' >Preveri</button >"
    //$("#racunVaje").append("<button type='button' class='btn btn-default' onclick = 'preveriRezultat(sestevek)' >Preveri</button >");
    $("#racunVaje").append(racunVajeString);

}



function direktnoRacunanjeOdstevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function direktnoRacunanjeMesano() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function maliPrijateljSestevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function maliPrijateljOdstevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function maliPrijateljMesano() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function velikiPrijateljSestevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function velikiPrijateljOdstevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function velikiPrijateljMesano() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function kombinacijaSestevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function kombinacijaOdstevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function kombinacijaMesano() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function mnozenjeEnomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function mnozenjeDvomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}


function deljenjeEnomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    $("#racunVaje").append("<p>V izdelavi</p>");
}





generiranjeSorobana();
poslusajDogodke();