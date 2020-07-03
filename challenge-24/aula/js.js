(function( win, doc ){
    'use strict';

    var $visor = doc.querySelector( '[data-js="visor"]' );
    var $buttonsNumbers = doc.querySelectorAll( '[data-js="button-numbers"]' );
    var $buttonOperations = doc.querySelectorAll( '[data-js="button-operation"]' );
    var $buttonCE = doc.querySelector( '[data-js="button-ce"]' );
    var $buttonEqual = doc.querySelector( '[data-js="button-equal"]' );

    Array.prototype.forEach.call( $buttonsNumbers, function( button ){
       button.addEventListener( 'click', handleClickNumber, false );
    });
    Array.prototype.forEach.call( $buttonOperations, function( button ) {
        button.addEventListener( 'click', handleClickOperation, false );
    });
    $buttonCE.addEventListener( 'click', handleClickCE, false );
    $buttonEqual.addEventListener( 'click', handleClickEqual, false );

    function handleClickNumber( event ){
        event.preventDefault();
        $visor.value += this.value;
    }

    function handleClickCE( event ) {
        event.preventDefault();
        $visor.value = 0;
    }

    function handleClickOperation( event ) {
        event.preventDefault();       
        $visor.value = removeLastItemIfItIsAnOperation( $visor.value );
        $visor.value += this.value;
    }

    function isLastItemAnOperation( number ) {
        var operations = [ '+', '-', '*', '/' ];
        var lastItem = number.split('').pop();
        return operations.some( function( operator ){
            return operator === lastItem;
        });
    }

    function removeLastItemIfItIsAnOperation( number ){
        if( isLastItemAnOperation( number ) )
            return number.slice( 0, -1 );
        return number;
    }
    

    function handleClickEqual( event ) {
        event.preventDefault();
        $visor.value = removeLastItemIfItIsAnOperation( $visor.value );
        var allValues = $visor.value.match(/\d+[+*\/-]?/g);
        $visor.value = allValues.reduce( function( acumulado, atual ){
            var fistValue = acumulado.slice(0, -1);
            var operator = acumulado.split('').pop();
            var lastValue = removeLastItemIfItIsAnOperation( atual );
            var lastOperator = isLastItemAnOperation( atual ) ? atual.split('').pop() : '';
            switch( operator ){
                case '+':
                    return ( Number(fistValue) + Number(lastValue) ) + lastOperator;
                case '-':
                    return ( Number(fistValue) - Number(lastValue) ) + lastOperator;
                case '*':
                    return ( Number(fistValue) * Number(lastValue) ) + lastOperator;
                case '/':
                    return ( Number(fistValue) / Number(lastValue) ) + lastOperator;
            }
        });
    }

    
})( window, document );