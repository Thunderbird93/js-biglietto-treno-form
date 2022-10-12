//const agePassenger = prompt ('Quanti anni hai?');
//const distanceKm = prompt ('Quanti km vuole percorrere?');

let scontoGiovani = 0.2; // 17 anni o meno
let scontoAnziani = 0.4; // 66 anni o più
let kmPrice = 0.21;
let scontoTotaleA = kmPrice * distanceKm * scontoAnziani;
let scontoTotaleS = kmPrice * distanceKm * scontoGiovani;
let price = kmPrice * distanceKm;

if (agePassenger > 65) {
    price = ((kmPrice * distanceKm) - scontoTotaleA)
} else if (agePassenger < 18) {
    price = ((kmPrice * distanceKm) - scontoTotaleS)
}



output = `
${price}
`

console.log(price)

document.getElementById(`price`).innerHTML += price.toFixed(2);