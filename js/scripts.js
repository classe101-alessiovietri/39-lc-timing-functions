const seconds = 2;

/* CODICE ASINCRONO */
setTimeout(
    funzioneCheVerraEseguitaDOPOUNTot,     // Definizione di una funzione
    seconds * 1000               // Dopo quanti millisecondi eseguire la funzione
);

setTimeout(
    function () {
        console.log('Ciao dal setTimeout usato con funzione anonima');
    },     // Definizione di una funzione
    seconds * 1000               // Dopo quanti millisecondi eseguire la funzione
);

setTimeout(function () {console.log('Ciao Mic');}, 4000);
/* FINE CODICE ASINCRONO */

/* CODICE SINCRONO */
// for (let index = 0; index < 10000; index++) {
//     console.log(index);    
// }

console.log('Ciao ragazzi');
/* FINE CODICE SINCRONO */

/* 
    ----------------------------------------------------------
*/

/* CODICE ASINCRONO */
let pino = setInterval(funzioneCheVerraEseguitaOGNITot, 1000);
let pinoDue = setInterval(altrafunzione, 3000);
console.log('pino', pino, typeof pino);
console.log('pinoDue', pinoDue, typeof pinoDue);
/* FINE CODICE ASINCRONO */


document.getElementById('timer-button').addEventListener('click',

    function () {
        console.log('pino', pino, typeof pino);
        if (pino != null) {
            clearInterval(pino);
            pino = null;
            document.getElementById('timer-button').innerHTML = 'START';
        }
        else {
            pino = setInterval(funzioneCheVerraEseguitaOGNITot, 1000);
            document.getElementById('timer-button').innerHTML = 'STOP';
        }
    }

);


/* 
  -----------------------------------------------------------
*/


/* FUNZIONI */
function funzioneCheVerraEseguitaDOPOUNTot() {
    console.log('Hello');
    document.querySelector('h1').innerHTML = 'Ciao Eros';
    document.querySelector('h2').classList.remove('eros');
}
 
function funzioneCheVerraEseguitaOGNITot() {
   console.log('Ciao dal setInterval');
   console.log('pino', pino, typeof pino);
}
 
function altrafunzione() {
   console.log('Ciao dal SECONDO setInterval');
   console.log('pinoDue', pinoDue, typeof pinoDue);
}