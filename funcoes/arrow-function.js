// escrevendo uma arrowfunction como se fosse uma função de várias linhas
//notar que não precisa pasar a instrução "function", é como se ela fosse substituída 
//pela indicação de arrow ("=>")

const testeSintaxe = (nome, idade) => {
    return console.log(` Olá, seu nome é: ${nome} e sua idade é: ${idade}`);
}
testeSintaxe('Rafael', 40)

//escrevendo uma arrowfunction retornando em uma única linha
//veja que não precisa passar o parâmetro "return", após a indicação do arrow

const testeLinhaUnica = (mensagem, valor) =>  console.log(`${mensagem} , ${valor}`);

testeLinhaUnica('Olá, testando arrow em linha única', 1000);