

/*


// 1. Crie uma função que receba dois arrays e os concatene em um único array.


const arrayA = ['Rafael', 'Renato', 'José'];
const arrayB = ['Ana', 'Betatriz', 'Fernanda'];

function concatArrays (arrayA, arrayB){
    const arrayConcat = arrayA.concat(arrayB)
    return console.log(arrayConcat);
    
}

concatArrays(arrayA, arrayB);

//usando arrowfunction

const arrowConcat = (arrayA, arrayB) => {
    const arrayConcatArrow = arrayA.concat(arrayB);
    return console.log(arrayConcatArrow);    
}
arrowConcat(arrayA,arrayB)

*/


/*

// 2. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice
// para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.


arrayNumeros = [];

//criei o array de números à partir de uma iteração com for
for (i = 0; i < 10; i++){
    arrayNumeros[i] = arrayNumeros.push(i+1);
}
//realizando o slice na posição (3), já que o primeiro índice para o slice é inclusive, até a posição 8, para pegar na posição 7
const parteNumeros = arrayNumeros.slice(3,8)

console.log(`Array Original: ${arrayNumeros} `);
console.log(`Array com Aplicação de Slice ${parteNumeros} `);
*/ 


/*


// 3. Dado o array frutas contendo frutas que desejamos comprar na feira:


// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

//passando o array com as frutas originals e apresentando seus valores
const frutasFeira = ['Maça', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(`Lista de Feira Original: ${frutasFeira}`);
//Executando o slice os índices pedidos e apresentando seus valores
frutasFeira.splice(2,2, 'Kiwi', 'Pêssego'); //sempre lembrar que o slice corta no primeiro índice (2 nese caso - a partir do zero), os 2 índices
//subsequentes incluindo ele próprio
console.log(`Lista de Feira Ajustada com splice ${frutasFeira}`)
*/


/*


// 4. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para


// criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

//criação dos menus Princpal e de Sobremesa individualmente
const menuPrincipal = ['Arroz', 'Feijão', 'Bife Acebolado', 'Salada', 'Legumes', 'Suco Natural'];
const menuDeSobremesas = ['Sorvete Creme', 'Creme de Papaya', 'Pudim de Leite', 'Fruta do dia'];

//utilização do concat para obter o menuCompeto e apresentação do resultato
menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(`O menu do dia é ${menuCompleto} `)
*/


// 5. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores
// iniciando em 1 e aumentando em 1 a cada elemento.

/*
let matriz = []
let valor = 0
let i = 0;
let j = 0;

//definindo o contador para termos 3 linhas
for  (i; i < 3; i++) {
    arrayLinha = []; //coloca um array de linha para ser incrementado a cada passagem, é ele quem vai montar a matriz final. 3 arrays linhas, neste caso
    j = 0;           //precisa zerar o contador de colunas para que ele volte ao estado inicial a cada linha, pois os numeros das colunas se repetem a cada linha   
    for (j; j < 3; j++){  //aqui é um contador de colunas
        arrayLinha.push(valor = valor + 1)  //incremento a linha com uma variável que eu chamei de "valor" e deve ser incrementada em 1 unidade a cada volta de coluna
    }
matriz.push(arrayLinha) //incremento a matriz final com o valor que foi completado na matriz linha
}
// console.log(matriz) // exibo a matriz linhas
matriz.forEach(row => console.log(row)); //para mostrar em formato de matriz
*/

/*


// 6. Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.


console.log(`O elemento que consta na segunda linha e terceira coluna é o elemento: ${matriz[1][2]}`);

// 7. Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.


matriz[2][1] = 15;
console.log('Matriz ajustada com a substituição do elemento 15 na terceira linha e segunda coluna');
matriz.forEach(row => console.log(row));


*/