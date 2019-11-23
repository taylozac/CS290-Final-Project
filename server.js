/*
 * server.js
 * Created: 11/22/2019
 * Last edit: 11/22/2019
 * Author: Zachary Taylor
 */

var express = require('express');
var app = express();

//I use port 9001 since I run all of this on the ENGR servers and
//no one uses it. Feel free to change it to whatever you need. If
//your computer has a default port it will use that instead.
var port = process.env.PORT || 9001;


//Defining logger function
function logger (req, res, next) {
    console.log("====================\nReceived request:");
    console.log("--URL:", req.url);
    console.log("--Method:", req.method);
    next();
}

//Using logger function
app.use(logger);


//Catch for default path '/'
app.get('/', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

//Catch for all invalid URLs
app.get('/*', function (req, res, next) {
    res.status(404).sendFile(__dirname + '/public/404.html');           
});


app.listen(port, function() {
    console.log("Server is listening on port " + port + ".");
});
