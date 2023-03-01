var express = require('express');
var router = express.Router();

const cards = require('../data/card')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { cards: cards});
});




module.exports = router;
