var express = require('express');
var path = require('path');
var app = express();

module.exports = {
    home: function(app) {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '/index.html'));
        })
    },
    tables: function(app) {
        app.get('/tables', function(req, res) {
            res.sendFile(path.join(__dirname + '/tables.html'));
        })
    },
    reservations: function(app) {
        app.get('/reservations', function(req, res) {
            res.sendFile(path.join(__dirname + '/reservations.html'));
        })
    }
};