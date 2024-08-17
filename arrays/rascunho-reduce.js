/*
const listaValores = [5, 7, 9, 19];

function recebeArray (arrayTeste){
    const testeReduce = listaValores.reduce((acumulador, valores) => (valores + acumulador) , 0)
    return console.log(testeReduce)
}

recebeArray(listaValores)
*/

/*
let nota = 10;
let novaNota = nota;

nota = 5;

console.log(nota)
console.log(novaNota)


let arraynota = [5, 10, 20, 15];
let novoArrayNota = arraynota;

novoArrayNota.push(20);

console.log(arraynota);
console.log(novoArrayNota);


//operador de espalhamento
novoArrayNota = [...arraynota, 31];
console.log(novoArrayNota)
*/ 

/*
// Atribuição por valor e atribuição por referência


// Atribuição por valor serve para variáveis que são string, booleano ou numéricas.
// Neste caso, o JS assume a alteração dos valores propriamete ditos das variáveis,
// com isso, mesmo que se alterarmos  o valor de uma determinada variável e atribuirmos
// uma condição de igualdade a outra variável. Os valores de antes e depois da alteração
// são preservados.

let numeroOriginal = 10;
function alteraNumero(numero) { 
    numero = 50;
    console.log(`Original: ${numeroOriginal} Parâmetro: ${numero}`)
}

alteraNumero(numeroOriginal)

let arrayOriginal = [10, 10, 20, 30];
//let novoArray = arrayOriginal

// O mesmo não ocorre para arrays, pois são atribuídos não por valor mas por referência.
// Com isso, mesmo que se alterarmos  o valor de uma determinado array e atribuirmos
// uma condição de igualdade a outro array. Ambos os valores de antes e depois da alteração
// são alterados

function alteraArray (novoArray){
    
    novoArray.push(55);
    console.log(`Array Original: ${arrayOriginal} , Novo Array: ${novoArray}`);
    
}

alteraArray(arrayOriginal)

// Para resolver esse tipo de de situação é utilizado o spread operator [...], que referência
// o array antigo e inclui o valor a ser acrescentado nele

function spreadOperator(novoArray){
    novoArray = [...arrayOriginal, 44]
    console.log(`Com spreadOperator: arrayOriginal: ${arrayOriginal}, novoArray: ${novoArray}`)
}

spreadOperator(arrayOriginal)
*/

/*
const notas1 = [10, 6.5, 8 ,7.5] 
const notas2 = [9, 6, 6] 
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]
const quantidadeElementos = (notas1.concat(notas2, notas3)).length

let somaDasNotas = 0 


for (let i = 0; i < notasGerais.length; i++) { 
    for (let j = 0; j < notasGerais[i].length; j++) { 
        somaDasNotas += notasGerais[i][j] 
        } 
    }

const media = somaDasNotas/quantidadeElementos
console.log(`A média das notas é: ${media.toFixed(2)}`)
*/