//thruthy em arrays

const arraytruthy = []; 
const arraytruthy2 = 'oi mundo';

console.log(Boolean(arraytruthy)); // arrays vazias são verdadeiras
console.log(Boolean(arraytruthy2)); // arrays com string são verdadeiras

//fallsy em arrays

const arrayfalsy = 5 * 'oi mundo';
const arrayfalsy2 = [0, 1, 2];
const arrayfalsy3 = [''];

console.log(Boolean(arrayfalsy)); //arrays com valores matemáticos inválidos são false
console.log(arrayfalsy); //deve trazer um NaN por conta da operação matemática inválida
console.log(Boolean(arrayfalsy2[0])); //é um valor falsy, pois estou acessando um valor "zero" de dentro do array
console.log(Boolean(arrayfalsy3)); //é true porque uma array é true mesmo quando vazia


//métodos em arrays

const arrayTeste = [0, 1.245, 2, 3, 5, 'larabanana'];

const fixaDec = arrayTeste[1].toFixed(2); //fixa o valor do índice 1 em 2 casa decimais
console.log(fixaDec);

const caixaAlta = arrayTeste[5].toUpperCase() // transforma o string do índice 5 em maiúsculo
console.log(caixaAlta);

const addValue = arrayTeste.push('lararamaça') //acrescenta um alemento "lararamaça" no array
console.log(arrayTeste);




