const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const cookieParser   = require("cookie-parser");
const cookieSession  = require("cookie-session");

const routes = require('./routes/routes');
const session = require('express-session');
const passport = require('passport');

// Database connection
mongoose.connect(config.database);
//mongoose.set('debug', true);
mongoose.connection.on('connected', function () {
    console.log('Connected to database ' + config.database)
})

const PORT = process.env.PORT || 8080;
//const PORT = 3000;

var app = express();

var expDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 90 days

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
});

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({
  secret:"defR5fd",
  expires: expDate
  }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)

// Initialize server
app.listen(PORT, function () {
    console.log('Server initialized at port: ' + PORT);
});

app.use('/api', routes);
app.use(express.static(__dirname + '/ng-src/dist/'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/ng-src/dist/index.html'));
});
