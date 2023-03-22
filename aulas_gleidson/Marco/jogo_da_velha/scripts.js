let vez = 0;
let jogadas = 0;
let vitoria = false;

function marcarCasa() {
    let casa = event.target; //seleciona o casa pelo click
    if (vitoria == false) { //Verifica se a vitoria é igual a false
        if (!casa.classList.contains("bola") && !casa.classList.contains("xis") && jogadas <= 9) { 
            //verifica se nao existe classe bola e xis e se as jogadas chegaram a 9
            if (vez == 0) {
                //identifica a vez do primeiro jogador
                casa.classList.add("bola") //adiciona a classe bola
                casa.setAttribute("valor", 0) // seta o atritubo para zero
                vez = 1; // passa a vez
            } else {
                casa.classList.add("xis") //adiciona a classe xis
                casa.setAttribute("valor", 1) // seta o atributo xis
                vez = 0; // passa a vez
            }
            jogadas++; // variavel que soma as jogadas
        } else {
            // caso exista a classe bola ou xis passa para segunda verificacao
            if (jogadas == 9) {
                // verifica se jogadas chegou a nove
                alert("perderam otarios") // dispara alerta de empate
                return;
            } else {
                // Verifica se esta jogando em um mesmo campo
                alert('impocivel') // dispara um alerta de proibicao
            }
            checkVitoria(); //chama a funcao checa vitoria
        }
    } else {
        // caso vitoria chegue a true, alerta fim de jogo
        alert("fim de jogo")
    }

}
function checkVitoria() {
    // Cria os atributos de cada caixa
    let c1_valor = c1.getAttribute("valor");
    let c2_valor = c2.getAttribute("valor");
    let c3_valor = c3.getAttribute("valor");
    let c4_valor = c4.getAttribute("valor");
    let c5_valor = c5.getAttribute("valor");
    let c6_valor = c6.getAttribute("valor");
    let c7_valor = c7.getAttribute("valor");
    let c8_valor = c8.getAttribute("valor");
    let c9_valor = c9.getAttribute("valor");

    //primeira horizontal - verifica se a condicao é verdade
    if (c1_valor == c2_valor && c2_valor == c3_valor && c3_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //segunda horizontal - verifica se a condicao é verdade
    if (c4_valor == c5_valor && c5_valor == c6_valor && c6_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //terceira horizontal - verifica se a condicao é verdade
    if (c7_valor == c8_valor && c8_valor == c9_valor && c9_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //primeira vertical - verifica se a condicao é verdade
    if (c1_valor == c4_valor && c4_valor == c7_valor && c7_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //segunda vertical - verifica se a condicao é verdade
    if (c2_valor == c5_valor && c5_valor == c8_valor && c8_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //terceira verical - verifica se a condicao é verdade
    if (c3_valor == c6_valor && c6_valor == c9_valor && c9_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //primeira diagonal - verifica se a condicao é verdade
    if (c1_valor == c5_valor && c5_valor == c9_valor && c9_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }

    //segunda diagonal - verifica se a condicao é verdade
    if (c3_valor == c5_valor && c5_valor == c7_valor && c7_valor != null) {
        resultado.classList.add("active")
        document.querySelector("#resultado h1").innerHTML = (vez != 0) ? "Bola Venceu":"Xis Venceu";
        vitoria = true;

        return;
    }
}