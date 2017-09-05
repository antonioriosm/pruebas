'use strict';
/**
 * variables de bloque
 */

function mostrarProducto() {
    let fruta = 'manzana';
    console.log('dentro de la función: ' + fruta);
}

mostrarProducto();

//console.log('fuera de la función: ' + fruta); // error: fruta is not defined
for (var i = 0; i < 10; i++) {
    console.log("Fruta: ", i);
}
