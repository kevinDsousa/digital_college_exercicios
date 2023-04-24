let tabela = $("#tabela");

function listarCategorias () {
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias')
    .then(resp => resp.json())
    .then(lista => {
        lista.forEach(cat => {
            categoria.innerHTML += `<option>${cat.categoria}</option>`
        })
    })
} listarCategorias();


function listarProdutos () {
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/produtos')
    .then(resp => resp.json())
    .then(lista => {
        tabela.DataTable({
            data: lista,
            columns: [
                {data: 'id', width: '50px'},
                {data: 'produto'},
                {data: 'preco', width: '100px'},
                {data: 'categoria', width: '150px'},
                {data: 'status', 
                    width: '100px',
                    className: 'dt-head-center dt-body-center',
                render: function(data, type, row)
                {return data ==1 ? 'Ativo' : 'Inativo';}}, 
                { data: '',
                    render: function(data, type, row) {
                        return `<ion-icon class="btn" name="create"></ion-icon>
                                <ion-icon class="btn" name="trash" onClick='removerProdutos(${row.id})'></ion-icon>`
                    }
                }
            ],
            resposive: true
        })
    })
} listarProdutos();

function adicionarProdutos() {
    event.preventDefault();
    let dados = {
        produtos: produtos.value,
        descricao: descricao.value,
        imagem: imagem.value,
        categorias: categorias.value,
        status: 1
    }
}

function removerProdutos(idProdutos) {
    event.preventDefault()
    fetch(`https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/produtos/${idProdutos}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        window.location.reload()
    })

}