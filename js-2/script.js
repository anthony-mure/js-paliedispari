/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

/*L'utente sceglie pari o dispari*/

const pariDispari = prompt("SCEGLIERE E SCRIVERE PARI 0 DISPARI");
console.log(pariDispari);

/* L'utente sceglie un numero da 1 a 5 */

let usernumber = parseInt(prompt("SCEGLIERE E SCRIVERE UN NUMERO DA 1 A 5"));
console.log(usernumber);

/*Genero un numero random da 1 a 5 per il computer attraverso una funzione*/

  function getPcRandomNumber(){
    let pcRandomNumber = Math.floor(Math.random() * 5) +1;
    return pcRandomNumber;
  }

 /* sommo il numero dell'utente e quello del pc */

let pcnumber = getPcRandomNumber();
console.log(pcnumber);

let sum = usernumber + pcnumber;
console.log(sum);

/*Stabilisco se la somma dei 2 numeri è pari o dispari attraverso una funzione*/

function checkEvenOrOdd(sum){
     if(sum % 2 === 0){
        return "PARI"
     }
     else{
      return "DISPARI"
     }
}
console.log(checkEvenOrOdd(sum));

/* Dichiaro chi ha vinto confrontando la risposta dell'utente con il risultato finale (pari o dispari ottenuto dalla somma)*/

let result = checkEvenOrOdd(sum);

  if(pariDispari === result){
    console.log("HAI VINTO!!!");  
  }
  else{
    console.log( "HAI PERSO!!!");  
  }
  