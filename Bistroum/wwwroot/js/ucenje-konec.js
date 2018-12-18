function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    }

    if (podmeni == '1b') {
        $("#racunUcenje").append("<p>82</p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDvomestnoStevilo()' >Animacija</button >");
    }

    if (podmeni=='2a') {
        $("#racunUcenje").append("1<br/>5<br/>1<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaBrezPrijateljaSestevanje()' >Animacija</button >");
    }

    if (podmeni == '2b') {
        $("#racunUcenje").append("9<br/>-1<br/>-6<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaBrezPrijateljaOdstevanje()' >Animacija</button >");
    }

    if (podmeni == '2c') {
        $("#racunUcenje").append("8<br/>-7<br/>6<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaBrezPrijateljaMesano()' >Animacija</button >");
    }

    if (podmeni == '3a') {
        $("#racunUcenje").append("4<br/>3<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMaliPrijateljSestevanje()' >Animacija</button >");
    }

    if (podmeni == '3b') {
        $("#racunUcenje").append("6<br/>-4<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMaliPrijateljOdstevanje()' >Animacija</button >");
    }

    if (podmeni == '3c') {
        $("#racunUcenje").append("7<br/>-3<br/>+2<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMaliPrijateljMesano()' >Animacija</button >");
    }

    if (podmeni == '4a') {
        $("#racunUcenje").append("<p>7<br/>+9<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaVelikiPrijateljSestevanje()' >Animacija</button >");
    }

    if (podmeni == '4b') {
        $("#racunUcenje").append("<p>11<br/>-8<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaVelikiPrijateljOdstevanje()' >Animacija</button >");
    }

    if (podmeni == '4c') {
        $("#racunUcenje").append("<p>16<br/>-7<br/>+9<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaVelikiPrijateljMesano()' >Animacija</button >");
    }

    if (podmeni == '5a') {
        $("#racunUcenje").append("<p>7<br/>+6<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaObaPrijateljaSestevanje()' >Animacija</button >");
    }

    if (podmeni == '5b') {
        $("#racunUcenje").append("<p>14<br/>-6<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaObaPrijateljaOdstevanje()' >Animacija</button >");
    }

    if (podmeni == '5c') {
        $("#racunUcenje").append("<p>13<br/>-7<br/>+6<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaObaPrijateljaMesano()' >Animacija</button >");
    }

    if (podmeni == '6a') {
        $("#racunUcenje").append("<p>37*5<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMnozenjeEnomestno()' >Animacija</button >");
    }

    if (podmeni == '6b') {
        $("#racunUcenje").append("<p>36*54<br/></p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaMnozenjeDvomestno()' >Animacija</button >");
    }

    if (podmeni == '7a') {
        $("#racunUcenje").append("<p>632 : 8 = 79</p>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDeljenje()' >AnimacijaDeljenje</button >");
    }
}


generiranjeSorobana();
poslusajDogodkeUcenje();