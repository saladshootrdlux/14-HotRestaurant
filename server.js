//Dependendencies
var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

//Arrays
var reservations = []
var wating = []

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.listen(PORT, function () {
    console.log("App is live on port 3000.");
});

app.get('/', function (req, res) {
    res.send("home.html")
});

app.get('/make', function (req, res) {
    res.send("make.html")
});

app.post("/api/tables", function (req, res) {
    var table = req.table;
    console.log(table);
    tables.push(table);
});
