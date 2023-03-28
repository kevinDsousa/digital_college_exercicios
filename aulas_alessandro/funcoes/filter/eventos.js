function filtrar(){
    const TABELA = document.getElementById('tabela-dados'); // seleciona a tabela

    TABELA.innerHTML = ''; // limpa os dados

    let palavra = busca.value.toLowerCase()
    let resultado = bebidas.filter(bebida => {
        return bebida.nome.toLowerCase().includes(palavra)
    })
    atualizarTabela(resultado);
}