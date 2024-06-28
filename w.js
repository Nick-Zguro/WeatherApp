let weather = {
    apikey: "99851b4a9cbbe95a3aafd060e2cc24c2",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apikey )
        .then((response) => response.json())
       .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

       
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = Math.ceil(temp-272) + " °C";
        document.querySelector(".humidity").innerText = "Humidity " + humidity;
        document.querySelector(".wind").innerText = "Wind Speed " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')"
        
    }
,

search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
},
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    
}
);

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Denver");