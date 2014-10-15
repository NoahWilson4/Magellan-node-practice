var express = require('express');
var indexController = require('./controllers/index.js');

var locations = require('./models/locations.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', indexController.default);

app.get('/next', indexController.getNext)

app.get('/:target', indexController.byIndex);

var server = app.listen(7487, function() {
	console.log('Express server listening on port ' + server.address().port);
});
