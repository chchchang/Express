var express = require('express');
const db = require('../util/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 /* var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
  });

  connection.connect();
  console.log('connect success');
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    res.json(rows);
  });

  connection.end();*/
  db.execute("SELECT 1 + 1 AS solution")
  .then(data=>{
    debugger
    res.json(data[0]);
  }).
  catch((err)=>{
    console.log(err);
  });
});

module.exports = router;
