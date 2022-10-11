$(document).ready(function(){
    $(".navbar .dropdown").click(function(){
        $(this).find("ul").slideToggle("normal");
    });
});