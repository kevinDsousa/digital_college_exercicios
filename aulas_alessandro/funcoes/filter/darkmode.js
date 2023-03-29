if(localStorage.getItem('darkmode') == 'true') {
    darkmode.checked = true;
    ativarDarkMode();
}

function ativarDarkMode() {
    darkmode.checked ? 
    (document.body.classList.add('bg-dark'), 
    tabela.classList.add('table-dark'), 
    titulo.classList.add('text-white'),
    linha.classList.add('text-white'),
    localStorage.setItem('darkmode', true)) :

    (document.body.classList.remove('bg-dark'),
     tabela.classList.remove('table-dark'), 
     titulo.classList.remove('text-white'),
     linha.classList.remove('text-white'),
     localStorage.setItem('darkmode', false))
}