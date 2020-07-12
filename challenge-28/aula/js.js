(function(){
    'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open( 'GET', 'http://viacep.com.br/ws/01001000/json/' );
    ajax.send();

    console.log( 'Carregando...' );
    ajax.addEventListener( 'readystatechange', function(){
        if( isRequestOK() ) {
            // var data = JSON.parse( ajax.responseText );
            // console.log( 'Requisicao OK', data.cep );
            try{
                throw new Error( 'Mensagem de erro' );
            }catch(e){
                console.log(e)
            }
        }
    }, false );

    function isRequestOK(){
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();