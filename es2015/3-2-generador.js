'use strict';
/**
 * generadores
 */
function *Contador() {
    let i = 0;
    while (1 < 2) {
        yield i;
        yield "Hola";
        yield "Mundo";
        i++;
    }
}

let contador = Contador();

console.log(contador.next());
console.log(contador.next());
console.log(contador.next());
console.log(contador.next());
console.log(contador.next());
console.log(contador.next());
