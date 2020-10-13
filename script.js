$(document).ready(function () {
  $("#search").on("click", function (event) {
    event.preventDefault();
    var city = $("#searchInput").val();
    console.log(city);

    

    // current weather
    var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
    city +
    "&appid=905b9fba58e1578db8d708730effecf5";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //    console.log(queryURL);
    console.log(response);
    // $("#city-name").text("City " + response.main.city);
    $("#temperature").text("Temperature " + response.main.temp);
    $("#humidity").text("Humidity " + response.main.humidity);
    $("#wind-speed").text("Wind Speed " + response.wind.speed);
    $(".list-group").prepend(' <li class="list-group-item">'+ city + '</li>');
    getForecast(city);
  });

  // Five day forecast
  function getForecast(city){
   
      // var currentHeader = moment().format('L');
      // console.log(currentHeader);
      // $(".jumbotron").text(currentHeader);
  
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
    console.log(response.city);
    console.log("The current forecast calls for " + response.list[0].weather[0].description);
    console.log("The current temperature is " + response.list[0].main.temp + "F");
    console.log("Low:" + response.list[0].main.temp_min + "F");
    console.log("High:" + response.list[0].main.temp_max + "F");
    console.log("Humidity currently at " + response.list[0].main.humidity + "%");
    console.log("Wind is moving at a speed of:" + response.list[0].wind.speed + "mph");
    // $("#city-view").text(JSON.stringify(response));



    // Five day forecast loop for each card
    $(".card-main").empty();
    for (var i = 0; i < response.list.length; i += 8) {
      var data = {temperature: response.list[i].main.temp, date: response.list[i].dt_txt};
      var newCard = createCard(data);
      $(".card-main").append($(newCard));
    };
  });
  }
});

function createCard(data){
var cardString = `<div class="col-sm-2 card text-white bg-primary mb-5" id="card-place">
<h5 class="card-title">${data.date}</h5>
<div class="card-body">
${data.temperature}
</div>
</div>`
return cardString;
}

});
