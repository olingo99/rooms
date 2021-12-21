let express = require('express');

let router = express.Router();

let appartementController = require('./controller/appartementController');
let pieceController = require('./controller/pieceController');


router.get('/', pieceController.home);

router.post('/enregistrer', pieceController.enregistrer);


module.exports = router;
