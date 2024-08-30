
const apiKey = "42bc03b0ae2dd88ed64ea4db501cc536";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json()
    // console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity+"%";
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

    let icon = data.weather[0].main.toLowerCase();
    // console.log(icon);

    weatherIcon.src = `images/${icon}.png`;
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";


}
//default
checkWeather("dhaka");

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value.trim());
})


