
const API_KEY = 


function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log("You Live In", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Where Are You Now?");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);