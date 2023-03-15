const { Router } = require("express");
const getAll = require("../services/getAll");
const inserirAluno = require("../services/AlunosServices/inserirAluno");
const AlunosController = require("../controllers/AlunosController");

const roteador = Router();

const getPath = () => {
  const paths = __dirname.split("\\");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "\\";
  }
  return path;
}

roteador.get("/alunos", async function (req, res) {
  const alunos = await getAll();
  console.log(alunos);
  res.sendFile(`${getPath()}/views/index.html`);
});

roteador.post("/aluno", AlunosController.inserirAluno);

roteador.delete("/aluno", AlunosController.excluirAluno);

module.exports = roteador;
