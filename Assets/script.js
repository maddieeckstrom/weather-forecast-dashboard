var APIKey = "3ed399bdb9a0f567232019fc606b44b6";
var city;

function getCurrentWeather() {
// Stores the OpenWeather Current Weather Data URL and the necessary variables
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// will need to adjust application to accept user input, to store in the city variable that I created
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })



    .catch(function(error) {
        console.log(error);
    });

}