(function( doc ){
    'use strict';

    // function afterDomContentLoaded() { // nao esperar tudo carregar, so precisa q a tag esteja na tela
    //     alert('DomContentLoaded'); 
    //     var fragment = doc.createDocumentFragment();
    //     var childP = doc.createElement('p');
    //     var textChildP = doc.createTextNode( 'texto da tag p' );
        
    //     childP.appendChild( textChildP );
    //     fragment.appendChild( childP );
    //     doc.body.appendChild( fragment );        
    // }

    // function afterWindowLoad() {
    //     alert('afterWindowLoad'); 
    // }

    // doc.addEventListener( 'DOMContentLoaded', afterDomContentLoaded, false );
    // window.addEventListener('load', afterWindowLoad, false);

    // var arr = [ 1, 2, 3, 4, 5 ];
    // var arr2 = arr.slice( 0 );;
    // console.log( arr, arr2, arr === arr2 );

    var arr = [ 1, 2, 3 ];
    console.log( [ 1, 2, 3, 4, 5 ].toString() );
    console.log( Object.prototype.toString.call( arr ) );

})( document );