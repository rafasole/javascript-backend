

notasBimestre1 = [7.5, 8.0, 5.0, 3.5];
notasBimestre2 = [4.5, 6.0, 2.5, 9.0];
notasBimestre3 = [6.5, 5.0, 8.3, 4.2];
notasBimestre4 = [3.0, 4.7, 2.5, 5.0];

notasGeral = [notasBimestre1, notasBimestre2, notasBimestre3, notasBimestre4];

let somaGeral1 = 0; 
let somaGeral2 = 0;
let somaGeral3 = 0;
let somaGeral4 = 0;

let i = 0;
let j = 0;
let k = 0;
let l = 0;

for (i; i < notasBimestre1.length; i++){
    somaGeral1 = somaGeral1 + notasBimestre1[i];
    for (j; j < notasBimestre2.length; j++){
        somaGeral2 = somaGeral2 + notasBimestre2[i]
    }
        for(k; k < notasBimestre3.length; k++){
        somaGeral3 = somaGeral3 + notasBimestre3[i];
        }
            for(l; l < notasBimestre4.length; l++){
                somaGeral4 = somaGeral4 + notasBimestre4[i];

        }
}
console.log(somaGeral1);
console.log(somaGeral2)
console.log(somaGeral3)
console.log(somaGeral4)

const somaTotal = (somaGeral1 + somaGeral2 + somaGeral3 + somaGeral4) / ((notasBimestre1.length + notasBimestre2.length + notasBimestre3.length + notasBimestre4.length))
console.log(somaTotal)