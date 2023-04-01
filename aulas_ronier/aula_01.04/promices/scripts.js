let url = ('https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios?orderBy=nome')

fetch(url)
.then(resp => (resp.json())
.then(data => {
    data.forEach(item => {
        municipios.innerHTML += `<option value="${item.id}">${item.nome}</option>`
    })
}))