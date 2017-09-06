'use strict';
/**
 * parámetros spread o distribuidos
 */
function tienda(producto, cantidad, tipo) {
    console.log(producto, cantidad, tipo); // fruta 0 aimentos
}

let productos = ['fruta', 0, 'alimentos'];

tienda(...productos);