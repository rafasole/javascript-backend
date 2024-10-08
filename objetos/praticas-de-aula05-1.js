//pratica de aula para buscar aluno de lista de estudantes pelo nome ou pelo telefone

//require do json contendoa lista de estudantes
const listaEstudantes = require ('./estudantes.json');

//mensagem de retorno padrão para caso os requisitos de busca não sejam satisfeitos
let mensagemRetorno = 'Aluno e/ou telefone não foi encontrado';

//função para que seja passado os valores de telefone e nome que será usado na busca 
// usando find para buscar pelos registros da lista de estudantes com os valores de nome e telefone escolhidos 
function buscaEstudante(telefoneEstudante, nomeEstudante){
    
    listaEstudantes.find(listaNomes => {
        //console.log(listaNomes.telefone)
        //usei includes para verificar se o valor definido na chamada de função existe para o nome e para telefone
        //a condição verifica se para telefone OU  se para nome, existe o registro na base
        //caso a condição se satisfaça, emite mensagem boa de encontrado, caso contrário mantém-se a mensagem original pré defindia na criação da variável

        if (listaNomes.telefone.includes(telefoneEstudante) || listaNomes.nome === nomeEstudante){
            mensagemRetorno = listaNomes.nome;
            return mensagemRetorno
        }
           
        })
    console.log(mensagemRetorno)
}  
    
buscaEstudante('9045673092', 'Ammye')