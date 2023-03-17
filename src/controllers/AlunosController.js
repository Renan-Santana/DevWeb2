const deletarAluno = require("../services/AlunosServices/deletarAluno");
const inserirAluno = require("../services/AlunosServices/inserirAluno");
const atualizarAluno = require("../services/AlunosServices/atualizarAluno");

class AlunosController {
  constructor() {}

  async inserirAluno(req, res) {
    const aluno = req.body;
    console.log(aluno);
    const alunoInserido = await inserirAluno(aluno);
    res.redirect("/alunos");
  }

  async excluirAluno(req, res) {
    const aluno = req.body;
    const alunoExcluido = await deletarAluno(aluno);
    res.redirect("/");
  }

  async atualizarAluno(req, res) {
    const aluno = req.body;
    const id = req.params.id;
    const alunoAtualizado = await atualizarAluno(id, aluno);
    res.redirect("/");
  }
}

module.exports = new AlunosController();
