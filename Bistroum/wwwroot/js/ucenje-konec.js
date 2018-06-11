// ta funkcija je za časovni zamik med spreminjanjem y koordinate kroglice za prikaz simulacije premika kroglice



function animacija() {
    alert('v izdelavi');

//    $("#15").append($.parseXML("<animate attributeType='XML' attributeName='cy' from='76' to='176' dur='10s' repeatCount='indefinite' />"));
//    var element = document.getElementById("15");
//    var para = document.createElement("animate");
//    element.appendChild(para);
    $("#15").innerHTML("<animate attributeType='XML' attributeName='cy' from='76' to='176' dur='10s' repeatCount='indefinite' />");

/*
    // najprej prestavimo prvo enko
    for (var i = 1; i <= 10; i++) {
        document.getElementById(11).setAttribute('cy', yStart + (1 - 1) * yDiff - yDiff * i / 10);
        wait(100);
    }

    wait(1000);
    // sedaj prestavimo petko
    for (i = 1; i <= 10; i++) {
        document.getElementById(15).setAttribute('cy', yUp + yDiff * i / 10);
        wait(100);
    }

    wait(1000);
    // na koncu prestavimo se zadnjo enko
    for (i = 1; i <= 10; i++) {
        document.getElementById(12).setAttribute('cy', yStart + (2 - 1) * yDiff - yDiff * i / 10);
        wait(100);
    }
*/
} // animacija


generiranjeSorobana();