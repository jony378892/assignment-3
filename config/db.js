import mysql from "mysql2/promise";

const pool = mysql.createPool(process.env.DB_URL);

export default pool;
