$(document).ready(function(){

var apiKey = "905b9fba58e1578db8d708730effecf5";

// moment().format('L');

 var searchCity = function(city){
         var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
         $.ajax({
             url: queryURL,
             method: "GET",
           }).then(function(response) {
            //    console.log(queryURL);
               console.log(response);
               console.log(searchCity);
    
          });
 }

$("#city").on("click", function(event){
     event.preventDefault();

});

 


//     var city = $("#search").val();
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
//            $.ajax({
//             url: queryURL,
//             method: "GET",
//            }).then(function(response) {
//                console.log(queryURL);
//                console.log(response);
//                $(".form-control").text(JSON.stringify(response));

//         searchCity(response);
//           });
    
//   });
    

 searchCity("Atlanta");
});
