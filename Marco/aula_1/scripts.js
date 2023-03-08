let alunos = [
  {
    nome: "gleidson",
    email: "gleidson@gmail.com",
    telefone: "(00) 12345-6789",
    cidade: "fortaleza",
  },
  {
    nome: "Bruno Caucaia",
    email: "brunaogleidson@gmail.com",
    telefone: "(00) 12345-6789",
    cidade: "caucaia",
  },
  {
    nome: "kevin",
    email: "kevin@gmail.com",
    telefone: "(00) 12345-6789",
    cidade: "fortaleza",
  },
  {
    nome: "sarah",
    email: "sarah@gmail.com",
    telefone: "(00) 12345-6789",
    cidade: "caucaia",
  },
];


function listarAlunos() {
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";

    for (let index = 0; index < alunos.length; index++) {
      tabela.innerHTML += `<tr>
                                <td>${alunos[index].nome}</td>
                                <td>${alunos[index].email}</td>
                                <td>${alunos[index].telefone}</td>
                                <td>${alunos[index].cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger">Deletar</button>
                                </td>
                            </tr>`;
    }
}

listarAlunos();

function adicionarAluno() {
  event.preventDefault();
  let aluno = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    cidade: cidade.value,
  };
  alunos.push(aluno);
  listarAlunos();
}
