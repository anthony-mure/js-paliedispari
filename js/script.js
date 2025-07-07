/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


/*chiedere all'utente di inserire una parola*/

const word = prompt("INSERISCI UNA PAROLA");
console.log(word);

/*creare una variabile con la parola inserita dall'utente invertita*/

/* divido la parola dell'utente*/

let wordSplit = word.split('');
console.log(wordSplit);

/*inverto l'ordine delle lettere*/

 wordSplit = wordSplit.reverse();
console.log(wordSplit);

/*unisco le lettere dell'ordine invertito della parola dell'utente*/

let wordReverse = wordSplit.join('');
console.log(wordReverse);

/*Creare una funzione per capire se la parola inserita è palindroma*/

function wordPalindroma(word , wordReverse){
    if(word === wordReverse){
      return "La parola è PALINDROMA!"
    }
    else{
      return "La parola NON è PALINDROMA!"
    }
}
console.log(wordPalindroma(word , wordReverse));