export default function tratamentoErros (erro){
    if (erro.code === 'ENOENT'){
        throw new Error('arquivo não encontrado')
    }
    else{ console.log ('então é outro erro')}
}

