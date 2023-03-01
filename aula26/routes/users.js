var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserCrontroller');


/* GET users listing. */
router.get('/create', UserController.create);

/*POST save para salvar os dados o usuário */
router.post('/save', UserController.save);

/*GET users login*/
router.get('/login', UserController.login);

/* POST autenticação de usuário*/
router.post('/authenticate', UserController.authenticate);

router.get('/logout', UserController.logout);

module.exports = router;
