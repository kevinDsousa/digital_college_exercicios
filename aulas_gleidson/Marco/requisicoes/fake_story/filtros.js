function filtroProdutos() {
    let produtos = document.getElementById('#products')
    produtos = [];

    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(listaFiltrada => {
        const novaLista = listaFiltrada.filter(item => {
            item.category == 'electronics'
            console.log(item.category);
        })
        console.log(novaLista);
    })
}