//back end

function Planet(name, lightYearsFromSun, milesFromSun, mass, radius, orbitalPeriod, lengthOfDay, equatorialRotationVelocity) {
  this.name = name;
  this.lightYearsFromSun = lightYearsFromSun;
  this.milesFromSun = milesFromSun;
  this.mass = mass;
  this.radius = radius;
  this.orbitalPeriod = orbitalPeriod;
  this.lengthOfDay = lengthOfDay;
  this.equatorialRotationVelocity = equatorialRotationVelocity;
}

function SolarSystem() {
  this.planets = [];
}


SolarSystem.prototype.setPlanets = function () {
  this.planets.push(new Planet("Mercury", 0.000006123880620837039, 36000000, "3.285 x 10^23 kg", "1,516 mi", "88 days", "58d 15h 30m", "10.892 km/h (3.026 m/s)"));
  this.planets.push(new Planet("Venus", 0.000011397222266557821, 67000000, "4.867 x 10^24 kg", "3,760 mi", "225 days", "116d 18h 0m", "6.52 km/h (1.81 m/s)"));
  this.planets.push(new Planet("Earth", 0.00001582002493716235, 93000000, "5.972 x 10^24 kg", "3,959 mi", "365 days", "1d", "0.4651 km/s"));
  this.planets.push(new Planet("Mars", 0.000024155306893301653, 142000000, "6.39 x 10^23 kg", "2,106 mi", "687 days", "1d 0h 40m", "868.22 km/h (241.17 m/s)"));
  this.planets.push(new Planet("Jupiter", 0.00008233217279125351, 484000000, "1.898 x 10^27 kg", "43,441 mi", "11.862 yr; 4,332.59 d; 10,475.8 Jovian solar days;", "0d 9h 56m", "12.6 km/s (7.8 mi/s; 45,000 km/h)"));
  this.planets.push(new Planet("Saturn", 0.0001505453985955772, 885000000, "5.683 x 10^26 kg", "36,184 mi", "29.4571 yr; 10,759.22 d; 24,491.07 Saturnian solar days;", "0d 10h 42m", "9.87 km/s (6.13 mi/s; 35,500 km/h)"));
  this.planets.push(new Planet("Uranus", 0.0003027918751413869, 1780000000, "8.681 x 10^25 kg", "15,759 mi", "84.0205 yr; 30,688.5 d; 42,718 Uranian solar days;", "0d 17h 14m", "2.59 km/s; 9,320 km/h"));
  this.planets.push(new Planet("Neptune", 0.00047460074811487044, 2790000000, "1.024 x 10^26 kg", "15,299 mi", "164.8 yr; 60,182 days; 89,666 Neptunian solar days;", "0d 16h 6m", "2.68 km/s (9,650 km/h)"));
};


Planet.prototype.getInfo = function () {
  var str = "";

  str += '<span id="' + this.name + '">' + "Name:" +'</span> ' + this.name + '<br>';
  str += '<span id="' + this.name + '">' + "Distance from sun:" +'</span> ' + this.lightYearsFromSun + " light years" + '<br>';
  str += '<span id="' + this.name + '">' + "Distance from sun:" +'</span> ' + this.milesFromSun + " miles" + '<br>';
  str += '<span id="' + this.name + '">' + "Mass:" +'</span> ' + this.mass + '<br>';
  str += '<span id="' + this.name + '">' + "Radius:" +'</span> ' + this.radius + '<br>';
  str += '<span id="' + this.name + '">' + "Orbital period:" +'</span> ' + this.orbitalPeriod + '<br>';
  str += '<span id="' + this.name + '">' + "Length of day:" +'</span> ' + this.lengthOfDay + '<br>';
  str += '<span id="' + this.name + '">' + "Equatorial rotation velocity:" +'</span> ' + this.equatorialRotationVelocity + '<br>';
  return str;
};

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

var getPixelDistance = function(inputTime, speed) {
  // inputTime is in h
  var speed;//km p h
  var distance = ((inputTime*24) * speed); //km
  var distanceAU = distance / 150000000; //AU
  var distancePX = distanceAU * 50; //px
  return distancePX;
}

var constantThrust = function(inputTime) {
  var t = inputTime*24*60*60;
  var a = 9.8;
  var d = a * Math.pow((t / 2), 2);
  var distanceAU = d / 150000000000;
  var distancePX = distanceAU * 50;
  return distancePX;
}

var drawTravelEllipse = function(j) {
  console.log("I'm running");
}
//   setInterval(function() {
//     var ellipse = document.getElementById("travel");
//     ellipse.setAttributeNS(null, "rx", j);
//     ellipse.setAttributeNS(null, "rx", j);
//   }, 100)
// }


//front end

$(document).ready(function(event) {



  var solarSystem = new SolarSystem();
  solarSystem.setPlanets();

  for (var i=0; i<solarSystem.planets.length; i++) {
    $("#" + i).tooltip({
      'container': 'body',
      'placement': 'bottom',
      'title': solarSystem.planets[i].getInfo(),
      'html': 'true'
    });
  }

  var apollo = new Apollo11();
  var msl = new MarsScienceLaboratory();
  var voyager = new Voyager();
  var galileo = new Galileo();

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


    for (var k=0; k<spacecraft.length; k++) {
      if (spacecraft[k] === "apollo") {
        pixelDistance = getPixelDistance(inputTime, apollo.speedKmPerHour);
        var ellipse = document.getElementById("travel-apollo");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else if (spacecraft[k] === "msl") {
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
        pixelDistance = getPixelDistance(inputTime, voyager.speedKmPerHour);
        var ellipse = document.getElementById("travel-voyager");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      } else if (spacecraft[k] === "galileo") {
        pixelDistance = getPixelDistance(inputTime, galileo.speedKmPerHour);
        var ellipse = document.getElementById("travel-galileo");
        ellipse.setAttributeNS(null, "rx", pixelDistance);
        ellipse.setAttributeNS(null, "ry", pixelDistance);
      }
    }
    // var pixelDistance = getPixelDistance(inputTime, apollo.speedKmPerHour);
    // var ellipse = document.getElementById("travel");
    // ellipse.setAttributeNS(null, "rx", pixelDistance);
    // ellipse.setAttributeNS(null, "ry", pixelDistance);


    // for (var j = 0; j<= pixelDistance; j++) {
    //   (function(j) {
    //     setTimeout(function() {
    //       ellipse.setAttributeNS(null, "rx", j);
    //       ellipse.setAttributeNS(null, "ry", j);
    //     }, 1000)
    //   })(j);
    // }


  });
});
