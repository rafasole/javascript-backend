/* // ***PRATICAS DE AULA***
// formação: Aprenda a programar em JavaScript com foco no back-end
// etapa: fundamentos do javascript
// modulo: javascript conhecendo objetos


//criando um objeto
const veiculo = {
    ano: '2005',
    marca: 'Ford',
    modelo: 'Focus',
    placa: 'ALX-5599',
    cor: 'azul',

    //criando um bloco de parâmetros de um objeto que já contém outros parâmetros principais
    detran:
    {
        licenciamento: 'sim',
        ipva: 'sim',
    }
    
    }

    //acessando o atributo dentro do bloco de parâmetro que foi criado
    console.log(veiculo.detran.ipva)
    //acessando um parâmetro principal usando notação de ponto
    console.log(veiculo.modelo)
    //acessando um parâmetro principal usando a notação de colchetes
    console.log(veiculo['cor'])
    //criando um parâmetro novo dentro do objeto veículo
    veiculo.proprietario = 'josé augusto machado'; 
    //criando um segundo parâmetro novo dentro do objeto veiculo
    veiculo.cpf = '9243189995-45'
    console.log (veiculo)
    //usando um método de array para um parâmetro dentro objeto, usei o substring para filtrar
    //somente os 3 primeiros dígitos do CPF
    const cpfIni = veiculo.cpf.substring(0,3)
    console.log(veiculo.cpf)
    console.log(cpfIni)

    // alterando o valor de um parâmetro

    // mostra valor do parâmetro antes de alterar
    console.log(veiculo.detran.ipva);
    veiculo.detran.ipva = 'não'
    // mostra o valor do parâmetro após alteração
    console.log(veiculo.detran.ipva)

    // criando um parâmetro vazio
    veiculo.localidade = '';
    console.log(veiculo)
    //completando o parâmetro vazio com valor
    veiculo.localidade = 'sorocaba'
    console.log(veiculo);
    // deletando um parâmetro usando a notação ponto
    delete veiculo.detran
    console.log(veiculo)
    //deletando um parâmetro usando a notação colchetes
    delete veiculo['localidade']
    console.log(veiculo);
 */


//criando um objeto para controle de acesso de pessoas
//o campo localidadesPermitidas são os estado sem que a pessoa terá acesso
//caso a pessoa tem acesso o 'RJ', devo fazer um complemento no array de zonasPermitidas para inserir a zona 88
//caso a a localidadePermitida não exista na lista, deve-se exibir uma mensagem de erro

//criando o objeto com seus respectivos parâmetros
/* horaUtcReq = new Date().getUTCHours()

    const cadastroEvento = {
        nome: 'Zé Bedeu da Silva Sousa',
        zonasPermitidas: [5, 2, 3, 1, 4, 9, 10],
        localidadeCadastramento: 'MG',
        lodalicadesPermitidas: ['MG', 'MG' , 'RS', 'FTZ', 'RR', 'SPO', 'RJ'],
        vip: false,
        // passando um array contendo os tipos de horas disponiveis no momento do cadastro
        formatHoras: ['Data com horas UTC: ' + new Date().getUTCHours(), 'Ano Atual: ' + new Date().getFullYear(), 'Hora Corrente: ' + new Date().getHours(), 'Horas em milissegundos:' + new Date(500000), 'Hora em númérico (lembrar que o mês é por posição, portanto, 06 é julho: ' + new Date(1984, 06, 19), 'Hora em string: ' + new Date('1979, 06, 20')], //posso colocar uma método de horas dentro do objeto
        viaCredencial: 1,
        empresaUsuario: 'Limpezas Fast',
        // criando um objeto de endereço dentro do objeto cadastroEvento
        enderecoPessoa: [{
            tipoEndereo: 'Pessoal',
            pais: 'Brasil',
            estado: 'BA',
            cidade: 'Salvador',
            bairro: 'Centro',
            rua: 'Rua do Centro de Salvador',
            numero: 512,
            complemento: 'apto 34',
            CEP: '09877-190'
        }, 
        {   tipoEndereo: 'Profissinal',
            pais: 'Brasil',
            estado: 'SP',
            cidade: 'Pindaminhangaba',
            bairro: 'Bairro dos Ipês',
            rua: 'Rua dos Ipês coloridos',
            numero: '194.126.87.40',
            complemento: '/24',
            CEP: '90890180'

        }]

    }
               
    

//crio uma mensagem padrão de localidade não encontrada para caso o estado não exista na pesquisa de localidades 
let mensagem = 'localidade não encontrada'

//crio um flag de ativaLocalidade para verificar se o programa deve inserir ou não a zona 88 após o filter varrer
//todas as localidades do array localidadesPermitidas
let ativaLocalidade = false
let procuraLocalidade = 'TO' //essa localidade não existe no array, deve retornar mensagem de erro

// faço um filter para varrer as localidades do array de localidadesPermitidas
cadastroEvento.lodalicadesPermitidas.filter(localidades => {
    if (localidades == procuraLocalidade) { 
        //caso o filter encontre a localidade procurada deve-se mudar o flag de ativaLocalidade para true
        ativaLocalidade = true
     } 
    })
    //caso o flag de ativaLocalidade retorne true, insere o valor 88 no array de Zonas Permitidasd
    if (ativaLocalidade){
        cadastroEvento.zonasPermitidas.push(88)        
    }
    else{
    // caso o flag de ativaLocalidade retorne false, retorna mensagem de erro e remove o último elemento das
    // zonas Permitidas
        cadastroEvento.zonasPermitidas.pop()
        console.log(mensagem)  

    }

// acessando o parâmetro zonasPermitidas
console.log(cadastroEvento.zonasPermitidas)

// acessando um elemento específico do array que compõe as loalidadesPermitidas
console.log(cadastroEvento.lodalicadesPermitidas[2])

//acessando um objeto dentro de outro objeto
console.log(cadastroEvento.enderecoPessoa)

//acessando um elemento de um objeto que está dentro de outro objeto
console.log(cadastroEvento.enderecoPessoa[1].CEP)

//acessando todos os endereços dentro do objeto array de endereços
console.log(cadastroEvento.enderecoPessoa)


//acessando o primeiro endereço do array no primeiro índice
console.log(cadastroEvento.enderecoPessoa[0])

//acessando o CEP do primeiro endereço do array dentro do objeto array 
console.log(cadastroEvento.enderecoPessoa[0].CEP)

//adicionando mais um endereco ao array de enderecos
cadastroEvento.enderecoPessoa.push({tipoEndereo: 'Pessoal',
    pais: 'Brasil',
    estado: 'PR',
    cidade: 'Curitiba',
    bairro: 'Batel',
    rua: 'Rua do Batel',
    numero: 511,
    complemento: 'apto 24',
    CEP: '05010980'})
console.log(cadastroEvento.enderecoPessoa);


//fazendo um filter para varrer os elementos de endereço e retornar somente os endeços que são do tipo
//endereço Pessoal
const categEndereco = cadastroEvento.enderecoPessoa.filter((endereco) => {
    if (endereco.tipoEndereo == "Pessoal") {
       return endereco
    }
})

console.log(categEndereco)

//verifica se um cliente é VIP, se for VIP deve-se inserir 00 na lista de localidades permitidas
if (cadastroEvento.vip){
    cadastroEvento.lodalicadesPermitidas.push('00')
}
else{
    console.log('Cliente não é Vip')
    
}

// chamando o parâmetro de horas para trazer os formatos de horas cadastradas no sistema
console.log(cadastroEvento.formatHoras) 
 */


/* 
//criando dois objetos com parâmetros distintos

const objeto1 = {
    filme: 'senhor dos anéis',
    gênero: 'fanstasia',
    ano: 2002,
}

const objeto2 = {
    categoria: 'imbd',
    nota: '8.0',
    oscars: 11

}

//usando o spread operator para concatenar os elementos dos objetos

const filmes = {...objeto1, ...objeto2}
console.log(filmes)

//fazendo um teste com dois arrays distintos
const vetor1 = [1, 2, 3, 4];
const vetor2 = [100, 200, 300, 400]

//aplicando o concat do array 1 com o array 2
const vetor3 = vetor1.concat(vetor2);
console.log(vetor3)

//aplicando o spread operator dos dois arrays
const vetor4 = [...vetor1, ...vetor2];

//verificando os resultados, aparentemente o concat e o spread operator trazem os mesmos resultados
console.log(vetor4)
 */


/*
//criando dois objetos com parametros distintos


const objeto = {
    tipo: 'hobbit',
    nome: 'frodo',
    categoria: 'bolseiro',
    filme: 'senhor dos aneis'
}

//utilizando o for...in para listar os parâmetros inseridos no objeto
//utilizando o for...in para listar os valores dos objeto com notação colchetes

for (parametros in objeto){
    //console.log(parametros);
    const valores = objeto[parametros];
    console.log(parametros +': ' +valores)
} */


/* // for in
//criando um objeto com um outro objeto como parâmetro
const objetoComObjetoDentro = {
    tipo: 'hobbit',
    nome: 'frodo',
    categoria: 'bolseiro',
    filme: 'senhor dos aneis',
    // objeto como parametro:
    ranqueadores: [{
        nome: 'imdb',
        notaCritica: 8,
        notaPublico: 9.5,
        disponibilidade: 'Amazon Prime',
    },
    {
        nome: 'rotten tomatoes',
        notaCritica: 8.1,
        notaPublico: 9.8,
        disponibilidade: 'Netfix'
    }]

}

// quando existem objetos como parâmetros, o JS não lista pois ele só faz a iteração com strings. 
// neste caso é necessário colocar uma condição para tratar somente as saídas que são vistas como strings
for (atributos in  objetoComObjetoDentro){
    //condição para verificar se o parâmetro é um objeto ou uma função e envia mensagem de alerta
    if (typeof(objetoComObjetoDentro[atributos]) == 'object' || typeof(objetoComObjetoDentro[atributos]) == 'function'){
        console.log(`O atributo ${atributos} é do tipo ${typeof(objetoComObjetoDentro[atributos])}`)
    }
    //caso o Parâmetro não seja um objeto ou uma função, ele faz a listagem
    else{
        console.log(`Atributo: ${atributos} \n  Valor:  ${objetoComObjetoDentro[atributos]} \n `)
    }

} */

// formas de acessar os elementos dos objetos com keys, values e entries
/* const objetoTesteObject = {
    marca: 'scott',
    modalidade: 'road',
    tamanho: 'M',
    loja: 'internet',
    conjunto: [{
        cambioD: 'shimano XT',
        cambioT: 'shimano acera',        
    },
    {peDeVela: 'FSA', 
        quadroMaterial: 'carbono', 
        freios: 'Alivio'}
    ]
        }

//lista um array das chaves do objeto
console.log(Object.keys(objetoTesteObject))
//lista um array dos valores do objeto
console.log(Object.values(objetoTesteObject))
// lista um array com as chaves e valores. para cada par chave/valor será um array com dois elementos, um de chave e outro de valor
console.log(Object.entries(objetoTesteObject))

// formato de saída com os pares de chaves e valores pareados numa lista
const procuraChave = 'tamanho';
let mensagemSaida = 'A chave nao está no objeto' ;
for (const [chave, valor] of Object.entries(objetoTesteObject)) {
    console.log(`${chave} ${valor}`)
    if (chave == procuraChave){
        mensagemSaida = 'A chave está no Objeto';
    }
    else {
        mensagemSaida = mensagemSaida;
    }
}
console.log(mensagemSaida) */


const object1 = {
    nome: 'João',
    cidade: 'Piracicaba',
    idade: 23

}
const object2 = {
    nome: 'Pedro',
    cidade: 'Piracicaba',
    escolaridade: 'Mestrado',
    idade: 23,
}

const object3 = {};
Object.defineProperty (object3, 'testandoEnumerabilidade', {
    value: 3,
    //alergias: false,
    //ultimeVisita: '5 meses',
    enumerable: true
});

//acrescentando uma nova propriedade ao objeto 2 e deixando ela oculta , ou seja, sem poder enumerar
Object.defineProperty (object2, 'propriedadeOculta', {
    value: true,
    //alergias: false,
    //ultimeVisita: '5 meses',
    enumerable: false
});


const objeto100 = {...object1, ...object2};
console.log(objeto100)


/* 


// testando o object assign

//notar que o object assign cria um objeto levndo em conta a diferença entre os dois objetos passados
const object4 = Object.assign({}, object1, object2);
console.log(object4)

// testando o defineproperty

//alterando uma propriedade do objecto 1 usando defineProperty
Object.defineProperty(object1, "cidade", {value: "São Paulo"});
console.log(object1)

//acrescentando uma propriedade ao objeto2 e defindo o seu respectivo valor
Object.defineProperty(object2, "profissão", {
    value: "filósofo"
});
console.log(object2.profissão);


console.log(Object.keys(object3))
console.log(object3.testandoEnumerabilidade)

// listando as chaves do objeto2, a propriedadeOculta NÃO é listada
console.log(Object.keys(object2))
// mas é possível chamar a proprideda para utilizar e obter o seu valor mesmo assim
console.log(object2.propriedadeOculta)
//objeto2 contém a propriede oculta, mas ela não é exibida
console.log(object2)
 */

// utilizando o spreadoperator em objetos

