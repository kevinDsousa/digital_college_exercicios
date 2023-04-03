function buscarCategorias() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(listaCategorias => {
        listaCategorias.forEach(listaCategoria => {
            categorias.innerHTML += 
            `<li class="list-group-item">        
                <h6> 
                    <input type="checkbox" name="" id=""> 
                    <span>${listaCategoria}</span>
                </h6>
            </li>`;
        });
    })
}
buscarCategorias();


function buscarProdutos() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(listaProdutos => {
        listaProdutos.forEach(listaProduto => {
            products.innerHTML += 
            `<li>
                <div class="card">
                    <img src="${listaProduto.image}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title"${listaProduto.title}</h5>
                        <p class="card-text">${listaProduto.description}</p>
                        <a href="" class="btn btn-outline-danger">Adicionar ao carrinho</a>
                    </div>
                </div>
            </li>`
        })
    })
}
buscarProdutos();