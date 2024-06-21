const nomeAluno = 'José';
const situacaoAp =  true;
const aprovado = 'aprovado';
const reprovadp = 'reprovado;'


// uso de boleando dentro do if para verificar validade da variável.
// preferencialmente usar ===, pois, o JS faz a validação literal da variável. 
// Aqui eu não entendi muito bem quando usar == e ===, mas parece que a recomendação
// é de sempre usar === em condicionais com booleano

if (situacaoAp === true){
    console.log(`Situação ${aprovado.toUpperCase()}`);
}
else{
    console.log(`Situação ${reprovadp.toUpperCase()}`);
}

// aqui é uma validação da string que implicitamente acaba sendo um booleano.
// veja ao colocar um condicional if , ele só entra na condição quando a paridade
// é true, mesmo sem estar explicitado

if (nomeAluno === 'Rafael'){
    console.log(`Olá, ${nomeAluno}`);
} else {
    console.log('Não te conheço');
}