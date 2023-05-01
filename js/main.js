//console.log("Benvenuto!!");

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
    //console.log(numeriInseritiUtente);
    document.getElementById("numeriCasuali").innerHTML = `I numeri da ricordare erano :  ${number}`;

    if (numeriInseritiUtente.length == 0){
        document.getElementById("risultato").innerHTML = ("FAI PENA");
    } 
    if (numeriInseritiUtente.length == 1){
        document.getElementById("risultato").innerHTML = (`SEI SCARSO NE HAI INDOVINATO SOLO 1 ed è il : ${numeriInseritiUtente}`);
    } 
    if (numeriInseritiUtente.length == 2){
        document.getElementById("risultato").innerHTML = (`SEI MODESTAMENTE SCARSO NE HAI INDOVINATI SOLO 2 e sono : ${numeriInseritiUtente}`);
    } 
    if (numeriInseritiUtente.length == 3){
        document.getElementById("risultato").innerHTML = (`SEI UN PRINCIPIANTE NE HAI INDOVINATI SOLO 3 e sono : ${numeriInseritiUtente}`);
    } 
    if (numeriInseritiUtente.length == 4){
        document.getElementById("risultato").innerHTML = (`CI SEI QUASI NE HAI INDOVINATI 4 e sono : ${numeriInseritiUtente}`);
    } 
    if(numeriInseritiUtente.length == 5){
        document.getElementById("risultato").innerHTML = (`SEI UN GRANDE, li hai indovinati tutti : ${numeriInseritiUtente}`)
    }
    
}






