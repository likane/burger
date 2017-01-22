var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var orm = require('../config/orm.js');
console.log(orm);
var burg = {
	all: function(cd) {
		orm.all('burgers', function(result){
			cd(result);
		});
	},

	create: function(cols, vals, cd) {
		orm.create('burgers', cols, vals, function(result){
			cd(result);
		});
	},

	update: function(objColVals, condition, cd) {
		//var condition = 'id=' +id;
		orm.update('burgers', objColVals, condition, function(result){
			cd(result);
		}); 
	}
};

module.exports = burg;

//create the code that will call the ORM functions using burger 
//specific input for the ORM.

//main logic goes here


