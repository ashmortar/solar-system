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
    'title': '<div class="well"><img class="tooltip-img" src="img/Io.gif" /><span class="io">Name:</span> Io <br><span class="io">Mass:</span> 8.93 x 10^22 kg (1.2 Moons) <br> <span class="io">Orbital Distance:</span> 421,800 km <br> <span class="io">Orbital Period:</span> 1.77 days <br> <span class="io">Surface Temperature:</span> -163 C <br> <span class="io">Discovery Date:</span> January 8, 1610 <br> <span class="io">Discovered By:</span> Galileo Galilei</div>',
    'html': 'true'
  });

  $("#europa-moon").tooltip({
    'container': 'body',
    'placement': 'top',
    'title': '<div class="well"><img class="tooltip-img" src="img/Europa.gif" /><span class="europa">Name:</span> Europa <br><span class="europa">Mass:</span> 4.80 x 10^22 kg (0.65 Moons) <br> <span class="europa">Orbital Distance:</span> 671,000 km <br> <span class="europa">Orbital Period:</span> 3.55 days <br> <span class="europa">Surface Temperature:</span> -171 C <br> <span class="europa">Discovery Date:</span> January 8, 1610 <br> <span class="europa">Discovered By:</span> Galileo Galilei</div>',
    'html': 'true'
  });

  $("#ganymede-moon").tooltip({
    'container': 'body',
    'placement': 'top',
    'title': '<div class="well"><img class="tooltip-img" src="img/Ganymede.gif" /><span class="ganymede">Name:</span> Ganymede <br><span class="ganymede">Mass:</span> 1.48 x10^23 kg (2.0 Moons) <br> <span class="ganymede">Orbital Distance:</span> 1,070,400 km <br> <span class="ganymede">Orbital Period:</span> 7.16 days <br> <span class="ganymede">Surface Temperature:</span> -163 C <br> <span class="ganymede">Discovery Date:</span> January 7, 1610 <br> <span class="ganymede">Discovered By:</span> Galileo Galilei</div>',
    'html': 'true'
  });

  $("#back-2ss").click(function() {
    window.location.href="solarSystem.html";
  });

});
