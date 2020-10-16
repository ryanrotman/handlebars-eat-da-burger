const orm = require("../config/orm.js");

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne(column, value, cb) {
        orm.insertOne("burgers", column, value, (res) => {
            cb(res);
        });
    },
    updateOne(column, value, cb) {
        orm.updateOne("burgers", column, value, (res) => {
            cb(res);
        });
    }
    // TODO: deleteOne()
}

module.exports = burger