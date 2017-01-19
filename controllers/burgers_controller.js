
var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var burgers = require('../models/burger.js');


var router = express.Router();

router.get("/", function(request, result){
	result.
})
//get
//post requests from burger.js and push to view

//2 -- connect GUI with model/db with get/post requests