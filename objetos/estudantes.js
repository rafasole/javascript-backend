const importFs = require('fs');
const pessoas = require('./alunos.json');
const operacoes = require('./modulo-exportimport-com-modulo-CJS.js');

console.log(pessoas)
console.log(typeof(pessoas));

const chaves = Object.keys(pessoas)
console.log(chaves)
console.log(operacoes(1,2))