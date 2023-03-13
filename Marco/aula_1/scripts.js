/*let alunos = [
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
*/

function listarAlunos() {
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";
    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    for (let index = 0; index < lista.length; index++) {
      tabela.innerHTML += `<tr>
                                <td>${lista[index].nome}</td>
                                <td>${lista[index].email}</td>
                                <td>${lista[index].telefone}</td>
                                <td>${lista[index].cidade}</td>
                                <td>
                                    <button 
                                    class="btn btn-warning
                                    type="button"
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasRightEditar" 
                                    aria-controls="offcanvasRightEditar" 
                                    onclick="preencherForm(${index})"
                                    >Editar</button>

                                    <button class="btn btn-danger" onclick="deletarAluno(${index})">Deletar</button>
                                </td>
                            </tr>`;
    }
}

listarAlunos();

function adicionarAluno() {
  event.preventDefault();
  //pegar a lista de alunos
  let lista = JSON.parse(localStorage.getItem("lista")) || [];

  //criando o aluno
  let aluno = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    cidade: cidade.value,
  }

  //insere o aluno no array
  lista.push(aluno);
  localStorage.setItem("lista", JSON.stringify(lista)); // salvando no localstorage
  cadastro.reset(); // limpa os campos do fomulário
  let fechar = document.querySelector("#cadastro-fechar");
  fechar.dispatchEvent(new Event("click")); // fechar o modal
  listarAlunos(); //listando alunos novamente
}

function editarAluno(posicao) {
  
}

function preencherForm(posicao) {
  let lista = JSON.parse(localStorage.getItem("lista")) || [];
  e_nome.value = lista[posicao].nome;
  e_email.value = lista[posicao].email;
  e_telefone.value = lista[posicao].telefone;
  e_cidade.value = lista[posicao].cidade;
}

function deletarAluno(posicao) {
  let lista = JSON.parse(localStorage.getItem("lista")) || [];
  let novalista = []

  for (let index = 0; index < lista.length; index++) {
    if (index != posicao) {
      novalista.push(lista[index]);
    }
    localStorage.setItem("lista", JSON.stringify(novalista));
    listarAlunos();
  }
}