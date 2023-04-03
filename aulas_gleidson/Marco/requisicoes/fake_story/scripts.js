function buscarCategorias() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((listaCategorias) => {
        listaCategorias.forEach((listaCategoria) => {
            categorias.innerHTML += `<li class="list-group-item">        
            <h6> 
            <input type="checkbox" name="" id="check_item" onfocus="filtroProdutos()"> 
            <span id="check_text">${listaCategoria}</span>
            </h6>
            </li>`;
        });
    });
}
buscarCategorias();

function buscarProdutos() {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((listaProdutos) => {
      listaProdutos.forEach((listaProduto) => {
        products.innerHTML += `<li>
                <div>
                    <img src="${listaProduto.image}" alt="">
                    <div class="card-body">
                        <h5 class="card-text">${listaProduto.title}</h5>
                        <p>${listaProduto.description}</p>
                        <a href="" class="btn btn-outline-danger">Adicionar ao carrinho</a>
                    </div>
                </div>
            </li>`;
      });
    });
}
buscarProdutos();

