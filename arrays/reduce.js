const notasSalaA = [5, 5, 5, 5, 5, 5];
const notasSalaB = [5, 5, 5, 5, 5];
const notasSalaC = [4, 7.5, 5, 8, 6.0, 4.4];
let acum = 0;



function calculaMedia (listaDeNotasA, listaDeNotasB, listaDeNotasC){
    let todasNotas = listaDeNotasA.concat(listaDeNotasB, listaDeNotasC)
    let retornoSoma = todasNotas.reduce((acum, notas) => {
        return (acum + notas)}, 0);
        return console.log(retornoSoma / todasNotas.length)
}

calculaMedia(notasSalaA, notasSalaB, notasSalaC)