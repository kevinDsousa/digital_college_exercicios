let lista = [];

function buscarCategorias() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((listaCategorias) => {
        listaCategorias.forEach((listaCategoria) => {
            categorias.innerHTML += 
            `<li class="list-group-item">        
              <h6> 
                <input type="checkbox" name="${listaCategoria.replace(" ", "-")}" onClick="filtroProdutos()"> 
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
      lista = listaProdutos;
      listaProdutos.forEach((listaProduto) => {
        products.innerHTML += 
            `<li class="${listaProduto.category.replace(" ", "-")}">
                <div class="card-item">
                    <img src="${listaProduto.image}" alt="">
                    <div class="card-body">
                        <h5 class="card-text" title="${listaProduto.title}">${listaProduto.title}</h5>
                        <div class="badge bg-secondary">${listaProduto.category}</div>
                        <p>${listaProduto.description}</p>
                        <a href="" class="btn btn-outline-danger">Adicionar ao carrinho</a>
                    </div>
                </div>
            </li>`;
      });
    });
}
buscarProdutos();

function filtroProdutos() {
  let inputs = document.querySelectorAll('input:checked');
  let inputs_names = [];

  for (let index = 0; index < inputs.length; index++) {
    inputs_names.push(inputs[index].name); 
    console.log(inputs_names);
  }

  let lis = document.querySelectorAll('#products li');
  for (let index = 0; index < lis.length; index++) {
    if (!lis[index].classList.contains(inputs_names.toString())) {
      lis[index].style.display = 'none'
    }
  }
}