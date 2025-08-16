let bnt = document.querySelector("#search");
let city = document.querySelector("#city");

bnt.addEventListener("click", async function () {
    await getWeather();
    console.log("Button clicked!");
});

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f01b840538msh3b098c9c8772bcfp1bc040jsn20089f697a22',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

async function getWeather() {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city.value}&format=json&u=f`;
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        let weatherData = JSON.parse(result);
        console.log(weatherData);
        if (
            weatherData.current_observation &&
            weatherData.current_observation.condition &&
            typeof weatherData.current_observation.condition.temperature !== "undefined"
        ) {
            let temperature = document.querySelector("#temp");
            temperature.innerHTML = "Todays weather is " + weatherData.current_observation.condition.temperature + "°F";
        } else {
            console.error("Temperature data not found in response.");
        }
    } catch (error) {
        console.error(error);
    }
}