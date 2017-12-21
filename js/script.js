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

// This is produces the slideshow effect when you click the solarSystem link;
  $("#svg-system").click(function(event) {
    event.preventDefault();
    $("#landing").removeClass("add-background");
    $("#landing").addClass("remove-background")
    $(".content").hide();
    $("#skip").show();
    $("#1observable").fadeIn("slow").delay(4000).fadeOut("fast");
    $("#2local").delay(5000).fadeIn("slow").delay(4000).fadeOut("fast");
    $("#3virgo").delay(10000).fadeIn("slow").delay(4000).fadeOut("fast");
    $("#4localG").delay(15000).fadeIn("slow").delay(4000).fadeOut("fast");
    $("#5milkyway").delay(20000).fadeIn("slow").delay(4000).fadeOut("fast");
    $("#6interstellar").delay(25000).fadeIn("slow").delay(4000).fadeOut("fast");
    setTimeout(function() {
      window.location.href = "solarSystem.html";
    }, 30000);
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
