var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;        // set our port
var accountRoutes = require('./routes/account');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));
app.use('/api', accountRoutes);

app.listen(port);
console.log('Magic happens on port ' + port);