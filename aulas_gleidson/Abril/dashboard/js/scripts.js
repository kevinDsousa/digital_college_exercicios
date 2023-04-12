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