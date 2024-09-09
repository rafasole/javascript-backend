


const objetoTeste =  {
    nome: 'Gandalf o cinzento',
    titulo: 'Mago',
    idade: 143,
    endereços: [{
        rua: 'shire',
        numero: 44,
        complemento: 'fundos',
        referencia: 'ao lado da casa do bilbo',
    }, 
    {
    rua: 'caminho de mordor',
    numero: 666,
    complemento: '5 andar',
    referencia: 'no submundo da escuridão',
}], 
    nome: 'Aragorn',
    titulo: 'Guerreiro Rei',
    idade: 41,
    endereços: [{
        rua: 'Rua Tanas',
        numero: 118,
        complemento: 'Cobertura',
        referencia: 'castelo do rei bofe',
    }, 
    {
    rua: 'barco da salvação',
    numero: 999,
    complemento: '2121',
    referencia: 'assento da escuridão',
}]
}

// console.log(objetoTeste)

console.log('\nChaves: \n'); 
for (parametros in objetoTeste){
    console.log(parametros + '\n')
    }

console.log('\nValores: \n');
for (parametros in objetoTeste){
    //const verificaTipo = typeof(objetoTeste[parametros]);
    if (typeof(objetoTeste[parametros]) == 'object' || typeof(objetoTeste[parametros]) == 'function'){
        console.log(typeof(objetoTeste[parametros]))

        console.log(`O elemento é um ${typeof(objetoTeste[parametros])} e não pode ser exibido`)
        }
        else {
            console.log(objetoTeste[parametros] +'\n');
        }
}