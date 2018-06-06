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


function generiranjeSorobana() {
    var vrstice = '';
    for (var i = 1; i <= n; i++) {
        vrstice = vrstice + "<ellipse id='" + (i * 10 + 5) + "' cx='" + (xStart + (n - i) * xDiff) + "' cy ='" + yUp + "' rx='" + aElipse + "' ry ='" + bElipse + "' />";
//        <ellipse id=i* 10 + 5 cx = xStart + (n - i) * xDiff cy = yUp rx = aElipse ry = bElipse />
        for (var j = 1; i <= 4; i++) {
//            <ellipse id=i* 10 + j cx = xStart + (n - i) * xDiff cy = yStart + (j - 1) * yDiff rx = aElipse ry = bElipse />
        }
    }

    // Napolnitev SVG elementa
    document.getElementById("sorobanSVG").innerHTML = vrstice;
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