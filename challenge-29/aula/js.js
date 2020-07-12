(function(){
    'use strict';

    // var scope = 'global scope';
    // function checkScope(){
    //     var scope = 'local scope';
    //     function func(){ return scope };
    //     return func();
    // }

    // console.log(checkScope());

    // var counter = 0;
    
    // var increment = (function (){
    //     var counter = 0;
    //     return function(){
    //         return counter++;
    //     }
    // })();

    // function otherFunction(){
    //     counter = 150;
    // }
    // otherFunction();

    // console.log(increment());
    // console.log(increment());
    // console.log(increment());

    var $div = document.querySelector('div');
    // $div.style.width = '100px';
    // $div.style.height = '100px';
    // $div.style.backgroundColor = 'red';
    // console.log( $div.classList )
    console.log( $div.classList.contains('container') ); // verificar se existe
    $div.classList.add('blue');
    $div.classList.remove('testedsa');
})();