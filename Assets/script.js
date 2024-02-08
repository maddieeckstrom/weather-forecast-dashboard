//function to fetch and display the current weather data
function getCurrentWeather(city) {
    //console.log(city);
    
    //variables for API key and the city for the current weather 
    let cityOne = document.getElementById("cityInput").value;
    const APIKey = "3849ccbbe5a892256073c223a4de1590";

    let currentQueryURL

    //if a city previously submitted was clicked on, fetch the data for that city, if not, fetch the data from the city in the submit box
    if (city) {
        currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=metric"
    } else {
        currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityOne + "&appid=" + APIKey + "&units=metric";
    }

    saveCity(cityOne);

    //fetching the data for the current weather and the city the user has selected
    fetch(currentQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            function displayCurrent(data) {
                    
                //will display the sun or cloud icon depending on current weather conditions
                const iconImage = document.getElementById("icon");
                let currentIcon = data.weather[0].icon;
                //console.log(currentIcon);
                let iconURL = `https://openweathermap.org/img/w/${currentIcon}.png`
                iconImage.src = iconURL;

                //apending the city name to the header of the current weather box
                const currentHeader = document.getElementById("current_date");
                const currentCityHead = document.getElementById("current_head_city");

                currentCityHead.textContent = "";
                
                if (city) {
                    currentCityHead.append(city)
                } else {
                    currentCityHead.append(cityOne);
                }

                if (city) {
                    currentHeader.append(currentCityHead)
                } else {
                    currentHeader.append(currentCityHead);
                }

                //getting element by ID for each data point in the current weather box 
                const currentCloudDiv = document.getElementById("current-cloud");
                const currentTempDiv = document.getElementById("current-temp");
                const currentHumidDiv = document.getElementById("current-humid");
                const currentWindDiv = document.getElementById("current-wind");
                   
                //collecting the data for cloud coverage and setting it to a variable
                let currentCloud = data.clouds.all;
                //console.log(currentCloud);

                //applies classes to current weather box based on current weather conditions
                const currentWeather = document.getElementById("current-weather");
                if (currentCloud < 40) {
                    currentWeather.classList.replace("current-weather", "current-weather-sun");
                    currentWeather.classList.replace("current-weather-cloud", "current-weather-sun");
                } else if (currentCloud > 60) {
                    currentWeather.classList.replace("current-weather", "current-weather-cloud");
                    currentWeather.classList.replace("current-weather-sun", "current-weather-cloud");
                } else {
                    currentWeather.classList.replace("current-weather-cloud", "current-weather");
                    currentWeather.classList.replace("current-weather-sun", "current-weather");
                }

                //collecting the data for the rest of the curretn weather data points and setting it to a variable 
                let currentTemp = data.main.temp;
                let currentHum = data.main.humidity;
                let currentWind = data.wind.speed;

                //adding our variables of current weather data points to their designated box in current weather box
                currentCloudDiv.textContent = "Today's cloud coverage: " + currentCloud + "%";
                currentTempDiv.textContent = "Today's temperature: " + currentTemp + " °C";
                currentHumidDiv.textContent = "Today's humidity: " + currentHum + "%";
                currentWindDiv.textContent = "Today's wind speed: " + currentWind + " m/s";
            }

        //calling the function to display the current weather box
        displayCurrent(data);

        })
        
        //cathing any errors from the fetch of current weather data and console logging them
        .catch(function(error) {
            console.log(error);
        });

    }

//start of fetching future weather forecast
function getFutureWeather(city) {

    //variables for API key and the city for the future weather
    let cityTwo = document.getElementById("cityInput").value;
    const APIKey = "3849ccbbe5a892256073c223a4de1590";

    let futureQueryURL

    //if a city previously submitted was clicked on, fetch the data for that city, if not, fetch the data from the city in the submit box
    if (city) {
        futureQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=metric";
    } else {
        futureQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityTwo + "&appid=" + APIKey + "&units=metric";
    }

    //fetching the data for the future weather and the city the user has selected
    fetch(futureQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            function displayFuture(data) {

                //getting element by ID for each day in the future weather box
                const dayOneDiv = document.getElementById("day-1");
                const dayTwoDiv = document.getElementById("day-2");
                const dayThreeDiv = document.getElementById("day-3");
                const dayFourDiv = document.getElementById("day-4");
                const dayFiveDiv = document.getElementById("day-5");

                //collecting the data for each data point in day 1 of the forecast and setting that data to variables
                let futureCloudOne = data.list[1].clouds.all;
                //console.log(futureCloudOne);
                let futureTempOne = data.list[1].main.temp;
                let futureHumOne = data.list[1].main.humidity;
                let futureWindOne = data.list[1].wind.speed;

                //collecting the data for each data point in day 2 of the forecast and setting the data to variables
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

                //adding our variables of day 1 future weather data points to their designated box in future weather box
                dayOneDiv.children[0].textContent = "Cloud: " + futureCloudOne + "%";
                dayOneDiv.children[1].textContent = "Temp: " + futureTempOne + " °C";
                dayOneDiv.children[2].textContent = "Hum: " + futureHumOne + "%";
                dayOneDiv.children[3].textContent = "Wind: " + futureWindOne + " m/s";

                //adding our variables of day 2 future weather data points to their designated box in future weather box
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

        //calling the function to display the future weather data
        displayFuture(data);

        })
        
        //catching any errors from the fetch of future weather data and console logging them
        .catch(function(error) {
            console.log(error);
        });

}

//targeting the submit button using get element by ID
const submitBtn = document.getElementById("submitbtn");

//the event listener for clicking the submit button in the html form
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    //calling the current anf future weather functions here
    getCurrentWeather();
    getFutureWeather();
})

//function which adds any new city to local storage
function saveCity(city) {
    //if cities already exist in local storage, retrieve the string and parse them so we may push a new city
    const existingCities = JSON.parse(localStorage.getItem("storeCity")) || [];
    // existingCities.push(city);

    // check if the city already exists in local storage before pushing
    if (!existingCities.includes(city)) {
        existingCities.push(city);
        localStorage.setItem("storeCity", JSON.stringify(existingCities));
    }

    //stringify the cities again to save all of the data back to local storage
    localStorage.setItem("storeCity", JSON.stringify(existingCities));
}

//creating a variable for the history button using get element by ID
const historybtn = document.getElementById("history");

    //adding an event listener for the history button when a user's mouse runs over
    historybtn.addEventListener('mouseover', function(event) {
        event.preventDefault();

        //creating a variable for the dropdown menu once a mouse goes over the history button
        const cityStorage = document.getElementById("dropdown-content");
        cityStorage.innerHTML = "";
        //creating a variable which gets item from local storage and parses them
        const history = JSON.parse(localStorage.getItem("storeCity"));

        //a for loop which runs through each item that was parsed in local storage and sets each data to a button created by JS
        for (let i = 0; i < history.length; i++) {
            if (history[i] === null) {
                continue;
            }

            let cityItem = document.createElement("button");
            cityItem.textContent = history[i];

            //an event listener to click on a previously searched city in the dropdown menu
            cityItem.addEventListener('click', function(event) {
                event.preventDefault();
                let clickedCity = cityItem.textContent;
                //console.log(clickedCity);

                //calling these functions by clicking on our dropdown menu rather than the submit button
                getCurrentWeather(clickedCity);
                getFutureWeather(clickedCity);
            })

            //appending the button created by JS to the dropdown menu
            cityStorage.appendChild(cityItem);
        }
    })