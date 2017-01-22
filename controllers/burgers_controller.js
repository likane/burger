var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js")

router.get('/', function(request, result){
	result.redirect("/index");
});

router.get('/index', function(request, result){
	burger.all(function(data){
		var allObject = {
			burger: data
		};

		console.log('LINE 23;;;;CONTROLLER:' + allObject);
		result.render('index', allObject);
	});
});

router.post('/burgers/create', function(request, result){
	burger.create([
			 'burgname', 'devoured'
		], [
			request.body.burgname, request.body.devoured
		], function() {
			result.redirect('/index'); 
		});
});

router.put('/burgers/update/:id', function(request, result){

	var condition = request.params.id;
	console.log(condition);

	burger.update({
		devoured: request.body.devoured
	}, condition, function(){
		result.redirect('/index');
	});
});


module.exports = router;


//get
//post requests from burger.js and push to view

//2 -- connect GUI with model/db with get/post requests