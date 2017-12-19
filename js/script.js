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
})
