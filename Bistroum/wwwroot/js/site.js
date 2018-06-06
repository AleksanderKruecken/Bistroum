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

// Ponastavi kroglice na zacetno pozicijo
function reset() {
    for (var i = 1; i <= n; i++) {
        document.getElementById(10 * i + 5).setAttribute('cy', yUp);
        for (var j = 1; j <= 4; j++) {
            document.getElementById(10 * i + j).setAttribute('cy', yStart + (j - 1) * yDiff);
        }
    }
}

function generiranjeSorobana() {
    var vrstice = '';

    vrstice = vrstice + "<svg id='sorobanSVG' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' >";

    // Izris okvirja
    vrstice = vrstice + "<rect id='okvir' x='0' y='0' width='100%' height='100%' />";
    vrstice = vrstice + "<rect id='resetGumb' x='715' y='2' rx='5' ry='5' width='70' height='13' />";
    vrstice = vrstice + "<text id='resetTekst' x='720' y='13' fill='red'>Ponastavi</text>";
    vrstice = vrstice + "<line x1='0' y1='123' x2='800' y2='123' />";
    vrstice = vrstice + "<circle cx='200' cy='123' r='2' />";
    vrstice = vrstice + "<circle cx='500' cy='123' r='2' />";


    // Looping za kroglice petice (narise vse krogce v zgornji vrstici)
    for (var i = 1; i <= n; i++) {
        vrstice = vrstice + "<ellipse id='" + (i * 10 + 5) + "' cx='" + (xStart + (n - i) * xDiff) + "' cy ='" + yUp + "' rx='" + aElipse + "' ry ='" + bElipse + "' />";
        // Looping za kroglice enice (narise vse kroglice v spodnjih 4-ih vrsticah
        for (var j = 1; j <= 4; j++) {
            vrstice = vrstice + "<ellipse id='" + (i * 10 + j) + "' cx='" + (xStart + (n - i) * xDiff) + "' cy ='" + (yStart + (j - 1) * yDiff) + "' rx='" + aElipse + "' ry ='" + bElipse + "' />";
        }
    }

    vrstice = vrstice + "</svg>";
    // Napolnitev SVG elementa
    //document.getElementById("sorobanSVG").innerHTML = vrstice; // Ne dela v IE
    //$('#sorobanSVG').html(vrstice);  
    $('#DivSvg').html(vrstice); 

}



function poslusajDogodke() {
    // Vsem td elementom dodeli event listener
    var celice = document.querySelectorAll("ellipse");
    for (var i = 0; i < celice.length; i++) {
        celice[i].addEventListener("mousedown", pritisk);
    };

    // Za reset gumb
    document.getElementById("resetGumb").addEventListener("mousedown", reset);
    document.getElementById("resetTekst").addEventListener("mousedown", reset);
}





// Globalne spremenljivke
leviGumbKoda = 0;
desniGumbKoda = 2;

xDiff = 100;
yDiff = 51;

yStart = 207;
yUp = 40;
xStart = 100;

aElipse = 37;
bElipse = 25;

n = 7;


generiranjeSorobana();

poslusajDogodke();