var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes=require('./routes/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//db connection
require('./database/index');

// default route
app.use('/', routes);

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;