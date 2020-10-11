$(document).ready(function(){

var searchCity = function(city){
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city-name + "&appid=905b9fba58e1578db8d708730effecf5";
    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(response) {
          console.log(response);
          searchCity(response);
      });

}


searchCity("Atlanta");
searchCity("New York");
searchCity("Los Angelos");
});
