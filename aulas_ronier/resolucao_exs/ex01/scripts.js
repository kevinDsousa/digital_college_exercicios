const numeros = [2, 4, 5, 6, 7]


function somatorio(array) {
    let soma = 0
    array.forEach(num => soma += num)
    return soma
}

console.log(somatorio(numeros))