const execQuery = require("../execQuery");

async function inserirAluno(aluno) {
  try {
    const resultado = await execQuery(
      `INSERT into alunos (nome, grau, ativo) VALUES ('${aluno.nome}', '${aluno.grau}', ${aluno.ativo ? 1 : 0})`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = inserirAluno;
