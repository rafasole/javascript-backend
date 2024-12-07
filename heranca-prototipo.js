const usuario = {
    nome: 'Godofredo', 
    idade: '65',
    gênero: 'Masculino',
    hobbie: 'Bocha',

    dadosBancarios: {
        banco: 'Bradesco',
        agencia: '3550-4',
        conta: '245-9',
        tipo: 'conta corrente'
        },

    resumoInfoUsuario: function(){
        const agencia = this.dadosBancarios.agencia;
        const conta = this.dadosBancarios.conta;
        const tipo = this.dadosBancarios.tipo;
        const nome = this.nome;
        console.log('Olá, ' +nome +'!' +' Os dados da sua ' +tipo +' ' +'são: \n' +'Agência: ' +agencia +'\n' +'Conta: ' +conta +'\n')
    }
}

const dadosSigilosos = {
    sobrenome: 'Linhares',
    antecedentes: true,
    negativado: true,
    restricao_credito: true,
    clienteAprovado: false,
    situacaoCliente: function(){
        if (this.antecedentes === true || this.negativado === true){
            console.log('Cliente ' +this.nome +' ' +this.sobrenome +' Reprovado')
        }
        else{
            console.log('Cliente' +this.sobrenome +'Aprovado')
        }
    }
}

//pedindo para exibir os dados do situacaocliente, veja que o console retorna um "undefined" no campo "nome"
dadosSigilosos.situacaoCliente()

//passando o setPrototypeOf, os parâmetros definidos em usuario passam a valer também para os dadosSigilosos.
//importante salientar que o primeiro atributo do setPrototype of é o objeto que irá conter os dados do objeto genérico
//setPrototypeOf(objetodestino, objetoPai)
Object.setPrototypeOf(dadosSigilosos, usuario);

//após o setPrototypeOf, o undefined é substituído pelo valor do parâmetro "nome" que foi herdado do objeto usuario
console.log(dadosSigilosos.situacaoCliente())

