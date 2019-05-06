console.log('FIRE')

function cleanForm() {
    $('#form').find(":text").not(":button", ":submit", ":radio").val("");
};

$("#form").on('submit', function(event) {
    console.log('YES')
    event.preventDefault();
    var newReserve = {
        name: $("#name").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        id: $("#id").val()
    };
    cleanForm();
    $.ajax({
        url: "/api/reservations",
        method: "POST",
        data: newReserve
    }).then(function(res) {
        $("#modal-box").show();
        $("#customer-name").text(res);
    });
});

$(".close").on("click", function() {
    $("#modal-box").hide();
});