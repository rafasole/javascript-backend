import { eliminaPequenas } from "./limpaPequenas.js";

export async function separaPalavras(texto){
    const resultado = []
       
    texto.forEach(paragrafo => {        
        resultado.push(eliminaPequenas(paragrafo.toLowerCase().split(' '))) 
    });

        //console.log('o resultado', resultado);
        return resultado
    }
