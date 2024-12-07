const cadastroPessoa = {
    nome: 'José',
    idade: '70',
    dadosViagem: {
        passaporte: true,
        validade: '20/03/2035',
        vistoEua: false
    },
    estadoCivil: 'viúvo',
    hobbies: 'viajar',
    exibeResumo: function(){
        console.log(this.nome, this.hobbies)
    },
    local: function(cidade, estado, pais){
        console.log(this.nome +' ' +this.idade +' ' +cidade +' ' +estado +' ' +pais +' ' );

    }
}

const pessoa2 = {
    nome: 'Renato',
    idade: '46',
    hobbies: 'calistenia'
}

cadastroPessoa.exibeResumo() // exibe o resultado do parâmetro
const resumo = cadastroPessoa.exibeResumo;
resumo() //não exibe o resultado, pois a variável não tem capacidade de herdar a relação da função com seus respectivos atributos

//usando o bind
const resumoBind = resumo.bind(cadastroPessoa); //necessário usar o bind para associar a relação entre a variável resumobind e os atributos do cadastro pessoa
resumoBind()

//usando o call
cadastroPessoa.exibeResumo.call(pessoa2)

cadastroPessoa.local('mogi das cruzes', 'são paulo' , 'brasil'); //executa a função com os dados que estão no objeto original
cadastroPessoa.local.call(pessoa2, 'curitiba', 'paraná', 'brasil') // executa a função chamando (call), os atributos de um outro objeto e adicionando elementos nos próprios parâmetros da função
cadastroPessoa.local.apply(pessoa2, ['curitiba', 'paraná', 'brasil']) // executa a função usando apply, passado como um array contendo os elementos que estão sendo passados como parâmetros da função

