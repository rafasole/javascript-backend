const dadosUsuario = {
    dadosCadastrais: {
        //nome: "Godofredo",
        sobrenome: "Albuquerque",
        idade: "73",
        genero: "Masculino",
        cpf: "98790878909",
        email: "g_alburques@gmail.com",
        telefone:"1199878908",
        idUsuario: "001"
    },
    comprasExecutadas:{
        idCompra: "010101",
        produto: "Perfume",
        meioPagamento:"Crédito",
        valorCompra: "r$152,00"
    },
    resumoUsuario: function (){
        const nome = this.nome;
        const sobrenome = this.sobrenome;
        const idUsuario = this.dadosCadastrais.idUsuario;
        const idCompra = this.comprasExecutadas.idCompra;
        const valorCompra = this.comprasExecutadas.valorCompra;
        console.log("Olá, " +nome +"\n" +"O valor da sua compra é: " +valorCompra +"\n" +"Anote o identificador da sua compra: " +idCompra)
    }



}

const admin = {
    nome: "Euclíceo",
    sobrenome: "Linhares",
    idade: "81",
    genero: "Masculino",
    cpf: "99878987801",
    email: "linhares_linhares@gmail.com",
    telefone:"44999990878",
    idUsuario: "002",
    nomeAutorizador:'Eusébio Cunha',
    criatitulo: function (autorizado, nomeAutorizador){
        const nome = this.nome;
        //const nomeAutorizador = this.nomeAutorizador
        const nomeDependente = this.nomeDependente;
        const cpfDependente = this.cpfDependente;
        let mensagemAutorizado = "";
        if (autorizado === true){
            mensagemAutorizado = "AUTORIZADO"
        }
        else{
            mensagemAutorizado = "NÃO AUTORIZADO"

        }
        console.log("Olá, " +nome +"\n" +"Seu título foi criado e "  +mensagemAutorizado +" " +"por: " +nomeAutorizador )

    }
}

Object.setPrototypeOf(admin, dadosUsuario)
admin.criatitulo(true, "Gelimar Ginébrio")
admin.resumoUsuario()


