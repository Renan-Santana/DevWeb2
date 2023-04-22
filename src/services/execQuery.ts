const openDB = require("../database/sqlite");
import { Database, Statement } from "sqlite";

async function execQuery(query: string): Promise<void> {
  try {
    const db: Database = await openDB();
    const statement: Statement = await db.prepare(query);
    await statement.run();
    await statement.finalize();
  } catch (error) {
    console.log(error);
  }
}

export {execQuery};