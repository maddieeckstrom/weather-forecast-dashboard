const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.getElementById("cityInput").value;
    //console.log(city);
    localStorage.setItem("storeCity", city);

    const cityStorage = document.getElementById("dropdown-content");
    let cityList = document.createElement("li");
    cityList.textContent = localStorage.getItem("storeCity");
    cityStorage.appendChild(cityList);


    const APIKey = "3849ccbbe5a892256073c223a4de1590";
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    function getCurrentWeather () {  
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

            function displayCurrent(data) {
                let currentCloud = data.clouds[0];
                console.log(currentCloud);

                let currentTemp = data.main[3];
                let currentHum = data.main[1];
                let currentWind = data.wind[1];

                const currentCloudDiv = document.getElementById("current-cloud");
                const currentTempDiv = document.getElementById("current-temp");
                const currentHumidDiv = document.getElementById("current-humid");
                const currentWindDiv = document.getElementById("current-wind");
            }

            displayCurrent(data);

        }

    getCurrentWeather();

    
})
