const bimestreNota1 = 7;
const bimestreNota2 = 7;
const bimestreNota3 = 8;
const bimestreNota4 = 9.5;
let mediaFinal = (bimestreNota1+bimestreNota2+bimestreNota3+bimestreNota4) / 4; 
const statusAdvertencia = true;
const statusAdvertenciaNumerico = 0;
console.log(`Media final é: ${mediaFinal}`);
let mediaBonus;
let assiduidade = 0.4;


/* 
//Usando condicional para definir bonus para aluno com nota maior do que 7

if (mediaFinal >= 7){
    console.log(`Aluno está aprovado!`)
    mediaBonus = mediaFinal + 0.1;
    mediaFinal += 0.1;
    console.log(`A média final bonificada é ${mediaBonus}`);
    console.log(`A média final bonificada é ${mediaFinal}`);

}
else{
    console.log('Aluno está reprovado')
}

*/

/* 
//condicional com E para verificar media final e assiduidade

if (mediaFinal >= 5 && assiduidade >= 0.5){
    console.log(`Aluno aprovado!!`)
}
else{
    console.log(`Aluno Reprovado com ${assiduidade*100}% de assiduidade`)
}

*/

/* 
//condicional com ou testando media final e assiduidade

if (mediaFinal <=6 || assiduidade > 0.5){
    console.log(`Aluno aprovado!`)
}
else{
    console.log('Aluno REPROVADO!')
}

*/

/*

//condicional com testando E com media final e NOT do status advertencia, aluno somente
//será aprovado se não houver nenhuma advertência

if (mediaFinal >=5 && !statusAdvertencia){
    console.log(`Aluno aprovado`)

}
else {
    console.log(`Aluno Reprovado`)
}
*/

/* 

//condicional testando E e com condicional booleano em formato numérico usando NOT

if (statusAdvertenciaNumerico != 1 && mediaFinal > 5){
    console.log("Aluno Está aprovado!!")
}
else{
    console.log("Aluno está reprovado!")
}

*/

/*

const valorStringNumerico = '0';
const valorNumerico = 0;
const valorNull = null;
const valorUndefined = undefined
const valorZerp = 0;

//retorna booleano do valor numerico com iguais duplos e triplos

console.log(`Teste com duplo igual: ${valorNumerico == valorNumerico}`); //retorna true por que valida somente valores
console.log(`Teste com triplo igual: ${valorNumerico === valorStringNumerico}`); // retorna false por que valida valores e tipo

console.log(`Teste com duplo igual: ${valorNull == valorZerp}`);
console.log(`Teste com triplo igual: ${valorNull === valorZerp}`);

console.log(`Teste com duplo igual: ${valorUndefined == valorZerp}`);
console.log(`Teste com triplo igual: ${valorUndefined === valorZerp}`);

*/

/*

//operadores ternários para verificar condição de saldo bancário
const saldo = 100;

const resultado = saldo <= 100 ? 'Saldo insuficiente' : 'Saldo suficiente'; 

console.log(resultado)
*/

/* 

//operadores ternários com funções para verificar status de matrícula
//const statusMatricula = false;

function verificaStatus(){
    return statusMatricula ? 'ATIVADA' : "DESATIVADA"
}

console.log(verificaStatus());
*/

/*

//operador ternário para verificar idade 
const idade = 16;

const verificaDoc = idade > 15 ? 'True' : 'False';

console.log(verificaDoc)

*/


