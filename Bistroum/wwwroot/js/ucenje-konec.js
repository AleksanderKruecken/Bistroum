function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animacijaEnomestnoStevilo() {
    // 7

    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo 7
    // 10 krat prestavi za desetino razlike; uporabljamo splosni (j-1)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaDvomestnoStevilo() {
    // 82

    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo desetice na 8
    // 10 krat prestavi za desetino razlike; uporabljamo splosni (j-1)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(22).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(23).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(25).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // natop nastavimo enice na 2
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }

} 

async function animacijaBrezPrijateljaSestevanje() {
    // 1 + 5 + 1

    // Pocisti soroban
    reset('ucenje');

    // najprej prestavimo prvo enko
    // 10 krat prestavi za desetino razlike; uporabljamo splosni (j-1)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // sedaj prestavimo petko
    for (i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu prestavimo se zadnjo enko
    for (i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
} // animacija

async function animacijaBrezPrijateljaOdstevanje() {
    // 9 - 1 - 6

    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo 9
    // 10 krat prestavi za desetino razlike; uporabljamo splosni (j-1)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // sedaj odstejemo 1
    for (i = 1; i <= 10; i++) {
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu odstejemo 6
    for (i = 1; i <= 10; i++) {
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaBrezPrijateljaMesano() {
    // 8 - 7 + 6

    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo 8
    // 10 krat prestavi za desetino razlike; uporabljamo splosni (j-1)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // sedaj odstejemo 7
    for (i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu pristejemo 6
    for (i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaMaliPrijateljSestevanje() {
    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo stevilo 4
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // pristejemo 5 in odstejemo 2
    for (var i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
}    

async function animacijaMaliPrijateljOdstevanje() {
    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo stevilo 6
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // odstejemo 5 in pristejmo 1
    for (var i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}   

async function animacijaMaliPrijateljMesano() {
    // Pocisti soroban
    reset('ucenje');

    // najprej nastavimo stevilo 7
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // odstejemo 5 in pristejmo 2
    for (var i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // pristejemo 5 in odstejmo 3
    for (var i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
}   

async function animacijaVelikiPrijateljSestevanje() {
    // Pocisti soroban
    reset('ucenje');
    // 7+9
    // najprej nastavimo stevilo 7
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato odstejemo -1 (=veliki prijatelj od 9)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu dodamo 10
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaVelikiPrijateljOdstevanje() {
    // Pocisti soroban
    reset('ucenje');
    // 11-8
    // najprej nastavimo desetice stevila 11
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato nastavimo enice stevila 11
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // odstejemo 10
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // pristejemo 2 (= veliki prijatelj od 8)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaVelikiPrijateljMesano() {
    // Pocisti soroban
    reset('ucenje');
    // 16-7+9
    // najprej nastavimo desetice stevila 16
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato nastavimo enice stevila 16
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // najprej odstejemo 10
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato pristejemo 3 (=veliki prijatelj od 7)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato odstejmo 1 (= veliki prijatelj od 9)
    for (var i = 1; i <= 10; i++) {
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu pristejemo 10 
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaObaPrijateljaSestevanje() {
    // Pocisti soroban
    reset('ucenje');
    // 7+6
    // najprej nastavimo stevilo 7
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato odstejemo -4 (=-5+1) z malim prijateljem
    for (var i = 1; i <= 10; i++) {
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu dodamo 10
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaObaPrijateljaOdstevanje() {
    // Pocisti soroban
    reset('ucenje');
    // 14-6
    // najprej nastavimo desetice stevila 14
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato nastavimo enice stevila 14
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // odstejemo 10
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // pristejemo 4 (=+5-1) z malim prijateljem
    for (var i = 1; i <= 10; i++) {
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaObaPrijateljaMesano() {
    // Pocisti soroban
    reset('ucenje');
    // 13-7+6
    // najprej nastavimo desetice stevila 13
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato nastavimo enice stevila 13
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // najprej odstejemo 10
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato pristejemo 3 (=+5-2) z malim prijateljem
    for (var i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato odstejmo 4 (=-5+1) z malim prijateljem
    for (var i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(15).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu pristejemo 10 
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaMnozenjeEnomestno() {
    // Pocisti soroban
    reset('ucenje');
    // 37*5
    // najprej izracunamo 3 * 5 in to vrednost prikazemo v deseticah in stoticah
    // najprej 1 v stoticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(31).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    // prikazemo se 5 od 15 v deseticah
    await sleep(1000);
    for (var i = 1; i <= 10; i++) {
        document.getElementById(25).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);

    // nato izracunamo 7 * 5 ter to pristejemo v enicah in deseticah
    // najprej 3 v deseticah 
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(22).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(23).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // na koncu dodamo se 5 v enicah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaMnozenjeDvomestno() {
    // Pocisti soroban
    reset('ucenje');
    // 36*54
    // najprej izracunamo 3 * 5 in to vrednost prikazemo v stoticah in tisocicah
    // najprej 1 v tisocicah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(41).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    // prikazemo se 5 od 15 v stoticah
    await sleep(1000);
    for (var i = 1; i <= 10; i++) {
        document.getElementById(35).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);

    // nato izracunamo 3 * 4 ter to pristejemo v deseticah in stoticah
    // najprej 1 v stoticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(31).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // in 2 v deseticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(22).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato izracunamo 6 * 5 in to pristejemo v deseticah in stoticah
    // najprej 3 v stoticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(32).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(33).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(34).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // in 0 v deseticah  
    // na koncu izracunamo se 6 * 4 in pristejemo v enicah in deseticah
    // najprej 2 v deseticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(23).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(24).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // in 4 v enicah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(13).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(14).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
}

async function animacijaDeljenje() {
    // Pocisti soroban
    reset('ucenje');
    // 632 : 8 = 79
    // najprej si prikazemo stevilo 632 na sorobanu
    // najprej 6 v stoticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(31).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(35).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // prikazemo se 3 od v deseticah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(22).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(23).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // in prikazemo se 2 v enicah
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);

    // nato izracunamo 63 : 8 ter rezultat 7 zapišemo
    for (var i = 1; i <= 10; i++) {
        document.getElementById(51).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(52).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(55).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // pocistimo stevilko 6 v 632
    // najprej pocistimo 5
    for (var i = 1; i <= 10; i++) {
        document.getElementById(35).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // nato pocistimo se 1
    for (i = 1; i <= 10; i++) {
        document.getElementById(31).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);

    // nastavimo 7 kot ostanek
    for (i = 1; i <= 10; i++) {
        document.getElementById(23).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(25).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);

    // pri racunu 63-56 smo dobili ostanek 7 ter tako ostane skupno stevilo 72
    // to stevilo 72 delimo z 8 ter dobimo 9 in to prikazemo v rezultat
    for (var i = 1; i <= 10; i++) {
        document.getElementById(41).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(42).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(43).setAttribute('cy', yStart + (3 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(44).setAttribute('cy', yStart + (4 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(45).setAttribute('cy', yUp + yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // pocistimo 72
    // najprej pocistimo 7
    for (i = 1; i <= 10; i++) {
        document.getElementById(21).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(22).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(25).setAttribute('cy', yUp + yDiff - yDiff * i / 10);
        await sleep(100);
    }
    await sleep(1000);
    // in na koncu pocistimo se 2
    for (i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff + yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff + yDiff * i / 10);
        await sleep(100);
    }
}


function prikaziRacunAnimacije(podmeni) {
    // Pocisti soroban
    reset('ucenje');

    $("#racunUcenje").empty();

    if (podmeni == '1a') {
        $("#racunUcenje").append("<p>7</p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaEnomestnoStevilo()' >Animacija</button >");
        $("#ucenjeDescription").text("Če so vse kroglice nad osrednjo prečko premaknjene navzgor, kroglice pod prečko pa navzdol je prikazano število 0. Palica čisto na desni predstavlja enice.Vsaka od štirih kroglic, ki se nahajajo pod osrednjo prečko ima vrednost 1, medtem ko ima kroglica nad osrednjo prečko vrednost 5. Če katero od teh kroglic premaknemo k osrednji prečki, se število na sorobanu poveča za to vrednost.");
        $("#ucenjeDescriptionAdditional").text("Število 7 zapišemo tako, da k osrednji  prečki premaknemo petico in dve enici.");
    }

    if (podmeni == '1b') {
        $("#racunUcenje").append("<p>82</p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDvomestnoStevilo()' >Animacija</button >");
        $("#ucenjeDescription").text("Druga palica z desne proti levi predstavlja desetice. Vsaka od štirih kroglic, ki se nahajajo pod osrednjo prečko ima vrednost 10, medtem ko ima kroglica nad osrednjo prečko vrednost 50. Če katero od teh kroglic premaknemo, k osrednji prečki, se število na sorobanu poveča za to vrednost.");
        $("#ucenjeDescriptionAdditional").text("Število 82 zapišemo tako, da na palici z deseticami k osrednji  prečki premaknemo petico in tri enice. Nato pa na palici z enicami k osrednji prečki premaknemo še dve enici.");
    }

    if (podmeni=='2a') {
        $("#racunUcenje").append("1<br/>5<br/>1<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaBrezPrijateljaSestevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Števila seštevamo tako, da na soroban najprej zapišemo prvo število, nato pa mu prištejemo še ostala števila.");
        $("#ucenjeDescriptionAdditional").text("Število 1 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo eno enico. Zatem prištejemo število 5 tako, da k osrednji prečki premaknemo petico. Na koncu prištejemo število 1 tako, da k osrednji prečki premaknemo še eno enico.");
    }

    if (podmeni == '2b') {
        $("#racunUcenje").append("9<br/>-1<br/>-6<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaBrezPrijateljaOdstevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Števila odštevamo tako, da na soroban najprej zapišemo prvo število, nato pa mu odštejemo še ostala števila.");
        $("#ucenjeDescriptionAdditional").text("Število 9 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo petico in štiri enice. Zatem odštejemo število 1 tako, da  od osrednje prečke odmaknemo eno enico. Na koncu odštejemo še število 6 tako, da od osrednje prečke odmaknemo petico in eno enico.");

    }

    if (podmeni == '2c') {
        $("#racunUcenje").append("8<br/>-7<br/>6<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaBrezPrijateljaMesano()' >Animacija</button >");
        $("#ucenjeDescription").text("Števila prištevamo in odštevamo tako, da na soroban najprej zapišemo prvo število, nato pa mu prištejemo ter odštejemo še ostala števila.");
        $("#ucenjeDescriptionAdditional").text("Število 8 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo petico in tri enice. Zatem odštejemo število 7 tako, da od osrednje prečke odmaknemo petico in dve enici. Na koncu prištejemo še število 6 tako, da k osrednji prečki premaknemo petico in eno enico.");

    }

    if (podmeni == '3a') {
        $("#racunUcenje").append("4<br/>3<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMaliPrijateljSestevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Pri seštevanju se nam lahko zgodi, da imamo prehod preko osrednje prečke, kar se imenuje mali prijatelj (v tujini se uporablja izraz little friend ali partner). Tak prehod se nam zgodi takrat, ko imamo pod osrednjo prečko premalo prostih kroglic, z vrednostjo 1. Pri čemer pa smo še vedno na istem stolpcu in kroglic sosednjih stolpcev ne potrebujemo. V tem primeru si vedno pomagamo s kroglico vrednosti 5, ki se nahaja nad osrednjo prečko. Da poiščemo številu njegovega malega prijatelja, izračunamo, koliko temu številu manjka do vrednosti 5. Za število 1 je mali prijatelj 4, za število 2 je mali prijatelj 3, za število 3 je mali prijatelj 2 in za število 4 je mali prijatelj 1. Pri seštevanju kjer moramo uporabiti malega prijatelja, to naredimo tako, da prištejemo vrednost 5 ter odštejemo vrednost malega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 4 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo štiri enice. Zatem prištejemo število 3 tako, da uporabimo malega prijatelja. Mali prijatelj števila 3 je število 2 (5-3=2). Število 3 torej prištejemo tako, da k osrednji prečki premaknemo petico in od srednje prečke odmaknemo dve enici. Pri tem na sorobanu dobimo končni rezultat 7.");
    }

    if (podmeni == '3b') {
        $("#racunUcenje").append("6<br/>-4<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMaliPrijateljOdstevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Pri odštevanju se nam lahko zgodi, da imamo prehod preko osrednje prečke, kar se imenuje mali prijatelj (v tujini se uporablja izraz little friend ali partner). Tak prehod se nam zgodi takrat, ko imamo pod osrednjo prečko na voljo za odštevanje premalo prostih kroglic, z vrednostjo 1, ni pa potrebno odštevati kroglic v naslednjem stolpcu.  V tem primeru si vedno pomagamo s kroglico vrednosti 5, ki se nahaja nad osrednjo prečko. Da poiščemo številu njegovega malega prijatelja, izračunamo, koliko temu številu manjka do vrednosti 5. Za število 1 je mali prijatelj 4, za število 2 je mali prijatelj 3, za število 3 je mali prijatelj 2 in za število 4 je mali prijatelj 1. Pri odštevanju kjer moramo uporabiti malega prijatelja, to naredimo tako, da odštejemo vrednost 5 ter prštejemo vrednost malega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 6 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo petico in eno enico. Zatem odštejemo število 4 tako, da uporabimo malega prijatelja. Mali prijatelj števila 4 je število 1 (5-4=1). Število 4 torej odštejemo tako, da k osrednji prečki premaknemo eno enico in odmaknemo petico. Pri tem na sorobanu dobimo končni rezultat 2.");
    }

    if (podmeni == '3c') {
        $("#racunUcenje").append("7<br/>-3<br/>+2<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMaliPrijateljMesano()' >Animacija</button >");
        $("#ucenjeDescription").text("Pri seštevanju ali odštevanju se nam lahko zgodi, da imamo prehod preko osrednje prečke, kar se imenuje mali prijatelj (v tujini se uporablja izraz little friend ali partner). Tak prehod se nam zgodi takrat, ko imamo pod osrednjo prečko premalo prostih kroglic, z vrednostjo 1. Pri čemer pa smo še vedno na istem stolpcu in kroglic sosednjih stolpcev ne potrebujemo. V tem primeru si vedno pomagamo s kroglico vrednostjo 5, ki se nahaja nad osrednjo prečko. Da poiščemo številu njegovega malega prijatelja, izračunamo, koliko temu številu manjka do vrednosti 5. Za število 1 je mali prijatelj 4, za število 2 je mali prijatelj 3, za število 3 je mali prijatelj 2 in za število 4 je mali prijatelj 1. Druga števila nimajo majhnih prijateljev.");
        $("#ucenjeDescriptionAdditional").text("Število 7 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo petico in dve enici. Zatem odštejemo število 3 tako, da uporabimo malega prijatelja. Mali prijatelj števila 3 je število 2 (5-3=2). Število 3 torej odštejemo tako, da k osrednji prečki premaknemo dve enici in odmaknemo petico. Pri tem na sorobanu dobimo rezultat 4. Število 2 prištejemo tako, da uporabimo malega prijatelja. Mali prijatelj števila 2 je število 3 (5-2=3). Število 2 torej prištejemo tako, da k osrednji prečki premaknemo petico in od srednje prečke odmaknemo tri enice. Pri tem na sorobanu dobimo končni rezultat izračuna 6.");
    }

    if (podmeni == '4a') {
        $("#racunUcenje").append("<p>7<br/>+9<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaVelikiPrijateljSestevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Če nekega števila ne moremo prišteti s prostimi kroglicami v prvotnem stolpcu, prav tako pa ne z malim prijateljem v prvotnem stolpcu, je potreben prehod na drugi stolpec (levo od našega stolpca). Tak primer je, ko želimo sešteti dve števili, njuna vsota pa je več kot 10. V tem primeru si pomagamo z velikim prijateljem (v tujini e uporablja izraz big friend ali friend). Veliki prijatelj danega števila je takšno število, da je njuna vsota enaka 10. Pari velikih prijatelji števil so tako 1 in 9, 2 in 8, 3 in 7, 4 in 6 ter 5 in 5. Pri seštevanju, kjer moramo uporabiti velikega prijatelja, to naredimo tako, da odštejemo vrednost velikega prijatelja in nato prištejemo vrednost 10.");
        $("#ucenjeDescriptionAdditional").text("Število 7 zapišemo tako, da na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo petico in dve enici. Ker celotnega števila 9 ne moremo prišteti k številu 7 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu prištejemo 9 ali pa če najprej številu odštejemo 1 in nato prištejemo 10. To lahko ponazorimo z zapisom 7 + 9 = 7 -1  + 10 = 16. Število 9 torej prištejemo tako, da od osrednje prečke odmaknemo eno enico in nato v stolpcu z deseticami k osrednji prečki premaknemo eno desetico. Pri tem na sorobanu dobimo končni rezultat 16.");
    }

    if (podmeni == '4b') {
        $("#racunUcenje").append("<p>11<br/>-8<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaVelikiPrijateljOdstevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Če nekega števila ne moremo odšteti s prostimi kroglicami v prvotnem stolpcu, prav tako pa ne z malim prijateljem v prvotnem stolpcu, je potreben prehod na drug stolpec (levo od našega stolpca). Tak primer je, ko želimo odšteti eno število od drugega, enice odštevanca pa so večje od enic zmanjševanca, primer 11 - 8). V tem primeru si pomagamo z velikim prijateljem (v tujini e uporablja izraz big friend ali friend). Veliki prijatelj danega števila je takšno število, da je njuna vsota enaka 10. Pari velikih prijatelji števil so tako 1 in 9, 2 in 8, 3 in 7, 4 in 6 ter 5 in 5. Pri odštevanju najprej odštejemo vrednost 10 in nato prištejemo vrednost velikega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 11 zapišemo tako, da na 2. palici iz desne proti levi (predstavlja desetice) k osrednji prečki premaknemo eno desetico, na palici skrajno desno (predstavlja enice) pa k osrednji prečki premaknemo eno enico.  Ker celotnega števila 8 ne moremo odšteti od števila 11 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu odštejemo 8 ali pa če najprej številu odštejemo 10 in nato prištejemo 2. To lahko ponazorimo z zapisom 11 - 8 = 11 - 10  + 2 = 3. Število 8 torej odštejemo tako, da od osrednje prečke odmaknemo eno desetico in nato v stolpcu z enicami k osrednji prečki premaknemo dve enici. Pri tem na sorobanu dobimo končni rezultat 3.");
    }

    if (podmeni == '4c') {
        $("#racunUcenje").append("<p>16<br/>-7<br/>+9<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaVelikiPrijateljMesano()' >Animacija</button >");
        $("#ucenjeDescription").text("Če nekega števila ne moremo prišteti ali odšteti s prostimi kroglicami v prvotnem stolpcu, prav tako pa ne z malim prijateljem v prvotnem stolpcu, je potreben prehod na drugi stolpec (levo od našega stolpca). Tak primer je, ko želimo sešteti dve števili, njuna vsota pa je več kot 10. Ali pa ko želimo odšteti eno število od drugega, enice odštevanca pa so večje od enic zmanjševanca, primer 11 - 8). V tem primeru si pomagamo z velikim prijateljem (v tujini e uporablja izraz big friend ali friend). Veliki prijatelj danega števila je takšno število, da je njuna vsota enaka 10. Pari velikih prijatelji števil so tako 1 in 9, 2 in 8, 3 in 7, 4 in 6 ter 5 in 5. Pri seštevanju, kjer moramo uporabiti velikega prijatelja, to naredimo tako, da odštejemo vrednost velikega prijatelja in nato prištejemo vrednost 10. Pri odštevanju pa najprej odštejemo vrednost 10 in nato prištejemo vrednost velikega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 16 zapišemo tako, da na 2. palici iz desne proti levi (predstavlja desetice) k osrednji prečki premaknemo eno desetico, na palici skrajno desno (predstavlja enice) pa k osrednji prečki premaknemo eno petico in eno enico.  Ker celotnega števila 7 ne moremo odšteti od števila 16 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu odštejemo 7 ali pa če najprej številu odštejemo 10 in nato prištejemo 3. To lahko ponazorimo z zapisom 16 - 7 = 16 - 10  + 3 = 9. Število 7 torej odštejemo tako, da od osrednje prečke odmaknemo eno desetico in nato v stolpcu z enicami k osrednji prečki premaknemo tri enice. Pri tem na sorobanu dobimo rezultat 9. Ker celotnega števila 9 ne moremo prišteti k številu 9 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu prištejemo 9 ali pa če najprej številu odštejemo 1 in nato prištejemo 10. To lahko ponazorimo z zapisom 9 + 9 = 9 -1  + 10 = 18. Število 9 torej prištejemo tako, da od osrednje prečke odmaknemo eno enico in nato v stolpcu z deseticami k osrednji prečki premaknemo eno desetico. Pri tem na sorobanu dobimo končni rezultat 18.");
    }

    if (podmeni == '5a') {
        $("#racunUcenje").append("<p>7<br/>+6<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaObaPrijateljaSestevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Če nekega števila ne moremo prišteti s prostimi kroglicami v prvotnem stolpcu, prav tako pa ne z malim prijateljem v prvotnem stolpcu, je potreben prehod na drugi stolpec (levo od našega stolpca). Tak primer je, ko želimo sešteti dve števili, njuna vsota pa je več kot 10. V tem primeru si pomagamo z velikim prijateljem (v tujini e uporablja izraz big friend ali friend). Veliki prijatelj danega števila je takšno število, da je njuna vsota enaka 10. Pari velikih prijatelji števil so tako 1 in 9, 2 in 8, 3 in 7, 4 in 6 ter 5 in 5. Pri seštevanju, kjer moramo uporabiti velikega prijatelja, to naredimo tako, da odštejemo vrednost velikega prijatelja in nato prištejemo vrednost 10. Poleg tega se nam pri odštevanju lahko zgodi, da imamo prehod preko osrednje prečke, kar se imenuje mali prijatelj (v tujini se uporablja izraz little friend ali partner). Tak prehod se zgodi takrat, ko imamo pod osrednjo prečko na voljo za odštevanje premalo prostih kroglic, z vrednostjo 1, ni pa potrebno odštevati kroglic v naslednjem stolpcu.  V tem primeru si vedno pomagamo s kroglico vrednosti 5, ki se nahaja nad osrednjo prečko. Da poiščemo številu njegovega malega prijatelja, izračunamo, koliko temu številu manjka do vrednosti 5. Za število 1 je mali prijatelj 4, za število 2 je mali prijatelj 3, za število 3 je mali prijatelj 2 in za število 4 je mali prijatelj 1. Pri odštevanju kjer moramo uporabiti malega prijatelja, to naredimo tako, da odštejemo vrednost 5 ter prštejemo vrednost malega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 7 zapišemo tako, da na na palici skrajno desno (predstavlja enice) k osrednji prečki premaknemo eno petico in dve enici.  Ker celotnega števila 6 ne moremo prišteti k številu 7 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu prištejemo 6 ali pa če najprej številu odštejemo 4 in nato prištejemo 10. To lahko ponazorimo z zapisom 7 + 6 = 7 - 4  + 10 = 13. Število  4 od števila 7 odštejemo tako, da uporabimo malega prijatelja. Mali prijatelj števila 4 je število 1 (5-4=1). Število 4 torej odštejemo tako, da k osrednji prečki premaknemo eno enico in odmaknemo petico. Pri tem na sorobanu dobimo vmesni rezultat 3. Nato v stolpcu z deseticami k osrednji prečki premaknemo eno desetico. Pri tem na sorobanu dobimo končni rezultat 13.");
    }

    if (podmeni == '5b') {
        $("#racunUcenje").append("<p>14<br/>-6<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaObaPrijateljaOdstevanje()' >Animacija</button >");
        $("#ucenjeDescription").text("Če nekega števila ne moremo odšteti s prostimi kroglicami v prvotnem stolpcu, prav tako pa ne z malim prijateljem v prvotnem stolpcu, je potreben prehod na drug stolpec (levo od našega stolpca). Tak primer je, ko želimo odšteti eno število od drugega, enice odštevanca pa so večje od enic zmanjševanca, primer 14 - 6). V tem primeru si pomagamo z velikim prijateljem (v tujini e uporablja izraz big friend ali friend). Veliki prijatelj danega števila je takšno število, da je njuna vsota enaka 10. Pari velikih prijatelji števil so tako 1 in 9, 2 in 8, 3 in 7, 4 in 6 ter 5 in 5. Pri odštevanju najprej odštejemo vrednost 10 in nato prištejemo vrednost velikega prijatelja. Poleg tega se nam pri seštevanju lahko zgodi, da imamo prehod preko osrednje prečke, kar se imenuje mali prijatelj (v tujini se uporablja izraz little friend ali partner). Tak prehod se nam zgodi takrat, ko imamo pod osrednjo prečko premalo prostih kroglic, z vrednostjo 1. Pri čemer pa smo še vedno na istem stolpcu in kroglic sosednjih stolpcev ne potrebujemo. V tem primeru si vedno pomagamo s kroglico vrednosti 5, ki se nahaja nad osrednjo prečko. Da poiščemo številu njegovega malega prijatelja, izračunamo, koliko temu številu manjka do vrednosti 5. Za število 1 je mali prijatelj 4, za število 2 je mali prijatelj 3, za število 3 je mali prijatelj 2 in za število 4 je mali prijatelj 1. Pri seštevanju kjer moramo uporabiti malega prijatelja, to naredimo tako, da prištejemo vrednost 5 ter odštejemo vrednost malega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 14 zapišemo tako, da na 2. palici iz desne proti levi (predstavlja desetice) k osrednji prečki premaknemo eno desetico, na palici skrajno desno (predstavlja enice) pa k osrednji prečki premaknemo štiri enice.  Ker celotnega števila 6 ne moremo odšteti od števila 11 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu odštejemo 6 ali pa če najprej številu odštejemo 10 in nato prištejemo 4. To lahko ponazorimo z zapisom 14 - 6 = 14 - 10  + 4 = 8. Število 6 od števila 14 torej odštejemo tako, da od osrednje prečke najprej odmaknemo eno desetico. Zatem prištejemo število 4 tako, da uporabimo malega prijatelja. Mali prijatelj števila 4 je število 1 (5-4=1). Število 4 torej prištejemo tako, da k osrednji prečki premaknemo petico in od srednje prečke odmaknemo eno enico. Pri tem na sorobanu dobimo končni rezultat 8.");
    }

    if (podmeni == '5c') {
        $("#racunUcenje").append("<p>13<br/>-7<br/>+6<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaObaPrijateljaMesano()' >Animacija</button >");
        $("#ucenjeDescription").text("Če nekega števila ne moremo odšteti ali prišteti s prostimi kroglicami v prvotnem stolpcu, prav tako pa ne z malim prijateljem v prvotnem stolpcu, je potreben prehod na drug stolpec (levo od našega stolpca). Tak primer je, ko želimo odšteti eno število od drugega, enice odštevanca pa so večje od enic zmanjševanca, primer 14 - 6). Ali pa, ko želimo sešteti dve števili, njuna vsota pa je več kot 10. V tem primeru si pomagamo z velikim prijateljem (v tujini e uporablja izraz big friend ali friend). Veliki prijatelj danega števila je takšno število, da je njuna vsota enaka 10. Pari velikih prijatelji števil so tako 1 in 9, 2 in 8, 3 in 7, 4 in 6 ter 5 in 5. Pri odštevanju najprej odštejemo vrednost 10 in nato prištejemo vrednost velikega prijatelja. Pri seštevanju, kjer moramo uporabiti velikega prijatelja, to naredimo tako, da odštejemo vrednost velikega prijatelja in nato prištejemo vrednost 10.  Poleg tega se nam pri odštevanju ali seštevanju lahko zgodi, da imamo prehod preko osrednje prečke, kar se imenuje mali prijatelj (v tujini se uporablja izraz little friend ali partner). Tak prehod se zgodi takrat, ko imamo pod osrednjo prečko na voljo za odštevanje ali prištevanje premalo prostih kroglic, z vrednostjo 1, ni pa potrebno odštevati ali prištevati kroglic v naslednjem stolpcu.  V tem primeru si vedno pomagamo s kroglico vrednosti 5, ki se nahaja nad osrednjo prečko.Da poiščemo številu njegovega malega prijatelja, izračunamo, koliko temu številu manjka do vrednosti 5. Za število 1 je mali prijatelj 4, za število 2 je mali prijatelj 3, za število 3 je mali prijatelj 2 in za število 4 je mali prijatelj 1. Pri odštevanju kjer moramo uporabiti malega prijatelja, to naredimo tako, da odštejemo vrednost 5 ter prštejemo vrednost malega prijatelja. Pri seštevanju kjer moramo uporabiti malega prijatelja, pa to naredimo tako, da prištejemo vrednost 5 ter odštejemo vrednost malega prijatelja.");
        $("#ucenjeDescriptionAdditional").text("Število 13 zapišemo tako, da na 2. palici iz desne proti levi (predstavlja desetice) k osrednji prečki premaknemo eno desetico, na palici skrajno desno (predstavlja enice) pa k osrednji prečki premaknemo tri enice.  Ker celotnega števila 7 ne moremo odšteti od števila 13 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu odštejemo 7 ali pa če številu najprej odštejemo 10 in nato prištejemo 3. To lahko ponazorimo z zapisom 13 - 7 = 13 - 10  + 3 = 6. Število 7 od števila 13 torej odštejemo tako, da od osrednje prečke najprej odmaknemo eno desetico. Zatem prištejemo število 3 tako, da uporabimo malega prijatelja. Mali prijatelj števila 3 je število 2 (5-3=2). Število 3 torej prištejemo tako, da k osrednji prečki premaknemo petico in od srednje prečke odmaknemo dve enici. Pri tem na sorobanu dobimo rezultat 6. Sedaj moramo k temu vmesnemu rezultatu prišteti še število 6. Ker celotnega števila 6 ne moremo prišteti k številu 6 v stolpcu z enicami, uporabimo velikega prijatelja. Matematično je enako, če številu prištejemo 6 ali pa če najprej številu odštejemo 4 in nato prištejemo 10. To lahko ponazorimo z zapisom 6 + 6 = 6 - 4  + 10 = 12. Število  4 od števila 6 odštejemo tako, da uporabimo malega prijatelja. Mali prijatelj števila 4 je število 1 (5-4=1). Število 4 torej odštejemo tako, da k osrednji prečki premaknemo eno enico in odmaknemo petico. Pri tem na sorobanu dobimo vmesni rezultat 2. Nato v stolpcu z deseticami k osrednji prečki premaknemo eno desetico. Pri tem na sorobanu dobimo končni rezultat 12.");
    }

    if (podmeni == '6a') {
        $("#racunUcenje").append("<p>37*5<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMnozenjeEnomestno()' >Animacija</button >");
        $("#ucenjeDescription").text("Pri sorobanu obstaja več metod za množenje. Vzemimo primer 2 * 15 = 30. Število 2 je množitelj, število 15 pa množenec. Manjše od obeh števil ponavadi določimo kot množitelja, ker si ga lažje zapomnimo, ko se moramo večkrat sklicevati nanj. Množitelja in množenca ponavadi na soroban ne zapišemo. Če pa ju želimo zapisati, potem zapišemo množitelja čisto na levo stran sorobana in z razmakom dveh ali treh stolpcev nato še množenec desno od množitelja. Produkt izračunamo in zapišemo desno od množenca. Da lahko na sorobanu števila množimo, moramo na pamet poznati poštevanko do 10. Dve enomestni števili torej pomnožimo kar s pomočjo poštevanke in ne uporabimo sorobana. Če je množenec dvomesten, potem z množiteljem najprej pomnožimo desetice.");
        $("#ucenjeDescriptionAdditional").text("Pomnožimo 3*5 in rezultat 15 zapišemo na soroban v stolpca s stoticami in deseticami. Imamo namreč množenje dvomestnega števila z enomestnim številom in rezultat bo največ tromestno število (99*9=891). Prvi zmnožek zapišemo v stolpca s stoticami in deseticami, pri čemer so stotice v tretjem stolpcu iz desne proti levi. Pri tem ta zmnožek vedno gledamo kot dvomestno število. V primeru, da bi imeli za zmnožek enomestno število (na primer 8), moramo upoštevati vodilno ničlo (torej 08). Zatem pomnožimo 7*5 in produkt 35 prištejemo na sorobanu premaknjeno za en stolpec v desno, torej v stolpcih z deseticami in enicami. 3 prištejemo v stolpcu z deseticami. 5 pa prištejemo v stolpcu z enicami. Dobimo končni rezultat 185.");
    }

    if (podmeni == '6b') {
        $("#racunUcenje").append("<p>36*54<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMnozenjeDvomestno()' >Animacija</button >");
        $("#ucenjeDescription").text("Množitelja in množenca ponavadi na soroban ne zapišemo. Če pa ju želimo zapisati, potem zapišemo množitelja čisto na levo stran sorobana in z razmakom dveh ali treh stolpcev nato še množenec desno od množitelja. Produkt izračunamo in zapišemo desno od množenca. Da lahko na sorobanu števila množimo, moramo na pamet poznati poštevanko do 10. Dve enomestni števili torej pomnožimo kar s pomočjo poštevanke in ne uporabimo sorobana. Če je množenec dvomesten, potem z množiteljem najprej pomnožimo desetice.");
        $("#ucenjeDescriptionAdditional").text("Pri produktu dvomestnega števila z dvomestnim številom za produkt pričakujemo največ štirimestno število (99*99=9.801). Zaradi tega prvi zmnožek zapišemo v četrti in tretji stolpec kar pomeni tisočice in stotice. Pri tem moramo vedno upoštevati dvomestni rezultat zmnožka oziroma dodati vodilno ničlo v primeru enomestnega rezultata. Pomnožimo 3*5 in produkt 15 zapišemo na soroban v stolpcu s tisočicami in stoticami. Zatem pomnožimo 3*4 in produkt 12 prištejemo na sorabanu premanknjeno v en stolpec desno, torej v stolpca s stoticami in deseticami. V naslednjem koraku pomnožimo 6*5 in produkt 30 prištejemo na istem mestu kot pri prejšnjem koraku, torej na sorobanu v stolpca s stoticami in deseticami. V zadnjem koraku pomnožimo 6*4 in produkt 24 prištejemo na sorobanu ponovno premanknjeno za eno mesto v desno, kar pomeni v stolpca z deseticami in enicami. Dobimo končni rezultat 1.944.");
    }

    if (podmeni == '7a') {
        $("#racunUcenje").append("<p>632 : 8 = 79</p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDeljenje()' >AnimacijaDeljenje</button >");
        $("#ucenjeDescription").text("Pri deljenje števil a : b (oz. a / b) se število a imenuje deljenec, b pa delitelj. Deljenec se na sorobanu zapiše na skrajni desni strani sorobana. Če želimo, si delitelja lahko zapišemo na skrajno levo stran sorobana. Lahko pa si ga tudi le zapomnimo in njegov zapis na sorobanu povsem izpustimo, še zlasti če gre za manjše število. Rezultat deljenja zapišemo na levo stran sorobana.");
        $("#ucenjeDescriptionAdditional").text("Na sorobanu zapišemo deljenec 632 čisto na desni strani sorobana. Ker 6 ni deljivo z 8, izračunamo, kolikokrat gre število 8 v število 32. Dobljeno vrednost 7 zapišemo na skrajno levo stran sorobana. Produkt 7*8=56 pa odštejemo od 63 in ostanek 7 vpišemo v desetice deljenca. Ker v naslednjem koraku 7 zopet ni deljivo z 8 izračuno kolikokrat gre število 8 v število 72. Rezultat 9 zapišemo v en stolpec desno glede na prejšnji rezultat. Produkt 9*8=72 odštejemo od 72 v deljencu in ostanek 0 zapišemo v desetice in enice deljenca. Dobimo torej končni rezultat 79.");

    }
}


generiranjeSorobana();
poslusajDogodkeUcenje();