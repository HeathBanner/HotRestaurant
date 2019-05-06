var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var routes = require('./htmlRoutes');
var api = require('./apiRoutes');

var routes = require('./htmlRoutes');
var api = require('./apiRoutes');

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [];
var tables = [];

routes.home(app);
routes.tables(app);
routes.reservations(app);

api.getTables(app, tables);
api.getReservations(app, reservations);
api.postReservation(app, reservations, tables);

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});

