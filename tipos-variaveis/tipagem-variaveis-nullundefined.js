const saldo = null;
console.log(typeof(saldo)); // sempre retorna como um tipo "objeto pelo node"
console.log(saldo);
let idade;
console.log(typeof(idade)); //criando uma variável sem definir qual é o tipo
console.log(idade)

console.log(saldo + 3); // é possível fazer operações com valores null
console.log(idade + 3); // porém, para valores "undefined", o retorno é NaN. Neste caso por estar somando 3
// a uma variavel idade que não é um numero
