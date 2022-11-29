var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:nome/:sobrenome', (req, res, next)=> {
  let { nome, sobrenome }= req.params
  res.send('Olá ' + nome + ' ' + sobrenome)
})
module.exports = router;
