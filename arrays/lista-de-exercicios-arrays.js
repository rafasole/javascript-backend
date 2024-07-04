/*


// 1.  Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
// Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7).
// Imprima no console o array e também a informação de comprimento do array. 

//cria um array com 7 índices no total e os valores nas posições 1, 3 e 7
const arrayTeste = ['careca', , 0 , , , , , true];

//apresenta resultado do comprimento do array
console.log(`O comprimento do array é de: ${arrayTeste.length}`);

//apresenta o array completo
console.log(`Array:  ${arrayTeste}`);


*/


/*


//2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor 
//para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

//cria o array com as 5 posições e seus elementos
const arrayOriginal = ['banana', 'macaco', 1, true, 5.28];

//apresenta o resultado do array
console.log (`Exibindo array original ${arrayOriginal}`);

//substitui o valor do array na posição 0
arrayOriginal[0] = 'avião';

//apresenta array com a nova atribuição
console.log(`Exibindo array com a substituição de uma string no valor 00 ({arrayOriginal}`);
*/


/*


// 3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). 
//Imprima no console os itens presentes no array para verificar se os números foram adicionados. 
//Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. 
//Imprima no console o array atualizado para verificar a mudança. 

//criação do array vazio
const meuArray = [];

//adicionando valores ao array usando push
meuArray.push(5);
meuArray.push(10);
meuArray.push(15);

//apresenta array com as inclusões
console.log(`O array com os números adicionados é ${meuArray}`);

//realiza operação para fazer o valor na posição zero ser multiplicada por 2
const alteracao = meuArray[0] * 2;

//substitui a multiplicação na posição 0 do array
meuArray[0] = alteracao;

//apresenta resultado da multiplicação
console.log(`O array com o valor ajustado é ${meuArray}`);


*/


/*


// 4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). 
// Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

//criação de um array vazio
const arrayEx = [];

//apresenta o array vazio antes da inclusão dos valores
console.log(`Array antes da atribuição dos valores: ${arrayEx}`);

//inclusão dos valores ao array vazio
arrayEx.push(5);
arrayEx.push(38);
arrayEx.push(44);

//apresenta resultado após a inclusão dos valores
console.log(`Array após atribuição de valores: ${arrayEx}`);


*/


//5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica.
//Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console.
//Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.


/*


//criação do array vazio
const clinica = [];

//inclusão dos valores ao array vazio
clinica.push('gato');
clinica.push('cachorro');
clinica.push('passarinho');

//apresentação do array após inclusão dos valores
console.log(`Lista de entrada de animais: ${clinica}`);

//remoção e apresentação de cada remoção do array
clinica.pop()
console.log(`Lista de animais na clínica: ${clinica}`);

clinica.pop();
console.log(`Lista de animais na clínica: ${clinica}`);

clinica.pop();
console.log(`Lista de animais na clínica: ${clinica}`);


*/


/*


//5 - segunda forma

const clinica2 = ['gato', 'cachorro', 'passarinho'];


*/