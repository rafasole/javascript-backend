//** Em resumo, ao passar a variável como número, o JS só irá fazer a conversão para número se o que for passado for um número (mesmo que em formato string) ou um null
// para todos os outros casos ele devolve um NaN  **

//declarando string numérica como número, converte para number e o resultado é um number:
const numeroStringComoNumero = Number('1');
console.log(`string como numero retorna ${numeroStringComoNumero} com tipo ${(typeof(numeroStringComoNumero))} \n`);

//declarando string como número o resultado é um NaN, mas o tipo é number:
const stringComoNumero = Number('Oi Mundo');
console.log(`string como numero retorna ${stringComoNumero} com tipo ${(typeof(stringComoNumero))} \n`);

//declarando undefined como Number, retorna NaN e tipo número
const undefinedComoNumero = Number(undefined);
console.log(`undefined como numero retorna ${undefinedComoNumero} com tipo ${(typeof(undefinedComoNumero))} \n`);

//declarando null como número, retorna 0 e tipo número
const nullComoNumero = Number(null);
console.log(`null como numero retorna ${nullComoNumero} com tipo ${(typeof(nullComoNumero))} \n`);

// transformando string para caixa baixa
const mensagem = 'OI TUDO BEM? VOCÊ FOI PEDALAR HOJE?';
console.log(`mensagem original: ${mensagem}`);
console.log(`mensagem ajustada: ${mensagem.toLowerCase()} \n`);

// transformando string para caixa alta
const mensagem2 = 'cuidado! essa estrada é perigosa""';
console.log(`mensagem original: ${mensagem2}`);
console.log(`mensagem ajustada: ${mensagem2.toUpperCase()} \n`);

//usando includes para verificar se a palavra é encontrada na string
console.log(`A mensagem 2 inclui a palavra "estrada"?`);
console.log(`${mensagem2.includes('estrada')} \n`); //retorna true

console.log(`A mensagem 2 inclui a palavra "caminho"?`);
console.log(`${mensagem2.includes('caminho')} \n`); //retorna false


//transformando um string numérico para int, retorna number corretamente
const stringNumToInt = '0';
stringNumToIntconverted = parseInt(stringNumToInt);
console.log(`Convertendo um número como string para int, retorna: ${stringNumToIntconverted} e é do tipo ${typeof(stringNumToIntconverted)} \n `);

//transformando um string para int, retorna NaN
const stringToInt = 'Oi tudo bem?';
stringToIntConverted = parseInt(stringToInt);
console.log(`Convertendo um string para int, retorna: ${stringToIntConverted} e é do tipo ${typeof(stringToIntConverted)} \n `);

//transformando um string para float, o resultado é um number
const stringNumToFloat = "0.234";
stringNumToFloatConverted = parseFloat(stringNumToFloat);
console.log(`Convertendo um número como string para float, retorna: ${stringNumToFloatConverted} e é do tipo ${typeof(stringNumToFloatConverted)} \n `);

//ao tentar transformar um número float composto por qualquer coisa após ou antes, ele considera somente os números
const stringNumToFloat2 = "0.234australopitecos";
stringNumToFloatConverted2 = parseFloat(stringNumToFloat2);
console.log(`Convertendo um número como string para float, retorna: ${stringNumToFloatConverted2} e é do tipo ${typeof(stringNumToFloatConverted2)} \n `);

//transformando um int para number o resultado é um number
const intToNumber = 66;
intToNumberConverted = Number(intToNumber)
console.log(`Convertendo um número int para Number, retorna: ${intToNumberConverted} e continuou sendo do tipo ${typeof(intToNumberConverted)} \n `);

//transformando um float para number, o resultado é um number
const floatToNumber = 66.99;
floatToNumberConverted = Number(floatToNumber)
console.log(`Convertendo um número float para Number, retorna: ${floatToNumberConverted}, antes era ${typeof(floatToNumber)} e é do tipo ${typeof(floatToNumberConverted)} \n `);

//transofmrnado um string para number, o resultad é um NaN, do tipo Number
const stringToNumber = 'Oi Tudo bem?';
stringToNumberConverted = Number(stringToNumber)
console.log(`Convertendo string para Number, retorna: ${stringToNumberConverted} e é do tipo ${typeof(floatToNumberConverted)} \n `);