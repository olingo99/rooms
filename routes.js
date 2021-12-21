let express = require('express');

let router = express.Router();

let appartementController = require('./controller/appartementController');
let pieceController = require('./controller/pieceController');

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'apart'
});


router.get('/', pieceController.home);

router.post('/enregistrer', pieceController.enregistrer);


module.exports = router;