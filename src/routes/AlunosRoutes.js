const { Router } = require("express");
const AlunosController = require("../controllers/AlunosController");

const roteador = Router();

const getPath = () => {
  const paths = __dirname.split("\\");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "\\";
  }
  return path;
};

roteador.get("/alunos", async function (req, res) {
  res.sendFile(`${getPath()}/views/user.html`);
});

roteador.post("/aluno", AlunosController.inserirAluno);

roteador.delete("/aluno", AlunosController.excluirAluno);

roteador.put("/aluno/:id", AlunosController.atualizarAluno);

module.exports = roteador;
