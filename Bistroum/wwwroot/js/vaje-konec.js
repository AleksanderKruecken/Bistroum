﻿// Vrne nakljucna cela stevila med vkljucno min in vkljucno max
function izberiNakljucno(min, max) {
    // Math random vrne nakljucno stevilo med 0 in 1
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function preveriRezultat(rezultat) {
    var vrednostNaSorobanu = vrednostSorobana();

    if (rezultat == vrednostNaSorobanu) {
        //alert('Pravilno');
        $("#pravilnoNepravilno").empty();
        $("#pravilnoNepravilno").append("<span>Pravilno</span>");
        $("#pravilnoNepravilno").css("color", "mediumseagreen");
        //$("#pravilnoNepravilno").attr({ "color": "green" });

    } else {
        //alert('Nepravilno');
        $("#pravilnoNepravilno").empty();
        $("#pravilnoNepravilno").append("<span>Nepravilno</span>");
        $("#pravilnoNepravilno").css("color", "red");
        //$("#pravilnoNepravilno").attr({ "color": "red" });
    }
}


function zapisStevilEnomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
/*
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
*/
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Nakljucno izbere eno enomestno stevilo
    var stevilo = izberiNakljucno(1, 9);

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Zapiši:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'zapisStevilEnomestno()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
    /*
    $("#stevilo1").append(stevilo);
    $("#gumbPreveri").attr({ "onclick": "zapisStevilEnomestno()" });
    */
}


function zapisStevilDvomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
/*
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
*/
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Nakljucno izbere eno dvomestno stevilo
    var stevilo = izberiNakljucno(10, 99);
    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Zapiši:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'zapisStevilDvomestno()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo);
    $("#gumbPreveri").attr({ "onclick": "zapisStevilDvomestno()" });
*/

}

// Racunanje brez prehoda cez 5 ali 10
function brezPrijateljaSestevanje() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Izberemo 3 nakljucna stevila
    // Lahko je najvec ena 5-ka in najvec stiri 1-ke
    // Stevilo je i + v

    // Izbira prvega stevila
    // Za enico se omejimo le na stevili 1 in 2, da naslednji dve enici nista 0 
    var v1 = 0;
    var i1 = 0;
    // Math.random vrne stevilo nakljucno med 0 in 1
    // V polovici primerov petico postavimo na 5, sicer ostane 0 (kot bi metali kovanec)
    if (Math.random() < 0.5) {
        v1 = 5;
        i1 = izberiNakljucno(0, 2);
    }
    else {
        i1 = izberiNakljucno(1, 2);
    }

    var stevilo1 = i1 + v1;

    // Izbira drugega stevila
    // Omejimo enico i1+i2<=3, da i3 ne bo 0 

    var i2 = 0;
    var v2 = 0;

    // Ce v prvem stevilu ni bilo 5-ke
    if (v1 == 0) {
        if (Math.random() < 0.5) {
            v2 = 5;
            i2 = izberiNakljucno(0, 3 - i1);
        }
        else {
            i2 = izberiNakljucno(1, 3 - i1);
        }
    }
    else {
        i2 = izberiNakljucno(1, 3 - i1);
    }

    var stevilo2 = i2 + v2;

    // Izbira tretjega stevila
    // Omejimo enico i1+i2+i3<=4, ker so lahko maksimalno 4 1-ke


    var i3 = 0;
    var v3 = 0;

    // Ce v prvem in drugem  stevilu ni bilo 5-ke
    if ((v1 == 0) && (v2 == 0)) {
        if (Math.random() < 0.5) {
            v3 = 5;
            i3 = izberiNakljucno(0, 4 - i1 - i2);
        }
        else {
            i3 = izberiNakljucno(1, 4 - i1 - i2);
        }
    }
    else { 
        i3 = izberiNakljucno(1, 4 - i1 - i2);
    }

    var stevilo3 = i3 + v3;
    var sestevek = stevilo1 + stevilo2 + stevilo3;
    
    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'brezPrijateljaSestevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "brezPrijateljaSestevanje()" });
*/
    // Mozno tudi z jquery click
}


function brezPrijateljaOdstevanje() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty(); 

    // Pocisti soroban
    reset('vaje');

    // Izberemo 3 nakljucna stevila
    // Stevilo je i + v

    // Izbira prvega stevila
    // Za enico se omejimo le na stevili 2 do 4, da imamo dve števili, ki ju lahko odštejemo (npr. dve enki) 
    var i1 = 0;
    // Math.random vrne stevilo nakljucno med 0 in 1
    // V polovici primerov petico postavimo na 5, sicer ostane 0 (kot bi metali kovanec)
    var v1 = 0;
    if (Math.random() < 0.5) {
        v1 = 5;
        i1 = izberiNakljucno(1, 4);
    }
    else {
        i1 = izberiNakljucno(2, 4);
    }
     
    var stevilo1 = i1 + v1;

    // Izbira drugega stevila, ki se vedno odsteva
    // Za enico se omejimo na stevila 1 do i1-1, da lahko odštejemo vsaj še eno enko
    // razen v primeru, ko izberemo 5, potem so lahko enice od 0 do i1-1
    var i2 = 0;
    var v2 = 0;
    // Ce smo v prvem stevilu imeli petko lahko v drugem stevilu spet dobimo petko, da jo odstejemo
    if (v1 == 5) {
        if (Math.random() < 0.5) {
            v2 = 5;
            i2 = izberiNakljucno(0, i1 - 1);
        }
        else {
            i2 = izberiNakljucno(1, i1);
        }
    }
    else {
        i2 = izberiNakljucno(1, i1-1);
    }

    var stevilo2 = - (i2 + v2);

    // Izbira tretjega stevila, ki se vedno odsteva
    // Za enico se omejimo le na stevili 1 do i1-i2, da lahko odštejemo maksimalno vse enice
    // v primerum, ko lahko izberemo 5, pustimo enice tudi od 0 naprej
    var i3 = 0;
    var v3 = 0;

    // Pogleda ali je v prvem stevilu bila petka in v drugem stevilu ni bila petka. V taksnem primeru lahko odstejemo petko
    if ((v1 - v2) == 5) {
        // za odstevanje nimamo na razpolago enic, zato odstejemo 5 
        if (i1 == i2) {
            v3 = 5;
            i3 = 0;
        }
        else {
            if (Math.random() < 0.5) {
                v3 = 5;
            } 
            i3 = izberiNakljucno(1, i1 - i2);
        }
    }
    else {
        i3 = izberiNakljucno(1, i1 - i2);
    }

    var stevilo3 = -(i3 + v3);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'brezPrijateljaOdstevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
    /*
        $("#stevilo1").append(stevilo1);
        $("#stevilo2").append(stevilo2);
        $("#stevilo3").append(stevilo3);
        $("#gumbPreveri").attr({ "onclick": "brezPrijateljaOdstevanje()" });
    */
}


function brezPrijateljaMesano() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');
    // Ce je znak1=1 bo pri drugem stevilu sestevanje, če je znak1=-1 bo odstevanje
    // Isto velja za znak2, le da gre za tretje stevilo
    var znak1 = 1;
    var znak2 = 1;


    var i1 = 0;
    var v1 = 0;
    var v2 = 0;
    var i2 = 0;
    var v3 = 0;
    var i3 = 0;

    // Mecemo kovanec ali bo najprej sestevanje ali odstevanje
    // Random je vrnil sestevanje
    if (Math.random() < 0.5) {

        // Izbira prvega stevila
        // Mecemo kovanec ali bomo imeli petko
       if (Math.random() < 0.5) {
           v1 = 5;
           i1 = izberiNakljucno(0, 3);
        }
       else {
           v1 = 0;
           i1 = izberiNakljucno(1, 4);
        }
       // Izbira drugega stevila
        if (i1 == 4) {
            v2 = 5;
            i2 = 0;
        }
        else {
           // Ce v prvem stevilu ni bilo petke, jo lahko v drugem stevilu nakljucno izberemo
            if (v1 == 0) {
                if (Math.random() < 0.5) {
                    v2 = 5;
                    i2 = izberiNakljucno(0, 4 - i1);
                }
                else {
                    v2 = 0;
                    i2 = izberiNakljucno(1, 4 - i1);
                }
            }
            else {
                v2 = 0;
                i2 = izberiNakljucno(1, 4 - i1);
            }
        }
        // Izbira tretjega stevila

        // ko je vsota prvega in drugega stevila 9, izberemo za drugo operacijo odstevanje
        if ((i1 + v1 + i2 + v2) == 9) {
            znak2 = -1;
            if (Math.random() < 0.5) {
                v3 = 5;
                i3 = izberiNakljucno(0, 4);
            }
            else {
                v3 = 0;
                i3 = izberiNakljucno(1, 4);
            }
        }
        // vsota prvega in drugega je manj kot 9, zato je lahko druga operacija karkoli
        else {
            // mecemo kocko
            //druga operacija je sestevanje
            if (Math.random() < 0.5) {
                if ((i1 + i2) == 4) {
                    v3 = 5;
                    i3 = 0;
                }
                else {
                    if ((v1 + v2) == 0) {
                        if (Math.random() < 0.5) {
                            v3 = 5;
                            i3 = izberiNakljucno(0, 4 - i1 - i2);
                        }
                        else {
                            v3 = 0;
                            i3 = izberiNakljucno(1, 4 - i1 - i2);
                        }
                    }
                    else {
                        v3 = 0;
                        i3 = izberiNakljucno(1, 4 - i1 - i2);
                    }
                }
            }
            // druga operacija je odstevanje
            else {
                znak2 = -1;
                if ((i1 + i2) == 0) {
                    v3 = 5;
                    i3 = 0;
                }
                else {
                    if (v1 + v2 == 5) {
                        if (Math.random() < 0.5) {
                            v3 = 5;
                            i3 = izberiNakljucno(0,i1 + i2);
                        }
                        else {
                            v3 = 0;
                            i3 = izberiNakljucno(1, i1 + i2);
                        }
                    }
                    else {
                        v3 = 0;
                        i3 = izberiNakljucno(1, i1 + i2);
                    }
                }
            }
        }
    }
     // prva operacija je odstevanje
    else {

        znak1 = -1;
        // Izbira prvega stevila
        // Mecemo kovanec ali bomo imeli petko
        if (Math.random() < 0.5) {
            v1 = 5;
            i1 = izberiNakljucno(0, 4);
        }
        else {
             v1 = 0;
             i1 = izberiNakljucno(1, 4);
         }
         // Izbira drugega stevila
        if (i1 == 0) {
            v2 = 5;
            i2 = 0;
        }
        else {
             // Ce je bila v prvem stevilu petka, jo lahko v drugem stevilu nakljucno izberemo
             if (v1 == 5) {
                 if (Math.random() < 0.5) {
                     v2 = 5;
                     i2 = izberiNakljucno(0, i1);
                 }
                 else {
                     v2 = 0;
                     i2 = izberiNakljucno(1, i1);
                 }
             }
             else {
                 v2 = 0;
                 i2 = izberiNakljucno(1, i1);
            }
        }

         // Izbira tretjega stevila

         // ko je razlika prvega in drugega stevila 0, izberemo za drugo operacijo sestevanje
         if ((i1 + v1 - i2 - v2) == 0) {
             if (Math.random() < 0.5) {
                 v3 = 5;
                 i3 = izberiNakljucno(0, 4);
             }
             else {
                 v3 = 0;
                 i3 = izberiNakljucno(1, 4);
             }
         }
         // razlika prvega in drugega je več kot 0, zato je lahko druga operacija karkoli
         else {
             // mecemo kocko
             //druga operacija je sestevanje
             if (Math.random() < 0.5) {
                 if ((i1 - i2) == 4) {
                     v3 = 5;
                     i3 = 0;
                 }
                 else {
                     if ((v1 - v2) == 0) {
                         if (Math.random() < 0.5) {
                             v3 = 5;
                             i3 = izberiNakljucno(0, 4 - (i1 - i2));
                         }
                         else {
                             v3 = 0;
                             i3 = izberiNakljucno(1, 4 - (i1 - i2));
                         }
                     }
                     else {
                         v3 = 0;
                         i3 = izberiNakljucno(1, 4 - (i1 - i2));
                     }
                 }
             }
             // druga operacija je odstevanje
             else {
                 znak2 = -1;
                 if (i1 == i2) {
                     v3 = 5;
                     i3 = 0;
                 }
                 else {
                     if ((v1 - v2) == 5) {
                        if (Math.random() < 0.5) {
                            v3 = 5;
                            i3 = izberiNakljucno(0, i1 - i2);
                        }
                        else {
                            v3 = 0;
                            i3 = izberiNakljucno(1, i1 - i2);
                        }
                     }
                     else {
                        v3 = 0;
                         i3 = izberiNakljucno(1, i1 - i2);
                     }
                 }
             }
         }
    }

    var stevilo1 = i1 + v1;
    var stevilo2 = znak1 * (i2 + v2);
    var stevilo3 = znak2 * (i3 + v3);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'brezPrijateljaMesano()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "brezPrijateljaMesano()" });
*/
}


function maliPrijateljSestevanje() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

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
        i3 = izberiNakljucno(1, 9 - i1 - i2);
    }
    // zaradi prehoda cez 5 mora biti tretja petka vedno 0
    var v3 = 0;
       
    var stevilo3 = i3 + v3;
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'maliPrijateljSestevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();

/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "maliPrijateljSestevanje()" });
*/
}


function maliPrijateljOdstevanje() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

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
        i3 = izberiNakljucno(1, stevilo1 + stevilo2);
    }
    // zaradi prehoda cez 5 mora biti tretja petka vedno 0
    var v3 = 0;

    var stevilo3 = - (i3 + v3);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'maliPrijateljOdstevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "maliPrijateljOdstevanje()" });
*/
}


function maliPrijateljMesano() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    var i1 = 0;
    var v1 = 0;
    var i2 = 0;
    var v2 = 0;
    var i3 = 0;
    var v3 = 0;
    var stevilo1 = 0;
    var stevilo2 = 0;
    var stevilo3 = 0;

    // Prva operacija bo sestevanje in nato odstevanje, obakrat z malim prijateljem
    if (Math.random() < 0.5) {
        // Nakljucno izberemo enice prvega stevila
        i1 = izberiNakljucno(1, 4);
        // zaradi sestevanja in prehoda cez 5, mora biti prva 5-ka 0
        v1 = 0;
        stevilo1 = i1 + v1;
        // Drugo stevilo mora biti taksno, da je prehod preko 5 
        i2 = izberiNakljucno(5 - i1, 4);
        v2 = 0;
        stevilo2 = i2 + v2;
        // Tretje stevilo mora biti taksno, da je pri odstevanju prehod preko 5 
        i3 = izberiNakljucno(i1 + i2 - 4, 4);
        v3 = 0;
        stevilo3 = - (i3 + v3);
    }
    // Random je vrnil odstevanje in zato imamo najprej odstevanje in nato sestevanje z malim prijateljem
    else {
        // Enice so lahko najvec 3, da lahko odstevamo z malim prijateljem
        // Ne smemo imeti stevila 9
        i1 = izberiNakljucno(0, 3);
        // Da lahko ze takoj odstejemo, moramo imeti v prvem stevilu izbrano 5-ko
        v1 = 5;
        stevilo1 = i1 + v1;
        // Drugo stevilo mora biti taksno, da je pri odstevanju prehod preko 5 
        i2 = izberiNakljucno(stevilo1 - 4, 4);
        v2 = 0;
        stevilo2 = -(i2 + v2);
        // Tretje stevilo mora biti taksno, da je pri sestevanju prehod preko 5 
        i3 = izberiNakljucno(5 - (stevilo1 + stevilo2), 4);
        v3 = 0;
        stevilo3 = i3 + v3;
    }

    var sestevek = stevilo1 + stevilo2 + stevilo3;
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'maliPrijateljMesano()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
    // Vstavi izracun v div
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "maliPrijateljMesano()" });
*/
}


function velikiPrijateljSestevanje() {
    // Uporabnik mora sesteti 3 stevila
    // V obeh izracunih mora narediti velikega prijatelja, razen ce je ze v prvem racunu dobil rezultat 10

    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Izbira prvega stevila (lahko je od 1 od 9)
    var i1 = 0;
    var v1 = 0;
    if (Math.random() < 0.5) {
        v1 = 5;
        i1 = izberiNakljucno(0, 4);
    }
    else {
        i1 = izberiNakljucno(1, 4);
    }

    var stevilo1 = i1 + v1;

    // Izbira drugega stevila
    var velikPrijatelj = 0;

    if (i1 == 0) {
        velikPrijatelj = 5;
    }
    else {
        velikPrijatelj = izberiNakljucno(1, i1);
        if (v1 == 5) {
            // Random ali bomo odšteli tudi petice
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }
    }
    // Tukaj uporabniku povemo katero stevilo naj pristeje, da bo moral premakniti se desetico
    // Ce je spodaj ena enica lahko pristeje le 10-1=9
    // Ce sta spodaj dve enici lahko pristeje 10-2=8 ali 10-1=9
    var stevilo2 = 10 - velikPrijatelj;

    // Izbira tretjega stevila
    // Ce smo izbrali taksno drugo stevilo, da je vsota tocno 10
    // potem pri drugem sestavanju ne moremo vec imeti velikega prijatelja (ker nimamo na razpolago enic)
    // Zato samo nakljucno izberemo poljubno stevilo
    var stevilo3;
    if (stevilo1 + stevilo2 == 10) {
        stevilo3 = izberiNakljucno(1, 9);
    }
    else {
        // Lahko izberemo se tretje stevilo tako, da bomo imeli prehod z velikim prijateljem
        // Najprej izracunamo, kaksnega prijatelja sploh lahko odstejemo brez dodatnih prehodov    
        var enke = (stevilo1 + stevilo2) % 5;
        velikPrijatelj = izberiNakljucno(0, enke);
        // Pogleda ali je zgoraj ostala se kaksna petka
        if (((stevilo1 + stevilo2) % 10) >= 5) {
            // Random ali bomo odšteli tudi petice
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
            // Če smo slučajno izbrali 0 in smo imeli na razpolago 5, izberemo 5
            if (velikPrijatelj == 0) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }

        if (velikPrijatelj == 0) {
            // Ga popravimo, da izbere vsaj 1, da ne bi stevilo3 bilo 10
            velikPrijatelj = izberiNakljucno(1, enke);
        }   
        stevilo3 = 10 - velikPrijatelj;
    }

    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'velikiPrijateljSestevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "velikiPrijateljSestevanje()" });
*/
}


function velikiPrijateljOdstevanje() {
    // Uporabniku da dva izracuna in v obeh odstevanje velikega prijatelja, razen če v rezultatu prvega izracuna pride 19
    // Pocisti vsebino diva za racun

    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Izbira prvega stevila
    // Izberemo taksno prvo stevilo, da bomo lahko dvakrat odsteli z velikim prijateljem
    var stevilo1 = izberiNakljucno(20, 28);

    // Izbira drugega stevila
    // Tukaj uporabniku povemo katero stevilo naj odsteje, da bo moral premakniti se desetico
    // Pogleda koliko enic imamo spodaj
    var enke = stevilo1 % 5;
    // Pogledamo koliko enic lahko se maksimalno pristejemo glede na izbrano stevil
    var velikPrijatelj = izberiNakljucno(0, 4 - enke);

    // Ce se nimamo vrednosti 5, jo lahko dodamo ali pa ne
    if ((stevilo1 % 10) < 5) {
        if (Math.random() < 0.5) {
            velikPrijatelj = velikPrijatelj + 5;
        }
    }
    // Ce smo slucajno izbrali 0 za prijatelja, pogledamo ali lahko izberemo vsaj 1 ali vsaj 5
    if (velikPrijatelj == 0) {
        // Ce imamo proste 5-ke, lahko dodamo 5-ko
        if ((stevilo1 % 10) < 5) {
            velikPrijatelj = 5;
        }
        // Ce nimamo proste 5-ke, jo lahko dodamo zaradi izbora zacetnega stevila
        else {
            velikPrijatelj = izberiNakljucno(1, 4 - enke);
        }
    }
    var stevilo2 = - (10 - velikPrijatelj);

    // Izbira tretjega stevila
    var stevilo3;
    // Ce smo izbrali taksno drugo stevilo, da je razlika 19, potem izberemo poljubno stevilo in ga odstejemo brez vseh prehodov
    if (stevilo1 + stevilo2 == 19) {
        stevilo3 = - izberiNakljucno(1, 9);
    }
    else {
        // Lahko izberemo se tretje stevilo tako, da ga lahko odstejemo z velikim prijateljem
        // Najprej izracunamo, kaksnega prijatelja sploh lahko pristejemo brez dodatnih prehodov    
        enke = (stevilo1 + stevilo2) % 5;
        velikPrijatelj = izberiNakljucno(0, 4 - enke);
        if (((stevilo1 + stevilo2) % 10) < 5) {
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }
        // Ce smo slucajno izbrali 0 za prijatelja, pogledamo ali lahko izberemo vsaj 1 ali vsaj 5
        if (velikPrijatelj == 0) {
            // Ce imamo proste 5-ke, lahko dodamo 5-ko
            if (((stevilo1 + stevilo2) % 10) < 5) {
                velikPrijatelj = 5;
            }
            // Ce nimamo proste 5-ke, je lahko dodamo, ker sigurno nimamo vmesnega rezultata 19
            else {
                velikPrijatelj = izberiNakljucno(1, 4 - enke);
            }
        }
        stevilo3 = - (10 - velikPrijatelj);
    }

    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'velikiPrijateljOdstevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "velikiPrijateljOdstevanje()" });
*/
}


function velikiPrijateljMesano() {
    // Naredita se dve operaciji. V random se izbere ali bo najprej sestevanje ali odstevanje
    // Ce je prva operacija sestevanje, bo druga odstevanje (in obratno)

    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    var stevilo1;
    var stevilo2;
    var stevilo3;
    var enke;
    var velikPrijatelj;
    
    // Random je vrnil najprej sestevanje z velikim prijateljem in zatem odstevanje z velikim prijateljem
    if (Math.random() < 0.5) {

        // Izbira prvega stevila
        stevilo1 = izberiNakljucno(1, 9);

        // Izbira drugega stevila
        // Drugo stevilo mora biti taksno, da lahko od prvega odstejemo njegovega velikega prijatelja
        enke = stevilo1 % 5;
        velikPrijatelj = izberiNakljucno(0, enke);
        if ((stevilo1 % 10) >= 5) {
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }

        // Ce smo slucajno nakljucno izbrali 0, ga popravimo
        if (velikPrijatelj == 0) {
            if ((stevilo1 % 10) >= 5) {
                velikPrijatelj = 5;
            }
            else {
                velikPrijatelj = izberiNakljucno(1, enke);
            }
        }    

        stevilo2 = 10 - velikPrijatelj;

        // Izbira tretjega stevila
        // Druga operacija je odstevanje z velikim prijateljem
        // Izracunamo, kaksnega prijatelja lahko sedaj pristejemo brez prehoda
        enke = (stevilo1 + stevilo2) % 5;
        velikPrijatelj = izberiNakljucno(0, 4 - enke);
        if (((stevilo1 + stevilo2) % 10) < 5) {
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }
        // Ce smo slucajno izbrali 0 za prijatelja, pogledamo ali lahko izberemo vsaj 1 ali vsaj 5
        if (velikPrijatelj == 0) {
            // Ce imamo proste 5-ke, lahko dodamo 5-ko
            if (((stevilo1 + stevilo2) % 10) < 5) {
                velikPrijatelj = 5;
            }
            // Ce nimamo proste 5-ke, je lahko dodamo, ker sigurno nimamo vmesnega rezultata 19
            else {
                velikPrijatelj = izberiNakljucno(1, 4 - enke);
            }
        }
        stevilo3 = - (10 - velikPrijatelj);
    }
    // Random je vrnil najprej odstevanje z velikim prijateljem in zatem sestevanje z velikim prijateljem
    else {
        // Izbira prvega stevila
        // Izberemo prvo stevilo tako, da lahko od njega odstejemo stevilo z velikim prijateljem
        stevilo1 = izberiNakljucno(10, 18);

        // Izbira drugega stevila
        velikPrijatelj = 0;
        enke = stevilo1 % 5;
        // Izberemo lahko samo do stirih enk
        velikPrijatelj = izberiNakljucno(0, 4 - enke);

        // Ce se nimamo vrednosti 5, jo lahko dodamo
        if ((stevilo1 % 10) < 5) {
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }

        // Ce smo slucajno izbrali 0 za prijatelja, pogledamo ali lahko izberemo vsaj 1 ali vsaj 5
        if (velikPrijatelj == 0) {
            // Ce imamo proste 5-ke, lahko dodamo 5-ko
            if ((stevilo1 % 10) < 5) {
                velikPrijatelj = 5;
            }
            // Ce nimamo proste 5-ke, jo lahko dodamo zaradi izbora zacetnega stevila
            else {
                velikPrijatelj = izberiNakljucno(1, 4 - enke);
            }
        }

        stevilo2 = - (10 - velikPrijatelj);


        // Izbira tretjega stevila
        // Druga operacija je sestevanje z velikim prijateljem
        // Izracunati moramo, kaksnega velikega prijatelja lahko odstejemo od trenutnega rezultata
        enke = (stevilo1 + stevilo2) % 5;
        velikPrijatelj = izberiNakljucno(0, enke);
        if (((stevilo1 + stevilo2) % 10) >= 5) {
            if (Math.random() < 0.5) {
                velikPrijatelj = velikPrijatelj + 5;
            }
        }
        // Ce smo slucajno izbrali 0 za prijatelja, ga popravimo
        if (velikPrijatelj == 0) {
            if (((stevilo1 + stevilo2) % 10) >= 5) {
                velikPrijatelj = 5;
            }
            else {
                velikPrijatelj = izberiNakljucno(1, enke);
            }
        }
        stevilo3 = 10 - velikPrijatelj;
    }

    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'velikiPrijateljMesano()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "velikiPrijateljMesano()" });
*/
}


function obaPrijateljaSestevanje() {
    // Uporabniku prikaze 3 stevila

    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Glede na to, da je za kombinacijo precej manj moznosti, tukaj dolocim samo glede na mozen nabor
    // Pri sestevanju so mozni samo spodnji primeri za kombinacijo obeh prijateljev:
    //  5 + {6, 7, 8, 9}
    //  6 + {6, 7, 8}
    //  7 + {6, 7}
    //  8 + {6}

    var stevilo1 = izberiNakljucno(5, 8);
    var stevilo2 = 0;
    if (stevilo1 == 5) {
        stevilo2 = izberiNakljucno(6, 9);
    }
    else if (stevilo1 == 6) {
        stevilo2 = izberiNakljucno(6, 8);
    }
    else if (stevilo1 == 7) {
        stevilo2 = izberiNakljucno(6, 7);
    }
    else {
        stevilo2 = 6;
    }

    // Ker ne moremo imeti dveh zaporednih sestevanj s kombinacijo obeh prijateljev (smo ze prenesli vrednost v desetice),
    // tretje stevilo izberemo nakljucno
    var stevilo3 = izberiNakljucno(1, 9);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'obaPrijateljaSestevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "obaPrijateljaSestevanje()" });
*/
}


function obaPrijateljaOdstevanje() {

    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Glede na to, da je za kombinacijo precej manj moznosti, tukaj dolocim samo glede na mozen nabor
    // Pri odstevanju so mozni samo spodnji primeri za kombinacijo obeh prijateljev (velja tudi za stevila nad 20,30...):
    //  11 - {6}
    //  12 - {6, 7}
    //  13 - {6, 7, 8}
    //  14 - {6, 7, 8, 9}

    // Odločil za 'random' funkcijo 21 - 24 da pri tretji številki ne rabim paziti na negativen rezultat
    // Ker če bi vzel pri prvi še možnost 11 - 14 bi morali pri tretji številki dodatno paziti
    // Poleg tega lahko pri stevilkah nad 20 dvakrat naredimo naključno odštevanje desetic
    var stevilo1 = izberiNakljucno(21, 24);
    var stevilo2 = 0;

    if ((stevilo1 % 10) == 4) {
        stevilo2 = - izberiNakljucno(6, 9);
    }
    else if ((stevilo1 % 10) == 3) {
        stevilo2 = - izberiNakljucno(6, 8);
    }
    else if ((stevilo1 % 10) == 2) {
        stevilo2 = - izberiNakljucno(6, 7);
    }
    else {
        stevilo2 = - 6;
    }

    // Ker ne moremo imeti dveh zaporednih odstevanj s kombinacijo obeh prijateljev, tretje stevilo izberemo nakljucno
    // Prav tako ne rabimo paziti na negativen rezultat, ker je prva številka dovolj velika
    var stevilo3 = - izberiNakljucno(1, 9);
    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'obaPrijateljaOdstevanje()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "obaPrijateljaOdstevanje()" });
*/
}


function obaPrijateljaMesano() {
    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#stevilo3").empty();
    $("#stevilo3").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    // Enako kot pri posameznem sestvanju in odstevanju, tudi tukaj upostevamo samo nabor moznih stevil
    // Pri sestevanju so mozni samo spodnji primeri za kombinacijo obeh prijateljev:
    //  5 + {6, 7, 8, 9}
    //  6 + {6, 7, 8}
    //  7 + {6, 7}
    //  8 + {6}
    // Pri odstevanju so mozni samo spodnji primeri za kombinacijo obeh prijateljev (velja tudi za stevila nad 20,30...):
    //  11 - {6}
    //  12 - {6, 7}
    //  13 - {6, 7, 8}
    //  14 - {6, 7, 8, 9}
    var stevilo1 = 0;
    var stevilo2 = 0;
    var stevilo3 = 0;


    // Prva operacija bo sestevanje in nato odstevanje, obakrat z obema prijateljema
    if (Math.random() < 0.5) {
        stevilo1 = izberiNakljucno(5, 8);
        stevilo2 = 0;

        if (stevilo1 == 5) {
            stevilo2 = izberiNakljucno(6, 9);
        }
        else if (stevilo1 == 6) {
            stevilo2 = izberiNakljucno(6, 8);
        }
        else if (stevilo1 == 7) {
            stevilo2 = izberiNakljucno(6, 7);
        }
        else {
            stevilo2 = 6;
        }

        // Druga operacija je odstevanje
        if (((stevilo1 + stevilo2) % 10) == 4) {
            stevilo3 = - izberiNakljucno(6, 9);
        }
        else if (((stevilo1 + stevilo2) % 10) == 3) {
            stevilo3 = - izberiNakljucno(6, 8);
        }
        else if (((stevilo1 + stevilo2) % 10) == 2) {
            stevilo3 = - izberiNakljucno(6, 7);
        }
        else {
            stevilo3 = - 6;
        }
    }
    else {
        // Prva operacija je odstevanje in nato sestevanje
        stevilo1 = izberiNakljucno(11, 14);
        stevilo2 = 0;

        if ((stevilo1 % 10) == 4) {
            stevilo2 = - izberiNakljucno(6, 9);
        }
        else if ((stevilo1 % 10) == 3) {
            stevilo2 = - izberiNakljucno(6, 8);
        }
        else if ((stevilo1 % 10) == 2) {
            stevilo2 = - izberiNakljucno(6, 7);
        }
        else {
            stevilo2 = - 6;
        }

        if ((stevilo1 + stevilo2) == 5) {
            stevilo3 = izberiNakljucno(6, 9);
        }
        else if ((stevilo1 + stevilo2) == 6) {
            stevilo3 = izberiNakljucno(6, 8);
        }
        else if ((stevilo1 + stevilo2) == 7) {
            stevilo3 = izberiNakljucno(6, 7);
        }
        else {
            stevilo3 = 6;
        }
    }

    var sestevek = stevilo1 + stevilo2 + stevilo3;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<div id='stevilo1'>" + stevilo1 + "</div>");
    $("#racunVaje").append("<div id='stevilo2'>" + stevilo2 + "</div>");
    $("#racunVaje").append("<div id='stevilo3'>" + stevilo3 + "</div>");
    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'obaPrijateljaMesano()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#stevilo1").append(stevilo1);
    $("#stevilo2").append(stevilo2);
    $("#stevilo3").append(stevilo3);
    $("#gumbPreveri").attr({ "onclick": "obaPrijateljaMesano()" });
*/
}


function mnozenjeEnomestno() {

    vmesniRezultat1Pravilno = false;
    vmesniRezultat2Pravilno = false;

    // Pocisti vsebino diva za racun
     $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    var stevilo1 = izberiNakljucno(10, 99);
    var stevilo2 = izberiNakljucno(2, 9);

    var zmnozek = stevilo1 * stevilo2;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<span id='stevilo1'>" + stevilo1 + "</span><text> * </text>");
    $("#racunVaje").append("<span id='stevilo2'>" + stevilo2 + "</span>");

    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'mnozenjeEnomestno()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#racunVaje").append(stevilo1 + " * " + stevilo2 + "<br/>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + zmnozek + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
*/
}


function mnozenjeDvomestno() {
    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    var stevilo1 = izberiNakljucno(10, 99);
    var stevilo2 = izberiNakljucno(10, 99);

    var zmnozek = stevilo1 * stevilo2;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<span id='stevilo1'>" + stevilo1 + "</span><text> * </text>");
    $("#racunVaje").append("<span id='stevilo2'>" + stevilo2 + "</span>");

    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'mnozenjeDvomestno()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    $("#napisVrednostSorobana").show();
/*
    $("#racunVaje").append(stevilo1 + " * " + stevilo2 + "<br/>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + zmnozek + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
*/
}


function deljenjeEnomestno() {
    // Za izračun generira 2 ali 3 mestno število, ki ga je potrebno deliti z 1 mestnim številom

    // Pocisti vsebino diva za racun
    $("#racunVaje").empty();
    $("#stevilo1").empty();
    $("#stevilo1").css("color", "black");
    $("#stevilo2").empty();
    $("#stevilo2").css("color", "black");
    $("#pravilnoNepravilno").empty();

    // Pocisti soroban
    reset('vaje');

    //var stevilo1 = izberiNakljucno(10, 99);
    var stevilo2 = izberiNakljucno(2, 9);

    var zgornjaMeja = parseInt(999 / stevilo2);
    var stevilo1 = izberiNakljucno(10, zgornjaMeja);

    // od 20 do 891
    var zmnozek = stevilo1 * stevilo2;

    // Vstavi izracun v div
    $("#racunVaje").append("<div><b>Izračunaj:</b></div>");
    $("#racunVaje").append("<span id='stevilo1'>" + zmnozek + "</span><text> : </text>");
    $("#racunVaje").append("<span id='stevilo2'>" + stevilo2 + "</span>");

    $("#racunVaje").append("<div id='pravilnoNepravilno'></div>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'deljenjeEnomestno()'>Naslednji</button >";
    $("#racunVaje").append(racunVajeString);
    //$("#napisVrednostSorobana").show();
    $("#spanVrednostSorobana").hide();
/*
    $("#racunVaje").append(zmnozek + " : " + stevilo2 + "<br/>");
    var racunVajeString = "<button type='button' class='btn btn-default' onclick = 'preveriRezultat(" + stevilo1 * 1000 + ")' >Preveri</button >"
    $("#racunVaje").append(racunVajeString);
*/
}


generiranjeSorobana();
poslusajDogodke();