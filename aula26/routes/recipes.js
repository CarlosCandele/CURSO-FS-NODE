var express =require('express');
var router = express.Router();
var RecipsController = require('../controllers/RecipsController');

/*GET home page */
router.get('/', RecipsController.index);

/*POST home page */
router.post('/save', RecipsController.save);

/*GET home page */

router.get('/delete/:id', RecipsController.delete);

/*GET alterar receita */
router.get('/edit/:id', RecipsController.edit);

/* POST para alterar a receita */
router.post('/update/:id', RecipsController.update);

module.exports = router;
