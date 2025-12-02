/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
const numb1 = parseInt(window.prompt("Inserisci il primo numero"));
const numb2 = parseInt(window.prompt("Inserisci il secondo numero"));

console.log("Primo numero", numb1);
console.log("Primo numero", typeof numb1);

console.log("Secondo numero", numb2);
console.log("Secondo numero", typeof numb2);

// Con OPERATORE TERNARIO12
console.log(numb1 > numb2 ? numb1 + " è più grande di " + numb2 : numb2 + " è più grande di " + numb1);

// Con IF/ELSE
if (numb1 > numb2) {
  console.log(numb1 + " è più grande di " + numb2);
} else {
  console.log(numb2 + " è più grande di " + numb1);
} 
  */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* 
const number = parseInt(window.prompt());

// Con OPERATORE TERNARIO
console.log(number === 5 ? "Equal" : "Not equal");

// Con IF/ELSE
if (number !== 5) {
  console.log("Not equal");
} 
  */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* 
const number = parseInt(window.prompt());
const remainder = number % 5;

// Con OPERATORE TERNARIO
console.log(remainder === 0 ? "Divisibile per 5" : "Non divisibile per 5");

// Con IF/ELSE
if (remainder === 0) {
  console.log("Divisibile per 5");
} 
  */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 
const numb1 = parseInt(window.prompt("Inserisci il primo numero"));
const numb2 = parseInt(window.prompt("Inserisci il secondo numero"));
const sum = numb1 + numb2;
const difference = numb1 - numb2;

// Con OPERATORE TERNARIO
console.log(numb1 === 8 || numb2 === 8 || sum === 8 || difference === 8 ? "Verificato" : "Non verificato");

// Con IF/ELSE
if (numb1 === 8) {
  console.log("Il primo numero è uguale a 8");
} else if (numb2 === 8) {
  console.log("Il secondo numero è uguale a 8");
} else if (sum === 8) {
  console.log("La somma tra i due numeri è pari a 8");
} else if (difference === 8) {
  console.log("La differenza tra i due numeri è pari a 8");
}
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
let totalShoppingCart = 100;
const expedition = [0, 10];
let totalCheckout = totalShoppingCart + expedition;

if (totalShoppingCart >= 50) {
  totalCheckout = totalShoppingCart + expedition[0];
  console.log("Totale checkout = ", totalCheckout + " euro");
} else {
  totalCheckout = totalShoppingCart + expedition[1];
  console.log("Totale checkout = ", totalCheckout + " euro");
}
 */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* 
let totalShoppingCart = 40;
const discount = totalShoppingCart * 0.2;
const expedition = [0, 10];
let totalCheckout = totalShoppingCart - discount + expedition;

if (totalShoppingCart >= 50) {
  totalCheckout = totalShoppingCart - discount + expedition[0];
  console.log("Totale checkout = ", totalCheckout + " euro");
} else {
  totalCheckout = totalShoppingCart - discount + expedition[1];
  console.log("Totale checkout = ", totalCheckout + " euro");
}
 */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* const a = 2;
const b = 3;
const c = 1;
const aAsString = a.toString();
const bAsString = b.toString();
const cAsString = c.toString();
let constOrdered = [aAsString, bAsString, cAsString];
const numbList = constOrdered[0] + ", " + constOrdered[1] + ", " + constOrdered[2];

if (a > b && b > c) {
  constOrdered = [aAsString, bAsString, cAsString];
  console.log(numbList);
} else if (a > c && c > b) {
  constOrdered = [aAsString, cAsString, bAsString];
  console.log(numbList);
} else if (b > a && a > c) {
  constOrdered = [bAsString, aAsString, cAsString];
  console.log(numbList);
} else if (b > c && c > a) {
  constOrdered = [bAsString, cAsString, aAsString];
  console.log(numbList);
} else if (c > a && a > b) {
  constOrdered = [cAsString, aAsString, bAsString];
  console.log(numbList);
} else if (c > a && b > a) {
  constOrdered = [cAsString, bAsString, aAsString];
  console.log(numbList);
} */
// DA VERIFICARE

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let value = 1;

if (typeof value === "number") {
  console.log(value + " is a number");
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const number = parseInt(window.prompt());
const remainder = number % 2;

if (remainder === 0) {
  console.log(number + " è un numero pari");
} else {
  console.log(number + " è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
