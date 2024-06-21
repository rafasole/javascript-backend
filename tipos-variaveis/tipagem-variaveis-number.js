const bool = true;
const string0 = '0';
boolIntParse = Number.parseInt(bool);
boolIntNumber = Number(bool);
stringIntParse = Number.parseInt(string0); 

console.log(stringIntParse); // é possível transofar uma string em number desde que ele seja um número
console.log(boolIntParse); //não é possível transformar um booleano em inteiro
console.log(boolIntNumber); // é possível transformar um booleano em número

console.log(5 * 'a'); //retorna um valor NaN ao tentar fazer uma operação de numero com string;
console.log(Math.sqrt(-1)); // retorno de valores não reais retornam NAN


//para verificar se um número é NAN

//usando o isNaN ele tenta converter o valor para número
//e retorna se o valor é NaN

numero1 = 10;
string1 = 'Oi Mundo';
string2 = NaN;

console.log(isNaN(numero1)); //deve retornar false 
console.log(isNaN(string1)); // deve  retornar true
console.log(isNaN(string2)); // deve retornar true

//usando Number.isNan ele verifica se o valor NaN é de fato NaN,
//sem tentar nenhuma conversão

console.log(Number.isNaN(numero1)); //deve retornar false
console.log(Number.isNaN(string1)); //deve retornar false
console.log(Number.isNaN(string2)); //deve retornar true