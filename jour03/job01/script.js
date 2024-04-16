$(document).ready(function() {
    let show = $("#b1");
    let hide = $("#b2");

    show.click(function(){
        let paragraph = $("<p>");
        paragraph.html("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
        $("body").append(paragraph);
    });

    hide.click(function(){
        $("p").remove();
    });
});
