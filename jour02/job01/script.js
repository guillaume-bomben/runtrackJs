document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    button.addEventListener("click", citation);
});

function citation(){
        var text = document.getElementById("citation").textContent;
        console.log(text);
}
