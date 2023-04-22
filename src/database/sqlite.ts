import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";

async function openDB(): Promise<Database> {
  return open({
    filename: "./src/database/database.db",
    driver: sqlite3.Database,
  });
}
module.exports = openDB;