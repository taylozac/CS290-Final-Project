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

var drawingData = require('./drawingData');

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

app.use(bodyParser.json());

//Catch for default path '/'
app.get('/', function (req, res, next) {
    res.render('drawings', {
	    drawingData: drawingData
    
    
    });
});

app.get('/drawings', function (req, res) {
    res.render('drawings', {
        drawingData: drawingData
    });
});

//Rendering page with the given drawing
app.get('/drawings/:n', function (req, res, next) {
    var n = req.params.n;
    if(n >= 0 && n < drawingData.length) {
        var responseBody = {
            name: drawingData[n].name,
            body: JSON.stringify(drawingData[n])
        }
        res.render('drawing', responseBody);
    }
    else next();
});

console.log(drawingData[0]);

//Receiving request from client to save.
app.post('/drawing/:n/save', function (req, res, next) {
    var n = req.params.n;
    if(drawingData[n]) {
        console.log(req.body);
        if(req.body && req.body.strokes && req.body.name){
            drawingData[n] = req.body;

            fs.writeFile(
                __dirname + '/drawingData.json',
                JSON.stringify(drawingData, 2, null),
                function (err) {
                    if (!err) {
                        res.status(200).send();
                    } else {
                        res.status(500).send("Failed to write data to server.");
                    }
                }
            );

        } else {
            res.status(400).send("Request body not full.");
        }
    } else {
        next();
    }
});

//Receiving request from client for new note.
app.post('/drawings/newPost', function (req, res, next) {
    var newDrawing = {
        name: "New Note",
        index: drawingData.length,
        strokes: []
    }
    drawingData.push(newDrawing);

    //console.log(drawingData.length)

    fs.writeFile(
        __dirname + 'drawingData.json',
        JSON.stringify(drawingData, 2, null)
    );
});

app.post('/drawings/trash/:n', function (req, res, next) {
    var n = req.params.n;
    if (n >= 0 && n < drawingData.length) {
        drawingData.splice(n, 1);
        for (i = n; i < drawingData.length; i++) {
            drawingData[i].index = drawingData[i].index - 1;
        }

        console.log(drawingData.length);

        fs.writeFile(
            __dirname + 'drawingData.json',
            JSON.stringify(drawingData, 2, null)
        );

        console.log(drawingData);
    }
});

//Catch for all invalid URLs
app.get('/*', function (req, res, next) {
    res.render('404');
});


app.listen(port, function() {
    console.log("Server is listening on port " + port + ".");
});
