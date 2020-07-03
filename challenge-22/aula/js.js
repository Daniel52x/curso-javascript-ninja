(function(){
    'use strict';

    // function myFunction( a, b, c ){
    //     return this.lastName;
    // }
    
    // console.log( myFunction.length ); // qtd paramentros
    // var arr = [ 1, 2, 3, 4 ];
    // console.log( arr.toString() ); // junta tudo com virgula

    // var obj = { prop1: 1, prop2: 2 };
    // console.log( obj.toString() );

    // console.log( myFunction.toString() ); // transcreve o codigo da funcao

    // console.log( myFunction.call() ); // .call() executa a funcao

    // function myFunction( a, b, c ){
    //     console.log( this.lastName, a, b, c );
    // }

    // var obj = { lastName: 'Daciuk' };

    // // myFunction.call( obj ); // obj é o this da cuncao
    // // myFunction.call( obj, 1, 2, 3 ); // obj é o this da cuncao

    // var arr = [ 1, 2, 3 ];

    // myFunction.apply( obj, arr ); // pareci com o call, mas os paramentros sao passados 
    //                                 // dinamicanente  
    

    // function MyFunction( name, lastName ){ 
    //     this.name = name;
    //     this.lastName = lastName;
    // }
    
    // MyFunction.prototype.fullName = function (){ // como se fosse extender, colocar mamsi coisa no objeto
    //     // tambem da pra sobreescrever
    //     return this.name +' '+ this.lastName;
    // }


    // var fernando = new MyFunction( 'Fernando', 'Daciuk');
    // console.log( fernando.fullName() );

    // function myFunction( ) {
    //     var arr = [ 1, 2, 3, 4];
    //     arr.forEach( function( item ){
    //         console.log( this );
    //     }, arguments);
        
    // }

    // // console.log( myFunction( 1, 2, 3, 4, 5 ) );
    // myFunction( 1, 2, 3, 4, 5 );

    function myFunction() {
        Array.prototype.forEach.call( arguments, function( item ){
            console.log( item );
        });
    }
    myFunction( 1, 2, 3, 4, 5, 6, 7 );

})();