document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    button.addEventListener("click", showhide);
});

function showhide() {
    var content = document.getElementById("content");
    var article = content.querySelector("article");

    if (!article) {
        // Créer un nouvel article et l'ajouter au contenu
        var newArticle = document.createElement("article");
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        content.appendChild(newArticle);
    } else {
        // Supprimer l'article existant
        content.removeChild(article);
    }
}

