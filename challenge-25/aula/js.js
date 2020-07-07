(function( win, doc ){    
    'use strict';

    function on( element, event, callback ){
        doc.querySelector( element )
            .addEventListener( event, callback, false );
    }

    function off( element, event, callback ){
        doc.querySelector( element )
            .removeEventListener( event, callback, false );
    }

    // on( '[data-js="input"]', 'input', function(){ toda vez que digitar
    //     console.log( this.value );
    // });

    // on( '[data-js="input"]', 'keyup', function(){ // so dispara quando solta a tecla
    //     console.log( this.value );
    // });

    // on( '[data-js="input"]', 'keydown', function(){ // quando a tecla é pressionada
    //     console.log( this.value );
    // });

    on( '[data-js="select"]', 'change', function(){
       doc.querySelector( '[data-js="input"]' ).value = this.value;
    });

    // function handleClick( event ){
    //     event.preventDefault();
    //     alert('clicou no a');
    // }

    // function handleClick2( event ){
    //     event.preventDefault();
    //     alert('novo evento de clique no a');
    // }

    // on( '[data-js="link"]', 'click', handleClick);
    // on( '[data-js="link"]', 'click', handleClick2);
    // off( '[data-js="link"]', 'click', handleClick);


    // on( '[data-js="div"]', 'click', function( event ){
    //     alert( 'clicou na div' );
    // });

    // on( '[data-js="span"]', 'click', function( event ){
    //     alert( 'clicou no span' );
    // });

})( window, document )