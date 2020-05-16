/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquerValores = [1, 'churros', 'dinheiro', 5, true];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornarArray(qualquerValores)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getValorArrayByIndice(arg, indice){
    return arg[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var qualquerValores2 = [1, null, 'dinheiro', false, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getValorArrayByIndice(qualquerValores2, 0));
console.log(getValorArrayByIndice(qualquerValores2, 1));
console.log(getValorArrayByIndice(qualquerValores2, 2));
console.log(getValorArrayByIndice(qualquerValores2, 3));
console.log(getValorArrayByIndice(qualquerValores2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
    var obj = {
        'segredoCasaAmarela': {
            quantidadePaginas: 50,
            autor: 'Aldo',
            editora: 'Churros'
        },
        'medicoEMonstro': {
            quantidadePaginas: 150,
            autor: 'Aldo2',
            editora: 'Churros2'
        },
        'quartoDespejo': {
            quantidadePaginas: 120,
            autor: 'Aldo3',
            editora: 'Churros3'
        }
    };
    return !nomeLivro ? obj : obj[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'medicoEMonstro';
var livroPesquisado = book(bookName);
console.log("O livro " + bookName + " tem " + livroPesquisado.quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + bookName + " é " + livroPesquisado.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName + " foi publicado pela editora " + livroPesquisado.editora + ".");
