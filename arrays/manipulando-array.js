/*

// array aceitam const, não precisa ser let.
const notasAluno = [5, 6.7, 8];
console.log(`Array original: ${notasAluno}`)

// acrescentando um valor na última posição do array usando push
notasAluno.push(4.5)
console.log(`Array acrescentando um valor na última posição: ${notasAluno}`);

//acrescentando um valor novo numa posição específica do array
notasAluno[4] = 10;
console.log(`Acrescentando valor 10 no índice 4 do array ${notasAluno}`);

//calculando a media com o array atualizado
const mediaAtualizada = [notasAluno[0] + notasAluno[1] + notasAluno[2] + notasAluno[3] + notasAluno[4]] / notasAluno.length
console.log(`A media atualizada das notas é: ${mediaAtualizada}`);

*/
//removendo elementos do array usando pop


/*
const notasAluno2 = [10, 8.5, 3.7, 9.5, 1000];
//exibe o array com as notas originais
console.log(notasAluno2)

//remove o útimo valor com pop
notasAluno2.pop();
//exibe o array atualizado
console.log(notasAluno2);

const media2 = (notasAluno2[0] + notasAluno2[1] + notasAluno2[2] + notasAluno2[3]) / notasAluno2.length

// exibindo a nova média com 2 casas decimais
console.log(`A média do Aluno é ${media2.toFixed(2)}`)
*/

// curiosidade sobre array vazio

const arrayVazio = [];
const arrayVazio2 = [, , ,];
const arrayVazio3 = [, , , 50];

console.log(arrayVazio.length); //exibe a quantidade de elementos no array vazio
console.log(arrayVazio[0]); //exibe undefined no arrayvazio, pois não existe um valor
console.log(arrayVazio2.length); //as virgulas definem os espaços de memória que reservam as posições do array
console.log(arrayVazio3.length);
console.log(arrayVazio3); // exibe o 3 itens do array como "vazios" e mais o valor 50
console.log(arrayVazio3[3]); //exibe o valor válido que está na posição 3 do array