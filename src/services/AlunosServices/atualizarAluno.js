const execQuery = require("../execQuery");

async function deletarAluno(id, aluno) {
  try {
    const resultado = await execQuery(
      `update alunos SET 
        nome = '${aluno.nome}',
        grau = '${aluno.grau}',
        ativo = ${aluno.ativo ? 1 : 0}  
       WHERE alunos.id = ${id}`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = deletarAluno;
