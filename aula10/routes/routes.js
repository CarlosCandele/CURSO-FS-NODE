
const express = require('express');
const router = express.Router();
const primeiroController = require('../controllers/primeiroController');

// router.get : efetuar requisição para buscar algo
// router.post : receber uma requisição, processa-la e retornar algo.
router.get('/', primeiroController.index);

router.get('/cumprimentar/:nome', primeiroController.cumprimentar);

router.get('/calcular/:numero1/:numero2?', primeiroController.calcular);


// criando rota parametrizada com query params que serão infomrados na URL
router.get('/query/:nome', primeiroController.getQueryParams);

module.exports = router;