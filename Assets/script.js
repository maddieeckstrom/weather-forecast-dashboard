const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.getElementById("cityInput").value;
    saveCity(city);
    //console.log(city);

    //local storage presents a string, i need an array, so need to stringify my array

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
                    const currentCloudDiv = document.getElementById("current-cloud");
                    const currentTempDiv = document.getElementById("current-temp");
                    const currentHumidDiv = document.getElementById("current-humid");
                    const currentWindDiv = document.getElementById("current-wind");
                   
                    let currentCloud = data.clouds.all;
                    //console.log(currentCloud);

                    const currentWeather = document.getElementById("current-weather");
                    if (currentCloud.value <40) {
                        currentWeather.classList.replace("current-weather", "current-weather-sun");
                    } else if (currentCloud.value >60) {
                        currentWeather.classList.replace("current-weather", "current-weather-cloud");
                    } else {
                    }

                    let currentTemp = data.main.temp;
                    let currentHum = data.main.humidity;
                    let currentWind = data.wind.speed;

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
    let futureQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    function getFutureWeather () {
        fetch(futureQueryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                function displayFuture(data) {
                    const dayOneDiv = document.getElementById("day-1");
                    const dayTwoDiv = document.getElementById("day-2");
                    const dayThreeDiv = document.getElementById("day-3");
                    const dayFourDiv = document.getElementById("day-4");
                    const dayFiveDiv = document.getElementById("day-5");

                    let futureCloudOne = data.list[1].clouds.all;
                    //console.log(futureCloudOne);
                    let futureTempOne = data.list[1].main.temp;
                    let futureHumOne = data.list[1].main.humidity;
                    let futureWindOne = data.list[1].wind.speed;

                    let futureCloudTwo = data.list[2].clouds.all;
                    let futureTempTwo = data.list[2].main.temp;
                    let futureHumTwo = data.list[2].main.humidity;
                    let futureWindTwo = data.list[2].wind.speed;

                    let futureCloudThree = data.list[3].clouds.all;
                    let futureTempThree = data.list[3].main.temp;
                    let futureHumThree = data.list[3].main.humidity;
                    let futureWindThree = data.list[3].wind.speed;

                    let futureCloudFour = data.list[4].clouds.all;
                    let futureTempFour = data.list[4].main.temp;
                    let futureHumFour = data.list[4].main.humidity;
                    let futureWindFour = data.list[4].wind.speed;

                    let futureCloudFive = data.list[5].clouds.all;
                    let futureTempFive = data.list[5].main.temp;
                    let futureHumFive = data.list[5].main.humidity;
                    let futureWindFive = data.list[5].wind.speed;

                    dayOneDiv.textContent = futureCloudTwo + ", " + futureTempTwo + ", " + futureHumTwo + ", " + futureWindTwo;
                    dayTwoDiv.textContent = futureCloudTwo + ", " + futureTempTwo + ", " + futureHumTwo + ", " + futureWindTwo;
                    dayThreeDiv.textContent = futureCloudThree + ", " + futureTempThree + ", " + futureHumThree + ", " + futureWindThree;
                    dayFourDiv.textContent = futureCloudFour + ", " + futureTempFour + ", " + futureHumFour + ", " + futureWindFour;
                    dayFiveDiv.textContent = futureCloudFive + ", " + futureTempFive + ", " + futureHumFive + ", " + futureWindFive;
                }

            displayFuture(data);

            })
        
            .catch(function(error) {
                console.log(error);
            });

            function displayFuture(data) {

            }

    }

    //calling the functions here
    getCurrentWeather();
    getFutureWeather();
})

function saveCity(city) {
    const existingCities = JSON.parse(localStorage.getItem("storeCity")) || [];
    existingCities.push(city);

    localStorage.setItem("storeCity", JSON.stringify(existingCities));

}

const historybtn = document.getElementById("history");
    historybtn.addEventListener('mouseover', function(event) {
        event.preventDefault();

        const cityStorage = document.getElementById("dropdown-content");
        cityStorage.innerHTML = "";
        const history = JSON.parse(localStorage.getItem("storeCity"));

        for (let i = 0; i < history.length; i++) {
            let cityItem = document.createElement("li");
            cityItem.textContent = history[i];
            cityStorage.appendChild(cityItem);
        }

    })



