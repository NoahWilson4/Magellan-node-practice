var locations = require('../models/locations.js');

var indexController = {
	byIndex: function(req, res) {
		var index = parseInt(req.params.target);
		if (isNaN(index)) {
			index = locations.names.indexOf(req.params.target);
			if(index === -1) {
				res.render('dne');
			} else {
				res.redirect('/' + index)
			}
		} else if (index > locations.names.length || index < 0 ){
			res.render('dne');
		} else	{
			res.render('index', locations.getPageData(index));
		}
	},
	getNext: function(req, res) {
		var outputObject = {};
		console.log('re.params test: ', req.query.location);
		outputObject.location = req.query.location;
		var locationIndex = locations.names.indexOf(outputObject.location);
		outputObject.nextLocation = locationIndex === -1 ? null : locations.names[(locationIndex + 1) % locations.names.length];
		res.send(JSON.stringify(outputObject));
	},
	default: function(req, res) {
		res.redirect('/' + 0);
	}
};

module.exports = indexController;