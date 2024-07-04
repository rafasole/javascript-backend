//construindo um array com as notas bimestrais
const notasAluno = [6.5, 7, 8, 10];

// verificando o tamanho do array com length
console.log(`O tamanho do array é: ${notasAluno.length}`);

//acessando um valor do array atraves do seu respectivo índice
console.log(`O valor do array no índice ou elemento zero é ${notasAluno[0]}`);


// realizando a soma dos valores do array um a um
const somaArray = notasAluno[0] + notasAluno[1] + notasAluno[3] // notar que o array possui 3 índices e 4 elementos

//calculando a media dos valores do arrray utilizando o length

const mediaArray = somaArray/notasAluno.length;
console.log(`A média do aluno foi de ${mediaArray}`);

//array de strings
const arrayStrings = [ 'calabresa', ' margherita ', ' pepperoni '];
console.log(`Lista pizza:  ${arrayStrings} `)

//array de elementos de diversos tipos

const arrayVariado = ['banana', true, [2, 5, 7, 10], 28]; // array pode ser composto de vários tipos de dados
console.log(arrayVariado)

//acessando o índice 2 do arrayVariado

console.log(arrayVariado[2]);

//acessando o terceiro índice do array contido no arrayVariado
console.log(arrayVariado[2][3]);