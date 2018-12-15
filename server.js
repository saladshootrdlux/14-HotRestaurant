//Dependendencies
var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

//Arrays
var reservations = [
    {
        name: "John Doe",
        numOfGuests: 4,
        uniqueID: 1
    },
    {
        name: "Sally Johnson",
        numOfGuests: 2,
        uniqueID: 2
    },
]
var wating = [
    {
        name: "John Doe",
        numOfGuests: 4,
        uniqueID: 1
    },
    {
        name: "John Doe",
        numOfGuests: 4,
        uniqueID: 1
    },
]

app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get('/make', function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"))
});
app.get('/view', function () {
    res.sendFile(path.join(__dirname, "view.html"))
})



app.post("/api/tables", function(req, res) {
    var table = req.table;

    console.log(table);
  
    tables.push(table);
});





