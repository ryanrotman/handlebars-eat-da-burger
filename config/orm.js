// Import MySQL connection.
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i > num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(obj) {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `${value}`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

// Object Relational Mapper (ORM)
const orm = {
    // selectAll()
    selectAll: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput};`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table}`;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // updateOne()
    updateOne: (table, objColVals, condition, cb) => {
        let queryString = `UPDATE ${table}`;
        
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: (table, condition, cb) => {
        const queryString = `DELETE FROM ${table} WHERE ${condition};`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export the orm object so our models can use it!
module.exports = orm;