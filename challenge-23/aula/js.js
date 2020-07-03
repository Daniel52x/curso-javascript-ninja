(function(){
  'use strict';

  // function sum() {
  //   // debugger;
  //   return Array.prototype.reduce.call( arguments, function( acumulado, item ){
  //     return acumulado + (+item);
  //   }, 0);
  // }

  // console.log( sum( 1, 2, 3 ) );

  // console.time( 'calculando tempo do for' );
  // for( var i = 0; i < 10000; i++ ){
  //   console.log( 'calculando...' );
  // }
  // console.timeEnd( 'calculando tempo do for' );

  var arr = [
    { item: 'Arroz', price: 'R$ 10', weight: '1 KG' },
    { item: 'Feijão', price: 'R$ 20', weight: '2 KG' },
    { item: 'Macarrão', price: 'R$ 12', weight: '3 KG' },
    { item: 'Carne', price: 'R$ 30', weight: '4 KG' },
  ];
  console.table( arr );
})();
