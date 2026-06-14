import Database from "better-sqlite3"

const db = new Database("./database/ecommerce.db")

export default db;