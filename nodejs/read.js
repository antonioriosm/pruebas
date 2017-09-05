'use strict';
// require core module 'file system'
const fs = require('fs');

// exports 2 modules for other modules or files to use
module.exports = {
  read : function( path, callback ) {
    // read file data synchronizely
    let data = fs.readFileSync( path );

    // execute the callback if there is one
    callback && callback( data.toString() );
  },

  print : function( data ) {
    // print out the data
    console.log( data );
  }
};