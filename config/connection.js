// Set up MySQL connection.
const mysql = require("mysql");

// Creating a variable to hold the connection
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "84Vq#sZ8>p",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to DB: ${err.stack}`);
    return;
  }
  console.log(`Connected to DB with ID ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;