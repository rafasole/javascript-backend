import {separaPalavras} from "./separadorPalavras.js";
import { eliminaPequenas } from "./limpaPequenas.js";



export default async function separaPagrafo(texto){
    
    const splitDeParagrafos = texto.split('\n');
    const vetorParagrafo = splitDeParagrafos.map(paragrafo => {
        return paragrafo.trim();
})
return await separaPalavras(vetorParagrafo)
}



