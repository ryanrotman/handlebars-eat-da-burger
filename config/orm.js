// Import MySQL connection.
const connection = require("../config/connection.js");

// Object Relational Mapper (ORM)
const orm = {
    // selectAll()
    selectAll: (table) => {
        const queryString = "SELECT * FROM ??;";
        console.log(queryString);
        const query = connection.query(queryString, [table], (err, res) => {
            if (err) {
                throw err;
            }
            console.log(res);
        });
    },
    // insertOne()
    insertOne: (table, column, value) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?);";
        console.log(queryString);
        const query = connection.query(queryString, [table, column, value], (err, res) => {
            if (err) {
                throw err;
            }
            console.log(res);
        });
    },
    // updateOne()
    updateOne: (table, column, value) => {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        console.log(queryString);
        const query = connection.query(queryString, [table, column, value, column, value], (err, res) => {
            if (err) {
                throw err;
            }
            console.log(res);
        });
    }
}

// Export the orm object so our models can use it!
module.exports = orm;