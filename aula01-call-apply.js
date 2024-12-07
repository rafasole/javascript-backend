cadastroPessoa = {
    nome: "Jose Roberto",
    endereco: {
        rua: "Mariano de Sousa Melo",
        numero: '583',
        complemento: '12B',
        bairro: 'Vila Mogilar'
    },
    idade: '68',
    hobbies: {
        comida: 'chocolate',
        esporte: 'ciclismo',
        lazer: 'viagem'
    },
    exibeResumo: function (estadoCivil, tipoSanguineo) {
        console.log(this.nome, this.idade)
        console.log('Olá, ' +this.nome +' Seja Bemvindo. Sua idade é: ' +this.idade +' anos. Informações adicionais: ')

    },
    informacoesAdicionais: function (veiculo, estadoCivil){
        console.log('Olá, ' +this.nome +'Seja bemvindo' +'Seu carro é um ' +veiculo +' e seu estado Civil é: ' +estadoCivil)
    } 

}

cadastroPessoa2 = {
    nome: 'Rafael Franco',
    idade: '40'
}

console.log('** exibindo o conteúdo de uma função dentro de um objeto **')
cadastroPessoa.exibeResumo()

//bind
console.log('**usando bind para associar uma const a um objeto secundário***')
const resumoPessoa = cadastroPessoa.exibeResumo;
const resumoBind = resumoPessoa.bind(cadastroPessoa);
resumoBind()


//call
console.log('**usando o call para atribuir valores de outros objetos a um objeto original***')
cadastroPessoa.informacoesAdicionais('palio', 'divorciado')
console.log('**inserindo outros objeto e outros dois atributos de uma função dentro de um objeto** \n')
cadastroPessoa.informacoesAdicionais.call(cadastroPessoa2, 'palio', 'divorciado')

//apply
cadastroPessoa.informacoesAdicionais.apply(cadastroPessoa2, ['palio', 'divorciado'])
