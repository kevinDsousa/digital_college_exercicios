let bebidas = [
    {
        id: 1,
        nome: 'coca cola',
        descricao: 'ks 390ml',
        quantidade: 12,
        foto: ''
    },
    {
        id: 2,
        nome: 'sprite',
        descricao: 'ks 160ml',
        quantidade: 8,
        foto: ''
    },
    {
        id: 3,
        nome: 'pepsi',
        descricao: 'ks 200ml',
        quantidade: 10,
        foto: ''
    },
    {
        id: 4,
        nome: 'fanta',
        descricao: 'ks 100ml',
        quantidade: 15,
        foto: ''
    },
    {
        id: 5,
        nome: 'kuat',
        descricao: 'ks 100ml',
        quantidade: 30,
        foto: ''
    },
    {
        id: 6,
        nome: 'sao gerardo',
        descricao: 'ks 180ml',
        quantidade: 40,
        foto: ''
    },
    {
        id: 7,
        nome: 'skol',
        descricao: 'ks 600ml',
        quantidade: 180,
        foto: ''
    },
    {
        id: 8,
        nome: 'kaiser',
        descricao: 'ks 600ml',
        quantidade: 10,
        foto: ''
    },
    {
        id: 9,
        nome: 'sao braz',
        descricao: 'ks 900ml',
        quantidade: 100,
        foto: ''
    },
    {
        id: 10,
        nome: 'antartica',
        descricao: 'ks 600ml',
        quantidade: 72,
        foto: ''
    },
];

bebidas.map((bebida) => {
    document.querySelector('#tabela-dados').innerHTML += 
    `
    <tr>
        <td>${bebida.id}</td>
        <td>${bebida.nome}</td>
        <td>${bebida.descricao}</td>
        <td>${bebida.quantidade}</td>
        <td>${bebida.foto}</td>
        <td>
            <button class="btn btn-outline-primary btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
        </td>
    </tr>
    `;
})