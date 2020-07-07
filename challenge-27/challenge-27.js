(function( win, doc ){
    'use strict';
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    function DOM( noDom ){
        this.elements = doc.querySelectorAll(noDom);
    }

    // DOM.prototype.percorrer = function ( callBack ){
    //     return Array.prototype.forEach.call( this.elements, callBack );
    // };

    // DOM.prototype.mapear = function( callBack ) {
    //     return Array.prototype.map.call( this.elements, callBack );
    // };

    // DOM.prototype.filtrar = function( callBack ){
    //     return Array.prototype.filter.call( this.elements, callBack );
    // };

    // DOM.prototype.getType = function( element ){
    //     return Object.prototype.toString.call( element );
    // };

    // DOM.prototype.isArray = function( element ){
    //     return this.getType( element ) === '[object Array]';
    // };

    // DOM.prototype.isFunction = function( element ){
    //     return this.getType( element ) === '[object Function]';
    // };

    // DOM.prototype.isNull = function( element ){
    //     return this.getType( element ) === '[object Null]' || this.getType( element ) === '[object Undefined]' ;
    // };


    
    // $link.percorrer(function( item ){
    //     console.log( item );
    // });

    // $link.mapear( function( item ){
    //     console.log( item.className );
    // });

    // console.log( $link.filtrar( function( item, index ){
    //     return index % 2 === 0;
    // }));

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply( this.elements, arguments );
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply( this.elements, arguments );
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply( this.elements, arguments );
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply( this.elements, arguments );
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply( this.elements, arguments );
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply( this.elements, arguments );
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply( this.elements, arguments );
    };


    var $link = new DOM( '[data-js="data-link"]' );
    console.log( $link )
    // $link.forEach(function( item ){
    //     console.log( item.firstChild.nodeValue );
    // });

    // var dataJs = $link.map(function( item ){
    //     return item.getAttribute('data-js');
    // });
    // console.log( dataJs );

    // var dataJs = $link.reduce(function( acu, item, index ){
    //     return acu + ' ' + item.getAttribute('data-js') + index;
    // }, 'jaca');
    // console.log( dataJs );

})( window, document );