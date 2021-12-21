let Room = require('../model/pieceModel');
let Appart = require('../model/appartementModel');

var mysql = require("mysql");


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'appart'
});



exports.home = function(req, res) {
    res.render('main.ejs')
};

exports.enregistrer = function(req,res){

    var room = new Room(req.body.name,req.body.Longueur, req.body.Largeur);
    var appart = new Appart();

    setTimeout(function(){connection.query("SELECT * FROM rooms;",function(error2, result2){
        res.render('list.ejs',{list_piece:result2});
    })
,800});

    

};