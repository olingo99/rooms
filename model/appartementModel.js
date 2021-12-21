var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'appart'
});


class Appart{
    constructor(){
        connection.query("SELECT * FROM rooms;",function(error2, result2){
            this.list = result2;
        })
    } 
    getList(){
        connection.query("SELECT * FROM rooms;",function(error2, result2){
            this.list = result2;
            return this.list
        })
    
    }

}

module.exports = Appart;