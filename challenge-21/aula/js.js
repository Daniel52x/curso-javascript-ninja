(function( win, doc ){
    'use strict';

    // sincrone
    // console.log( '1' );
    // console.log( '2' );
    // console.log( '3' );

    // console.log( '1' );
    // for( var i = 1; i <= 10; i++ ){
    //     console.log( i );
    // }
    // console.log( '11' );

    // console.log( 'inicio' );
    // document.addEventListener('click', function(){
    //     console.log( 'clicou no documento' );
    // });
    // console.log( 'fim' );

    // console.log( 'inicio' );
    // setTimeout( function(){
    //     console.log( 'executou setTimeout' );
    // }, 1000)
    // console.log( 'fim' );


    // console.log( 'inicio' );
    // setInterval( function(){
    //     console.log( 'executou setInterval' );
    // }, 1000)
    // console.log( 'fim' );

    var counter = 0;
    // function timer() {
    //     console.log( 'timer' + counter++);
    //     if( counter > 10) 
    //         return;
    //     setTimeout( timer, 1000 )
    // }
    // timer();


    // function timer(){
    //     console.log( 'timer' + counter++);
    //     if( counter > 10) 
    //         return;
    // }
    // setInterval( timer, 1000 );
    // timer();
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log( 'timer' + counter++);
        if( counter > 20) 
            return;
        temporizador = setTimeout( timer, 1000 );
    }
    timer();

    $button.addEventListener( 'click', function(){
        clearTimeout( temporizador );
    }, false);

})( window, document );