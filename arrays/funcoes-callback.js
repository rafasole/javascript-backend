/*


// Mostrando que um string é um array de letras;
// Iterar sobre cada letra e transformá-la em maiúscula


const palavra = 'madeira';
//criando um array vazio que será a palavra modificada para maiúsculo

let palavraAjustada = '';

// inicio um contador zero para incrementar sobre as posições do array

let i = 0;

//loop for que irá iterar sobre cada posição do array, da posição 0 até a posição definida
//pelo cumprimento do array
// para cada valor da posição do array, aplico a conversão para maiúsculo

for (i; i < palavra.length; i++){
    palavraAjustada = palavraAjustada + palavra[i].toUpperCase()
}
console.log(palavraAjustada)


*/

/*


// Usando map para transformar os arrays de letra minúscula em letas maiúsculas


const listaNomes = ['carlos', 'amadeu', 'josefino', 'alipio', 'osvaldo'];

// o map itera sobre cada elemento do array e aplica a conversão para maiúscula, devolvendo para uma
variável de "nomes Ajustados"
const nomesAjustados = listaNomes.map(nomes => nomes.toUpperCase())

//Apresento o array atualizado com os nome ajustados
console.log(nomesAjustados)


*/


/* 

// usando map e operadores ternários, aplicar bônus de 1 ponto para cada nota da lista de notas. 
//caso o valor ultrapsse 10, deve-se manter a mesma nota

const listaNotas = [9.5 , 8.5, 9.3, 9.1, 5.0, 6.5];

//o map irá iterar sobre cada nota e aplicar o bônus. o  operador ternário fará a verificação de se 
//cada um dos valores excede o valor 10

//o operador ternário funciona da seguinte forma:
    // ? true - mantém a mesma nota
    // : else - aplica a soma de 1 ponto 
    // nota + 1 > 10 é a condição
    // nota + 1 > 10, se sim (?), mantém notas, else (:), aplica notas + 1
const listaBonus = listaNotas.map(notas => notas + 1 > 10 ? notas : notas + 1);

console.log(listaBonus)


*/

/*


// Realizar a média de um determinado array de números


const notasFinais = [8.0, 7.5, 4.5, 9.4, 4.5];


let somaNotas = 0;

//Usando forEach, somando os valores para cada que o loop iterar e guardando numa variável
"somaNotas"

notasFinais.forEach(nota => somaNotas = nota + somaNotas);

// Faço o cálculo das médias dividindo o valor final da soma com o cumprimento do array

mediaFinal = somaNotas / notasFinais.length

//apresentanado os resultados dos valores da soma e da média

console.log(somaNotas)
console.log(mediaFinal)


*/



// Multiplicar cada elemento de um array por 10


//const listaNumeros = [4.0, 5.8, 9.4, 10.98, 7.75];

/*

//utilizando forEach e push para criar um array com os valores multiplicados

const listaMultiplicada = [];
listaNumeros.forEach(valores => listaMultiplicada.push(valores * 10));

*/


/*
/* 
//*** USANDO MAP E CALLBACKFUNCTION ***
//crio a função que vai realizar conta de multiplicação
const mulDex = (numero => numero * 10)

//o map irá iterar sobre cada elemento da lista e jogar seus valores dentro da função que realiza a
//multiplicação

const listaMul = listaNumeros.map(mulDex)
console.log(listaMul)
*/