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
            console.log(reservations);
            res.send(reservations);
            
        })
    },
    postReservation: function(app, reservations, tables) {
        app.post('/api/reservations', function(req, res) {
            console.log(req.body);
            console.log("check");
            var newReserve = req.body;
            reservations.push(newReserve);
            var capacityFlag = false;
            var sendReserve;

            if(reservations.length > 5) {
                capacityFlag = true;
            }
            if (capacityFlag) {
                console.log('TABLES' + newReserve.name)
                tables.push(newReserve);
                sendReserve = [tables.length, newReserve.name];
            } else {
                sendReserve = [reservations.length, newReserve.name];
                console.log('reservation' + newReserve.name)
            }

            res.json(sendReserve);
            res.end();
        });
    }
};