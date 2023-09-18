const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.getElementById("cityInput").value;
    saveCity(city);
    //console/log(city);

    const APIKey = "3849ccbbe5a892256073c223a4de1590";
    let currentQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=metric";

    function getCurrentWeather (savedCity) {  
        if (savedCity) {
            city = clickedCity;
        }
        
        fetch(currentQueryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                function displayCurrent(data) {
                    
                    const iconImage = document.getElementById("icon");
                    let currentIcon = data.weather[0].icon;
                    //console.log(currentIcon);
                    let iconURL = `https://openweathermap.org/img/w/${currentIcon}.png`
                    iconImage.src = iconURL;

                    const currentHeader = document.getElementById("current_date");
                    currentHeader.append(", " + city);
                    
                    const currentCloudDiv = document.getElementById("current-cloud");
                    const currentTempDiv = document.getElementById("current-temp");
                    const currentHumidDiv = document.getElementById("current-humid");
                    const currentWindDiv = document.getElementById("current-wind");
                   
                    let currentCloud = data.clouds.all;
                    //console.log(currentCloud);

                    const currentWeather = document.getElementById("current-weather");
                    if (currentCloud < 40) {
                        currentWeather.classList.replace("current-weather", "current-weather-sun");
                    } else if (currentCloud > 60) {
                        currentWeather.classList.replace("current-weather", "current-weather-cloud");
                    } else {
                    }

                    let currentTemp = data.main.temp;
                    let currentHum = data.main.humidity;
                    let currentWind = data.wind.speed;

                    currentCloudDiv.textContent = "Today's cloud coverage: " + currentCloud + "%";
                    currentTempDiv.textContent = "Today's temperature: " + currentTemp + " °C";
                    currentHumidDiv.textContent = "Today's humidity: " + currentHum + "%";
                    currentWindDiv.textContent = "Today's wind speed: " + currentWind + " m/s";
                }

                displayCurrent(data);

            })
        
            .catch(function(error) {
                console.log(error);
            });

        }

    //start of fetching future weather forecast
    let futureQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=metric";

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

                    dayOneDiv.children[0].textContent = "Cloud: " + futureCloudOne + "%";
                    dayOneDiv.children[1].textContent = "Temp: " + futureTempOne + " °C";
                    dayOneDiv.children[2].textContent = "Hum: " + futureHumOne + "%";
                    dayOneDiv.children[3].textContent = "Wind: " + futureWindOne + " m/s";

                    dayTwoDiv.children[0].textContent = "Cloud: " + futureCloudTwo + "%";
                    dayTwoDiv.children[1].textContent = "Temp: " + futureTempTwo + " °C";
                    dayTwoDiv.children[2].textContent = "Hum: " + futureHumTwo + "%";
                    dayTwoDiv.children[3].textContent = "Wind: " + futureWindTwo + " m/s";

                    dayThreeDiv.children[0].textContent = "Cloud: " + futureCloudThree + "%";
                    dayThreeDiv.children[1].textContent = "Temp: " + futureTempThree + " °C";
                    dayThreeDiv.children[2].textContent = "Hum: " + futureHumThree + "%";
                    dayThreeDiv.children[3].textContent = "Wind: " + futureWindThree + " m/s";

                    dayFourDiv.children[0].textContent = "Cloud: " + futureCloudFour + "%";
                    dayFourDiv.children[1].textContent = "Temp: " + futureTempFour + " °C";
                    dayFourDiv.children[2].textContent = "Hum: " + futureHumFour + "%";
                    dayFourDiv.children[3].textContent = "Wind: " + futureWindFour + " m/s";

                    dayFiveDiv.children[0].textContent = "Cloud: " + futureCloudFive + "%";
                    dayFiveDiv.children[1].textContent = "Temp: " + futureTempFive + " °C";
                    dayFiveDiv.children[2].textContent = "Hum: " + futureHumFive + "%";
                    dayFiveDiv.children[3].textContent = "Wind: " + futureWindFive + " m/s";
                }

            displayFuture(data);

            })
        
            .catch(function(error) {
                console.log(error);
            });

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
            let cityItem = document.createElement("button");
            cityItem.textContent = history[i];

            cityItem.addEventListener('click', function(savedCity) {
                savedCity.preventDefault();
                //console.log('hello');
                let clickedCity = cityItem.textContent;
            })

            cityStorage.appendChild(cityItem);
        }
    })

    //function inside the for loop, so that when I click on the button, target the cityitem, add event listenere beore line 175 (where I append it)
    // play around with how do I feed in cityitem.textContent into my text funcitons?
    //getCurrentWeather(cityItem.textContent), should be feeded in as an argument