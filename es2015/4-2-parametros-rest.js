'use strict';
/**
 * parámetros rest o agrupados
 */
function tienda(...productos) {
    console.log(productos); // ['fruta', 'sopa', 'dulces']
}

tienda('fruta', 'sopa', 'dulces');
