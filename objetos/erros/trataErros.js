function retornoErros(erro){
    
    if (erro.code === 'ENOENT') {
        return new Error('Arquivo não encontrado')}
        else return console.log ('Erro na aplicação')

}


module.exports = retornoErros;