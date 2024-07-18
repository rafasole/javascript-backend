/* 
A função slice permite cortar o array em partes.
O os índices passados como parâmetros se referem as posições inciiais e finais onde o corte será feito
lembrar que esse método requer que o slice seja colocado em outra variável para comportar o novo array com slice
*/

const arrayPessoas = ['Julio', 'Alfredo', 'Elimar', 'Roberta', 'Clauditenete'];

const arraySlice =  arrayPessoas.slice(2, 5); // o corte será feito da posição 2 até a posição 5, o JS elimina a posição inicial e mantém a posição final.
console.log(arraySlice);