function exibeNomeNota(nome, nota){
    return console.log(`O nome do aluno é ${nome} e a nota é ${nota}` )
}

//passando parametros na ordem correta, o resultado é obedecido
exibeNomeNota('Rafael', 5); 

//passando parametros na ordem invertida, o resultado é trocado
exibeNomeNota(5, 'Rafael');

// fazendo validação de nota e presença de aula sem expressão


// testando hoist, quando a função não é declarada como uma const. neste caso é possível
//chamar a função em qualquer parte do código

console.log(alunoAprovado('Ana', 8, false)); //deve sair reprovado
console.log(alunoAprovado('Juninho', 6, true)); // deve sair reprovado
console.log(alunoAprovado('Luizinha', 8, true)); // deve sair aprovado
console.log(alunoAprovado('Pedrinho', 7, true)); // deve sair aprovado

function alunoAprovado(aluno, nota, presenca){
    if (nota >= 7 && presenca){
        situacao = (`Aluno(a) ${aluno} APROVADO(A)`);
    } else {
        situacao = (`Aluno(a) ${aluno} REPROVADO(A)`);
    }
    return situacao
}


// testando hoist, quando a função é declarada como uma const. neste caso somente é possível
// chamar a função após a declaração da função

// console.log(statusAluno('Olá!!!', 'Ana', 8, false)); //deve sair reprovado

const statusAluno = function(mensagem, aluno, nota, presenca){
    if (nota >= 7 && presenca){
        situacao = (` ${mensagem} Aluno(a) ${aluno} APROVADO(A)`);
    } else {
        situacao = (`${mensagem} Aluno(a) ${aluno} REPROVADO(A)`);
    }
    return situacao;
}
console.log(statusAluno('Olá!!!', 'Ana', 8, false)); //deve sair reprovado