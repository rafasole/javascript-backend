

/*
//  1.  Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

// array de teste
arrayEx1 = ['joaquim', 'nabuco', 'donossor', 'dinossauro', 4, 8, 12.3]
// contador para iniciar o índice de cada elemento
let i = 1;
//loop for each iterando sobre cada elemento
arrayEx1.forEach(elemento => {
    console.log(`índice: ${i}    elemento: ${elemento}`); // imprimo o elemento e o contador que foi criado
    i++ // incremento 1 no contador
});
*/ 


/*
//  2. Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa
//alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos,
//imprimindo o resultado da operação no console.


// passo um array de teste
const arrayEx02 = [98, 113, 408, 13, 44, 8, 1];

// função que recebe o array de teste e uma outra função que irá executar a conta matemática
function executaOperacaoArray(array, callBackF){
    return array.map(callBackF) // map recebe o array de teste e itera para cada valor a função callback, que neste caso eu chamei de executaSomaCem

}

function executaSomaCem(valores){ // a executaSomaCem recebe cada elemento do array de teste processado pelo map e realiza a conta matemática
    return valores + 100
}

//chamando a funçãoc com o array de teste e a função matemática
let arrayFinal = executaOperacaoArray(arrayEx02, executaSomaCem)
//apresenta os valores
console.log(arrayFinal)
*/

// 3. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array.
// Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar
// "-1".





// usando forEach
const arrayRef = [1, 5, 10, 20, 14];
const valorTeste = 50;
//const saidaF = '-1'; 
let i = 0;
let valorEncontrado;
let saida = -1

arrayRef.forEach(valor => {
    if (valor == valorTeste){
    saida = arrayRef.indexOf(valor)
    //console.log(saida)
    }
})
console.log(saida)



/*
const nomesTurmaA = ['Joao', 'Guto', 'Martins', 'Emiliano', 'Zefreu'];
const nomesTurmaB = ['Paulo', 'Erique', 'Zé', 'Pedro', 'Camargo'];
//fazendo a concatenação das turmas A com a turma B, dentro do array da turma A
let todasAsTurmas  = nomesTurmaA.concat(nomesTurmaB);
// crio uma variável do nome que será procurado
let procura = 'Pedros'
// atribuição da variável que trará a mensagem final do resultado da pesquisa caso não seja encontrado
let saidaFinal = `Aluno ${procura} NÃO encontrado na lista`
// faço um find para procurar o nome da variável "procura"
todasAsTurmas.find(nomes => {
        if (nomes == procura){ // condição para testar o nome que esteja passando pelo loop seja o nome procurado
            saidaFinal = `Aluno ${nomes} encontrado na lista` // mensagem de saída atualizada para caso afirmativo
        }
    })
console.log(saidaFinal) // exibo mensagem para caso o nome não seja  encontrado na lista
*/



    //console.log(valorEncontrado)
    //
//console.log(saidaF)

/*
//const i = 0;
function verificaValor (valor) {
    if (valor == valorTeste){
        valorEncontrado = arrayRef.indexOf(valor);
        //console.log(valor)
        // console.log(i)
    }
    else{
        valorEncontrado = saidaF;
    }
    return valorEncontrado
}

console.log(valorEncontrado)



/* 

// Usando loop for normal


//passando o array que será usado como base
const arrayRef = [1, 5, 10, 20, 14];
//passando o valor que será testado para usar na comparação
const valorTeste = 2;
// inicio um contador que será utilizado no loop for para iterar sobre o array base
let i = 0;
// criando uma variável para receber o valor para caso o número teste não seja encontrado
let saidaF = -1;
// criando uma variável para receber o valor para caso o úmero teste seja encontrado
let saidaT;

//loop for para varrer o arraybase
for (i; i < arrayRef.length; i++){
    if (arrayRef[i] === valorTeste){ //condição para que caso o valor testado seja encontrao na posição
        // em que o o loop estiver passando
       saidaT = i; // em caso positivo, irá mostrar a posição "i" 
       break // o código não precisa continuar ao encontrar o valor
    }
    else{

        saidaT = saidaF; // caso negativo, a saida recebe o valor da variável que eu criei para caso negativo
    }

}
//exbindo a mensagem de êxito.
console.log(`Posição do valor ${valorTeste}: Posição ${saidaT}`);


*/


/* 

//  4. Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.


const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

*/



//    Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
//    Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. 
//    Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista,
//    retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

/*
//passando os arrays com as duas turmas A e B
const nomesTurmaA = ['Joao', 'Guto', 'Martins', 'Emiliano', 'Zefreu'];
const nomesTurmaB = ['Paulo', 'Erique', 'Zé', 'Pedro', 'Camargo'];
//fazendo a concatenação das turmas A com a turma B, dentro do array da turma A
let todasAsTurmas  = nomesTurmaA.concat(nomesTurmaB);
// crio uma variável do nome que será procurado
let procura = 'Pedro'
// atribuição da variável que trará a mensagem final do resultado da pesquisa caso não seja encontrado
let saidaFinal = `Aluno ${procura} NÃO encontrado na lista`
// faço um find para procurar o nome da variável "procura"
todasAsTurmas.find(nomes => {
        if (nomes == procura){ // condição para testar o nome que esteja passando pelo loop seja o nome procurado
            saidaFinal = `Aluno ${nomes} encontrado na lista` // mensagem de saída atualizada para caso afirmativo
        }
    })
console.log(saidaFinal) // exibo mensagem para caso o nome não seja  encontrado na lista
*/


/*

// 5 - Considere um array de números inteiros.


// const numeros = [6, 9, 12, 15, 18, 21];


// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada 
    multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.



const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(valor => console.log(valor = valor * 3));
console.log(numeros.findIndex(numero => numero == 21)); 

*/ 


