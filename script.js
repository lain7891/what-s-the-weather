$(document).ready(function () {

  $("#search").on("click", function (event) {
    event.preventDefault();
    var city = $("#searchInput").val();
    console.log(city);
   
  
   

    // current weather call
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
      city +
      "&appid=905b9fba58e1578db8d708730effecf5";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
     
      console.log(response);
      $("#city-name").text(response.name +  moment().format(' L'));
      $("#weather-icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
      $("#temperature").text("Temperature " + response.main.temp + " F");
      $("#humidity").text("Humidity " + response.main.humidity + " %");
      $("#wind-speed").text("Wind Speed " + response.wind.speed);
      $(".list-group").prepend(
        ' <li class="list-group-item">' + city + "</li>"
      );
      getForecast(city);
var lat = response.coord.lat
var lon = response.coord.lon
      var queryURL =
          "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=905b9fba58e1578db8d708730effecf5";
// UV Index call
        $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function (responseUV) {
          console.log(responseUV);
          var UVindex = responseUV.value;
          $("#uv-index").text("UV Index " + UVindex);
       var condition = $("<button>");
       condition.text("UV Index: " + UVindex).attr("class", "btn warning");
      //  $("#uv-index").prepend(condition);
       if (UVindex < 3) {
        condition.attr("class", "btn-success");
    } else if (UVindex > 7) {
        condition.attr("class", "btn-danger");
    }
        });

    });

    // Five day forecast
    function getForecast(city) {
     

      var queryURL =
        "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" +
        city +
        "&appid=905b9fba58e1578db8d708730effecf5";
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        //    console.log(queryURL);
        console.log(response);
        // console.log(response.city + "moment().format('L')");
        // console.log(
        //   "The current forecast calls for " +
        //     response.list[0].weather[0].description
        // );
        // console.log(
        //   "The current temperature is " + response.list[0].main.temp + "F"
        // );
        // console.log("Low:" + response.list[0].main.temp_min + "F");
        // console.log("High:" + response.list[0].main.temp_max + "F");
        // console.log(
        //   "Humidity currently at " + response.list[0].main.humidity + "%"
        // );
        // console.log(
        //   "Wind is moving at a speed of:" + response.list[0].wind.speed + "mph"
        // );


        // Five day forecast loop for each card
        $(".card-main").empty();
        for (var i = 0; i < response.list.length; i += 8) {
          var data = {
            temperature: response.list[i].main.temp,
            date: response.list[i].dt_txt,
            humidity: response.list[i].main.humidity,
          };
          var newCard = createCard(data);
          console.log(newCard);
          $(".card-main").append($(newCard));
        }
      });
      
    }
  });

  // Card information with date, temp and humidity
  function createCard(data) {
    var cardString = `<div class="col-sm-2 card text-white bg-primary mb-5" id="card-place">
<h6 class="card-title">${moment(data.date).format("L")}</h6>
<div class="card-body">
${"Temp " + data.temperature + " F"}
${"Humidity " + data.humidity + " %"}
</div>
</div>`;





    return cardString;

  
  }

});
// $("#main-info").empty();