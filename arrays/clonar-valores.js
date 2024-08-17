

// em variáveis é possívell usar o operador = para atribuir o mesmo valor a duas variáveis. No exemplo abaio, é possível ver 
// ao alterar o valor 1 de 10 para 6, o valor da variáveis valo1 permanece 10 e somente é alterada a variável novoValor1.
let valor1 = 10;
let novoValor1 = valor1;

valor1 = 6;

console.log(valor1, novoValor1)

//o JS  não permite copiar arrays usando "=". No exemplo abaixo, é possível ver que o método push acrescenta o número
//22 ao novoVetor1, mas também ao vetor1. Eles não atuam isoladamene
let vetor1 = [4, 5, 6, 10];
let novoVetor1  = vetor1;
novoVetor1.push(22)
//vetor1 = [10, 1, 111, 423]
console.log(vetor1)
console.log(novoVetor1)

// para adicionar valores em um arrray, precisamos usar o spreadOperator
novoVetor1 = [...vetor1, 20];
console.log(vetor1)
console.log(novoVetor1)