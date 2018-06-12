function izberiNakljucno(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function DirektnoRacunanjeSestevanje() {

}


function prikaziRacunVaje(podmeni) {
    $("#racunVaje").empty();
    if (podmeni == '2a') {
        $("#racunVaje").append("1<br/>5<br/>1<br/>");
    }



}


generiranjeSorobana();
poslusajDogodke();