var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RECIPE BOOK' });
});

// Route for About page. Unnecessary. Made just for testing purpose 
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

// exporting the routes to use them 
module.exports = router;
