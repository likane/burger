var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var orm = require('../config/orm.js');

//create the code that will call the ORM functions using burger 
//specific input for the ORM.

//main logic goes here


//module.exports = ;

// bellow for model:

//var grades;
//var curvedgrades
//connection.query('SELECT * from gredes',
//function(error, result){
	//grades = result;
	//return grades;
//})

//orm allows below:
/*var orm = require('../orm.js');

function getCurvedGrades(){
	var curvedgrades;

	var grades = orm.getGrades():

	var maxgrade = grades.sort()[0];
}
//var grades = orm.getGrades();


//1 - connect with data and manipulate with logic to export to controller