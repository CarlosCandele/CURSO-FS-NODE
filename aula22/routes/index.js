var express = require('express');
var router = express.Router();

const cards = require('../data/card.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', { cards });
});

module.exports = router;
