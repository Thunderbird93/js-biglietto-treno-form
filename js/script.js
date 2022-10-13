/*
const agePassenger = prompt ('Quanti anni hai?');
const distanceKm = prompt ('Quanti km vuole percorrere?');


let scontoGiovani = 0.2; // 17 anni o meno
let scontoAnziani = 0.4; // 66 anni o più
let kmPrice = 0.21;
let scontoTotaleA = kmPrice * distanceKm * scontoAnziani;
let scontoTotaleS = kmPrice * distanceKm * scontoGiovani;
let price = kmPrice * distanceKm;

document.getElementById(`price`).innerHTML += price.toFixed(2);
*/

// -------------------------------NEW------------------------------------------

/*  
<document.getElementById("btn1")> con questo creo il bottone in JS usando l'ID presente in html
<.addEventListener> con questo dico al bottone di ascoltare un evento
<("click")> quando si clicca sul bottone, voglio che accada qualcosa
<,function(){}> con questo gli dico "Esegui questo codice"
*/

document.getElementById("btn1").addEventListener("click", function(){
    //come per il bottone, però qui prendo il "value" del bottone (ciò che ha scritto l'utente).
    // document.getElementById("inputName").value;
    //Qui ho preso il valore senza però conservarlo da nessuna parte.
    // Aggiungo una variabile (let) e le do un nome (esempio: persona)
    let persona = document.getElementById("inputName").value;
    document.getElementById("outputName").innerHTML += persona;
})
