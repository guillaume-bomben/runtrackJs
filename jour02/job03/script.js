document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var compteur = document.getElementById("compteur");
    var count = 0;

    button.addEventListener("click", addOne);

    function addOne() {
        count++;
        compteur.textContent = count;
    }
});
