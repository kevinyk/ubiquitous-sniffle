// 1. Load modules into variables
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// Configure express
app.use(bodyParser.json());
// This line is new -Nick
app.use(express.static(path.join(__dirname, 'public', 'dist')));


// mongoose connection
mongoose.connect('mongodb://localhost/mama_meana_pizza');
require('./server/config/mongoose.js');

// load routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// server listen
app.listen(8000, function(){
	console.log('on port 8000');
})