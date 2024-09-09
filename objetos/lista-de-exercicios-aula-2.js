/* 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:


nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto. */


/* 
    function mostrarInfoPessoa(pessoa){
        console.log(' Nome: ' +pessoa.nome  +'\n Tipo Dado: ' +typeof(pessoa.nome) +'\n'+
    '\n Idade: ' +pessoa.idade  +'\n Tipo Dado: ' +typeof(pessoa.idade) +'\n'+
' \n Estado Civil: ' +pessoa.solteiro  +'\n Tipo Dado: ' +typeof(pessoa.solteiro) +'\n'+
' \n Hobbies: ' +pessoa.hobbies.toString()  +'\n Tipo Dado: ' +typeof(pessoa.hobbies.toString()) +'\n'
)
    }

    let pessoa = {
        nome: 'Pedro Paulo Souza ',
        idade: 51,
        solteiro: true,
        hobbies: ['video game', 'filmes', 'esporte', 'leitura', 'jantar'], 
    }
    
    mostrarInfoPessoa(pessoa) */

    
/* 

//

2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, 
com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, 
são exibidas corretamente no console. */

/* const pessoa2 = {
    nome: 'Pedro Paulo de Alcântara Vaz',
    idade: 52,
    solteiro: true,
    hobbies: ['leitura', 'esportes', 'jantares', 'estudos', 'filmes'],
    endereco: {
        rua: 'Almeida Elias da Fonseca',
        cidade: 'Pindoroba do Sul',
        estado: 'TO'
    }
}

console.log(pessoa2.endereco)

function mostrarInfoOutraPessoa(outraPessoa){
    return console.log (' Nome: ' +outraPessoa.nome +'\n Tipo Dado: ' +typeof(outraPessoa.nome) +"\n Idade:  " + outraPessoa.idade +'\n Tipo Dado: ' +typeof(outraPessoa.idade)
        +'\n Solteiro: ' +outraPessoa.solteiro +'\n Tipo Dado: ' +typeof(outraPessoa.solteiro) +'\n Endereço: ' +'\n Rua: ' +outraPessoa.endereco.rua +'\n Cidade: ' 
        +outraPessoa.endereco.cidade +"\n Estado:  " +outraPessoa.endereco.estado +'\n Tipo Dado: ' +typeof(outraPessoa.endereco))

}

mostrarInfoOutraPessoa(pessoa2) */



/*
 

 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:


nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido. */

// criando a lista com os objetos e seus parâmetros

/* const pessoas = [{nome: 'João Silva', idade: 25, cidade: 'Macapá'}, {nome: 'Paulo Almeida', idade: 31, cidade: 'São Paulo'},{nome: 'Fernanda Sousa', idade: 44, cidade: 'Belo Horizonte'},
{nome: 'Francisco Chico', idade: 51, cidade: 'Belo Horizonte'}];

// a) criando a função com a listagem de pessoas como parâmetro de entrada
function mostrarPessoas (listagemPessoa) {
    // b) usando push para inserir uma nova pessoa à lista
    listagemPessoa.push({nome: 'Augusto César', idade: 19, Cidade: 'Belo Horizonte'})
    
    return console.log(listagemPessoa) // imprimindo a listagem de pessoas

}

// d) criando a função de filtrar por cidade com a listagem de pessoas e a cidade a ser verificada como
// parametros

 function filtrarPorCidade (listagemPessoa, cidadeVerifica){
    //usando o filter para filtrar às cidades dentro do array de objetos, cada objeto é visto como "dadosColaborador"
    const filtroCidade = listagemPessoa.filter(dadosColaborador => {
        // condição para satisfazer a cidade a ser verificada nos "dadosColaborador"  
        if (dadosColaborador.cidade == cidadeVerifica){
            return dadosColaborador
        }
    })
    //imprime o array com as pessoas filtradas
    return console.log(filtroCidade)
 }

//executa as funções criadas com seus parâmetros respectivos

mostrarPessoas(pessoas);
filtrarPorCidade(pessoas, 'Belo Horizonte'); */






/* 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console. */

const contaBanco = {
    
    mensagemOperação: '',
    saldo: 100,
    depositar:  function (valorDeposito) {
        this.saldo = valorDeposito + this.saldo;
    },
    sacar: function (valorSaque) {
        this.saldo = this.saldo - valorSaque
        if(this.saldo >=0){
        this.saldo = this.saldo
        }
        else{
            this.mensagemOperação = ' saldo insuficiente';
            this.saldo = this.saldo + valorSaque
        }
    },
    dadosCliente: {
        nomeCliente: 'José da Silva',
        contaNum: 0,
        infoCliente: function () {
            return console.log ('Cliente: ' +this.nomeCliente +' Saldo Cliente: ' +contaBanco.saldo)},


    }
}

contaBanco.depositar(500);
contaBanco.sacar(200);
contaBanco.dadosCliente.infoCliente()



//contaBanco[1].depositar(500)
//console.log(contaBanco[1].dadosCliente.infoCliente('oi'))
//contaBanco.sacar(200);
//cliente.infoCliente('José da Silva')
/* console.log(contaBanco.saldo)
console.log(cliente) */
//mostrarSaldo(cliente)
//mostrarSaldo(cliente)
//contaBanco.depositar(200)
//contaBanco.sacar(2000);
//mostrarSaldo(cliente)

