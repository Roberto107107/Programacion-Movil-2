import * as SQLite from "expo-sqlite";

let db = null;

/**
 * Inicializa la base de datos
 */
export async function initDatabase() {
  db = await SQLite.openDatabaseAsync("instagram.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      liked INTEGER DEFAULT 0,
      saved INTEGER DEFAULT 0,
      likes INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      postId TEXT,
      username TEXT,
      comment TEXT
    );
  `);

  console.log(" Base de datos creada");
}

/**
 * Devuelve la instancia de SQLite
 */
export function getDatabase() {
  return db;
}