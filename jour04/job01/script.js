$(document).ready(function() {
    $("#button").click(function() {
        fetch("expression.txt")
            .then(response => response.text())
            .then(data => {
                $("body").append($("<p>").text(data));
            });
    });
});