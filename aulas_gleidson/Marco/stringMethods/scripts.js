function formatCpf() {
  
  // verificar se é string
  let ultimoDigito = cpf.value.substr(-1);
  
  // se for string retirar o valor
  if (isNaN(ultimoDigito)) {
    let resultado = cpf.value.substr(0, cpf.value.length - 1);
    
    cpf.value = resultado;
  }
  
  
  if(cpf.value.length == 3) {
    cpf.value = cpf.value.concat(".");
  }

  if(cpf.value.length == 7) {
    cpf.value = cpf.value.concat(".");
  }

  if(cpf.value.length == 11) {
    cpf.value = cpf.value.concat("-");
  } else{
    cpf.value = cpf.value.slice(0,14)
}
}

