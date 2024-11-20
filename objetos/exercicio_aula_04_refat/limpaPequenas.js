export function eliminaPequenas(palavras){
    const objCount = {};
 palavras.forEach(palavrasPequenas => {
        const peqElimin = (palavrasPequenas.replace(/[.,\/#!$%\^?&\*;:{}=\-_`~()]/g, ''));
        if(peqElimin.length > 3){
            
            objCount[peqElimin] = (objCount[peqElimin] || 0 ) + 1 ;
            }
            })

            return objCount
            
        }
        //console.log(saidaPalavrasPequenas)
        //console.log(pequenasUndef)



       /*  saidaPalavrasPequenas.forEach(palavrareduzida => {
            console.log(palavrareduzida)
            if (palavrareduzida.length > 3){
                objCount[palavrareduzida] = ((objCount[palavrareduzida] || 0) + 1);
                //console.log(objCount)
            }
        }) */
        //console.log(pequenasElimin)
        /* if(saidaPequenas.length > 3){
           objCount[saidaPequenas] = ((objCount[saidaPequenas] || 0) + 1);

        }
        return objCount */
    
    //console.log(saidaPalavrasPequenas)
/*     const saidaStringJson = JSON.stringify(saidaPalavrasPequenas)
    console.log(saidaStringJson)
    return saidaStringJson; */

