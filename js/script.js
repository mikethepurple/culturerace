

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




var title = document.getElementById('tooltitle');
var desc = document.getElementById('tooltext');
var time = document.getElementById('time');
var reqs = document.getElementById("tools");
var people = document.getElementById("people");
var sections = document.getElementById("sects");
sections.innerHTML += "<div> <p class = \"title\">"+" contents.tools[i].sections[m].title" +"</p> <p class= \"text\">" + "contents.tools[i].sections[m].text" + "</p></div>";

$.getJSON('/content/content.json', function(contents) {
    $.each(contents.tools, function(i, items){
        if(contents.tools[i].role == "designer") {
            title.innerHTML = contents.tools[i].title;
            desc.innerHTML = contents.tools[i].description;
            time.innerHTML = contents.tools[i].time;
            people.innerHTML = contents.tools[i].people;


            $.each(contents.tools[i].tools, function(j, items) {
                console.log(contents.tools[i].tools[j]);
                reqs.innerHTML += (contents.tools[i].tools[j]+ "</br> ");
            });
            
            
            $.each(contents.tools[i].sections, function(m, items) {
                console.log(contents.tools[i].sections[m].title);

                // console.log(div.getElementById("title"));
                console.log("i'm DIV")
                sections.innerHTML += "<div> <p class = \"title\">"+ contents.tools[i].sections[m].title +"</p> <p class= \"text\">" + contents.tools[i].sections[m].text + "</p></div>";
            });

        }
    });
});


// $('#rightarrow').on("click", function() {
//     console.log("111");
//     event.preventDefault();
//     $('#guideitems').animate({
//       scrollRight: "+=300px"
//     }, "slow");
//  });

 console.log("poop");

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








// openJSON('/content/content.json', function(data) { 
//     $.each(data.tools, function(i, item) {
//         console.log(1);
//     });​
// });








// var data = {
//     "items": [
//         {
//             "title": "sample 1",
//             "author": "author 1"
//         },
//         {
//             "title": "sample 2",
//             "author": "author 2"
//         }
//     ]
// };



// data.items.forEach(function(v, i) {
// h5.innerHTML = v.title;
// p.innerHTML = "By: " + v.author;
// console.log("poooop");
// });