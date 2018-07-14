// When the textOrange button is pressed...
$("#button1").on("click", function() {
    // Change funText to orange.
$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the textOrange button is pressed...
$("#button2").on("click", function() {
    // Change funText to orange.
$("#box").css("background-color","blue");
})

$("#button4").on("click", function() {
    // Change funText to orange.
$("#box").css("background-color","orange");
$("#box").animate({height:"150px", width:"150px"}, "fast");
$("#box").fadeTo(1000, 1000);
})

$("#button3").on("click", function() {
    // Change funText to orange.
$("#box").fadeTo(1000, 0.4);
})

