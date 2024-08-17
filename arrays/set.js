// usando set para eliminar valores duplicados
let arrayDuplicado = ['João', 'João', 'Maria', 'Maria', 'Pedro', 'Pedro', 'Paula'];
let arrayAjustado = new Set(arrayDuplicado);

console.log(arrayDuplicado)
console.log(arrayAjustado)

// o set possui limitações que os arrays não tem. o Set, por definição é um conjunto e conjuntos
// não possuem valores repetidos

//transformando o set em um array usando o spread operator:

let setAjustadoArray = [...arrayAjustado]
console.log(setAjustadoArray)

// é possível passar tudo na mesma linha

let setnaMesmaLinha =  [...new Set(arrayDuplicado)]
console.log(setnaMesmaLinha)