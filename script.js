const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color: yellow;">${error.message}</p>`;
  }
}
