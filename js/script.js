$("#stbutton").on("click", function() {
    $("#page1").css("display", "none");
    $("#page2").css("display", "block");
    console.log($('#industry option:selected').val());
    if ($('#industry option:selected').val() == "ad") {
        $("#title").append(" / ADVERTISING");
    } else if (($('#industry option:selected').val() == "dev")) {
        $("#title").append(" / DEV STUDIO");
    }
    window.location = "content";
});

$('#rightarrow').on("click", function() {
    console.log("111");
    event.preventDefault();
    $('#guideitems').animate({
      scrollRight: "+=300px"
    }, "slow");
 });

 console.log("poop")
 $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });


// $(function() {
// 	$('ul.nav a').bind('click',function(event){
// 		var $anchor = $(this);
// 		/*
// 		if you want to use one of the easing effects:
// 		$('html, body').stop().animate({
// 			scrollLeft: $($anchor.attr('href')).offset().left
// 		}, 1500,'easeInOutExpo');
// 		 */
// 		$('html, body').stop().animate({
// 			scrollLeft: $($anchor.attr('href')).offset().left
// 		}, 1000);
// 		event.preventDefault();
// 	});
// });