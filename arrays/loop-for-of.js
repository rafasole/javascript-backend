// passando as notas bimestrarais em 4 arrays distintos

notasBimestre1 = [7.5, 8.0, 5.0, 3.5];
notasBimestre2 = [4.5, 6.0, 2.5, 9.0];
notasBimestre3 = [6.5, 5.0, 8.3, 4.2];
notasBimestre4 = [3.0, 4.7, 2.5, 5.0];

// aglutinando todas as notas em um array único de uma coluna

const arrayTodasNotas = [...notasBimestre1, ...notasBimestre2, ...notasBimestre3, ...notasBimestre4]
console.log(arrayTodasNotas)
let somaNotas = 0;
let notas;

//usando o loop for-of para passar por todos os valores do array único e calcular a soma de todas as notas
for (notas of arrayTodasNotas){
    somaNotas = somaNotas + notas;
}

//exibindo o valor do somatório final
console.log(`A somatória de todas as notas é: ${somaNotas}`);