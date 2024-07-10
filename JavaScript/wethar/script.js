var temp = document.getElementById('temp');
var cityName = document.getElementById('city');
var humidity = document.getElementById('humidity');
var windspeed = document.getElementById('windspeed');
var searchinput = document.getElementById('searchinput');
var serchbox = document.getElementById('serchbox');
var body_img = document.getElementById('body_img');
var body_data = document.getElementById('body_data');
var deatil = document.getElementById('deatil');
var error = document.getElementById('error');

async function checkWeather(city) {
    let Upi_key = 'f27b269d54e4fa1e72993364a80fa8bd';
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
    let data = await response.json();

    let tempC = Math.round(data.main.temp);
    let tempF = Math.round(tempC * 9/5 + 32);

    temp.innerHTML = `Temperature: ${tempC}°C / ${tempF}°F`;
    cityName.innerHTML = data.name;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    windspeed.innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
    console.log(data);

    let weatherIcon = data.weather[0].icon;
    body_img.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;

    body_data.style.display = 'flex';
    deatil.style.display = 'flex';
}

serchbox.addEventListener('click', () => {
    let cityIn = searchinput.value;
    checkWeather(cityIn);
});