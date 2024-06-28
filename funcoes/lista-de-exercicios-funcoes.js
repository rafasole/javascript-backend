/*
//1.Crie uma função que receba o nome de uma pessoa como argumento e retorne uma
//saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

//1a) Passando como função normal
function saudaUsuario(nome){
    return console.log (`Olá, ${nome}, seja bem vindo!!`);
}

//1b) Passando como uma função com const
const saudaUsuarioConst = function(nome2){
    return console.log(`Olá ${nome2}, sem bem vindo!`);
}

//1c) Passando como uma arrow function

const saudaUsuarioArrow = (nome3) => {
    return console.log(`Olá ${nome3}, seja bem vindo`);
}

//1d) Passando como arrow function de uma única linha

const saudaUsuarioArrowLinha = (nome4) => console.log(`Olá ${nome4}, seja bem vindo`);

saudaUsuario('João');
saudaUsuarioConst(`Pedro`);
saudaUsuarioArrow('Lucrecia');
saudaUsuarioArrowLinha('Josefina');
*/

/*
//2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
//Imprima o resultado no console.

function verificaMaioridade (nome, idade){
    let autoriza;
    
    if(idade >= 18){
        autoriza = console.log(`Olá, ${nome}, acesso PERMITIDO`);
    }
        else{
           autoriza = console.log(`Olá ${nome}, acesso NEGADO`);
        }
    return autoriza;

}
verificaMaioridade('Joquinha' , 15);
verificaMaioridade('Mariazinha', 30);
*/


/*
//3. Crie uma função que receba uma string e verifique se é um
//palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método
//de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima 
//o resultado no console.

function reverteString (palavra){
    const palavraInvertida = palavra.split("").reverse().join("");
    let palindromo = false
    if (palavra === palavraInvertida){
        palindromo = true;        
    } else{ 
        palindromo;
    }
    return palindromo;

}

function reverteStringSemMetodo(palavra){
    let palavraInv = "";
    for (let i = palavra.length -1  ; i >= 0 ; i--) {
        palavraInv = palavraInv + palavra[i];
    }
        
    if (palavra == palavraInv){
        return console.log(`A palavra ${palavra} é um palíndromo`);
    } else{
        return console.log(`A palavra ${palavra} não é um palíndromo`);
    }    
        
    

    
}
console.log(reverteStringSemMetodo('onibus'));
console.log(reverteStringSemMetodo('ovo'));
*/

/*
//4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
//Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
//Imprima o maior valor no console.


// 4a) método colocado como solução de aula

function defineMaior (num1, num2, num3){
    let maior = num1;
    if (num2 > maior){
        maior = num2;
    }

    if (num3 > maior){
        maior = num3;
    }
    else{ 
        //return console.log(maior)
    }
    return console.log(`O maior número é o ${maior}`)
 
 
}

// 4b) meu método comparando os 3 numeros usando operadores lógicos

function defineMaior2(n1,n2,n3){

    let maior = 0;
    if (n1 > n2 && n3){
        maior = n1;
    }
    if (n2 > n1 && n2){
        maior = n2;
    }
    if (n3 > n1 && n2){
        maior = n3;
    }
    return console.log(`O maior número é o ${maior}`)

}

// 4c) mesmo conceito do defineMaior1 com arrow function (para treinar)
const defineMaior3 = (nn1, nn2, nn3) => {

    let maior = nn1;

    if (nn2 > maior){
        maior = nn2;
    }
    if (nn3 > maior){
        maior = nn3;
    }
    return console.log(`ARROW -- O maior número é o número ${maior}`);
}

defineMaior(25,6,15)
defineMaior2(5,68,15)
defineMaior3(5,6,150)
*/


//5) Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. 
//A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const potencia = (base, expoente) => {
    let calculaPotencia = Math.pow(base,expoente);
    return console.log(`A potencia resultante é: ${calculaPotencia}`);

}

potencia(2,16);