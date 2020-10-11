$(document).ready(function(){
    

    $("#search").on("click", function (event) {
        event.preventDefault();
    var city = $("#searchInput").val()
    console.log(city);
    });

var apiKey = "905b9fba58e1578db8d708730effecf5";



 
         var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
         $.ajax({
             url: queryURL,
             method: "GET",
           }).then(function(response) {
            //    console.log(queryURL);
               console.log(response);
               
    
        
          });
 


//      searchCity("userInput");
// });

 



});
