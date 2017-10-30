$("#stbutton").on("click", function() {
    $("#page1").css("display", "none");
    $("#page2").css("display", "block");
    console.log($('#industry option:selected').val());
    if ($('#industry option:selected').val() == "ad") {
        $("#title").append(" / ADVERTISING");
    } else if (($('#industry option:selected').val() == "dev")) {
        $("#title").append(" / DEV STUDIO");
    }

    
})