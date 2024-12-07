/*
     **** Factory Function ***
     Veja que a factoryfunction se aproxima de uma função comum, mas que retorna um objeto
     que está dentro de uma função.
     Neste caso não é necessário passar o new User para criar um objeto
*/


function novoUsuario(nome, cpf){
    return {
        nome,
        cpf,
        
        resumoDadosFac: function (){
            console.log(`${nome}, ${cpf}`)
            
        }
    }
}

const usuarioFactory = novoUsuario('helenildo', '33433323432');
console.log(usuarioFactory)
usuarioFactory.resumoDadosFac()


/*
    **** Função Contrsutora ****
    Na função construtora é necessário utilizar o "new User" para que um novo usuário
    seja criado a partir dos parâmetros definidos na função construtora.
    A saída neste caso é uma função cuja saída é atribuída ao atributo "resumoUser"
*/

function User(nomeuser, cpfuser) {
    this.nomeUser = nomeuser
    this.cpfUser = cpfuser

    this.resumoUser = function(){
        
        return `Olá, ${nomeuser}, seu CPF é: ${cpfuser}`}

}
const UserZezinho = new User('Zezinho', '99999999999');
console.log(UserZezinho.resumoUser())

