function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function animacija() {
//    $("#15").append($.parseXML("<animate attributeType='XML' attributeName='cy' from='76' to='176' dur='10s' repeatCount='indefinite' />"));
//    var element = document.getElementById("15");
//    var para = document.createElement("animate");
//    element.appendChild(para);
//    $("#15").innerHTML("<animate attributeType='XML' attributeName='cy' from='76' to='176' dur='10s' repeatCount='indefinite' />");

    // Pocisti soroban
    reset('ucenje');

    // najprej prestavimo prvo enko
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


function prikaziRacunAnimacije(podmeni) {
    $("#racunUcenje").empty();
    if (podmeni=='2a') {
        $("#racunUcenje").append("1<br/>5<br/>1<br/>");
        $("#racunUcenje").append("<button type='button' class='btn btn-default' onclick = 'animacija()' > Animacija</button >");
    }


    
}


generiranjeSorobana();