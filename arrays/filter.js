const alunosSala  = ['maria', 'pedro', 'joana', 'henrique', 'guilherme', 'ana']
const notasAlunos = [8, 9, 5.0, 7.5, 6, 9.5];

// usando filter para definir quantas notas estão acima de 7
// filter é uma callback function, sempre precisa de uma função para funcionar
const alunosAprovados = notasAlunos.filter(alunos => alunos > 7);
const nomeQuatroLetras = alunosSala.filter(nomes => {
    
    return nomes.length < 4
});
// o filter sempre retorna um array com os valoresd que passaram no teste
console.log(alunosAprovados)
console.log(nomeQuatroLetras)

// o filter permite a inclusão de um segundo parâmetro "índice", para trazer
//o indice em que um determinado valor foi encontrado


// pegando alunos cujos nomes posuem menos do que 4 letras;
let messageFalse = "Nenhum aluno com nome com menos de 4 letras"
const indiceAluno = alunosSala.filter((alunos, index) => {
    if (alunos.length < 4){
        messageFalse = (`O aluno com menos de quatro letras está na posição ${index}`);
        return messageFalse
    }
})
console.log(messageFalse)

// pesquisando os alunos que tem notas > 7 no array de  notas e retornando os nomes dos alunos
// que tem notas maiores e menores do que 7
const alunosAp = notasAlunos.filter((notas, index) => {
    if (notas >= 7){
        let situacaoAP = alunosSala[index]
        return console.log(`Aprovados: ${situacaoAP}`)
    }
        else{
            let situacaoRP = alunosSala[index];
            return console.log(`Reprovados:  ${situacaoRP}`)
        }
    }
)

// fazendo o mesmo mas trazendo o resultado sem utilizar os valores das notas, nestes casos é possível passa
//(_) no parâmetro que a função irá receber e manter o index que será utilizado
const retornaApRP = notasAlunos.filter((_, index) => {
    if (notasAlunos[index] > 5){
        console.log(`Alunos com notas acima de 5: ${alunosSala[index]}`)
    }
})