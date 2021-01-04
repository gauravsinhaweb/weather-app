import React, { useState, useEffect } from "react";
import "./Css.css";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import Footer from "./Wi/Footer";
import Bottom from "./Wi/Bottom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Ts from "./Wi/Thunderstorm";

function Html() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("New Delhi");
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64`;
      const response = await fetch(url);
      const resJson = await response.json();
      setLocation(resJson.main);
      setCountry(resJson.sys.country);
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
          />
          <span className="icon">
            <MyLocationIcon />
          </span>
        </div>
      </div>
      <Bottom />

      <Footer />
      {!location ? (
        <p className="nodata">no data found </p>
      ) : (
        <div className="text">
          <div className="city">
            {city}, {country}
            <span className="pin">
              <LocationOnOutlinedIcon />
            </span>
          </div>
          <div className="temp">{Math.round(`${location.temp}`)}°C</div>
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
            Copyright ©2021 All rights reserved. @GAURAV.SINHA
          </div>
        </div>
      )}
    </>
  );
}

export default Html;
