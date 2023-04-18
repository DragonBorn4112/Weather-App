const weatherButton = document.getElementById("initWeather");
const weatherInfo = document.getElementById("weatherInfo");
const weatherSearch = document.getElementById("weatherSearch");

weatherButton.addEventListener("click", (event) => {
  const location = weatherSearch.value; // get the value of the search input field
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=107b81032e93434d99b142112231404&contentType=json`;
  fetch(url, {
    "method": "GET",
    "headers": {}
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("No account or invalid key provided.");
    }
    return response.json();
  })
  .then(data => {
    // update the weatherInfo div with the weather data
    weatherInfo.innerHTML = `Current temperature: ${data.currentConditions.temp}°F`;
  })
  .catch(err => {
    console.error(err);
    // display error message to user
    weatherInfo.innerHTML = "Sorry, there was an error fetching the weather data.";
  });
});