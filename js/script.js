
// ? JS LINK

console.log('JS OK');




//
/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:

- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz” al posto del numero.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

Prima di partire a scrivere codice poniamoci qualche domanda:

- Come faccio a sapere se un numero è divisibile per un altro?
- Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:

- Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
- Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
- Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore

BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, append ecc).

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
*/



// ? BASE TO DO LIST 
/*
1- Creare un ciclo che va da 1 a 100;
2- Creare una variabile da stampare in console;
3- Effettuare controlli se divisibile per 3,5,3 e 5;
4- Variare il valore della variabile a seconda dei controlli;
5- Stampare in console;
*/


//1- Creare un ciclo che va da 1 a 100;

for(let i = 1 ; i <= 100 ; i++){

    //2- Creare una variabile da stampare in console;
    let message = i;
    
    //3- Effettuare controlli se divisibile per 3,5,3 e 5;
    if ( (i % 3) === 0){
        //4- Variare il valore della variabile a seconda dei controlli;
        message = 'Fizz';
    }
    else if( (i % 5) === 0){
        //4- Variare il valore della variabile a seconda dei controlli;
        message = 'Buzz';
    }

    if ((i % 3) === 0 && (i % 5) === 0){
        message = 'FizzBuzz';
    }
    
    //5- Stampare in console;
    console.log(message);
}
