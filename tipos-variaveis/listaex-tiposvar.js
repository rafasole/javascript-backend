//Exercício 01: Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
console.log('Exercício 01');
const frase = 'Olá, qual o seu nome?';
const tamanhoFrase = frase.length;
const fraseUpper = frase.toUpperCase();
console.log(`A frase "${frase}" possui tamanho ${tamanhoFrase} e em maiúscula: ${fraseUpper}`);


//Exercício 02: Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
console.log('Exercício 02');
const varNull =  null;
let varUndefined;

console.log(`O tipo da variável ${varNull} é ${typeof(varNull)}`); //retornaobject como tipo
console.log(`O tipo da variável ${varUndefined} é ${typeof(varUndefined)}`); //retorna underfined como tipo

//Exercício 03: Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes
//tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

console.log('Exercício 03');
const varTipoNumber = Number('50');
const varTipoString = 'Qual sua idade?';
const varTipoBool = false;

console.log(`O tipo de dados da variáel ${varTipoNumber} é ${typeof(varTipoNumber)}`);
console.log(`O tipo de dado da variável ${varTipoString} é ${typeof(varTipoString)}`);
console.log(`O tipo de dado da variável ${varTipoBool} é ${typeof(varTipoBool)}`);

//Exercício 04: Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string 
//e da string para número. Exiba os tipos de dados resultantes no console.

console.log('Exercício 04');
const varNum = Number(99); 
const varString = String('90');

varNumToString = String(varNum);
varStringtoNum = Number(varString);

console.log(`A variável ${varNum} foi transformada de ${typeof(varNum)} para ${typeof(varNumToString)}`);
console.log(`A variável ${varString} foi transformada de ${typeof(varString)} para ${typeof(varStringtoNum)}`);

//Exercício 05: Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase,
//toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

console.log('Exercício 05');
const stringTeste = 'Texto longo para tentar um slice, upper case e lowercase';
const stringSlice = stringTeste.slice(0,5); //trata o string como uma cadeia de caractéres, um vertor que pode ser enumerado
const stringUpper = stringTeste.toUpperCase(); 
const stringLowe = stringTeste.toLowerCase();


console.log(`Testando conversão da string com stringSlice: ${stringSlice}\nTestando conversão da string com UpperCase: ${stringUpper}\nTestando conversão de String com LoweCase: ${stringLowe}`);