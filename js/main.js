//console.log("Benvenuto!!");
/*
*/
numeriCasuali = document.getElementById("numeriCasuali");
btnStart = document.getElementsByClassName("start");
numeriIndoviati = document.getElementById("NumeriIndovinati");
resulte = document.getElementById("risultato")

let number = [];
getRandomNumber(0,100);
console.log("I numeri da ricordare sono : ", `${number}` )

document.getElementById("numeriCasuali").innerHTML = number;


function getRandomNumber(min, max) {
    for (let i = 0; i < 5; i++) {
        min = parseInt(min);
        max = parseInt(max);
        let numeroCasuale = Math.floor(Math.random() * ((max + 1) - min) + min);
        if (!number.includes(numeroCasuale)) {
            number.push(numeroCasuale);
        }
        console.log(numeroCasuale);
    }   
}

//Countdown di 30 secondi e poi rimuove la stringa stampata 
 let secondi = 3;
 alert("Ora partirà un timer di 30 secondi, e devi riuscire a ricordare quanti piu numeri possibili");
 let timer = setInterval(function() { 

     if(secondi == 0) {
         alert("Il tempo è finito, ora tocca a te!");
         clearInterval(timer);
         clearBox();
     } else {
         console.log(secondi);
         secondi--;
        } 
 }, 1 * 1000);

 setTimeout(chiediNumeri, 5000);

 function clearBox(numeriCasuali){
     document.getElementById("numeriCasuali").innerHTML = "";
}

let numeriInseritiUtente = [];
function chiediNumeri(){
    for (let i = 0; i < 5; i++) {
        var chiediNumeroUt = parseInt(prompt("Inserisci uno di quei numeri appena visualizzati"));
        if(!numeriInseritiUtente.includes(chiediNumeroUt) && number.includes(chiediNumeroUt)){
            numeriInseritiUtente.push(chiediNumeroUt);
        }

    }
    console.log(numeriInseritiUtente);

    if (numeriInseritiUtente.length == 0){
        console.log("FAI PENA");
    } 
    if (numeriInseritiUtente.length == 1){
        alert("SEI SCARSO NE HAI INDOVINATO SOLO 1", `${numeriInseritiUtente}`);
    } 
    if (numeriInseritiUtente.length == 2){
        alert("SEI MODESTAMENTE SCARSO NE HAI INDOVINATI SOLO 2", `${numeriInseritiUtente}`);
    } 
    if (numeriInseritiUtente.length == 3){
        alert("SEI UN PRINCIPIANTE NE HAI INDOVINATO SOLO 3", + `${numeriInseritiUtente}`);
    } 
    if (numeriInseritiUtente.length == 4){
        alert("CI SEI QUASI NE HAI INDOVINATO 4", `${numeriInseritiUtente}`);
    } 
    if(numeriInseritiUtente.length == 5){
        alert("SEI UN GRANDE, li hai indovinati tutti", `${numeriInseritiUtente}`)
    }
    
}
/*
numeriCasuali = document.getElementById("numeriCasuali");
btnStart = document.getElementById("start");
numeriIndoviati = document.getElementById("NumeriIndovinati");
resulte = document.getElementById("risultato");

let number = [];

btnStart.addEventListener(`click`, function () {
    
    console.log("Gioco Avviato");
    getRandomNumber(0,100);
    
    document.getElementById("start").style.display = "none";
    
    console.log("I numeri da ricordare sono : ", number);
    
    document.getElementById("numeriCasuali").innerHTML = number;
    
    let secondi = 3;
    alert("Ora partirà un timer di 30 secondi, e devi riuscire a ricordare quanti piu numeri possibili");
})

function getRandomNumber(min, max) {
    for (let i = 0; i < 5; i++) {
        min = parseInt(min);
        max = parseInt(max);
        let numeroCasuale = Math.floor(Math.random() * ((max + 1) - min) + min);
        if (!number.includes(numeroCasuale)) {
            number.push(numeroCasuale);
        }
        console.log(numeroCasuale);
    }   
}
*/




