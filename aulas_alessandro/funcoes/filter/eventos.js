function filtrar(){
    const TABELA = document.getElementById('tabela-dados'); // seleciona a tabela

    TABELA.innerHTML = ''; // limpa os dados

    let palavra = busca.value.toLowerCase()
    let resultado = bebidas.filter(bebida => {
        let nomeBebida = bebida.nome.toLowerCase()
        let descricao = bebida.descricao.toLowerCase()
        let quantidade = bebida.quantidade.toString()

        return nomeBebida.includes(palavra) || descricao.includes(palavra) || quantidade.includes(palavra);
    })
    
    atualizarTabela(resultado);
}