let lightMode = localStorage.getItem('lightMode');

lightMode === "true" ? (topo.classList.toggle("light"), modeSwitch.classList.toggle("active")) : null

modeSwitch.onclick = (e) => {
    e.target.classList.toggle("active");
    topo.classList.toggle("light");
    topo.classList.contains("light") ? localStorage.setItem("lightMode", true) 
    : localStorage.setItem("lightMode", false)
}

let btnAbrir = document.querySelector('.abrir-lateral');
btnAbrir.onclick = e => {
    lateral.classList.add('active')
}

let btnFechar = document.querySelector('.fechar-lateral');
btnFechar.onclick = e => {
    lateral.classList.remove('active')
}

function listarCategorias() {
    fetch('https://6439dfea90cd4ba563ef55e2.mockapi.io/api/v1/categorias')
    .then(resp => resp.json())
    .then(dados => {
        
    })
}