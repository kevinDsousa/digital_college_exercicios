function validarEnvio() {
  event.preventDefault();
  if (numero.value.length === "") {
    numero.classList.add("is-invalid");
  }

  if (titular.value === "") {
    titular.classList.add("is-invalid");
  }

  if (mes.value === "") {
    mes.classList.add("is-invalid");
  }

  if (ano.value === "") {
    ano.classList.add("is-invalid");
  }

  if (cvv.value === "") {
    cvv.classList.add("is-invalid");
  }

  if (cpf.value.length === "") {
    cpf.classList.add("is-invalid");
  }
}

function alterarNumero() {
  numero.classList.remove("is-invalid");
  if (numero.value.length === 19) {
    numero.classList.add("is-valid");
  }
}
function alterarTitular() {
  titular.classList.remove("is-invalid");
}
function alterarCVV() {
  cvv.classList.remove("is-invalid");
  let ultimoDigito = cvv.value.substr(-1);

  if (isNaN(ultimoDigito)) {
    let resultado = cvv.value.substr(0, cvv.value.length - 1);

    cvv.value = resultado;
  }

  if (cvv.value.length === 3) {
    cvv.classList.add("is-valid");
  }
}
function alterarCPF() {
  cpf.classList.remove("is-invalid");

  let ultimoDigito = cpf.value.substr(-1);

  if (isNaN(ultimoDigito)) {
    let resultado = cpf.value.substr(0, cpf.value.length - 1);
    cpf.value = resultado;
  }

  if (cpf.value.length === 11) {
    cpf.classList.add("is-valid");
  }
}
function alterarMes() {
  mes.classList.remove("is-invalid");
}
function alterarAno() {
  ano.classList.remove("is-invalid");
}
