function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function animacijaDirektnoSestevanje() {
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

async function animacijaDirektnoOdstevanje() {
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

async function animacijaDirektnoMesano() {
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
    // natop nastavimo enice na 2
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        await sleep(100);
    }

} 



function prikaziRacunAnimacije(podmeni) {
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
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDirektnoSestevanje()' >Animacija</button >");
    }

    if (podmeni == '2b') {
        $("#racunUcenje").append("9<br/>-1<br/>-6<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDirektnoOdstevanje()' >Animacija</button >");
    }

    if (podmeni == '2c') {
        $("#racunUcenje").append("8<br/>-7<br/>6<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacijaDirektnoMesano()' >Animacija</button >");
    }

    if (podmeni == '3a') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '3b') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '3c') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '4a') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '4b') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '4c') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '5a') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '5b') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '5c') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '6a') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '6b') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }

    if (podmeni == '7a') {
        $("#racunUcenje").append("<p>V pripravi</p>");
        //$("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' >Animacija</button >");
    }
}


generiranjeSorobana();