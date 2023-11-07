var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET handler for // < root of the site
router.get('/einstein', function(req, res, next) {
  res.render('einstein', { title: 'Einstein' });
});
// GET handler for // < root of the site
router.get('/newton', function(req, res, next) {
  res.render('newton', { title: 'Newton' });
});
// GET handler for // < root of the site
router.get('/currie', function(req, res, next) {
  res.render('currie', { title: 'Currie' });
});
// GET handler for // < root of the site
router.get('/darwin', function(req, res, next) {
  res.render('darwin', { title: 'Darwin' });
});


module.exports = router;
