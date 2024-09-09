/*
1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
*/


/*  //criando o o objeto pessoa com nome e notas como atributos. coloquei as notas como um array de 4 notas
 const pessoa = {
    nome: 'Pedro Henrique',
    notas: [6, 8, 9, 10],
// lembrar que arrowfunction tem todas as funcionalidades dentro de um objeto, por isso é melhor usar a forma completa
// lembrar que o "this" somente funciona na forma competa de chamar as funções -- demorei muito nisso!

   calcularMediaNotas: function () {
        //calculando a soma do array e seu cumprimento para poder utilizar no calculo da média
        let somaNotas = 0;
        const lenNotas = this.notas.length;
        // criando um for para passar pelos valores do array de média
        for (notas of this.notas){
            somaNotas = somaNotas + notas;          
        }
        // calculando a média
        let mediaNotas = somaNotas / lenNotas;
        return mediaNotas;
    },
        // função para retornar o desempenho
    classificarDesempenho: function() {
        // lembrando que o this funciona para qualquer propriedade dentro do objeto, inclusive se for uma função.
        // dentrio da condição, verifico o resultado que saiu da função que calcula a média
        // cada condição respeita a tabela do enunciado do problema
        if (this.calcularMediaNotas() >=9){
            const conceitoFinal = console.log('Conceito Final: Excelente.\nNota: 10');            
            return console.log(conceitoFinal)
        }
            else if (this.calcularMediaNotas() <= 8.9 && this.calcularMediaNotas() >= 7.6){
                const conceitoFinal = console.log('Conceito Final: Bom Desempenho.\nNota: 7.5');            
                return console.log(conceitoFinal)
            }
            else if (this.calcularMediaNotas()  <= 6.0 && this.calcularMediaNotas()  >= 7.5){
                const conceitoFinal = console.log('Conceito Final: Regular.\nNota: 6.5');            
                return console.log(conceitoFinal)
        }
            else if (this.calcularMediaNotas()  <= 6.0 ){
                const conceitoFinal = console.log('Conceito Final: Insuficiente.\nNota: 0');            
                return console.log(conceitoFinal)
            }
    
 
        }
    }

// saída da média calculda, veja que o return da função não prevê o console.log, por isso coloquei aqui
console.log('Média Parcial Calculada: ', +pessoa.calcularMediaNotas())
pessoa.classificarDesempenho()  */


/* 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor. */

//criando o objeto carro com suas respectivas propriedades

/* const objetoCarro = {
    marca: 'Lamborghini',
    modelo: 'Diablo',
    ano: '1996',
    cor: 'Preto',
    peso: '1640kg',
    torque: '605',

}
// usando o for in para trazer as propriedades do objeto carro
for (caract in objetoCarro) { 
    console.log(caract)
}

//segunda forma:

for (prop in objetoCarro) {
    console.log('Propriedade: \n' +prop +': ' +objetoCarro[prop])
}

// adicionando mais uma característica como propriedade do objeto
objetoCarro.velocidadeMax = 335;

// usando o for in para trazer as propriedades do objeto carro e trazer a nova propriedade adicionada
for (caract in objetoCarro) { 
    console.log(caract)
}

for (prop in objetoCarro) {
    console.log('Propriedade: \n' +prop +': ' +objetoCarro[prop])}

// relembrando que posso usar o Object.keys para trazer um vetor com as propriedades
// o retorno do object keys é um array, portanto, se for usar for com ele precisa ser for of 

 for (props of Object.keys(objetoCarro)){
    console.log('Propriedade:  \n' +props +'\nValor:  ' +objetoCarro[props])
}

//ou usando o par chave/valor com o Object.entries
for ([props, valor] of Object.entries(objetoCarro)){
    console.log('Característica:' +props +' Valor:  ' +valor)
}
 */

/*
3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
*/


/* //criando o objetocontroleCarro
const controleCarro = {
    marca: 'Lamborghini',
    modelo: 'Aventador',
    ano: 2009,
    cor: 'Preto',
    ligado: false,
    //método ligar deve acionar o caso esteja desligado e trazer uma mensagem
    ligar: function () {
        //verifica se o carro já está ligado, caso positivo exibe alerta
        if (this.ligado){
            console.log('Carro já está ligado')
        }
        else{
        //altera o estado da propriedade ligado e exibe alerta de carro ligado    
        this.ligado = true;
        console.log('Carro Ligado')
        }
    },
    //método desligar deve acionar o caso esteja desligado e trazer uma mensagem
    desligar: function() {
        //verifica se o carro já está desligado, caso positivo exibe alerta
        if (!this.ligado){
            console.log('Carro já está Desligado')
        }
        //altera o estado da propriedade ligado e exibe alerta de carro desligado
        else{
        this.ligado = false;
        console.log('Carro Desligado')
        }
    },
       //método que trás as informações do carro
    obterDetalhes: function(){
        console.log('Status do carro: \n'+
            'Marca: ' +this.marca +
            '\nModelo: '+this.modelo +
            '\nAno: '+this.ano +
            '\nCor: '+this.cor +
            "\nEstado de ligado/desligado: " +this.ligado
        )
    },
}
//definindo que a propriedade "ligado" não pode ser listada como uma propriedade, já que ela é para controle interno do objeto
Object.defineProperty(controleCarro, 'ligado', {enumerable: false, configurable: true, writable: true})


 //acionando a função ligar dentro do objeto
controleCarro.ligar()
//acionando novamente, retorna uma mensagem de que o carro já está ligado
controleCarro.ligar() 

//acionando a função desligar dentro do objeto
controleCarro.desligar()
//acionando a função desligar novamente, retorna uma mensagem de que o carro já está desligado
controleCarro.desligar()

//acionando a função de obter detalhes dentro do objeto para trazer as informações dos parâmetros
controleCarro.obterDetalhes() */




/* 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. 
Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido. */


//repetindo o mesmo objeto do exercício 03
const carroReg = { 
    marca: 'Ferrari',
    modelo: 'Roma',
    ano: 2024,
    cor: 'vermelho',
    ligado: false,
    placa: 'EE6732',
    ligar: function (){
        if (this.ligado){
            console.log('O carro já está ligado.')
        }
        else{
        this.ligado = true;
        console.log('Carro ligado');
        }
    },
    desligar: function(){
        if(!this.ligado){
            console.log('O Carro já está desligado');
        }
        else{
            this.ligado = false;
            console.log('Carro desligado');
        }
    },
    obterDetalhes: function(){
        console.log('Informações do Carro:\n' +'Marca:'+'\n' +this.marca+'\n' +'Modelo:'+'\n' +this.modelo+'\n' +'Ano:'+'\n' +this.ano+'\n' +'Cor:'+'\n' +this.cor+'\n'+
            'Status Ligado:'+'\n' +this.ligado+'\n')
    }
    }

//definindo a propriedade placa para não ficar enumerável
Object.defineProperty(carroReg, 'placa', {enumerable: false});

//usando o for...in para listar as propriedades enumeráveis
for (let specs in carroReg){
    console.log(specs);
}

//usando o ObjectKeys para listar as mesmas propriedades enumeráveis
Object.keys(carroReg);

//chamando a propriedade placa isoladamente
const placaCarro = carroReg.placa
console.log(placaCarro);

//crinado  um novo objeto carro novo com os mesmos atributos
const carroNovo = {
    marca: 'Fiat',
    modelo: 'Uno Mille',
    ano: '1994',
    cor: 'azul'
}

//fazendo o espalhamento para criar um novo objeto chamado carroNovoDetalhes contemplando os elementos dos dois objetos: carroReg e carroNovo
const carroNovoDetalhes = {...carroReg, ...carroNovo};
//imprimindo  o resultado do novo objeto criado
console.log(carroNovoDetalhes);
//alterando o parâmetro cor do objeto novo criado
carroNovoDetalhes['cor'] = 'preto';
//apresentando o parâmetro cor para refletir a mudança
console.log(carroNovoDetalhes.cor)