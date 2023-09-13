const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.getElementById("cityInput").value;
    //console.log(city);
    localStorage.setItem("storeCity", city);

    const APIKey = "3849ccbbe5a892256073c223a4de1590";
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    function getCurrentWeather () {

        function displayCurrent(data) {

            let currentWeatherBox = document.getElementById("current-weather-box").value;

            //need icon representation of cloud or sun (child 1 data 0)
            //need temperature(child 6, feels like is data 0, current temp is data 3), humidity(child 6, data 1), and wind speed(child 12, data 1)
        }
        

        fetch(queryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                //displayCurrent(data);
            })
        
            .catch(function(error) {
                console.log(error);
            });

        }

    getCurrentWeather();

    
})
