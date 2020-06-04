// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

// intro
alert('Gioco del campo minato, clicca ok per iniziare');

// array
var punti = 0;
var numeroTrovato = false;
var rangeNumeri = 20;
var numeroBombe = 16;
var arrayBombe = generatoreArrayBombe(rangeNumeri, numeroBombe);
var tentativiMassimi = rangeNumeri - numeroBombe;
var arrayNumeriUtente = [];
// console log dei numeri che ha generato il computer
console.log(arrayBombe.sort());

// totale dei tentativi massimi
console.log("questi sono i tentativi che hai a disposizione " + tentativiMassimi);

//
while ((numeroTrovato === false) && (punti < tentativiMassimi)) {
  var numUtente = parseInt(prompt("Dimmi un numero da 1 a " + rangeNumeri));

   if (controlloSePresente(numUtente, arrayBombe)) {
    numeroTrovato = true;
  }
  else {
    arrayNumeriUtente.push(numUtente);
    punti++;
  }
  // if (isNaN(numUtente)) {
  //   alert("attenzione inserisci un numero");
  // }
  // else if (controlloSePresente(numUtente, arrayNumeriUtente)) {
  //   alert("non puoi ripetere i numeri");
  //   console.log(arrayNumeriUtente);
  //
  // }

}


// validazione

// if (isNaN(numUtente)) {
//   alert("attenzione inserisci un numero");
// }
// else if (controlloSePresente(numUtente, arrayNumeriUtente)) {
//   alert("non puoi ripetere i numeri");
//   console.log(arrayNumeriUtente);
//
// }



// messaggi da mostrare in caso di vittoria o sconfitta
if (numeroTrovato == true) {
  console.log("BOOM HAI PERSO il tuo punteggio e " + punti);
}
else {
  console.log("Sei riuscito a raggiungere L uscita il tuo punteggio e " + punti);
}




// FUNZIONI
// generatore numeri cpu - computer genera 16 numeri random
function generatoreArrayBombe(rangeNumeri, numeroBombe){
  var arrayCpu = [];
  while (arrayCpu.length < numeroBombe) {
    var numeroCasuale = Math.floor(Math.random() * (100 - 1) ) + 1;
    var doppioNumero = controlloSePresente(arrayCpu,numeroCasuale);
    if (doppioNumero === false) {
      arrayCpu.push(numeroCasuale);
    }
  }
  return arrayCpu;
}

// funzione controllo  numeri presenti
function controlloSePresente(elemento, listaArray) {
var inArray = false;
for (var i = 0; i < listaArray.length; i++) {
  if (elemento == listaArray[i]) {
    inArray = true;
  }
}
return inArray;
}
