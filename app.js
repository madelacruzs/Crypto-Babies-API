var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");
var routes = require("./routes/routes-babies.js");
var index_db = require("./routes/index_db");

var connect = require("./db/connect");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*'); 
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(perimitirCrossDomain);


//Servicio de blockchain
app.use("/api", routes);

//Servicios de Base de datos 
app.use('/', index_db);


const PORT = process.env.PORT || config.PORT;

var server = app.listen(PORT, function () {
    console.log("app running on port.", PORT); 
}); 
