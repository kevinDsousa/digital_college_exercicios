function formatCpf() {
    console.log(cpf.value)

    let CPF = cpf.value.replaceAll('.', '').replaceAll('-', '').split("");
    let CPFtratado = '';
    CPF.forEach((valor) => {
        if(Number(valor)) {
            CPFtratado + valor
        }
    });

    if (CPFtratado < 15) {
        if (cpf.value.length == 3) {
            cpf.value = cpf.value.concat('.');
        }
        if (cpf.value.length == 7) {
            cpf.value = cpf.value.concat('.');
        }
        if (cpf.value.length == 11) {
            cpf.value = cpf.value.concat('-');
        }
    } else {
        cpf.value = cpf.value.substr(0, 14)
    }
}