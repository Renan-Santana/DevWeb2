const deletarAluno = require("../services/AlunosServices/deletarAluno");
const inserirAluno = require("../services/AlunosServices/inserirAluno");

class AlunosController {
  constructor() {}

  async inserirAluno(req, res) {
    const aluno = req.body;
    console.log(aluno.nome);
    const alunoInserido = await inserirAluno(aluno);
    res.end(JSON.stringify(aluno));
  }

  async excluirAluno(req, res) {
    const aluno = req.body;
    const alunoExcluido = await deletarAluno(aluno);
    res.end(alunoExcluido);
  }
}

module.exports = new AlunosController();
