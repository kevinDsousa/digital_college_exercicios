function listarCategorias () {
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias')
    .then(resp => resp.json())
    .then(lista => {
        qtdCategoria.innerHTML = lista.length;
    })
} listarCategorias();

function listarProdutos () {
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/produtos')
    .then(resp => resp.json())
    .then(lista => {
        qtdProdutos.innerHTML = lista.length;
    })
} listarProdutos();