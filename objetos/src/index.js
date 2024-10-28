/*  
    fs é uma biblioteca do node JS que executa funções relacionadas ao sistema de arquivos.
    o programa irá utilizar para poder capturar o que virá na chamada de console como um 
    caminho para ler um arquivo texto e interpretá-lo como uma string
*/
const fs = require('fs');

/*  
    process.argv é uma função  que processa os dados que vierem na linha de execução do comando
    do terminal e transforma em um array
*/
const lerTerminal = process.argv;

/* 
    a segunda posição do array obtido no process.argv corresponde aos dados que eu quero interpretar
    como string
*/
const linkTexto = lerTerminal[2];

/*
O read file faz a conversão do dado que foi colocado na linha e será lido como uma string, precisa
passar para ele a codificação e uma variável de erro dentro de uma arrow function. a variável "texto"
é o conteúdo convertido em string
*/

fs.readFile(linkTexto, 'utf-8', (erro, texto) => {
    console.log(texto)
})

