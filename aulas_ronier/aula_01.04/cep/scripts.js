const cep = document.getElementById('cep')

function buscarCep() {
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
}

