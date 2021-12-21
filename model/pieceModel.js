var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'olingo',
    password:'olingoolingo',
    database: 'appart'
});


class Room{
    constructor(name,long,larg){
        this.name=name;
        this.long = long;
        this.larg = larg;
        connection.query("INSERT INTO rooms(name,length,width) VALUES (?,?,?)",[this.name, this.long, this.larg], function(error,result){
            if (error) console.log(error);
        });
    } 
    List(){
        return [this.name, this.long, this.larg];
    }

}

module.exports = Room;