//back end

//front end

$(document).ready(function(event) {

  $("#about-section").click(function(event) {
    event.preventDefault();
    $(".about-div").show();
    $(".spaceTravel-div").hide();
  });

  $("#space-travel").click(function(event) {
    event.preventDefault();
    $(".spaceTravel-div").show();
    $(".about-div").hide();
  });

  $("#svg-system").click(function(event) {
    event.preventDefault();
    $("body").removeClass("add-background");
    $("body").addClass("remove-background")
    $(".content").hide();
    $("#1observable").fadeIn("slow").delay(2000).fadeOut("fast");
    $("#2local").fadeIn("slow").delay(2000).fadeOut("fast");
    $("#3virgo").fadeIn("slow").delay(2000).fadeOut("fast");
    $("#4localG").fadeIn("slow").delay(2000).fadeOut("fast");
    $("#5milkyway").fadeIn("slow").delay(2000).fadeOut("fast");
    $("#6interstellar").fadeIn("slow").delay(2000).fadeOut("fast");
    //$(".output").delay(3000).fadeIn("slow");
  });
});
