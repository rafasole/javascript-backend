
// Criar uma função para que seja possível inserir o nome de um aluno e, numa lista de Alunos e Notas, seja possível
// pesquisar se o aluno está na relação e devolver sua média. Se o aluno não estiver na relação de alunos devolver 
// uma mensagem de erro


// 2. Usando destructuring

//passando a lista de alunos e médias
const ListaNomeAluno = ['Maria', 'Pedro', 'Henrique', 'Ana', 'Cida' , 'Jacqueline', 'Julia'];
const ListaMediasAluno = [8.0, 4.5, 2.5, 9.0, 7.0, 9.5, 8.5];
//criando um array de arrays com as duas listas criadas
const cadernetaFinal = [ListaNomeAluno, ListaMediasAluno];

// iniciando contadores e variáveis. O 'i' será o contador para iterar sobre as listas e a "saidaMedia" será o valor 
// da média que irá retornar da lista de médias, caso o aluno seja encontrado nasta. li
let i = 0;
let saidaMedia = 0;

//aplicando o destructuring para refletir os nomes dos alunos e as suas médias em dois arrays distintos: "nomes" e "medias"
const [nomes, medias] = cadernetaFinal

//usando uma arrowfunction que permite a entrada do nome de um aluno
const procuraNomeComDestructuring = (nomeAlunoDestructuring) => {
    // o for irá usar o "i" para iterar sobre os valores da lista de nomes. começando do índice zero até o tamanho final da lista
    //de nomes
    for (i; i <= nomes.length; i++){
        // usando o método "includes" para verificar se o nome está no array de nomes e colocando dentro uma condição
        if (nomes.includes(nomeAlunoDestructuring)){
            // se o nome estiver na lista de nomes, quero procurar qual é o índice da lista de nomes em que este nome está contido,
            // irei precisar do índice para buscar na lista de médias, o valor da média relacionada ao aluno correspondente.
            const indiceDestructuring = nomes.indexOf(nomeAlunoDestructuring);
            // sabendo o índice, posso retornar o valor da média daquele aluno, passando como índice do array "medias" a variável
            // que criei para receber este índice
            saidaMedia = medias[indiceDestructuring];
            //exibindo mensagem de êxito e a média do aluno
            return (console.log(`O(a) aluno(a) ${nomeAlunoDestructuring} teve média ${saidaMedia}`))
        }
        else{
            // caso o aluno não seja encontrado, exibe mensagem de erro
            return (console.log(`Aluno ${nomeAlunoDestructuring} não encontrado. Verifque e tente novamente.`))
        }
    }
} 

//testando êxitos erros
procuraNomeComDestructuring('Maria')
procuraNomeComDestructuring('Pedro')
procuraNomeComDestructuring('Julia')
procuraNomeComDestructuring('Geraldo')