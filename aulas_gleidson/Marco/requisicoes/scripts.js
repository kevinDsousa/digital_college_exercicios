/*function buscarRegioes() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes") // por default quando n passa o objeto como segundo parametro é tipo get
} buscarRegioes()*/

(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(response => response.json()) // resolve o json
    .then(response => {

        response.forEach(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`
        });
    }) // preenche o select
})()

function buscarEstados() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados?orderBy=nome`)
    .then(response => response.json())
    .then(response => {
        estados.innerHTML = '';
        estados.innerHTML = '<option disabled selected>Escolha um estado</option>';
        response.forEach(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        });
    })
}

function buscarCidades() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios?orderBy=nome`)
    .then(response => response.json())
    .then(response => {
        cidades.innerHTML = '';
        cidades.innerHTML = '<option disabled selected>Escolha um cidade</option>';
        response.forEach(cidade => {
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`
        });
    })
}