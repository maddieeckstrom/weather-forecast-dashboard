const APIKey = "3849ccbbe5a892256073c223a4de1590";
let city = document.getElementById("cityInput");

function getCurrentWeather() {
// Stores the OpenWeather Current Weather Data URL and the necessary variables
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=96786,us&appid=3849ccbbe5a892256073c223a4de1590";


// will need to adjust application to accept user input, to store in the city variable that I created
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

    .catch(function(error) {
        console.log(error);
    });

}

getCurrentWeather();