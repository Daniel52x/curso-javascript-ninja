(function(){
    'use strict';

    // var $main = document.querySelector( '.main' );
    // console.log( $main.parentNode ); // pega o pai
    // console.log( $main.childNodes );
    // console.log( $main.firstChild );
    // console.log( $main.lastChild );
    // console.log( $main.nextSibling ); // pega o proximo irmao
    // console.log( $main.previousSibling ); // pega o irmao anterior
    // console.log( $main.firstChild.nodeType ); // elmentos html possuem um codigo

    // var $main = document.querySelector( '.main' );
    // console.log( $main.firstChild.nextSibling.nodeValue ); // elmentos html possuem um codigo
    // console.log( $main.nodeName ); // pega o nome, tipo o nome da tag
    // console.log( $main.childNodes );
    // console.log( $main.children ); // pega os filhos só vem os html
    // console.log( $main.firstElementChild ); // pega o primeiro filho html
    // console.log( $main.childElementCount ); // conta quantos filhos tem
    // console.log( $main.hasAttribute('class') ); // verica se tem atributo
    
    
    var $main = document.querySelector( '.main' );    
    var $mainContent = document.querySelector( '.main-content' );
    var $mainHeader = document.querySelector( '.main-header' );
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    var $mainFooter = document.querySelector( '.main-footer' );
    var $firstText = $mainContent.firstChild;
    // console.log( $main.firstElementChild.firstElementChild.hasAttributes() ); // verica se tem algum atributo
    // console.log( $mainContent.appendChild( $mainHeader ) ); // insere no final da tag
    // $mainContent.insertBefore( $mainHeader, $firstText ); // insere antes de alguma coisa, de um nó

    // var $cloneMainHeader = $mainHeader.cloneNode( true ); // clona um elemento, true pq quero o conteudo tambem 
    // $mainContent.appendChild( $cloneMainHeader );
    // console.log( document.querySelectorAll('.main-header').length );

    var $h1 = $mainHeader.firstElementChild;
    // console.log( $h1.hasChildNodes() ); // verifica se a tag tem nó
    // $mainHeader.removeChild( $h1 ); // remove o filho selecionado
    
    // $main.replaceChild( $cloneMainHeader, $mainFooter ); replace

    // var newTextNode = document.createTextNode('Opa!'); // cria um no de texto
    // $main.appendChild(newTextNode);

    // var $newP = document.createElement('p');
    // $newP.appendChild(newTextNode);
    // $main.appendChild($newP);

    // console.log( $main.id ); // pega id
    // console.log( $main.className ); // pega class
    // console.log( $main.getAttribute('data-js') ); // pega qualquer atruibuto, so passar o nome dele
    console.log( $main.setAttribute('data-teste', '12') )

})();