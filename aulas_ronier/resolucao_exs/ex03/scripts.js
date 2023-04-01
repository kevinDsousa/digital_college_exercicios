const numeros = [20, 4, 50, 6, 7]

function filtraMaior10(array) {
    return array.filter(valor => valor > 10)
}

console.log(filtraMaior10(numeros))