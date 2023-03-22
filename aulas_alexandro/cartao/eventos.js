let dbMeses = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro'
};

for (let index = 1; index <= 9; index++) {
    document.querySelector("#mes").innerHTML += `<option value="0${index}">${dbMeses["0" + index]}</option>`;
}

for (let index = 10; index <= 12; index++) {
    document.querySelector("#mes").innerHTML += `<option value="${index}">${dbMeses[index]}</option>`;
}

for (let index = 2023; index < 2030; index++) {
    let valor = index.toString().substr(2, 2)

    ano.innerHTML += `<option value="${valor}">${index}</option>`
}

/*for (let valor in dbMeses) {
    document.querySelector("#mes").innerHTML += `<option>${dbMeses[valor]}</option>`;
}*/
