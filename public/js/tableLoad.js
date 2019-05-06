

$.ajax({
    url: '/api/reservations',
    method: 'GET',
}).then(function(res) {
    loadReservation(res);
});

$.ajax({
    url: '/api/tables',
    method: 'GET'
}).then(function(res) {
    loadTable(res);
});

function loadReservation(reservations) {
    console.log(reservations)
    for (var i in reservations) {
        var num = 1 + parseInt(i)
        console.log(num)
        var row = $('<div class="row clist rounded"></div>');
        row.append('<div class="col-md-12"></div>');
        row.append('<h2><span class="labeln rounded">' + num + '</span>| ' + reservations[i].id + '</h2>');
        $("#reservations").append(row);
    }
    console.log('LOAD')
};

function loadTable(tables) {
    for (var i in tables) {
        var num = 1 + parseInt(i)
        var row = $('<div class="row clist rounded"></div>');
        row.append('<div class="col-md-12"></div>');
        row.append('<h2><span class="labeln rounded">' + num + '</span>| ' + tables[i].id + '</h2>');
        $("#waiting").append(row);
    }
    console.log(tables)
};

