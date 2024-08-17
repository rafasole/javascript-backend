/*


// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays
// fornecidos, utilizando Spread Operator.


const arrayA = ['joao', 'pedro', 'augusto']
const arrayB = ['abacate', 'banana', 'manga'];
const arrayC = [800, 1, 23, 44, 12];


// forma não-elegante de resolver, permite somente uma quantidade limitada de arrays
function unificaArrays (array1, array2, array3){
    const arrayUnificado = [...array1, ...array2, ...array3]
    return console.log(arrayUnificado);
}


unificaArrays(arrayA, arrayB, arrayC)

// forma mais elegante de resolver e permite qualquer quantidade de arrays de entrada

function spreadArrays (...arrays){
    spreadArraysUnificados = [].concat(...arrays)
    return console.log(spreadArraysUnificados)
}

spreadArrays(arrayA, arrayB, arrayC)

// terceira forma mais elegante de resolver
*/




/*
// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os 
// elementos deste array utilizando o método reduce.

const arrayValores = [5, 10, 15, 20, 25];

// inicio do acumulador do reduce
let acum = 0;
//escrevendo o reduce, lembrar que o reduce é uma callbackfunction. lembrar que o resultado
//da callbackfunction já retorna na própria variável os valores que estão sendo calculados na
//função. Neste caso, o resultado da soma está retornando dentro do "somaValores"
let somaValores = arrayValores.reduce((acum, valores) => {
    return acum + valores
} , 0)
console.log(somaValores)
*/


/*  3 - Considere duas listas de cores:


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.


*/

/*


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']; 
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
//  uma forma de unir dois arrays com spread operator
const todasCores = [...coresLista1, ...coresLista2];
//outra forma de unir dois arrays com método concat
const todasCores2 = coresLista1.concat(coresLista2);

console.log(todasCores)
console.log(todasCores2)

// aplicando o Set para que agrupe somente as incidencias únicas dentro de um Set e usando.
// coloquei dentro de um array com spread operator para transformar o set em um array
const coresUnicas = [...new Set(todasCores2)];

console.log(`As cores únicas são: ${coresUnicas}`)


/*


4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

*/ 

/*

//primeira solução, usando map
const arrayNumeros = [2, 3, 4, 5, 9, 11];

arrayPares = []
arrayNumeros.map(calculaPares)

function calculaPares (numero){ (numero % 2 == 0) ? arrayPares.push(numero) : numero = false}
console.log(arrayPares)
*/

/*
let arrayPares = []
function retornaPares(arrayNumeros) {
     arrayNumeros.map(valores => (valores % 2 === 0) ? arrayPares.push(valores) : valores = false)
     return arrayPares
    } 
     
    
const listaNumeros = [2, 4, 3, 8, 12, 15, 31, 44];
const resultadoPares = retornaPares(listaNumeros)
console.log(resultadoPares)
*/ 

// Outra soluçao, usando filter

/*
const arrayNumeros = [2, 4, 6, 8, 10, 11, 13, 21];
let arrayPares = [];
arrayNumeros.filter(numeros => numeros % 2 == 0 ? arrayPares.push(numeros) : numeros = false)
console.log(arrayPares)
*/


/*


// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.


function filtroMul(arrayFiltro){
    return arrayFiltro.filter(valores => ((valores % 3 ===0) && (valores > 5)))
}
const arrayNum = [3, 6, 9, 12, 11, 15, 21, 9];
const resFiltro = filtroMul(arrayNum);
console.log(resFiltro)


*/
 
/*

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function calculaSoma (arrNum) {
    const somaArray = arrNum.reduce((prev, num) => prev + num, 0)
    return somaArray
}

const arrayDeNumeros = [2, 8, 122, 145, 13, 48, 50, 91];
const resultSoma = calculaSoma(arrayDeNumeros);
console.log(resultSoma)

*/