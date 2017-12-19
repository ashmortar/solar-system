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

//space travel:
// function Juno() {
//   this.speedMilesPerHour = 25;
// }
//
// Juno.prototype.getTravelTime = function (planetStart, planetFinish) {
//   return (planetFinish.milesFromSun - planetStart.milesFromSun) / this.speedMilesPerHour;
// };

var lightDaysDistance = function (planetStart, planetFinish) {
  return (planetFinish.milesFromSun - planetStart.milesFromSun) * 365;
};

Planet.prototype.getInfo = function () {
  var str = "";

  str += "Name: " + this.name + "<br>";
  str += "Distance from sun: " + this.lightYearsFromSun + " light years" + "<br>";
  str += "Distance from sun: " + this.milesFromSun + " miles" + "<br>";
  str += "Mass: " + this.mass + "<br>";
  str += "Radius: " + this.radius + "<br>";
  str += "Orbital period: " + this.orbitalPeriod + "<br>";
  str += "Length of day: " + this.lengthOfDay + "<br>";
  str += "Equatorial rotation velocity: " + this.equatorialRotationVelocity + "<br>";
  return str;
};


//front end

$(document).ready(function() {
  $(".info").hide();
  $("li").hover(function() {
    $(".info").hide();
    // debugger;
    var solarSystem = new SolarSystem();
    solarSystem.setPlanets();
    // alert($(this).next().attr('id'));
    $(this).next().text(solarSystem.planets[$(this).next().attr('id')].getInfo())
    $(this).next().show();
  })
  // $(".button").click(function() {
  //   var solarSystem = new SolarSystem();
  //   solarSystem.setPlanets();
  //   alert(solarSystem.planets[5].getInfo());
  // })
})
