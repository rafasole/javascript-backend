/*  
- Função splice remove valores de um array a partir de um índice que é passado como parâmetro
- É possível incluid um outro valor no lugar dos parâmetros que foram excluidos  na função splice
*/

arrayAlunos = ['Julia', 'Maria', 'Manoela' , 'Eliana', 'Pedro'];
arayIdades = [30, 20, 40, 23, 53];

arrayAlunos.splice(1,0); // a partir da posição 1, eliminar 0 índices. o resultado é o array original, pois, não foi eliminado nenhum índice
console.log(arrayAlunos);

arrayAlunos.splice(1,3); // a partir da posição 2, eliminar 3 índices. 
console.log(arrayAlunos)

arrayAlunos.splice(2, 2, 'Ronaldo') // à partir da posição 2, elimine 2 índices e inclua o Ronaldo
console.log(arrayAlunos)