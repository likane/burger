var express = require('express');
var mysql = require('mysql');

var connection = require('../config/connection.js');

var app = express();

var PORT = 3000;

app.listen(PORT);

