function buscarEstados() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/?orderBy=nome')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(item => {
                estados.innerHTML += `<option value="${item.id}">${item.nome}</option>`
            })
        })
}
buscarEstados()

estados.addEventListener('change', e => {
    municipios.innerHTML = ''
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/municipios?orderBy=nome`)
.then(resp => (resp.json())
.then(data => {
    data.forEach(item => {
        municipios.innerHTML += `<option value="${item.id}">${item.nome}</option>`
    })
})
    .catch(err => console.log(err)))
})
