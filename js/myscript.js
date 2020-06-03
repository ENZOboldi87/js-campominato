// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50
//
//
// Raccomandazione: andato avanti come sempre un pezzettino alla volta,
// diamo a variabili e funzioni nomi che riflettano il proprio ruolo e prima di
// iniziare facciamo l’analisi e scriviamo i punti importanti!

// intro
alert('Gioco del campo minato, clicca ok per iniziare');

// array
var arrayCpu = [];
var arrayUtente = [];
var numeriCasuali = generatoreArray(1,100);
var punti = 0;
var numeroTrovato = false;
var possibilita = 4;
var messaggio = '';

// computer genera 16 numeri random
while (arrayCpu.length < 16) {
  var numeriCasuali = generatoreArray(1,100);
  var doppioNumero = controlloSePresente(arrayCpu,numeriCasuali);
  if (doppioNumero == false) {
    arrayCpu.push(numeriCasuali);
  }
}
console.log(arrayCpu.sort());

// inserimento numeri numeri utenti
while (arrayUtente.length < possibilita && numeroTrovato == false) {
  // chiedo un numero all'utente
  numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
   // se il numero non e presente
  if (controlloSePresente(numUtente, arrayUtente) == false) {
    arrayUtente.push(numUtente);
    console.log("numeri inseriti" + numUtente);
    // se il numero dell'utente è presente
    if (controlloSePresente(arrayCpu, arrayUtente) == true) {
      messaggio = 'hai perso';
      numeroTrovato = true;
    } else {
      punti++;
      console.log("punti" + punti);

    }
  }
}

console.log(arrayUtente);
console.log(messaggio + punti);

// funzioni
// generatore numeri cpu
function generatoreArray(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min + 1) ) + min;
}

// controllo  numeri presenti
function controlloSePresente(array,value) {
var i = 0;
var p = false;
while (i < array.length && p == false) {
   if (array[i] == value) {
     p = true; }
  i++; }
  return p;
}
