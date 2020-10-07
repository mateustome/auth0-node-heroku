const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var query = "SELECT * FROM salesforce.contacts";
  var result = [];
  sharedPgClient.query(query, function(err, result){
      console.log("Jobs Query Result Count: " + result.rows.length);
      res.render('index', {title: result.rows[0].name});
  });

});

module.exports = router;
