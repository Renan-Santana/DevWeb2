import { execQuery } from "../execQuery";

async function deletarAluno(aluno: { id: any; }) {
  try {
    const resultado = await execQuery(
      `DELETE FROM alunos WHERE alunos.id = '${aluno.id}'`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = deletarAluno;
