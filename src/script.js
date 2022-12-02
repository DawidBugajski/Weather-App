const API = '7ce5b3d8107224d123ac8d7bc57342a7';
const inputSearch = document.getElementById('input--search');
const btn = document.getElementById('btn--search');
const curCity = document.getElementById('city');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherIcon = document.getElementById('weather--icon');
const labelSearch = document.getElementById('search');
const weatherContainer = document.getElementById('container');
const wrapper = document.getElementById('wrapper');

const showCity = async function (city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`
    );
    const data = await res.json();
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp: temperature, humidity: hum } = data.main;
    const { speed } = data.wind;
    console.log(data);
    if (!res.ok) throw new Error(`🌨 No weather found`);

    curCity.textContent = `Weather in ${name}`;
    temp.textContent = `${Math.floor(temperature)}°C`;
    humidity.textContent = `Humdidity: ${hum}%`;
    wind.textContent = `Wind: ${speed} km/h`;
    weather.textContent = description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
    weatherContainer.classList.remove('invisible');

    wrapper.style.backgroundImage = `url(
      https://source.unsplash.com/1920x1080/?${name}
    )`;
  } catch (err) {
    console.error(err);
  }
};

btn.addEventListener('click', () => {
  showCity(inputSearch.value);
});

inputSearch.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') showCity(inputSearch.value);
});

showCity('Krakow');
