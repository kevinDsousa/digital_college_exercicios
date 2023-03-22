function exibir(num) {
    console.log("A operação resultou em ", num)
}

function soma(a, b, exibir) {
    let op = a + b;
    exibir(op)
}

function multiplicacao(a, b, exibir) {
    let op = a * b;
    exibir(op)
}

soma(2, 2, exibir);



