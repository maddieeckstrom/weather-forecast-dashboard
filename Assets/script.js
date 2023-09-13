const APIKey = "3849ccbbe5a892256073c223a4de1590";
const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.getElementById("cityInput").value;
    //console.log(city);

    localStorage.setItem("storeCity", city);

    //I will eventually call the getCurrentWeather function in here
})

//create event listener to capture the input city text, then feed it to your api url

//function getCurrentWeather() {
//Stores the OpenWeather Current Weather Data URL and the necessary variables
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=96786,us&appid=3849ccbbe5a892256073c223a4de1590";


// will need to adjust application to accept user input, to store in the city variable that I created
// fetch(queryURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

//     .catch(function(error) {
//         console.log(error);
//     });

// }

// getCurrentWeather();