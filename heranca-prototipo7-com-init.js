const dadosCadastrais = {
    init: function (nome, email, cpf, profissao){ 
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.profissao = profissao;
    },
    exibeInfos: function(){
        console.log(this.nome, this.email, this.cpf, this.profissao)}
    } 


const zezinho = Object.create(dadosCadastrais);
const luquinha = Object.create(dadosCadastrais);

luquinha.init('luzquinha', 'iu@luzzas', '00000000');

zezinho.nome = 'zezinho';
zezinho.cpf = '12333322123433';


luquinha.exibeInfos();
zezinho.exibeInfos();
