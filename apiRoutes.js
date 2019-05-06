var express = require('express');
var app = express();
var path = require('path');

module.exports = {
    getTables: function(app, tables) {
        app.get('/api/tables', function(req, res) {
            res.send(tables);
        })
    },
    getReservations: function(app, reservations) {
        app.get('/api/reservations', function(req, res) {
            res.send(tables);
        })
    },
    postReservation: function(app, reservations, tables) {
        app.post('/api/reservations', function(req, res) {
            var newReserve = req.body;
            reservations.push(newReserve);
            var capacityFlag = false;
            var sendReserve;

            if(reservations.length >= 5) {
                capacityFlag = true;
            }
            if (capacityFlag) {
                tables.push(newReserve);
                sendReserve = [tables.length, newReserve.name];
            } else {
                sendReserve = [reservations.length, newReserve.name];
            }

            res.json(sendReserve);
            res.end();
        });
    }
};