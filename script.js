const button = document.querySelector("#getWeather-button");
button.addEventListener("click", getWeather);

async function getWeather() {
  const location = document.getElementById("location").value;
  const apiKey = "190db5b3e7fa473789e105609251603";
  const Api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(Api);
    const data = await response.json();

    const weatherDiv = document.getElementById("weather-result");
    if (data.error) {
      weatherDiv.innerHTML = `<p style="color: red;">${data.error.message}</p>`;
    } else {
      weatherDiv.innerHTML = `
                      <h2>${data.location.name}, ${data.location.country}</h2>
                      <p>Temperature: ${data.current.temp_c}°C</p>
                      <p>Local Time: ${data.location.localtime}</p>
                      <p>Condition: ${data.current.condition.text}</p>
                      <img src="${data.current.condition.icon}" alt="Weather icon">
                  `;
    }
  } catch (error) {
    console.error("Something is wrong!", error?.message);
  }
}
