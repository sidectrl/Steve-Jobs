"use strict";
/*crea un array di elementi casuali
e lo filtro ritornando solo i numeri.*/
function numberFilter(arr) {
    return arr.filter(iesim => typeof iesim === 'number');
}
console.log(numberFilter([1, 5, "ciao", "pippo", true, false, 20, "1", 10]));
