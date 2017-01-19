var connection = require('../config/connection.js');
var mysql = require('mysql');

//helper func for sql syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i<num; i++){
		arr.push("?");
	}

	return arr.toString();
}

//helper func for sql syntax
function objToSql(ob){
	var arr = [];

	for(var key in ob){
		if(Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}


// object for all sql statement functions
var orm = {

	selectAll: function(tableInput, cd){
		var queryString = "SELECT * FROM" + tableInput + ";";

		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}

			cd(result);
		});
	},

	insertOne: function(){

	},

	updateOne: function(){

	}

	//databaseName: 
};


module.exports = orm;

//.75 -- export to connection and 