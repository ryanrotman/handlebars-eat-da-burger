// Import MySQL connection.
const connection = require("../config/connection.js");

// Object Relational Mapper (ORM)
const orm = {
    // selectAll()
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM ??;";
        console.log(queryString);
        const query = connection.query(queryString, [table], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // insertOne()
    insertOne: (table, column, value, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?);";
        console.log(queryString);
        const query = connection.query(queryString, [table, column, value], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // updateOne()
    updateOne: (table, column, value, cb) => {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        console.log(queryString);
        const query = connection.query(queryString, [table, column, value, column, value], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: (table, condition, cb) => {
        const queryString = "DELETE FROM ?? WHERE ??;";
        console.log(queryString);
        const query = connection.query(queryString, [table, condition], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
}

// Export the orm object so our models can use it!
module.exports = orm;