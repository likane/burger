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

	create: function(burger_name, cd) {
		orm.create('burgers', ["burger_name, devoured"], { name: false }, cd);
	},

	update: function(id, cd) {
		//var condition = 'id=' +id;
		orm.update('burgers', {devoured: true}, condition, cd); 
	}
};

module.exports = burg;

//create the code that will call the ORM functions using burger 
//specific input for the ORM.

//main logic goes here


