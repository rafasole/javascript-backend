//  *** diversas operações mostrando o comportamento das funções e seus atributos ***


//linha de código para testar o hoist de código: 
// quando a função pode ser chamada em qualquer local do código, desde que ela não seja  
// declarada como uma const
divideNumeros(10, 2)


// 1. soma de dois numeros

function somaNumeros(a, b){
    return console.log(`A soma dos números é: ${a + b}`);
    
}

//passando somente os parâmetros com o console.log dentro da função
somaNumeros(5,10)

// 2. fazendo a soma de dois números sem o return. código não apresenta erros mas também não
//retorna os resultados

function somaNumerosSemReturn(e,f){
    somaSemReturn = e + f;
    // return somaSemReturn;
}

console.log(`Soma dos números sem return é ${somaNumerosSemReturn(10,20)}`);

// 3. fazendo o return corretamente, mas não passando como a ultima instrução da função, 
// o código apresenta um erro de "reference error"

function somaComReturnDeslocado(g , h){
    //return console.log(`Soma com return em posição errada é: ${somaDeslocado}`);
    somaDeslocado = g + h; 
    return console.log(`Soma com return em posição errada é: ${somaDeslocado}`);
}

somaComReturnDeslocado(100, 1000);

// 4. realizando a subtração de dois números e passando a operação a ser realizada
// dentro do return

function subtraiNumeros(c,d){
    return c-d;
}


//passando somente os parâmetros com o console.log na chamada da função

console.log(`A subtração dos números é: ${subtraiNumeros(20,10)}`);

// 5. Divisão de dois numeros e trocando a ordem na hora de passar o parâmetro na execução
//da função

function divideNumeros (divisor, dividendo){
    return console.log(`O resultado da divisão é: ${divisor / dividendo}`);
}

//divisao dos numeros com a ordem dos parametros correta
// divideNumeros(10, 2)

//divisao dos numeros com a ordem dos parametros invertida
divideNumeros(2 , 10);

// 6. Passando um valor undefined e um valor fixo como pâmetro da função

function somaComUndefined(a = 200, undefined, b){
    return console.log(`Soma com undefined: ${a + undefined + b}`)
}

// Observações: 
// a) o valor de "a" é fixo na declaração da função, mas na chamada de função, mas 
//na chamada ele precisa ser passado como undefined para fazer valer;

// b) o valor "undefined" na declaração da função precisa ser atribuído na chamada,
//desta função, caso contrário teremos um erro

//exemplos: 
//chamando a função com undefined, o JS irá assumir o valor fixo da declarção da funçao,
//ao mesmo tempo, o valor '10' na chamada da função está substituindo o valor "undefined"
//na declaração da função

somaComUndefined (undefined, 10, 5);

// ao atribuir um valor na chamada da função, este valor irá sobrepor o valor fixo que está
// declarado na função

somaComUndefined(20, 10, 5);

//7. Passando um valor null na declaração da função e duas variáveis fixas

function funcComNull (a = 100, b = 10, c = 10){
    console.log(`Com o null, o resultado da soma é: ${a + b + c}`)
}

// Observações:
// a) Passando os parâmetros vazios na chamada da função, o JS irá assumir os dados fixos
//que foram passados na declaração da função
funcComNull();

// b) Passando o valor null na chamada da função, o JS ignora o valor (ou assume como zero),
// e utiliza somente os valores que foram passados. É possível também passar o valor que não
//se sabe ou não se quer declarar com undefined
funcComNull(null, null, undefined)
funcComNull(null, null)


// *** testando expressar as funções como uma const ***

// 8. Passando a função como uma const. A funcionalidade é a mesma, porém, só é possível
//chamar a função depois que ela é declarada

//testando a chamada da função antes de ser declada, não deve funcionar:

// multiplicaNumeros(10, 8)

const multiplicaNumeros = function(a , b){
    console.log(`A multiplicação é: ${a * b}`);
}

//chamando a função depois de declarar, deve funcionar:

multiplicaNumeros(5, 200)