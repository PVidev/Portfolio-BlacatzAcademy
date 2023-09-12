$(function() {
    $("#searchButton").click(function() {
        let userId = $("#userId").val();
        let url = "https://blacatzacademy.com/api/users";

        if (userId) {
            url += "?id=" + userId;
        }

        $.ajax({
            url: url,
            method: "GET",
            success: function(data) {
                let table = $("#userTable");

                table.find("tr:gt(0)").remove();

                data.forEach(function(user) {
                    let row = $("<tr><td>" + user.id + "</td><td>" + user.name + "</td><td>" + user.lastName + "</td><td>" + user.age + "</td><td>" + user.salary + "</td></tr>");
                    table.append(row);
                });
            },
            error: function() {
                alert("Възникна грешка при търсене.");
            }
        });
    });
});