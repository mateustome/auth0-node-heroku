const express = require('express');
const router = express.Router();
const pg = require("pg");
pg.defaults.ssl = true;

var dbString = process.env.DATABASE_URL;

var sharedPgClient;

pg.connect(dbString, function(err,client){
  if(err){
      console.error("PG Connection Error")
  }
  console.log("Connected to Postgres");
  sharedPgClient = client;
});
/* GET home page. */
router.get('/', function (req, res, next) {
  var query = "SELECT * FROM salesforce.contact";
  var result = [];
  sharedPgClient.query(query, function(err, result){
      console.log("Jobs Query Result Count: " + result.rows.length);
      res.render('index', {title: result.rows[0].name});
  });

});

module.exports = router;
