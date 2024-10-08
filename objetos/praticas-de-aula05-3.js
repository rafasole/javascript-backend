/*
Praticas de Aula
Formação: Aprenda a programar em JavsScipt com foco no back-end
Curso: JavaScript: Conhecendo Objetos
Aula 05: Manipulando listas de objetos
Módulo 04: Encontrando um Objeto
*/


// neste programa quero verificar se a propriedade desejada existe no json que minha aplicação está consumindo

//buscando a lista que será utilizada
const listaAlunos = require ('./estudantes.json');

function buscaPropriedade (lista, prop){
    const retornaPropfalta = lista.filter(listagem => {
        if (!listagem.endereco.hasOwnProperty(prop)){
            const retornaPropfalta = listagem.nome;
            return retornaPropfalta
        }

    })
    return retornaPropfalta
    
}
console.log('Pessoas que faltam CEP:')
const retornaBusca = buscaPropriedade(listaAlunos, "cep")
for (let index = 0; index < retornaBusca.length; index++ ){
const nomeSemCEP = retornaBusca[index].nome;
console.log(nomeSemCEP)
}

