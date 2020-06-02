(function(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Daniel',
        lastname: 'Costa',
        age: 18
    };
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({
        name: 'livro1',
        pages: 15
    });
    books.push({
        name: 'livro2',
        pages: 30
    });
    books.push({
        name: 'livro3',
        pages: 45
    });
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop());

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    console.log( '\nLivros em formato string:' );
    var booksSring = [];
    console.log(JSON.stringify(books));
    for(var position in books){
        booksSring.push(JSON.stringify(books[position]));
    }

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(booksSring)
    /*
    Converta os livros novamente para objeto.
    */
    var books2 = [];
    for(var position in booksSring){
        books2.push(JSON.parse(booksSring[position]));
    }
    console.log( '\nAgora os livros são objetos novamente:' );
    console.log(books2);
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(var position in books2){
        var book = books2[position];
        for(var prop in book){
            console.log(''+ prop +': '+ book[prop] +'');
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = [
        'D',
        'A',
        'N',
        'I',
        'E',
        'L',
        ' ',
        'C',
        'O',
        'S',
        'T',
        'A'
    ];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.reverse();
    console.log(myName.join(''));

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myName.sort();
    console.log(myName.join(''));
})();