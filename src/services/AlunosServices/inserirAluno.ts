import { execQuery } from "../execQuery";

async function inserirAluno(aluno: { nome: any; grau: any; ativo: any; }) {
  try {
    const resultado = await execQuery(
      `INSERT into alunos (nome, grau, ativo) VALUES ('${aluno.nome}', '${aluno.grau}', ${aluno.ativo ? 1 : 0})`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = inserirAluno;
