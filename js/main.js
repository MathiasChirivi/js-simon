//console.log("Benvenuto!!");

numeriCasuali = document.getElementById("numeriCasuali");

let number = [];
getRandomNumber(0,100);

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