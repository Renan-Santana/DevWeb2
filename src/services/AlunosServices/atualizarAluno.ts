import { execQuery } from "../execQuery";

async function atualizarAluno(id: number, aluno: { nome: any; grau: any; ativo: any; }): Promise<void> {
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

module.exports = atualizarAluno;
