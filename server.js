var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//import localhost connections
var connection = require('./config/connection.js');

//import routes and provide host connection
var routes = require('./controllers/burgers_controller.js');


var app = express();

var PORT = 3000;

//set hanldebars as the default templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(PORT);

//0 - establish route and server connection