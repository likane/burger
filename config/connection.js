var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'55capone',
	database:'burgers_db'
});

connection.connect(function(err){
	if (err){
		console.error("error connecting: " + err.stack);
		console.log(":-{(");
		return;
	}

	console.log('connected as ' + connection.threadId);

});

module.exports = connection;

//connection confirmed.


//.5 -- connection with server.js and export to app

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