import fs from 'fs';
import separaPagrafo from './separadorParagrafo.js';
import tratamentoErros from './erros.js';


const textoCapturado = process.argv[2];
const caminhoArquivoGravado = process.argv[3];



fs.readFile(textoCapturado, 'utf8', async (error, texto) => {
    try{
        if(error) throw error
        
        const saidaDados = await separaPagrafo(texto);
        //console.log(saidaDados)
        
        await criaSalvaArquivos(caminhoArquivoGravado, saidaDados)
        
        }
        catch(error){
            tratamentoErros(error)
/*             if (error.code === 'ENOENT') console.log('erro esperado', error.code);
            else console.log ('então é outro erro', error.code)  */

            
        }
    

})

async function criaSalvaArquivos(caminhoArquivoGravado, saidaDados){
    //console.log(saidaDados);
    const saidaJSON = JSON.stringify(saidaDados);
    caminhoArquivoGravado = `${caminhoArquivoGravado}/gravado.txt`;

    fs.writeFile(caminhoArquivoGravado,saidaJSON, 'utf8', async (err)=> {
        if(err) throw err;
        console.log('arquivo graado')
    })
}
   


//funcção de criar e salvar aquivos recebendo lista de palavras e local onde o arquivo será criado
//colocar a variavel emtedeço numa const 
//fazer o writefile dentro de um bloco try
// criar uma con st para receber o texto e transofmrar numa string usando json.stringgy recebendo a lista de palavras que será processada
// dentro do try com uma ´romisse cm o writefile recebendo o endereço onde irá salvar arquivo e o que será inserido do arquivo
// catch erro vazio
//asynf function
//await fs.promises.writeFile(,)