const orm = require("../config/orm.js");

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (results) => {
            cb(results);
        });
    },
    insertOne(column, value, cb) {
        orm.insertOne("burgers", column, value, (result) => {
            cb(result);
        });
    },
    updateOne(column, value, cb) {
        orm.updateOne("burgers", column, value, (result) => {
            cb(result);
        });
    },
    deleteOne(condition, cb) {
        orm.deleteOne("burgers", condition, (result) => {
            cb(result);
        });
    }
}

module.exports = burger