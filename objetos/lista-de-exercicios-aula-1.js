/* 

// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:


titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console. */

/* const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: '',
    genero: '',
}


livro.titulo = 'Pense de novo';
livro.autor = 'Adam Grant';
livro.anoPublicacao = 2023;
livro.genero = 'motivação'

console.log(livro)
 */

/* 


/* 2 - 
a. Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

b. Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro
foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

c. crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

d. Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.*/


/* // a.  criando uma variável com o ano atual utilizando o método newData().getFullYear();
const anoAtual = new Date().getFullYear()

//criando o objeto livro com suas proprierdades
const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: '',
    genero: '',
}

//inserindo as informações de livro às propriedades
livro.titulo = 'Thing Again';
livro.autor = 'Adam Grant';
livro.anoPublicacao = 2008;
livro.genero = 'business';
// b. criando a propriedade de idadePublicação e calculando o tempo de publicação utilizando a variável anoAtual criada no primeiro item do exercício
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
// c. string com detalhes, chamando as variáveis obtidas no objeto livro
livro.mostrarDetalhes = '\n *** Detalhes do Livro *** \n' + 'Autor: ' +livro.autor +'\nTítulo: ' +livro.titulo + '\nAno Publicação: ' +livro.anoPublicacao +
'\nGênero: ' +livro.genero + '\nIdade da Publicação: ' +livro.idadePublicacao +' anos'

//exibindo o objeto livro
console.log(livro)
//exibindo os detalhes do livro
console.log(livro.mostrarDetalhes)

//outra maneira de criar um objeto é chamando  método "new Object()" e passando as propriedades para este objeto"
const livro2 = new Object()
livro2.titulo = 'o mundo assombrado pelos demônios'
livro2.autor = 'carl sagan'
console.log(livro2)
 */ 

/* 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
 */

/* //criando o objeto livro
const livro = new Object();

//criando as propriedades do objeto livro e as suas variáveis
livro.titulo = 'Trilogia Suja de Havana';
livro.autor = 'Pedro Juan Gutierrez';
livro.anoPublicacao = 1995;
livro.idadePublicacao = new Date().getFullYear() - livro.anoPublicacao;
livro.detalhes = '\n *** DETALHES DO LIVRO *** \n' + ' Título: ' +livro.titulo +'\n Autor: ' +livro.autor + '\n Ano Publicação: ' +livro.anoPublicacao +
'\n Idade Publicação: ' +livro.idadePublicacao + ' anos';

//usando a notação de colchetes para exibir no console os detalhes do livro
console.log(livro["detalhes"]) */

/* 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
No final do arquivo livro.js, adicione uma avaliação ao objeto.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação. */

/* const livro = new Object();
livro.titulo = 'Fortaleza Digital';
livro.autor = 'Dan Brown';
livro.anoPublicacao = 1999;
livro.genero = 'Romance';
livro.idadePublicacao = new Date().getFullYear() - livro.anoPublicacao;
livro.avaliacao = null;

const avaliacao = ['nota: ', 7 , 'avaliação:', 'livro bom']

if (livro.avaliacao == null){
    livro.avaliacao = avaliacao
    console.log(livro.avaliacao[0] +livro.avaliacao[1], '\n' +livro.avaliacao[2] + ' ' +livro.avaliacao[3])
}
else{
    console.log('O livro já possui uma avaliação: \n' +livro.avaliacao)
} */


// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
//Depois altere o gênero do livro para "Aventura".

/* //criando o objeto livro
const livro = new Object();

//atribuindo valores aos parâmetros do objeto
livro.titulo = 'Discurso do Método';
livro.autor = 'René Descartes';
livro.anoPublicacao = 1897;
livro.idadePublicacao = new Date().getFullYear() - livro.anoPublicacao
livro.detalhes = '*** Informações sobre o Livro ***' + '\nTítulo: ' +livro.titulo +'\nAutor: ' +livro.autor +'\nAno Publicação: ' +livro.anoPublicacao +'\nGênero: ' +livro.genero +
'\nTempo de Publicação: ' +livro.idadePublicacao +' anos'


//atribuindo um novo parâmetro de gênero ao objeto com o valor de "ciencias"
livro.genero = 'ciencias'
livro.detalhes = '*** Informações sobre o Livro ***' + '\nTítulo: ' +livro.titulo +'\nAutor: ' +livro.autor +'\nAno Publicação: ' +livro.anoPublicacao +'\nGênero: ' +livro.genero +
'\nTempo de Publicação: ' +livro.idadePublicacao +' anos'
//exibindo os detalhes do livro com o valor original
console.log(livro.detalhes)

//alterando o valor do parâmetro genero para "aventura"
livro.genero = 'aventura'
livro.detalhes = '*** Informações sobre o Livro ***' + '\nTítulo: ' +livro.titulo +'\nAutor: ' +livro.autor +'\nAno Publicação: ' +livro.anoPublicacao +'\nGênero: ' +livro.genero +
'\nTempo de Publicação: ' +livro.idadePublicacao +' anos'

//exibindo os detalhes do livro com o valor do parâmetro gnêneto alterado
console.log(livro.detalhes) */


// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro.
//Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

dataAtual = new Date().getFullYear()
const livro = {
    titulo: 'o universo em uma casca de noz',
    autor: 'stephen hawking',
    anoPublicacao: 1990,
    genero: 'científico',
    
    avaliacao: {
        descricao: 'livro bom',
        nota: 9.0,
    }


}
livro.idadePublicacao = dataAtual - livro.anoPublicacao
//console.log(livro)
delete livro.avaliacao

if (livro.avaliacao == null) {
    console.log('*** DETALHES DO LIVRO ***' +'\n Título: ' +livro.titulo +'\n Autor: ' +livro.autor +'\n Ano de Publicação: ' +livro.anoPublicacao +'\n Gênero: ' 
        +livro.genero +'\n Avaliação: Sem Avaliação')
    }
    else{
    console.log('*** DETALHES DO LIVRO ***' +'\n Título: ' +livro.titulo +'\n Autor: ' +livro.autor +'\n Ano de Publicação: ' +livro.anoPublicacao +'\n Gênero: ' 
    +livro.genero +'\n Avaliação: ' +'\n     Nota: ' +livro.avaliacao.nota +'\n     Comentários: ' +livro.avaliacao.descricao)
    }