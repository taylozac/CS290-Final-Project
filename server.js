/*
 * server.js
 * Created: 11/22/2019
 * Last edit: 11/22/2019
 * Author: Zachary Taylor
 */

var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

//I use port 9000 since I run all of this on the ENGR servers and
//no one uses it. Feel free to change it to whatever you need. If
//your computer has a default port it will use that instead.
var port = process.env.PORT || 9000;
var app = express();

var noteData = require('./noteData');

//Defining logger function
function logger (req, res, next) {
    console.log("====================\nReceived request:");
    console.log("--URL:", req.url);
    console.log("--Method:", req.method);
    next();
}

//Using logger function
app.use(logger);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//Catch for default path '/'
app.get('/', function (req, res, next) {
    //res.status(200).sendFile(__dirname + '/public/index.html');
    res.render('rootPage');
});

app.get('/notes', function (req, res) {
   res.render('notePage', note=noteData[0]);
});

//temp
//app.get('/style.css', function(req, res) {
//  res.status(200).sendFile(__dirname + '/public/style.css');
//});

//Catch for all invalid URLs
app.get('/*', function (req, res, next) {
    res.render('404Page');
});


app.listen(port, function() {
    console.log("Server is listening on port " + port + ".");
});
