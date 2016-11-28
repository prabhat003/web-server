var express = require('express');
var app = express();
var PORT = 3000;
var middleware ={
	requireAuthentication: function(req, res, next){
		console.log('Private route hit');
		next();
	},
	logger: function(req, res, next){
		var date = new Date().toString();
		console.log(req.method + ' ' + req.originalUrl + '  ' + date);
		next();
	}
};
//app.use(middleware.requireAuthenticationl);
app.use(middleware.logger);

// app.get('/', function(req, res){
// 	res.send('Hello Express');
// });

app.get('/about',middleware.requireAuthentication, function(req, res){
	res.send('About Us !!!!');
});


app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function(){
	console.log('Server listening on port no ' + PORT);
});