//cria o objeto
const dadosUsuario = {
    nome: "Jezebel",
    cpf: "43298087898",
    telefone:"1588789098",
    idRegistro: "001",
    resumoUser: function(){
        console.log(`*** RESUMO DOS DADOS DO USUÁRIO*** \n Nome: ${this.nome} \n CPF: ${this.cpf}\n Telefone: ${this.telefone}`)
    }   
}

/*  diferentemente do uso das construtoras, não precisa passa o "prototype" no argumento do Object.create, 
    o próprio "user" já é um objeto */

//  criando a herança e chamando para exibir os dados originais de usar

/*  neste caso, a herança é o usuário criado acessar a função "resumoDados" com 
suas respectivas informações    */

/*  O argumento do Object.create (dadosUsuario) indica qual é a o objeto que será herdado para o objeto 
    que está sendo criado (gezuinoUser)
*/

const gezuinoUser = Object.create(dadosUsuario);

//  Modificando os parâmetros do objeto que utilizará a herança (gezuinoUser)
gezuinoUser.
     nome = "Gezuíno";
     cpf = "33909890987";
     telefone = "1100989098";



//passando a função que foi atribuída aos dadosUsuario ao gezuinoUser que foi utilizado como herança

gezuinoUser.resumoUser()

// Outra forma de fazer é passando o objeto (usuarioTeste) como argumento da função dentro da função que será herdada 

const usuarioTeste = {
    resumoBancario: function(usuarioTeste){
        console.log(`*** SEUS DADOS BANCÁRIOS *** \n Conta Corrente: ${usuarioTeste.cc}\n Banco: ${usuarioTeste.banco}\n Agência: ${usuarioTeste.ag}`);
        }
}

//criando a relação da herança

const usuarioZe = Object.create(usuarioTeste);

//passando a função que será herdada (usuarioTeste) dentro da função cujos dados estão sendo utilizados (usuarioZe) e seus respectivos parâmetros

usuarioZe.resumoBancario({cc: '4998', ag: '2795-9' , banco: '234'})


