/* Exercício 1 - Declare três variáveis diferentes (uma para cada tipo: string, número e booleano)
e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const nome = 'rafael';
const idade = 39;
const atividade = true;

console.log('Variável valor: '+nome,'\n do tipo: '+typeof(nome));
console.log('Variável valor: '+idade,'\n do tipo: '+typeof(idade));
console.log('Variável valor: '+atividade,'\n do tipo: '+typeof(atividade));


*/ 


/*
// Exercício 2 - Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome.
//Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings.
//Por fim, imprima os resultados obtidos no console.

let nome = 'rafael';
let sobrenome = 'franco';
let nomeCompleto;

//concatenando usando operador +
const nomeCompletoOp = ("Nome completo usando operador +: " +nome +" " +sobrenome);
console.log(nomeCompletoOp);

//usando template string
const nomeCompetoTemp = (`nome completo com template strings: ${nome} ${sobrenome}`);
console.log(nomeCompetoTemp)
*/ 


/*
//Exercício 3 - Declare duas variáveis, uma contendo um número e outra contendo uma string. 
//Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase
//e exiba o resultado no console.

const idade = 30;
const nome = 'Rafael';

const frase = (`Olá, meu nome é ${nome} e tenho ${idade} animais de estimação. `);
console.log(frase);
*/



/*
//Execício 4 - Crie uma variável inicializada com um valor de qualquer tipo e, em seguida,
//reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let nome = 'João';
console.log(`Olá o nome aqui é ${nome}`);

nome = 'José';
console.log(`E agora o nome é ${nome}`);
*/


/*
// Exercício 5 - Declare uma variável usando var fora de um bloco de código (por exemplo, if)
//e outra dentro desse bloco. 
//Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os
//resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var fora1 = 'FORA DO BLOCO 1';

if (1 > 0){
    var dentro1 = 'DENTRO DO BLOCO 1';
    console.log(fora1)
    console.log(dentro1)
}

let fora2 = 'FORA DO BLOCO 2';

if (1 > 0){
    let dentro2 = 'DENTRO DO BLOCO 2';
    console.log(fora2);
    console.log(dentro2);
}

//console.log(dentro2); //essa linha deveria dar erro. não é permitido declarar com let fora do bloco 
//e utilizá-lo dentro do bloco. o que não acontece com var
console.log(dentro1);
*/

/*
// Exercício 6 - Declare uma variável booleana que informa se está chovendo e utilize-a em uma
//estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva
//ou não dependendo do valor da variável.


function estaChovendo(chovendo){
    if (chovendo){
        console.log('Melhor levar guarda-chuva');
    }
        else{

            console.group('Não está chovendo');
    }
}

let chovendo = false;
estaChovendo(chovendo);
*/

