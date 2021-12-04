let CityInput = document.querySelector(".search-bar");

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3936d0749fdc3124c6566ed26cf11978`;
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  return displayWeather(data);
}

function displayWeather(data) {
  tolower();
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
}

function searchCity() {
  this.fetchWeather(document.querySelector(".search-bar").value);
}

document.querySelector(".search button").addEventListener("click", function () {
  searchCity();
});

document.querySelector(".search-bar").addEventListener('keyup', function(event){
  if(event.key == "Enter"){
    searchCity();
  }
})

function tolower() {
  CityInput.value.toLowerCase()
}

/* function validateCity(data) {
  if (CityInput.value != data) {
    alert("Error");
  }
} */


