// Vrne nakljucna cela stevila med vkljucno min in vkljucno max
function izberiNakljucno(min, max) {
    // Math random vrne nakljucno stevilo med 0 in 1
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

    // Nakljucno izbere eno enomestno stevilo
    var stevilo = izberiNakljucno(1, 9);

    $("#racunVaje").append("<p>Število: " + stevilo + "</p>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + stevilo + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
}


function zapisStevilDvomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    // Nakljucno izbere eno dvomestno stevilo
    var stevilo = izberiNakljucno(10, 99);

    $("#racunVaje").append("<p>Število: " + stevilo + "</p>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + stevilo + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);

}

// Racunanje brez prehoda cez 5 ali 10
function direktnoRacunanjeSestevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    // Izberemo 3 nakljucna stevila
    // Lahko je najvec ena 5-ka in najvec stiri 1-ke
    // Stevilo je i + v

    // Izbira prvega stevila
    // Za enico se omejimo le na stevili 1 in 2, da naslednji dve enici nista 0 
    var i1 = izberiNakljucno(1, 2);
    var v1 = 0;
    // Math.random vrne stevilo nakljucno med 0 in 1
    // V polovici primerov petico postavimo na 5, sicer ostane 0 (kot bi metali kovanec)
    if (Math.random() < 0.5) {
        v1 = 5;
    }
    var stevilo1 = i1 + v1;

    // Izbira drugega stevila
    // Omejimo enico i1+i2<=3, da i3 ne bo 0 
    var i2 = izberiNakljucno(1, 3 - i1);
    var v2 = 0;
    // Ce v prvem stevilu ni bilo 5-ke
    if (v1 == 0) {
        if (Math.random() < 0.5) {
            v2 = 5;
        }
    }
    var stevilo2 = i2 + v2;

    // Izbira tretjega stevila
    // Omejimo enico i1+i2+i3<=4, ker so lahko maksimalno 4 1-ke
    var i3 = izberiNakljucno(1, 4 - i1 - i2);
    var v3 = 0;
    // Ce v prvem in drugem  stevilu ni bilo 5-ke
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
    $("#racunVaje").append(racunVajeString);
}


function direktnoRacunanjeOdstevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    // Izberemo 3 nakljucna stevila
    // Stevilo je i + v

    // Izbira prvega stevila
    // Za enico se omejimo le na stevili 2 do 4, da imamo dve števili, ki ju lahko odštejemo (npr. dve enki) 
    var i1 = izberiNakljucno(2, 4);
    // Math.random vrne stevilo nakljucno med 0 in 1
    // V polovici primerov petico postavimo na 5, sicer ostane 0 (kot bi metali kovanec)
    var v1 = 0;
    if (Math.random() < 0.5) {
        v1 = 5;
    }
    var stevilo1 = i1 + v1;

    // Izbira drugega stevila, ki se vedno odsteva
    // Za enico se omejimo le na stevili 1 do i1-1, da lahko odštejemo vsaj še eno enko
    var i2 = izberiNakljucno(1, i1-1);
    var v2 = 0;
    // Ce smo v prvem stevilu imeli petko lahko v drugem stevilu spet dobimo petko, da jo odstejemo
    if (v1 == 5) {
        if (Math.random() < 0.5) {
            v1 = 5;
        }
    }
    var stevilo2 = - (i2 + v2);

    // Izbira tretjega stevila, ki se vedno odsteva
    // Za enico se omejimo le na stevili 1 do i1-i2, da lahko odštejemo maksimalno vse enice
    var i3 = izberiNakljucno(1, i1 - i2);
    var v3 = 0;

    // Pogleda ali je v prvem stevilu bila petka in v drugem stevilu ni bila petka. V taksnem primeru lahko odstejemo petko
    if ((v1 - v2) == 5) {
        if (Math.random() < 0.5) {
            v3 = 5;
        }
    }
    var stevilo3 = -(i3 + v3);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append(stevilo1 + "<br/>" + stevilo2 + "<br/>" + stevilo3 + "<br/>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + sestevek + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
}


function direktnoRacunanjeMesano() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');
    // Ce je znak1=1 bo pri drugem stevilu sestevanje, če je znak1=-1 bo odstevanje
    // Isto velja za znak2, le da gre za tretje stevilo
    var znak1 = 1;
    var znak2 = 1;


    // Izbira prvega stevila
    // Izbira enic
    var i1 = izberiNakljucno(1, 4);
    var v1 = 0;
    // Mecemo kovanec ali bomo imeli petko
    if (Math.random() < 0.5) {
        v1 = 5;
    }
    var stevilo1 = i1 + v1;

    // Izbira drugega stevila
    var v2 = 0;
    var i2 = 0;
    // Mecemo kovanec ali bo sestevanje ali odstevanje
    // Random je vrnil sestevanje
    if (Math.random() < 0.5) {
        // Vsota enic drugega in prvega stevila je lahko najvec stiri
        i2 = izberiNakljucno(0, 4 - i1);
        // Ce v prvem stevilu ni bilo petke, jo lahko v drugem stevilu nakljucno izberemo
        if (v1 == 0) {
            if (Math.random() < 0.5) {
                v1 = 5;
            }
        }
    }
    // Random je vrnil odstevanje
    else {
        znak1 = -1;
        // Odstejemo lahko nic enic ali vse enice iz prvega stevila
        i2 = izberiNakljucno(0, i1);
        // Petko lahko odstejemo le, ce je bila v prvem primeru petka
        if (v1 == 5) {
            if (Math.random() < 0.5) {
                v2 = 5;
            }
        }
    }
    var stevilo2 = znak1 * (i2 + v2);

    // Izbira tretjega stevila
    var v3 = 0;
    var i3 = 0;
    // Mecemo kovanec ali bo pri tretjem stevilu sestevanje ali odstevanje
    // Random je vrnil sestevanje
    if (Math.random() < 0.5) {
        // Vsota enic tretjega in rezultata enic prvih dveh stevil je lahko max 4
        i3 = izberiNakljucno(0, 4 - (i1 + znak1 * i2));
        // Ce v prvem in drugem stevilu ni bilo petke ali je bila petka v obeh stevilih, jo lahko v tretjem stevilu nakljucno izberemo
        if (((v1 + znak1 * v2) == 0)) {
            if (Math.random() < 0.5) {
                v3 = 5;
            }
        }
    }
    // Random je vrnil odstevanje
    else {
        znak2 = -1;
        // Odstejemo lahko nic enic ali vse enice delnega rezultata
        i3 = izberiNakljucno(0, i1 + znak1 * i2);
        // 5 lahko odstejemo, ce je delni rezultat enak 5
        if ((v1 + znak1 * v2) == 5) {
            if (Math.random() < 0.5) {
                v3 = 5;
            }
        }
    }
    var stevilo3 = znak2 * (i3 + v3);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append(stevilo1 + "<br/>" + stevilo2 + "<br/>" + stevilo3 + "<br/>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + sestevek + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);

}


function maliPrijateljSestevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    // Izbira prvega stevila 
    var i1 = izberiNakljucno(1, 4);
    // Ker moramo imeti prehod cez 5, 5-ke ne smemo izbrati
    var v1 = 0;
    var stevilo1 = i1 + v1;

    // Izbira drugega stevila
    // Ne rabimo paziti pri enicah, ker cez 8 ne moremo priti (ne bo prislo do velikega prijatelja)
    var i2 = izberiNakljucno(1, 4);
    // Ker moramo imeti prehod cez 5, 5-ke ne smemo izbrati
    var v2 = 0;
    var stevilo2 = i2 + v2;

    // Izbira tretjega stevila
    var i3 = 0;
    // V prvem  racunu nismo imeli prehoda cez 5
    if ((i1 + i2) <= 4) {
        // izberemo tretje enice tako, da je vedno prehod cez 5 oz. da je njihova vsota najmanj 5 
        i3 = izberiNakljucno(5-(i1+i2), 4);
    }
    // Enice so prisle cez 5 in moramo paziti da je njihova vsota  najvec 9
    else {
        i3 = izberiNakljucno(0, 9 - i1 - i2);
    }
    // zaradi prehoda cez 5 mora biti tretja petka vedno 0
    var v3 = 0;
       
    var stevilo3 = i3 + v3;
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append(stevilo1 + "<br/>" + stevilo2 + "<br/>" + stevilo3 + "<br/>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + sestevek + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
}


function maliPrijateljOdstevanje() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();

    // Pocisti soroban
    reset('vaje');

    // Izbira prvega stevila 
    var i1 = izberiNakljucno(0, 4);
    // Ker moramo imeti prehod cez 5, 5-ko moramo izbrati
    var v1 = 5;
    var stevilo1 = i1 + v1;

    // Izbira drugega stevila
    // Ne rabimo paziti pri enicah, ker imamo izbrano stevilo vsaj 5
    // V tem koraku lahko pride do malega prijatelja (npr. 7-4) ali pa ne (npr. 7-2)
    var i2 = izberiNakljucno(1, 4);
    // Ker odstevamo in zelimo imeti prehod, 5-ke ne smemo odsteti
    var v2 = 0;
    var stevilo2 = - (i2 + v2);

    // Izbira tretjega stevila
    var i3 = 0;
    // V prvem  racunu nismo imeli prehoda cez 5
    // V tem koraku se bo v vsakem primeru delal mali prijatelj
    if ((stevilo1 + stevilo2) > 4) {
        // izberemo tretje enice tako, da je vedno prehod cez 5 oz. da je njihova razlika manj kot 5 
        i3 = izberiNakljucno((stevilo1 + stevilo2) - 4, 4);
    }
    // V prvem racunu smo ze imeli prehod cez 5, zato moramo sedaj paziti, koliko se lahko odstejemo
    else {
        i3 = izberiNakljucno(0, stevilo1 + stevilo2);
    }
    // zaradi prehoda cez 5 mora biti tretja petka vedno 0
    var v3 = 0;

    var stevilo3 = - (i3 + v3);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append(stevilo1 + "<br/>" + stevilo2 + "<br/>" + stevilo3 + "<br/>");

    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + sestevek + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
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