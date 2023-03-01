var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:nome', function(req, res) {
  let {nome} = req.params;

  res.send('Ola ' + nome);
})

module.exports = router;
