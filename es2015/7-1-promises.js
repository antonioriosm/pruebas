'use strict';
/**
 * promises
 */
let promesa = new Promise(function (resolve, reject) {
    let frutas = ['manzana', 'pera', 'uva'];
    let contador = 0;
    
    for (let element of frutas) {
        contador++;
    }
    if (contador > 2) {
        resolve("¡El ciclo terminó!");
    }
    else {
        reject(Error('Algo salió mal'));
    }
});

promesa.then(function (resultado) {
    console.log(resultado);
}, function (Error) {
    console.log(error);
});