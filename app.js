var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

// use Heroku's port if it isn't specified.
//otherwise use our own local port.

var port = process.env.PORT  || 7516;

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
