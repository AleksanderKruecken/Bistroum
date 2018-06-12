function polozajKroglice(id) {
    // 0 pomeni zacetno pozicijo
    // 1 pomeni prestavljeno

    var y = document.getElementById(id).getAttribute('cy');

    var stevilo = 0;
    stevilo = id % 10;
    if (stevilo == 5) {
        if (y == yUp) {
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        if (y == (yStart + (stevilo - 1) * yDiff)) {
            return 0;

        }
        else {
            return 1;
        }

    }
}


function vrednostKroglice(id) {
    var stevilo = 0;
    var eksponent = 1;

    // Vraca ostanek pri deljenju. Primer 75%10 vrne 5
    stevilo = id % 10;
    // Celostevilsko deljenje. Primer: 75/10 vrne 7
    eksponent = Math.floor(id / 10); 
    
    if ((stevilo < 5) && (stevilo > 1)) {
        stevilo = 1;
    }
    
    vrednost = Math.pow(10, eksponent - 1) * stevilo;
    
    return vrednost;
}

function vrednostSorobana() {
    var vsota = 0;

    for (var i = 1; i <= n; i++) {
        vsota += vrednostKroglice(i * 10 + 5) * polozajKroglice(i * 10 + 5);
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
    var stevilo = izbraniKrogec % 10;
    var y = document.getElementById(izbraniKrogec).getAttribute('cy');
    // premikamo zgornjo kroglico
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
            for (var i = 1; i <= stevilo; i++) {  // to so vse kroglice nad njo
                document.getElementById(izbraniKrogec - (stevilo - i)).setAttribute('cy', yStart + (i - 1) * yDiff - yDiff);
            }
        }
        // kroglica je zgoraj in jo moramo prestaviti dol
        else {
            // to so vse kroglice pod njo
            for (var i = stevilo; i <= 4; i++) {
                //alert('izbrani krogec = ' + izbraniKrogec);
                //alert('izbrano stevilo = ' + stevilo);
                //alert('i = ' + i);
                //alert('vrednost ' + (izbraniKrogec  + (i - stevilo)));
                //alert('test ' + (11 + (1 - 1)));
                //var indeks = i - stevilo;
                //alert(indeks);
                // izbraniKrogec + (i - stevilo) vraca napacen rezultat ker naredi string concatenate namesto sestevanje
                // Resi s parseInt(izbranKrogec)
                document.getElementById(izbraniKrogec - (stevilo - i)).setAttribute('cy', yStart + (i - 1) * yDiff);
                //document.getElementById(11).setAttribute('cy', yStart + (i - 1) * yDiff);
                //alert('konec');
            }
        }
    }


    // Izpise id izbrane krogec
    //document.getElementById("spanIzbraniKrogec").innerHTML = izbraniKrogec;

    // Izpise vrednost izbranega krogca
    //document.getElementById("spanVrednostKroglice").innerHTML = vrednostKroglice(izbraniKrogec);

    // Izpise vrednost sorobana
    document.getElementById("spanVrednostSorobana").innerHTML = vrednostSorobana();


}

// Ponastavi kroglice na zacetno pozicijo
function reset(meni) {
    for (var i = 1; i <= n; i++) {
        document.getElementById(10 * i + 5).setAttribute('cy', yUp);
        for (var j = 1; j <= 4; j++) {
            document.getElementById(10 * i + j).setAttribute('cy', yStart + (j - 1) * yDiff);
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

    // Looping za kroglice petice (narise vse krogce v zgornji vrstici)
    for (var i = 1; i <= n; i++) {
        vrstice = vrstice + "<line class='okvir' x1='" + (xStart + (n - i) * xDiff) + "' y1='44' x2='" + (xStart + (n - i) * xDiff) + "' y2='490' />";
        vrstice = vrstice + "<ellipse id='" + (i * 10 + 5) + "' cx='" + (xStart + (n - i) * xDiff) + "' cy ='" + yUp + "' rx='" + aElipse + "' ry ='" + bElipse + "' />";
        // Looping za kroglice enice (narise vse kroglice v spodnjih 4-ih vrsticah
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




// Globalne spremenljivke
leviGumbKoda = 0;
desniGumbKoda = 2;

// Razmik med stolpci v sorobanu
xDiff = 110;
// Razmik med krogci v enem stolpcu
yDiff = 62;

// Oddaljenost zgornjih krogcev od okvirja sorobana
yUp = 76;
// Oddaljenost spodnjih krogcev od okvirja sorobana
yStart = 272;
// Oddaljenost prvega stolpca od okvirja sorobana
xStart = 80;

// Dolzina krogca v sorobanu
aElipse = 49;
// Visina krogca v sorobanu
bElipse = 31;
// Stevilo stolpcev v sorobanu
n = 5;

