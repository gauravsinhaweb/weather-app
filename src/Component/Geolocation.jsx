import React, { useState, useEffect } from "react";
import Geolocation from "react-geolocation";
import "./Weather.css";

export default function Geoloc(props) {
  const [location, setLocation] = useState(null);
  const [name, setName] = useState();
  const [weather, setWeather] = useState();
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [country, setCountry] = useState();
  const [feelslike, setFeelslike] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64`;
      const response = await fetch(url);
      const resJson = await response.json();
      setLocation(resJson.main.temp);
      setName(resJson.name);
      setWeather(resJson.weather[0].description);
      setCountry(resJson.sys.country);
      setFeelslike(resJson.main.feels_like);
    };
    fetchApi();
  }, [lat, lon]);

  return (
    <>
      <Geolocation
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition,
        }) => (
          <div>
            {!location ? (
              <p>no data found </p>
            ) : (
              <div>
                <div class="city">
                  Location: {name}, {country}
                </div>
                <div>Tempreature: {location} °C</div>
                <div>Atmosphere: {weather}</div>
                <div>Feels Like: {feelslike}°C</div>

                <div>
                  <button onClick={getCurrentPosition}>Toggle Position</button>
                </div>
              </div>
            )}
            {error && <div>{error.message}</div>}
            <pre>
              {setLat(`${latitude}`)}
              {setLon(`${longitude}`)}
            </pre>
          </div>
        )}
      />
    </>
  );
}
