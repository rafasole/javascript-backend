// Prática de aula para realizar higienização de texto

//Realizando o require para o file system
const fs = require('fs');
/*
Passando o argumento para que o terminal utilize a linha
para interpretar o contaúdo do texto
Sem seguida usar o segundo índice do array que o js cria quando
roda o script
*/


const capturaTexto = process.argv;
const textoPrompt = capturaTexto[2];

/*
usando o readFile para para interpretar o texto que está no conteúdo
do segundo índice do array do JS
O read file também ficará responsável por chamar a função de separação
de parágrafo que irá desencadear a sequencia das outras funções de 
separação por palavras e de higienização

A saída imprime o array de objetos contendo a contagem das palavras do texto,
resultado da função de separação por parágrafo.
*/
fs.readFile(textoPrompt,'utf-8',(erro, texto) => {
    const preFiltro = separadorDeParagrafo(texto)
    console.log(preFiltro)})
    
/*
função de separação por parágrafo que realiza a quebra por parágrafo e depois
faz um flatmap para transoformar parágrafos vazios em arrays vazios
Caso o parágrafo não esteja vazio, irá instanciar a função de separação
por palavras.
Como saída, o retorno do flatmap é um array contendo os objetos que foram 
higienizados
*/
function separadorDeParagrafo(texto){
    const splitParagrafo = texto.split('\n');
    const paragrafoMap = splitParagrafo.flatMap(paragrafo => {
        if(paragrafo == '') return [];
        const objetoContagem = separadorDePalavras(paragrafo)
        return objetoContagem})
    return paragrafoMap
    }
       
/*
função de separação por palavras que faz as palavras mínusculas e considera
o "espaço" como separador de palavra
cria-se o objeto vazio que irá receber as palavras que serão contabilizadas

Iteração com forEach para que cada palavra passe pela função de higienizador de palavras,
responsável por eliminar os caracteres especiais

A verificação do tamanho da palavra para maior ou igual a 3 tem a finalidade de eliminar 
palavras curtas como preposições e conjunções
*/
function separadorDePalavras(paragrafo){
    const splitPalavras = paragrafo.toLowerCase().split(' ');
    objectCount = {};

    splitPalavras.forEach(palavras => {
        const palavraHigienizada = higienizadorDePalavras(palavras)
        if (palavraHigienizada.length >= 3){
            // o contador de palavras atualiza o objeto que está sendo criado com o retorno
            // da palavra que foi higienizada e adiciona 1 ao contador de palavra, para caso ela
            // ou define como 1 para caso ela só tenha uma ocorrência
            objectCount[palavraHigienizada] = (objectCount[palavraHigienizada] || 0) + 1
            }

        })
        return objectCount
}

/*
A função de higienzação de palavras elimina os caracteres especiais e substitui por espaço
vazio
*/
function higienizadorDePalavras(palavras){
    const palavraHigienizada = palavras.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
    return palavraHigienizada
}


