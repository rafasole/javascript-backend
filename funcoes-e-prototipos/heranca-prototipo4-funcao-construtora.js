
//função construtora. Ela define o que deve ser executado quando o método "new" for chamado, 
// é como se fosse uma receita de criação do objeto
function User (nome, email, telefone){
    this. nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.exibeInfo = function(){
    return console.log(`Olá, ${nome}! Seguem seus dados: \nemail: ${email} \nTelefone: ${telefone}`)
    }
}

const userRafael = new User('Rafael', 'r@r@uol.com', '11998767891')
userRafael.exibeInfo()