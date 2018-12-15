var express= require("express");
var path = require("path");

var PORT = 3000;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function (){
    console.log("listening at " + PORT);
});

var tables = [];



app.post("/api/tables", function(req, res) {
    var table = req.table;

    console.log(table);
  
    tables.push(table);
  

});


