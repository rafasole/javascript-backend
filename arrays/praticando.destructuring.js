// Usando destructuring em diferentes formatos

// criando listas de nomes, médias e situação
const ListaNomeAluno = ['Maria', 'Pedro', 'Henrique', 'Ana', 'Cida' , 'Jacqueline', 'Julia'];
const ListaMediasAluno = [8.0, 4.5, 2.5, 9.0, 7.0, 9.5, 8.5];
const ListaSituacaoAluno = ['AP', 'RP', 'RP', 'AP', 'AP', 'AP', 'AP'];

//agrupando todas as listas dentro de uma lista única
const statusAluno = [ListaNomeAluno, ListaMediasAluno, ListaSituacaoAluno];


// 1. é possível individualizar os arrays, passando como variáveis para cada uma das colunas do array agrupado
const [nome, media, situacao] = statusAluno
console.log(`Array de nome: ${nome}`);
console.log(`Array de média: ${media}`);
console.log(`Array de situacao: ${situacao}`)


// 2. unindo os arrays individuais em um único array usando o ... Perceba que se removermos os "..." será criado
// ainda assim um núnico array, mas com os arrays separados por [], como se fossem colunas
const listaArrays = [...ListaNomeAluno, ...ListaMediasAluno, ...ListaSituacaoAluno]
console.log(`Arrays em uma única coluna: ${listaArrays} `)

// 3. separando valores de um array e atribuindo variáveis à eles
const [valor1, valor2] = [55, 48];
console.log(` O primeiro valor do array é ${valor1} e está atribuído à variável "valor1"`);
console.log(` O segundo valor do array é ${valor2} e está atribuído à variável "valor2"`);


// 4. separando alguns valores e agrupando outros valores dentro de uma única variável 
// desta forma, tudo o que estiver após o quarto valor do array ficará dentro de um array
// variável "demaisValores"

const [valor3, valor4, valor5, ...demaisValores] = [5, 7, 9, 8, 5, 4, 1, 1, 2, 9, 90, 100];
console.log(`O valor3 é: ${valor3}`);
console.log(`O valor4 é: ${valor4}`);
console.log(`O valor5 é: ${valor5}`);
console.log(`Os outros valores dentro de um único array são:  ${demaisValores}`);

// 5. colocando um valor padrão para uma variável atribuindo seu valor na própria declaração da variável,
// neste caso, a variável nomedes assume o valor padrão 'Rafael' e seu resultado é 'Rafael' mesmo quando
// atribuo um array vazio para este array
const [nomedes = 'Rafael'] = [];
console.log(`O valor padrão é: ${nomedes}`);
const [nomedes2 = 'Rafael'] = [80];
console.log(`Agora, com valor atribuído, o valor da variável mesmo com o valor padrão declarado é ${nomedes2} `)


// 6. criando um objeto cadastroPessoa contendo informações pessoais
const cadastroPessoa = {
    nomee: 'José',     
    idade: 68, 
    escolaridade: 'superior  / técnico'}
console.log("O objeto original é:") 
console.log(cadastroPessoa)

// 7. é possível inserir atributos e seus valores àquele objeto inserindo o nome do atributo novo precedido por "..."
// e o nome do objeto original
const cadastroPessoaTelefone = {...cadastroPessoa, telefone: '1199518711'};
console.log("Agora, o mesmo objeto com a chave/valor 'telefone' adicionada");
console.log(cadastroPessoaTelefone)


// 8. extraindo uma chave de dentro de um objeto e atribuindo esta chave à uma variável. Neste caso, a variável nomee irá
// assumir o valor contido no objeto "nomee" que está em cadastroPessoa
const { nomee } = cadastroPessoa
console.log(`Nome do usuário na variável "nome" é: ${nomee}`);


// 8.1 mesma coisa funciona para a variável "idade" 

const { idade } = cadastroPessoa
console.log(`Variável idade é: ${idade}`)

// 9. passando uma função que recebe as chaves do objeto que foi criado e retorna com seus valores. Aqui é necessário 
// passar somente o nome dos atributos que o JS já extrai seus valores, sem necessidade de depassar o nome do objeto

function imprimeDados({nomee, idade}){
    console.log(`O nome é ${nomee}, e a idade é ${idade} anos`);
}
imprimeDados(cadastroPessoa)