const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "university.db"));

db.run(`
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
  )
`, (err) => {
  if (err) {
    console.error("❌ Table creation failed:", err.message);
  } else {
    console.log("✅ Courses table created");
  }
});

db.close();
