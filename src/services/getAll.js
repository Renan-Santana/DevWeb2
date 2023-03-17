const openDB = require("../database/sqlite");

async function getAll() {
  try {
    var rows = [];
    const db = await openDB();
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
  }
}

module.exports = getAll;
