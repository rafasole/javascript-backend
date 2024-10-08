/*
Praticas de Aula
Formação: Aprenda a programar em JavsScipt com foco no back-end
Curso: JavaScript: Conhecendo Objetos
Aula 05: Manipulando listas de objetos
Módulo 06: Filtrando um Objeto
*/


// neste programa quero ordenar uma propriedade de um objeto. a propriedade escolhida deverá ser passada como uma variável de função
// farei a ordenação crescente e decrescente
// farei a ordenação para a lista toda e para uma propriedade específica


const listaPessoas = require('./estudantes.json');
//console.log(listaPessoas)

//função recebe uma lista que será ordenada
//função recebe a propriedade que será usada na ordenação
//função recebe se ordenação será crescente ou decrescente
function ordenaProps(lista, props, crescente = true){
//usando o sort a,b para fazer a ordenação
    const retornoOrdena = lista.sort((a,b) => {
//condição para o sort atribuir valores 1 e -1 para realizar a ordenação        
        if (a[props] > b[props]){
//condição para verificar se a ordem for crescente e inverter se a ordem for descrescente
            return crescente ? 1 : -1;
        }
        if (a[props] < b[props]){
            return crescente ? -1 : 1;
        } 
   })
    return (retornoOrdena)

}
//instanciando a função com a lista, o parâmetro e o booleano no crescente/descrescente
const retornoFuncsort = ordenaProps(listaPessoas, 'nome', false)

//listando o array de objetos completo
console.log(retornoFuncsort)

//usando a ordenação para listar somente os nomes de cada objeto
for(let index = 0; index < retornoFuncsort.length; index++){
    const nomesOrdenados = retornoFuncsort[index].nome;
    console.log(nomesOrdenados)
}

