function polozajKroglice(id) {
    // 0 pomeni zacetno pozicijo
    // 1 pomeni prestavljeno

    var y = document.getElementById(id).getAttribute('cy');

    // Vraca ostanek pri deljenju. Primer 25 % 10 vrne 5
    // In tako ugotovi v kateri vrstici je
    var stevilo = id % 10;
    // Za kroglice v zgornji vrstici
    if (stevilo == 5) {
        if (y == yUp) {
            return 0;
        }
        else {
            return 1;
        }
    }
    // Za kroglice v spodnjih 4-ih vrsticah
    else {
        // Preveri ali je y koordinata enaka tisti pri generiranju sorobana
        if (y == (yStart + (stevilo - 1) * yDiff)) {
            return 0;
        }
        else {
            return 1;
        }
    }
}


function vrednostKroglice(id) {
    // Vraca ostanek pri deljenju. Primer 25%10 vrne 5
    // In tako ugotovi v kateri vrstici je
    var stevilo = id % 10;
    // Celostevilsko deljenje.
    // In tako ugotovi v katerem stolpcu je
    // Vrne desetice. Npr. 25/10 = 2
    var eksponent = Math.floor(id / 10); 

    // Pogleda ali gre za kroglice v spodnjih 4-ih vrsticah in jim da najprej vrednost 1
    if (stevilo < 5) {
        stevilo = 1;
    }

    // 1 ali 5 nato pomnozi s potenco števila 10 
    vrednost = Math.pow(10, eksponent - 1) * stevilo;
    
    return vrednost;
}


function vrednostSorobana() {
    var vsota = 0;

    // Looping za kroglice petice (v zgornji vrstici od desne proti levi)
    for (var i = 1; i <= n; i++) {
        // V oklepajih se izracuna id kroglice
        // Ce je kroglica prestavljena, se vrednost kroglice mnozi z 1, sicer se vrednost kroglice mnozi z 0
        vsota += vrednostKroglice(i * 10 + 5) * polozajKroglice(i * 10 + 5);
        // Looping za kroglice enice (vse kroglice v spodnjih 4-ih vrsticah)
        for (var j = 1; j <= 4; j++) {
            vsota += vrednostKroglice(i * 10 + j) * polozajKroglice(i * 10 + j);
        }
    }
    return vsota;
}


function pritisk(event) {
    izbraniKrogec = event.target.id;
    izbraniKrogecString = "'" + izbraniKrogec + "'";
    izbraniGumb = event.button;

    // Krogce postavi na pravo pozicijo ob pritisku na dolocen krogec 
    // Vrne ostanek pri deljenju z 10 in vrne na kateri y vrstici je uporabnik pritisnil kroglico
    // Npr. 21%10 = 1
    var stevilo = izbraniKrogec % 10;
    var y = document.getElementById(izbraniKrogec).getAttribute('cy');
    // pogledamo ali je pritisnil zgornjo kroglico in jo nato premaknemo
    if (stevilo == 5) {  
        // kroglica je zgoraj in jo moramo prestaviti dol
        if (y == yUp) {
            document.getElementById(izbraniKrogec).setAttribute('cy', yUp + yDiff);
        // kroglica je spodaj in jo moramo prestaviti gor
        } else {
            document.getElementById(izbraniKrogec).setAttribute('cy', yUp);
        }
    } else {
        // najprej preverimo ali je izbrana kroglica gor ali dol
        // kroglica je na zacetni poziciji in jo moramo prestaviti gor
        if (y == (yStart + (stevilo - 1) * yDiff)) {
            // Prestaviti moramo to kroglico in vse nad njo
            // Npr. Ce je pritisnjena 3 vrstica, se prestavijo kroglice od 1. do 3. vrstice (24-3; 24-2; 24-1; 24-0
            for (var i = 1; i <= stevilo; i++) { 
                document.getElementById(izbraniKrogec - (stevilo - i)).setAttribute('cy', yStart + (i - 1) * yDiff - yDiff);
            }
        }
        // kroglica je zgoraj in jo moramo prestaviti dol
        else {
            // to so vse kroglice pod njo
            for (var i = stevilo; i <= 4; i++) {
                document.getElementById(izbraniKrogec - (stevilo - i)).setAttribute('cy', yStart + (i - 1) * yDiff);
            }
        }
    }

    // Izpise vrednost sorobana
    document.getElementById("spanVrednostSorobana").innerHTML = vrednostSorobana();
}


// Ponastavi kroglice na zacetno pozicijo
function reset(meni) {
    // Looping za kroglice petice (v zgornji vrstici od desne proti levi)
    // x koordinate ne rabimo spreminjati. Spreminjamo le y, ki ga nastavimo isto kot pri generiranju sorobana
    for (var i = 1; i <= n; i++) {
        document.getElementById(10 * i + 5).setAttribute('cy', yUp);
        // Looping za kroglice enice (narise vse kroglice v spodnjih 4-ih vrsticah)
        for (var j = 1; j <= 4; j++) {            
            document.getElementById(i * 10 + j).setAttribute('cy', yStart + (j - 1) * yDiff);
        }
    }

    // Izpise vrednost sorobana
    if (meni=='vaje') {
        document.getElementById("spanVrednostSorobana").innerHTML = vrednostSorobana();
    }
}


// Dinamično izrise in vstavi soroban v HTML
function generiranjeSorobana() {
    var vrstice = '';

    vrstice = vrstice + "<svg id='sorobanSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500' >";

    // Izris okvirja
    vrstice = vrstice + "<line class='okvir' x1='0' y1='40' x2='600' y2='40' />";
    vrstice = vrstice + "<line class='okvir' x1='0' y1='494' x2='600' y2='494' />";
    vrstice = vrstice + "<line class='okvir' x1='6' y1='40' x2='6' y2='494' />";
    vrstice = vrstice + "<line class='okvir' x1='594' y1='40' x2='594' y2='494' />";  
    vrstice = vrstice + "<rect id='resetGumb' x='500' y='2' rx='5' ry='5' width='100' height='43' />";
    vrstice = vrstice + "<text id='resetTekst' x='507' y='28'>Ponastavi</text>";
    vrstice = vrstice + "<line id='sredinskaCrta' x1='0' y1='174' x2='600' y2='174' />";

    // Looping za kroglice petice (narise vse krogce v zgornji vrstici od desne proti levi)
    for (var i = 1; i <= n; i++) {
        vrstice = vrstice + "<line class='okvir' x1='" + (xStart + (n - i) * xDiff) + "' y1='44' x2='" + (xStart + (n - i) * xDiff) + "' y2='490' />";
        vrstice = vrstice + "<ellipse id='" + (i * 10 + 5) + "' cx='" + (xStart + (n - i) * xDiff) + "' cy ='" + yUp + "' rx='" + aElipse + "' ry ='" + bElipse + "' />";
        // Looping za kroglice enice (narise vse kroglice v spodnjih 4-ih vrsticah)
        for (var j = 1; j <= 4; j++) {
            vrstice = vrstice + "<ellipse id='" + (i * 10 + j) + "' cx='" + (xStart + (n - i) * xDiff) + "' cy ='" + (yStart + (j - 1) * yDiff) + "' rx='" + aElipse + "' ry ='" + bElipse + "' />";
        }
    }

    vrstice = vrstice + "<circle cx='300' cy='174' r='2' />";
    vrstice = vrstice + "</svg>";
    // Napolnitev SVG elementa
    //document.getElementById("sorobanSVG").innerHTML = vrstice; // Ne dela v IE
    //$('#sorobanSVG').html(vrstice);  
    $('#DivSvg').html(vrstice); 

}


function poslusajDogodke() {
    // Vsem kroglicam elementom dodeli event listener
    var celice = document.querySelectorAll("ellipse");
    for (var i = 0; i < celice.length; i++) {
        celice[i].addEventListener("mousedown", pritisk);
    };

    // Za reset gumb
    document.getElementById("resetGumb").addEventListener("mousedown", function () {
        reset('vaje');
    });
    document.getElementById("resetTekst").addEventListener("mousedown", function () {
        reset('vaje');
    });

    //document.getElementById("resetTekst").addEventListener("mousedown", reset);
}

function poslusajDogodkeUcenje() {
    // Za reset gumb
    document.getElementById("resetGumb").addEventListener("mousedown", function () {
        reset('ucenje');
    });
    document.getElementById("resetTekst").addEventListener("mousedown", function () {
        reset('ucenje');
    });

    //document.getElementById("resetTekst").addEventListener("mousedown", reset);
}


// Globalne spremenljivke
leviGumbKoda = 0;
desniGumbKoda = 2;

// Razmik med stolpci v sorobanu
xDiff = 110;
// Razmik med krogci v enem stolpcu
yDiff = 62;

// Oddaljenost zgornjih krogcev od zgornjega okvirja sorobana
yUp = 76;
// Oddaljenost spodnjih krogcev od zgornjega okvirja sorobana
yStart = 272;
// Oddaljenost prvega stolpca od levega okvirja sorobana
xStart = 80;

// Dolzina krogca v sorobanu
aElipse = 49;
// Visina krogca v sorobanu
bElipse = 31;
// Stevilo stolpcev v sorobanu
n = 5;

