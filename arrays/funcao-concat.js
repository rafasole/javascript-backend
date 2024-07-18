/* 
A função concat faz a junção de 2 arrays distintos
lembrar que o concat exige que seja criado um novo array para receber os valores dos outros arrays concanetados
a é possível acessar os valores do array concatenado através dos seus índices
*/ 


/*
const arrayNomes = ['Juliana', 'Alfredo', 'Paula', 'Ana', 'Jacqueline', 'Beatriz' , 'Cida'];
const arrayIdades = [35, 40, 22, 56, 39, 14, 61];

const arrayConcat = arrayNomes.concat(arrayIdades);
console.log(arrayConcat)
console.log(arrayConcat[0]) // deve aparecer Juliana
console.log(arrayConcat[13]) // deve aparecer 61

*/

/*
//é possível fazer 2 arrays diferentes serem partes de um terceiro array

const arrayCarros = ['mustang', 'ferrari', 'porche', 'masserati', 'lamborghini'];
const arrayModelos = ['deta', 'f40', 'cayman', 'beta', 'aventador'];

const arrayDeArrays = [arrayCarros, arrayModelos];
console.log(arrayDeArrays) // apresenta o array de arrays com os carros e modelos
console.log(arrayDeArrays[0][0]) // acessa na posição 0 (carros) do array de arrays o valor 0 (mustang)
console.log(arrayDeArrays[1][4]) // acessa na posição 1 do array de arrays (modelos) a posição 4 (aventador)
console.log(arrayDeArrays[0][4], arrayDeArrays[1][4]) // acessa duas posições e trás os valores correspondentes no mesmo array
//neste caso está pegando o valor 4 na lista de carros e o valor 4 na lista de modelos
*/ 


/* 
Mais sobre o concat - usar o concat somente quando não for necessário alterar o array original. para isso é melhor usar o push ou o splice
*/ 
const  arrayNomesMeninas = ['Julia', 'Jacqueline', 'Rebeca', 'Laura']
console.log(arrayNomesMeninas.concat('Paula', 'Marcia')) //aqui ele irá adicionar elemento a elemento que está no concat

const arrayNomesMeninos = ['Henrique', 'Leandro', 'Alfredo', 'Glauco'];
console.log(arrayNomesMeninos.concat(['Flávio' , 'Leonardo'] , ['Juliano' , 'Gustavo'])); // mesmo passando outros arrays no concat, ele inclui o elemento no array original

const arrayNomesVariados = ['Paulo' , 'Jose', 'Renato', 'Paula', 'Thiago'];
console.log(arrayNomesVariados.concat([71, [45, 69, 32, 35], [66,88]])); // cuidado ao  misturar elementos e arrays no concat, pois ele irá incluir o elemento "sozinho" no concat
// mas o array irá como um elemento individual contendo os seus respectivos valores.