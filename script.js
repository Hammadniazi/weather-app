function getWeather() {
  const location = document.getElementById("location").value;
  const apiKey = "190db5b3e7fa473789e105609251603";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.getElementById("weather-result");
      if (data.error) {
        weatherDiv.innerHTML = `<p style="color: red;">${data.error.message}</p>`;
      } else {
        weatherDiv.innerHTML = `
                    <h2>${data.location.name}, ${data.location.country}</h2>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <p>Condition: ${data.current.condition.text}</p>
                    <img src="${data.current.condition.icon}" alt="Weather icon">
                `;
      }
    })
    .catch((error) => console.log("Error:", error));
}
