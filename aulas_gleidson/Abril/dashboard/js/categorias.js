let tabela = $("#tabela");

function listarCategorias () {
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias')
    .then(resp => resp.json())
    .then(lista => {
        tabela.DataTable({
            data: lista,
            columns: [
                {data: 'id', width: '50px'},
                {data: 'categoria'},
                {data: 'status', 
                render: function(data, type, row)
                {return data ==1 ? 'Ativo' : 'Inativo';}}, 
                { data: '',
                    render: function(data, type, row) {
                        return `<ion-icon class="btn" name="create"></ion-icon>
                                <ion-icon class="btn" name="trash" onClick='removerCategoria(${row.id})'></ion-icon>`
                    }
                }
            ],
            resposive: true
        })
    })
} listarCategorias();

function adicionarCategoria() {
    event.preventDefault();
    let dados = {
        categoria: categoria.value,
        status: 1
    }
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias', {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(() => {
        window.location.reload()
    })
}

function removerCategoria(idCategoria) {
    event.preventDefault()
    fetch(`https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias/${idCategoria}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        window.location.reload()
    })

}