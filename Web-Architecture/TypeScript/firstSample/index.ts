console.log("hello world!");

let a: string | number = 2;
a = 3;
let b: "a" | 3 = "a";
b = 3;

const f = (a?: number): number => { // il punto interrogativo consente di utilizzare sia inserendo un valore sennò senza
    return 2* (a || 0);
}

const c: ("caio" | "pippo")[] = ["caio", "pippo"];

// inferenza, che è la capicità di capire il tipo
// senza esplicitarlo
// inferenza funziona con l'assegnazione