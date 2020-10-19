const orm = require("../config/orm.js");

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (results) => {
            cb(results);
        });
    },
    insertOne(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (result) => {
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