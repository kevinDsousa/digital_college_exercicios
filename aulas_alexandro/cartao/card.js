function mostrarVerso() {
    frente.style.display = 'none';
    verso.style.display = 'block';
    verso.classList.add('animate__flipInY');
}

function mostrarFrente() {
    verso.style.display = 'none';
    frente.style.display = 'block';
    frente.classList.add('animate__flipInY');
}