
/*
// 1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const arrayElementos = ['casa', 'cupim', 'Rafael', '19', 19, 20.98];

arrayForOf = [];
for (elementos of arrayElementos){
    console.log(elementos)
    }
/*

*/

/*
// 2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const apresentaIndice = arrayDeDados => {
    let i = 1;
    let indice;
    let elemento;
    const arrayFinal = []
    for (i; i <= arrayDeDados.length; i++){
        indice = i;
        elemento = arrayDeDados[i-1]
        arrayFinal.push(indice, elemento)
    }
    console.log (arrayFinal)
        
}

apresentaIndice(['casa', 'cupim', 'Rafael', '19', 19, 20.98])

*/

/*
// 3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let soma = 0;
const somaElementos = arrayInteiros => {
    for(elementos of arrayInteiros){
        soma = soma + elementos;
    }
    return console.log((`O valor da soma dos elementos do array é de ${soma}`));


}

arrayDeElementos = [1, 2, 3, 10, 20, 25, 50, 100, 876];
somaElementos(arrayDeElementos)
*/


/*
// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array,
// no seguinte formato: 'o menor número é X e o maior número é Y'.


//inicializando uma variável com o array que será a entrada da função
let arrayNumero = [];

//criando uma arrowFunction que irá receber o array de números
const maiorNumero = arrayNumero => {
    //iniciando uma variável "maior" com valor zero que irá assumir o maior valor do array após o loop
    //inicio essa variável com zero para servir de referência
    let maior = 0;
        //loop com for-of que irá varrer todos os elementos do arraydeNumeros    
        for(numero of arrayNumero){
        //para cada valor do array eu comparo com o valor de referência que atribuí na variável "numero"
        if(numero > maior){
        // caso o numero que está passando pelo loop seja maior do que o numero de referência, este número
        // assumirá o valor da variável maior. Até o fim do loop.
            maior = numero;
        }
    }
        
    
    //iniciando uma variável "menor" que irá assumir o menor valor do array após o loop
    //como já sei o maior valor, posso atribuir o maior valor à essa variável "menor" pois qualquer número
    //do array será menor que ele.
    let menor = maior;

    //novamente realizo um loop para rodar por todos os elementos do array
    for (numero of arrayNumero){      
        // comparando o numero de que está passando pelo loop com a variável "menor", na primeira iteração, esse
        // número será o maior valor do array     
        if (numero < menor){
        // caso o numero que está passando pelo loop seja menor do que o numero de referência, este número 
        // assumirá o valor da variável menor. Até o fim do loop
                menor = numero;
        }
    }
    // retornando os valores...
    return(console.log(` O MAIOR número do array é o número ${maior},\n e o MENOR número é o  ${menor}`))
}

// instanciando a função
maiorNumero([-40020, -30, 187500.76, 4500, 700, 5, -3000,-200, 74000])
*/


/*
// 5. Crie um programa que utilize um laço for para percorrer uma
//array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos 
// nesse array

const arrayDeInteiros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

i = 1;
arrayDePares = [];
for (i; i <= arrayDeInteiros.length; i++){
    if(arrayDeInteiros[i] % 2 == 0){
        arrayDePares.push(arrayDeInteiros[i]);

    }
}
console.log(`Os números pares do Array informado são: ${arrayDePares}`);
*/

/*
// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.


let soma = 0;
let i = 0;
let media;
const calculaMedia = arrayNotas => {
    for (i; i <= arrayNotas.length-1; i++){
        soma = soma + arrayNotas[i];
        //console.log(soma)
        
    }
    media = soma / arrayNotas.length
    return (console.log(media))
}

array = [3, 8, 10, 5, 6, 10, 7, 2, 9, 10];
calculaMedia(array);
*/



