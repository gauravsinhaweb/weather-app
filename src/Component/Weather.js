import React, { useState, useEffect } from "react";

import "./Weather.css";
function Weather() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("new delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64`;
      const response = await fetch(url);
      const resJson = await response.json();
      setLocation(resJson.main);

      console.log(resJson);
    };
    fetchApi();
  }, [city]);

  return (
    <div>
      <input
        value={city}
        type="search"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        placeholder="search location"
      />

      {!location ? (
        <p>no data found </p>
      ) : (
        <div>
          <div>Location: {city}</div>
          <div>Tempreature: {location.temp} °C</div>
          <div>Feels Like: {location.feels_like}°C</div>
          <div>Pressure: {location.pressure / 100} Pa</div>
        </div>
      )}
    </div>
  );
}

export default Weather;
