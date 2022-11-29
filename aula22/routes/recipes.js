var express = require('express');
var router =  express.Router();

const RecipesController = require('../controllers/recipesController')

router.get('/', RecipesController.index);


// Rota do tipo post
router.post('/save', RecipesController.save);
module.exports = router;