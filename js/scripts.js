//BACK END --------------------------------------------------------------------

  //constructor functions ------


    //constructor function for solar system objects. These properties are used to populate the tooltips
function SystemObject(name, milesFromSun, mass, radius, orbitalPeriod, lengthOfDay, equatorialRotationVelocity) {
  this.name = name;
  this.milesFromSun = milesFromSun;
  this.mass = mass;
  this.radius = radius;
  this.orbitalPeriod = orbitalPeriod;
  this.lengthOfDay = lengthOfDay;
  this.equatorialRotationVelocity = equatorialRotationVelocity;
}

    //constructor functions to create spacecraft and set their average velocity
function Apollo11() {
  this.speedKmPerHour = 5338;
}

function MarsScienceLaboratory() {
  this.speedKmPerHour = 93295;
}

function Voyager() {
  this.speedKmPerHour = 61000;
}

function Galileo() {
  this.speedKmPerHour = 38000;
}

    //constructor function that contains all solar system objects
function SolarSystem() {
  this.systemObjects = [];
}


  //Object Prototypes --------

    //prototype that pushes all system objects into the solar system object
SolarSystem.prototype.setSystemObjects = function () {
  this.systemObjects.push(new SystemObject("Mercury", 3.60e7, "3.285 x 10^23 kg", "1,516 mi", "88 days", "58d 15h 30m", "10.892 km/h (3.026 m/s)"));
  this.systemObjects.push(new SystemObject("Venus", 6.70e7, "4.867 x 10^24 kg", "3,760 mi", "225 days", "116d 18h 0m", "6.52 km/h (1.81 m/s)"));
  this.systemObjects.push(new SystemObject("Earth", 9.30e7, "5.972 x 10^24 kg", "3,959 mi", "365 days", "1d", "0.4651 km/s"));
  this.systemObjects.push(new SystemObject("Mars", 1.42e8, "6.39 x 10^23 kg", "2,106 mi", "687 days", "1d 0h 40m", "868.22 km/h (241.17 m/s)"));
  this.systemObjects.push(new SystemObject("Jupiter", 4.84e8, "1.898 x 10^27 kg", "43,441 mi", "11.862 yr; 4,332.59 d; 10,475.8 Jovian solar days;", "0d 9h 56m", "12.6 km/s (7.8 mi/s; 45,000 km/h)"));
  this.systemObjects.push(new SystemObject("Saturn", 8.85e8, "5.683 x 10^26 kg", "36,184 mi", "29.4571 yr; 10,759.22 d; 24,491.07 Saturnian solar days;", "0d 10h 42m", "9.87 km/s (6.13 mi/s; 35,500 km/h)"));
  this.systemObjects.push(new SystemObject("Uranus", 1.78e9, "8.681 x 10^25 kg", "15,759 mi", "84.0205 yr; 30,688.5 d; 42,718 Uranian solar days;", "0d 17h 14m", "2.59 km/s; 9,320 km/h"));
  this.systemObjects.push(new SystemObject("Neptune", 2.79e9, "1.024 x 10^26 kg", "15,299 mi", "164.8 yr; 60,182 days; 89,666 Neptunian solar days;", "0d 16h 6m", "2.68 km/s (9,650 km/h)"));
  this.systemObjects.push(new SystemObject("Sun", 0, "1.99 x 10^30 kg", "695,700 km", "2.38 x 10^8 yr (galactic center)", "N/A", "7,189 km/h"));
  this.systemObjects.push(new SystemObject("Ceres", 2.57e8, "9.39 x10^20 kg", "294 mi", "4.6 years; 1679 days; 4477 Cererian solar days", "9 hours", "333.4 km/h"));
  this.systemObjects.push(new SystemObject("Pluto", 3.67e9, "1.31 × 10^22 kg", "738.4 mi", "248.00 years; 90,560 d; 14150 Plutonian days", "6.4 d", "47.18 km/h"));
};

    //prototype that creates a string with information about the object along with some html to get pushed into tooltips
SystemObject.prototype.getInfo = function () {
  var str = "";

  str += '<div class="well"><img class="tooltip-img" src="img/' + this.name + '.gif" alt="no gif yet"><span id="' + this.name + '">' + "Name:" +'</span> ' + this.name + '<br>';
  str += '<span id="' + this.name + '">' + "Distance from sun:" +'</span> ' + this.milesFromSun.toExponential(2) + " miles" + '<br>';
  str += '<span id="' + this.name + '">' + "Mass:" +'</span> ' + this.mass + '<br>';
  str += '<span id="' + this.name + '">' + "Radius:" +'</span> ' + this.radius + '<br>';
  str += '<span id="' + this.name + '">' + "Orbital period:" +'</span> ' + this.orbitalPeriod + '<br>';
  str += '<span id="' + this.name + '">' + "Length of day:" +'</span> ' + this.lengthOfDay + '<br>';
  str += '<span id="' + this.name + '">' + "Equatorial rotation velocity:" +'</span> ' + this.equatorialRotationVelocity + '<br></div>';
  return str;
};


//Loose functions

  //this converts the input time and speed into a distance in pixels for drawing travel ellipsis
var getPixelDistance = function(inputTime, speed) {
  // inputTime is in h
  var speed;//km p h
  var distance = ((inputTime*24) * speed); //km
  var distanceAU = distance / 150000000; //AU
  var distancePX = distanceAU * 50; //px
  return distancePX;
}


  //this converts the input time into distance in pixels for a constant 1G thrust
var constantThrust = function(inputTime) {
  var t = inputTime*24*60*60;
  var a = 9.8;
  var d = a * Math.pow((t / 2), 2);
  var distanceAU = d / 150000000000;
  var distancePX = distanceAU * 50;
  return distancePX;
}

  //this was used to help determine planet pixel size
var planetPixelSize = function(number) {
  return ((number-294)/ 829) + 3;
}

//FRONT END -------------------------------------------------------------------

$(document).ready(function(event) {
  //this will set the svg veiwbox height to equal user veiwport height above 800px threshold
  var winHeight = $(window).height();

  if (winHeight > 800) {
    var svg = document.getElementById("svg-tag");
    svg.setAttributeNS(null, 'height', winHeight);
    svg.setAttributeNS(null, 'viewBox', '0 0 4000 ' + winHeight);
  }

  //this will populate the solar system with the above defined objects
  var solarSystem = new SolarSystem();
  solarSystem.setSystemObjects();

  //make tooltips
  for (var i=0; i<solarSystem.systemObjects.length; i++) {
    $("#" + i).tooltip({
      'container': 'body',
      'placement': 'bottom',
      'title': solarSystem.systemObjects[i].getInfo(),
      'html': 'true'
    });
  }

  //click function to return to index.html
  $("#back").click(function() {
    window.location.href="index.html";
  })

  //click function to go to jupiter.html
  $("#4").click(function() {
    window.location.href="jupiter.html";
  })

  //submit function that will zero out the size of travel ellipsis
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var spacecraft = [];
    $("input:checkbox[name=spacecraft]:checked").each(function() {
      spacecraft.push($(this).val());
    })
    var inputTime = parseInt($("#input").val());
    var pixelDistance = 0;
    var ellipse = document.getElementById("travel-apollo");
    ellipse.setAttributeNS(null, "rx", pixelDistance);
    ellipse.setAttributeNS(null, "ry", pixelDistance);
    var ellipse = document.getElementById("travel-msl");
    ellipse.setAttributeNS(null, "rx", pixelDistance);
    ellipse.setAttributeNS(null, "ry", pixelDistance);
    var ellipse = document.getElementById("travel-constant");
    ellipse.setAttributeNS(null, "rx", pixelDistance);
    ellipse.setAttributeNS(null, "ry", pixelDistance);
    var ellipse = document.getElementById("travel-voyager");
    ellipse.setAttributeNS(null, "rx", pixelDistance);
    ellipse.setAttributeNS(null, "ry", pixelDistance);
    var ellipse = document.getElementById("travel-galileo");
    ellipse.setAttributeNS(null, "rx", pixelDistance);
    ellipse.setAttributeNS(null, "ry", pixelDistance);

    //once values are set to zero this for loop will set them to the new calulated values based on user input
    for (var k=0; k<spacecraft.length; k++) {
      if (spacecraft[k] === "apollo") {
        var apollo = new Apollo11();
        pixelDistance = getPixelDistance(inputTime, apollo.speedKmPerHour);
        var ellipse = document.getElementById("travel-apollo");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else if (spacecraft[k] === "msl") {
        var msl = new MarsScienceLaboratory();
        pixelDistance = getPixelDistance(inputTime, msl.speedKmPerHour);
        var ellipse = document.getElementById("travel-msl");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else if (spacecraft[k] === "constant") {
        pixelDistance= constantThrust(inputTime);
        var ellipse = document.getElementById("travel-constant");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else if (spacecraft[k] === "voyager") {
        var voyager = new Voyager();
        pixelDistance = getPixelDistance(inputTime, voyager.speedKmPerHour);
        var ellipse = document.getElementById("travel-voyager");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else if (spacecraft[k] === "galileo") {
        var galileo = new Galileo();
        pixelDistance = getPixelDistance(inputTime, galileo.speedKmPerHour);
        var ellipse = document.getElementById("travel-galileo");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else {
        alert("error");
      }
    }
  });
});
