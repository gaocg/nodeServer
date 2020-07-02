var mysql = require("mysql");
module.exports.connection = mysql.createPool({
    host:'localhost',
    user:"root",
    password:"",
    database:"test"
})