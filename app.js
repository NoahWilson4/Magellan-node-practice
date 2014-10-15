var express = require('express');
// var indexController = require('./controllers/index.js');

var locations = require('./models/locations.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	console.log('test: ', locations.getPageData(0));
	res.render('index', locations.getPageData(0));

});

app.get('/:locationIndex', function(req, res){
	var index = parseInt(req.params.locationIndex);
	if (index > locations.names.length || index < 0 || isNaN(index)) {
		res.render('dne');
	} else {
		res.render('index', locations.getPageData(index));
	}
})

var server = app.listen(7487, function() {
	console.log('Express server listening on port ' + server.address().port);
});
