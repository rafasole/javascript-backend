// Criar uma função para que seja possível inserir o nome de um aluno e, numa lista de Alunos e Notas, seja possível
// pesquisar se o aluno está na relação e devolver sua média. Se o aluno não estiver na relação de alunos devolver 
// uma mensagem de erro


// 1. Sem usar destructuring

//passando a lista de alunos e médias
const ListaNomeAluno = ['Maria', 'Pedro', 'Henrique', 'Ana', 'Cida' , 'Jacqueline', 'Julia'];
const ListaMediasAluno = [8.0, 4.5, 2.5, 9.0, 7.0, 9.5, 8.5];
//criando um array de arrays com as duas listas criadas
const cadernetaFinal = [ListaNomeAluno, ListaMediasAluno];


// iniciando contadores e variáveis. O 'i' será o contador para iterar sobre as listas e a "saidaMedia" será o valor 
// da média que irá retornar da lista de médias, caso o aluno seja encontrado nasta. li
let i = 0;
let posicao = 0;
let saidaMedia = 0;


//usando uma arrowfunction que permite a entrada do nome de um aluno
const ProcuraNome = (nomeAluno) => {
    // o for irá usar o "i" para iterar sobre os valores da lista de nomes que está dentro da lista da "cadernetaFinal" 
    // (a lista de nomes é o índice zero da "cadernetaFinal").começando do índice zero até o tamanho final da lista de
    // nomes
    for (i; i <= cadernetaFinal[0].length; i++){
        // usando o método "includes" para verificar se o nome está no array de nomes e colocando dentro uma condição
        if (cadernetaFinal[0].includes(nomeAluno)){
        // se o nome estiver na lista de nomes, quero procurar qual é o índice da lista de nomes em que este nome está contido,
        // irei precisar do índice para buscar na lista de médias (que é o índice 1 da cadernetaFinal),
        // o valor da média relacionada ao aluno correspondente.        
            posicao = cadernetaFinal[0].indexOf(nomeAluno);
        // sabendo o índice (variável "posicao"), posso retornar o valor da média daquele aluno, passando como índice do array de 
        // "medias" (novamente, o índice zero da "cadernetaFinal" ) a variável, que criei para receber este índice
            saidaMedia = cadernetaFinal[1][posicao];
        //exibindo mensagem de êxito e a média do aluno
            return (console.log(`O(a) aluno(a) ${nomeAluno} tem média ${saidaMedia}`))
        }
        // caso o aluno não seja encontrado, exibe mensagem de erro
        else{
            return console.log((`O(a) aluno(a) ${nomeAluno} não foi encontrado. Tente novamente!`))
            
        }
    }

}
   
ProcuraNome('João');
ProcuraNome('Cida');
ProcuraNome('Pedro')
ProcuraNome('Jacqueline')
ProcuraNome('Euclides')

