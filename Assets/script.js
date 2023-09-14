const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.getElementById("cityInput").value;
    //console.log(city);
    localStorage.setItem("storeCity", city);

    const historybtn = document.getElementById("history");
    historybtn.addEventListener('mouseover', function(event) {

        event.preventDefault();

        const cityStorage = document.getElementById("dropdown-content");
        let cityList = document.createElement("li");
        cityList.textContent = localStorage.getItem("storeCity");
        cityStorage.appendChild(cityList);

    })

    const APIKey = "3849ccbbe5a892256073c223a4de1590";
    let currentQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    function getCurrentWeather () {  
        fetch(currentQueryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                function displayCurrent(data) {
                    let currentCloud = data.clouds.all;
                    //console.log(currentCloud);
                    let currentTemp = data.main.temp;
                    let currentHum = data.main.humidity;
                    let currentWind = data.wind.speed;
    
                    const currentCloudDiv = document.getElementById("current-cloud");
                    const currentTempDiv = document.getElementById("current-temp");
                    const currentHumidDiv = document.getElementById("current-humid");
                    const currentWindDiv = document.getElementById("current-wind");

                    currentCloudDiv.textContent = "Today's cloud coverage: " + currentCloud;
                    currentTempDiv.textContent = "Today's temperature: " + currentTemp;
                    currentHumidDiv.textContent = "Today's humidity: " + currentHum;
                    currentWindDiv.textContent = "Today's wind speed: " + currentWind;
                }

                displayCurrent(data);

            })
        
            .catch(function(error) {
                console.log(error);
            });

        }

    //start of fetching future weather forecast
    let futureQueryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    function getFutureWeather () {
        fetch(futureQueryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                //console.log(data);

                function displayFutureData() {
                    const dayOneDiv = document.getElementById("day-1");
                    const dayTwoDiv = document.getElementById("day-2");
                    const dayThreeDiv = document.getElementById("day-3");
                    const dayFourDiv = document.getElementById("day-4");
                    const dayDiveDiv = document.getElementById("day-5");
                }
            })
        
            .catch(function(error) {
                console.log(error);
            });

            function displayFuture(data) {

            }

    }

    //calling the functions here
    getCurrentWeather();
    //getFutureWeather();
})


