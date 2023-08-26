const express = require("express");
const fs = require('fs')
const server = express();

server.use(express.json());

const PATH_ALUNOS = "./alunos.json";

function buscarAlunos() {
  const alunos = fs.readFileSync(PATH_ALUNOS, "utf-8");
  return JSON.parse(alunos);
}

function salvarAlunos(alunos = {}) {
  const dados = buscarAlunos()
  dados.push(alunos)
  return fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
}

server.get("/alunos", (req, res) => {
  res.send(buscarAlunos());
});

server.post("/alunos", (req, res) => {
  salvarAlunos(req.body)
  res.send(req.body)
})

server.listen("8080", () => {
  console.log("rodando e dançando na porta http://localhost:8080");
});
