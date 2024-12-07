//função construtora
function User(nome, genero, escolaridade, cpf){
    this.nome = nome;
    this.genero = genero;
    this.escolaridade = escolaridade;
    this.cpf = cpf;
    this.resumoInfo  = function (){
        return ` Olá, ${nome} !\n Seu gênero é: ${genero}\n Seu grau de instrução é: ${escolaridade}\n Seu CPF: ${cpf} `
    }
}

//função admin que irá herdar os parametros de User
function Admin(permissao, concedida){
    this.permissao = permissao;
    this.concedida = concedida;
    User.call(this, 'Eusébio', 'masculininho', 'ensino fundamental', '32233323400')
    //console.log(concedida)
    this.saidaPermissao = function () {
        let mensagemPermissao = "";
        if (concedida === true){
            mensagemPermissao = "concedida";
        }
        else{
            mensagemPermissao = "negada";
            
        }
    return `Sua permissão de ${permissao} foi  ${mensagemPermissao}`

    }
}

//const userAdolfo = User('Adolfo', 'masculinão', 'ensino médio', '99890987891')
//console.log(resumoInfo())


Admin.prototype = Object.create(User.prototype) //cria-se um objeto com a construtora User e atribui o Admin como protótipo
const adminEusebio = new Admin('admin', true)
console.log(adminEusebio.saidaPermissao())
console.log(adminEusebio.resumoInfo())



/* 

**** EXEMPLO 2 - Aqui não utilizei o  "Admin.prototype = Object.create(User.prototype)" 
e o código rodou normalmente ****


function User (nome, senha, cpf){
    this.nome = nome;
    this.senha = senha;
    this.cpf = cpf
    this.resumolog = function (){
        console.log(`Olá ${nome}! \n Sua nova senha é: ${senha} \n CPF: ${cpf}`)
    }
}

function Admin(permit){
    this.permit = permit;
    User.call(this, 'Zezinho', '12345678', '22122221344');
    this.msgAcesso = function(){
        console.log(`Acesso de usuario ${permit} autorizado!`)
    }
}

Admin.prototype = Object.create(User.prototype)
adminZezinho = new Admin('admin');

console.log(adminZezinho.msgAcesso())
console.log(adminZezinho.resumolog()) */