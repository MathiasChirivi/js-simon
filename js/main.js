//console.log("Benvenuto!!");

numeriCasuali = document.getElementById("numeriCasuali");

let number = [];
getRandomNumber(0,100);
console.log("I numeri da ricordare sono : ", number)

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
 alert("Ora partirà un timer di 30 secondi, e devi riuscire a ricordare quanti piu numeri possibili")
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

 function clearBox(numeriCasuali){
     document.getElementById("numeriCasuali").innerHTML = "";
}

let chiediNumeroUt = 0;
function chiediNumeri(){
    for (let i = 0; i < 5; i++) {
        chiediNumeroUt = prompt("Inserisci uno di quei numeri appena visualizzati");
    }
}

chiediNumeri();