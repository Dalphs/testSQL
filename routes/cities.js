var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: "root",
  database: "world"
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  con.connect(function(err){
    if(err)throw err;
    console.log("Connected to Database");
    var query = "SELECT * FROM city";
    con.query(query, function(err, result){
      if (err) throw err;
      console.log(result);
      res.render('table', {titles: ['ID', 'Name', 'CountryCode', 'District', 'Population'], cities: result});
    });
  });
});

module.exports = router;
