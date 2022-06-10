import { useEffect, useState } from "react";
function Weather() {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("Shuzenji");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b54744c418bc8c794f4af404d6c7a4d`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  function readValue(value) {
    setCity(value);
  }

  return (
    <div className="weather-container">
      <input
        className="city"
        placeholder="City Name"
        onChange={(event) => {
          readValue(event.target.value);
        }}
      />
      {/* <button className="btn">Get Weather</button> */}
      <h1>{city}</h1>
      <h2>
        Temperature - {(weather.main?.temp - 273.15).toFixed(2)}
        <sup>o</sup>C
      </h2>
      <h2>
        Feels Like - {(weather.main?.feels_like - 273.15).toFixed(2)}
        <sup>o</sup>C
      </h2>
      <h3>Humidity - {weather.main?.humidity}</h3>
      <h3>Pressure - {weather.main?.pressure}</h3>
    </div>
  );
}

export default Weather;
