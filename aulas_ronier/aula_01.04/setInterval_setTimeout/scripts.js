function apagar() {
    idTexto.remove()
}

//setTimeout(apagar, 5000) // funcao que sera executada a partir de um certo tempo

// setTimeout(() => idTexto.remove(), 5000)


let contador = 5
function tom() {
    idTexto.innerText = `Eu vou sumir depois de ${contador} segundos`
    contador --
}


const referencia  = setInterval(tom, 1000) // funcao que roda a cada tempo pre-determinado

setTimeout(() => clearInterval(referencia), 5000)
setTimeout(() => idTexto.remove(), 6000)