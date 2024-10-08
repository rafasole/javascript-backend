//pratica de aula para buscar aluno de lista de estudantes definindo qual chave utilizar

//require do json contendoa lista de estudantes
const listaEstudantes = require ('./estudantes.json');
//mensagem de retorno padrão para caso os requisitos de busca não sejam satisfeitos
let mensagemRetorno = 'Aluno e/ou telefone não foi encontrado';

//função para que seja passado qual tipo de chave será usada e o respectivo valor que será utilizado na busca
function buscaEstudante(tipoChave, valorChave){
    // usando find para buscar pelos registros da lista de estudantes com a chave escolhida na chamada de função e o seu respectivo valor
    listaEstudantes.find(registros => {
        //lembrar de usar colchetes na hora de parametrizar o tipo de chave, tentei fazer usando registros.tipoChave e não funcionou. precisa ser registos[tipoChave]
        //usei includes para verificar se o valor definido na chamada de função existe para aquela determinada chave
        if (registros[tipoChave].includes(valorChave)){
        //se o registro incluir aquela chave e aquele valor, retorno bom, caso contrário ele mantém a mensagem do retorno ruim que foi pré-definida
         mensagemRetorno =  console.log(`Este ${tipoChave} pertence ao aluno ${registros.nome}`);
         return mensagemRetorno}
    })
    console.log(mensagemRetorno)
}


buscaEstudante('telefone', '90456730962')