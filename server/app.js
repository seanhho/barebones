var express  = require('express');
var app      = express();
var port     = process.env.PORT || 5000;
var bodyParser   = require('body-parser');
//var mongoose = require('mongoose');

//config
//var configDB = require('../config/database.js');
//mongoose.connect(configDB.url);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) // get information from html forms
app.use(express.static(__dirname + '/../client/lib'));
app.set('views', __dirname + '/../client/lib');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');

require('./routes.js')(app);

module.exports = app