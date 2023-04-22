import { Database } from "sqlite";

const openDB = require("../database/sqlite");

async function getAll(): Promise<any[]> {
  try {
    var rows: any[] = [];
    const db: Database = await openDB();
    await db.each(
      "SELECT id, nome, grau, ativo FROM alunos",
      function (err, row) {
        if (err) {
          throw err;
        }
        rows.push(row);
      }
    );
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = getAll;
