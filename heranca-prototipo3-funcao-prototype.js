//criando uma propriedade e associando direto a função construtora

function User(){};
User.prototype.perfil = 'estudante'; //definindo que "perfil" é uma propriedade de user
let estudante = new User() //criando um novo usuário com nome estudante

console.log(estudante.perfil)