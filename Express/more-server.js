"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


//var Project = require('./schema').Project;
var http = require('http');
var https = require('https');

/* Initialize express app */
var app = express();

var host = process.env.APP_HOST || 'localhost';
var port = process.env.APP_PORT || '3000';

app.use(bodyParser.json());

app.use(session({
   rolling: true,
   saveUninitialized: true,
   resave: true,
   secret: config.SESSION_SECRET,
   cookie: {
      maxAge: 36000000,
      httpOnly: false
   }
}));

app.use(express.static(__dirname + '/app'));

var index = require('./routes/index');

app.use ('/', index);

app.all('*', function(req, res, next) {
   res.set('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
   res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
   if ('OPTIONS' == req.method) return res.send(200);
   next();
});

/* Define fallback route */
app.use(function(req, res, next) {
    res.status(404).json({errorCode: 404, errorMsg: "route not found"});
});

/* Define error handler */
app.use(logging.errorHandler);

/* Start server */
app.listen(app.get('port'), function() {
    logger.info('Express server listening on http://' + app.get('host') + ':' + app.get('port'));
});
