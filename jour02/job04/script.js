document.addEventListener("DOMContentLoaded", function() {
    var keylogger = document.getElementById("keylogger");

    document.addEventListener("keypress", function(event) {
        // Vérifier si la touche enfoncée est une lettre (a-z)
        if (event.key.match(/^[a-z]$/i)) {
            var key = event.key.toLowerCase(); // Convertir en minuscule

            // Vérifier si le focus est dans le textarea
            if (document.activeElement === keylogger) {
                // Si oui, ajouter la lettre deux fois
                keylogger.value += key + key;
            } else {
                // Sinon, ajouter la lettre une fois
                keylogger.value += key;
            }

            // Empêcher le comportement par défaut de la touche pour éviter d'ajouter le caractère une deuxième fois dans certains navigateurs
            event.preventDefault();
        }
    });
});
