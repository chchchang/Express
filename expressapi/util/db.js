const mysql = require("mysql2");
const pool = mysql.createPool({
    host: 'localhost',
    user     : 'express',
    password : '1qaz2wsx#EDC',
    database : 'express'
});

module.exports = pool.promise();