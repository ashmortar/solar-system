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
    $("#landing").removeClass("add-background");
    $("#landing").addClass("remove-background")
    $(".content").hide();
    $("#1observable").fadeIn("slow").delay(2000).fadeOut("fast");
    $("#2local").delay(3000).fadeIn("slow").delay(2000).fadeOut("fast");
    $("#3virgo").delay(6000).fadeIn("slow").delay(2000).fadeOut("fast");
    $("#4localG").delay(9000).fadeIn("slow").delay(2000).fadeOut("fast");
    $("#5milkyway").delay(12000).fadeIn("slow").delay(2000).fadeOut("fast");
    $("#6interstellar").delay(15000).fadeIn("slow").delay(2000).fadeOut("fast");
    setTimeout(function() {
      window.location.href = "solarSystem.html";
    }, 17000);
  });

  $("#io-moon").tooltip({
    'container': 'body',
    'placement': 'top',
    'title': '<div class="well">Io</div>',
    'html': 'true'
  });

  $("#europa-moon").tooltip({
    'container': 'body',
    'placement': 'top',
    'title': '<div class="well">Europa</div>',
    'html': 'true'
  });

  $("#ganymede-moon").tooltip({
    'container': 'body',
    'placement': 'top',
    'title': '<div class="well">Ganymede</div>',
    'html': 'true'
  });

  $("#back-2ss").click(function() {
    window.location.href="solarSystem.html";
  });

});
