import React, { useState, useEffect } from "react";
import "./Css.css";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import Footer from "./Wi/Footer";
import Bottom from "./Wi/Bottom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { createMuiTheme } from "@material-ui/core/styles";
import Ts from "./Wi/Thunderstorm";
const theme = createMuiTheme({
  MuiTextField: {
    InputLabelProps: { shrink: true },
  },
});
const inputProps = {
  step: 300,
};
function Html() {
  const weatherIcon = {
    Thunderstorm: "wi wi-thunderstorm display-1",
    Drizzle: "wi wi-sleet",
    Rain: "wi wi-storm-showers",
    Snow: "wi wi-snow",
    Atmosphere: "wi wi-fog",
    Clear: "wi wi-day-sunny",
    Clouds: "wi wi-day-fog",
  };

  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("New Delhi");

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
    <>
      <div className="parent">
        <div className="search">
          <input
            value={city}
            type="search"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="Search Location"
            id="outlined-basic"
            variant="outlined"
          />
          <span className="icon">
            <MyLocationIcon />
          </span>
        </div>
      </div>

      {!location ? (
        <p className="nodata">no data found </p>
      ) : (
        <div className="parent">
          <div className="text">
            <div className="city">
              {city}, IN
              <span className="pin">
                <LocationOnOutlinedIcon />
              </span>
            </div>
            <div className="temp">
              <span className="bold">{Math.round(`${location.temp}`)}°C</span>
            </div>
            <div>
              <Ts />
            </div>
            <div className="desc">Haze,</div>
            <div className="pressure">Pressure:</div>
            <div className="feelpressure">{location.pressure / 100} Pa</div>

            <div className="date">
              Thu Dec 31 2020,
              <br />
              22:14:28
            </div>

            <div className="feelslike">Feels Like: </div>
            <div className="feeltemp">{location.feels_like}°C</div>

            <div className="left">
              <span className="dawn">Dawn: </span>
              <span className="bold">06:00 Hrs</span>
            </div>
            <div className="right">
              <span className="dusk">Dusk:</span>
              <span className="bold">18:00 Hrs</span>
            </div>
            <div className="copyright">
              GAURAV.SINHA/ Copyright ©2021 All rights reserved
            </div>
          </div>
          <Bottom />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Html;
