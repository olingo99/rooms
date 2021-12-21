let Appartement = require('../model/appartementModel');

var mysql = require("mysql");
const { application } = require('express');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'appart'
});


//rien a faire dans le controller appartement