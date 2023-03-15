const openDB = require("../database/sqlite");

async function execQuery(query) {
  try {
    const db = await openDB();
    const result = await db.exec(query);
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = execQuery;
