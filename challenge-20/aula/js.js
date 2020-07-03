(function( win, doc ){
    'use strict';
    // console.log( win === window);
    // if(win === window)
    //     console.log( ' win é igual a window ' );

    // win.alert( 'Mensagem' );
    // window.prompt( 'Mensagem?' );
    // console.log( doc.getElementsByClassName( 'my-link' ) );
    // console.log( doc.getElementsByName( 'username' ) )
    // var $inputs = doc.getElementsByTagName( 'input' ); itens sao adicionamos automaticamente
    // console.log( $inputs );
    // var $inputs = doc.querySelector( 'input' );
    // var $inputs = doc.querySelectorAll( 'input' );
    // console.log( $inputs );

    // var $inputUserName = doc.querySelector( '#username' );
    // var $inputPassword = doc.querySelector( '#password' );
    
    // $inputUserName.value = 'Fernando Daiuck';
    // $inputPassword.value = 'minhasenha'; 

    // console.log( $inputUserName.value );
    // console.log( $inputPassword.value );

    var $inputUserName = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );
    var $button = doc.querySelector( '#button' );

    $button.addEventListener( 'click', function( event ){
        event.preventDefault(); // previnir evento padrao, nesse caso o form nao é submetido
        console.log( 'click no botão' );
    }, false );

    $inputUserName.addEventListener( 'click', function(){
        win.alert( 'clicou no input' );
    }, false );

})(window, document);