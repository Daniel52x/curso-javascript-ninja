(function( win, doc ){
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    var $inputVisor = doc.querySelector('input[name="visor"]');
    var $buttonOperadores = doc.querySelectorAll('[data-js="operadores-calc"]');
    var $buttonLimparVisor = doc.querySelector('[data-js="limpar-visor"]');
    var $buttonCalcular = doc.querySelector('[data-js="realizar-calc"]');

    function addValueInput( ) {    
        var inputValue = $inputVisor.value;

        if( +inputValue === 0 && +this.value >= 0 )
            return $inputVisor.value = +this.value;    
        
        if(+this.value >= 0 )
            return $inputVisor.value += +this.value;  
            
        if( +inputValue === 0 )
            return        

        var verificarFinalInput = /(\D)$/;
        if( verificarFinalInput.test(inputValue) ) // se houver simbolo especial no final
            return $inputVisor.value = inputValue.replace( verificarFinalInput, this.value );
        
        return $inputVisor.value += this.value;
    }

    function limparVisor( ) {
        $inputVisor.value = 0;
    }

    $buttonOperadores.forEach( function( item ){
        item.addEventListener( 'click', addValueInput, false );
    });

    $buttonLimparVisor.addEventListener( 'click', limparVisor, false );


})( window, document )

