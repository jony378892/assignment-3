import pool from "./config/db.js";

(async () => {
  try {
    await pool.query(`
      ALTER TABLE locations 
      MODIFY latitude FLOAT NOT NULL,
      MODIFY longitude FLOAT NOT NULL;
    `);
    console.log("✅ Columns updated!");
  } catch (err) {
    console.error("❌ Error running ALTER TABLE:", err.message);
  }
})();
