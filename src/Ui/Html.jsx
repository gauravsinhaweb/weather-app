import React, { useState, useEffect } from "react";
import "./Css.css";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import Footer from "./Wi/Footer";
import Bottom from "./Wi/Bottom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Ts from "./Wi/Thunderstorm";
import Noresult from "./Wi/Noresult";
import Geolocation from "react-geolocation";
import Geoloc from "./Wi/Geoloc";

function Html() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("New Delhi");
  const [country, setCountry] = useState();
  const [weather, setWeather] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [name, setName] = useState();

  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const srise = sunrise;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(srise * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var sr = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  const sset = sunset;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(sset * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var ss = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wedn";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  var month = new Array(12);
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  var m = month[d.getUTCMonth()];
  var n = weekday[d.getDay()];
  var today = new Date(),
    date =
      n + " " + m + " " + today.getDate() + " " + today.getFullYear() + ",";
  const time = today.getHours() + ":" + today.getMinutes();
  const Url = useEffect(() => {
    const fetchUrl = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d686bdf012cea1b3b4050adf53dfdb64`;
      const response = await fetch(url);
      const resJson = await response.json();
      setLocation(resJson.main);
      setCountry(resJson.sys.country);
      setWeather(resJson.weather[0].description);
      setSunrise(resJson.sys.sunrise);
      setSunset(resJson.sys.sunset);
      setName(resJson.name);
      console.log(resJson);
    };
    fetchUrl();
  }, [city]);

  return (
    <>
      <div>
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

      {!location ? (
        <p className="nodata">
          <Noresult /> no data found
        </p>
      ) : (
        <div className="text">
          <Bottom />

          <Footer />
          <div className="city">
            {name}, {country}
            <span className="pin">
              <LocationOnOutlinedIcon />
            </span>
          </div>
          <div className="temp">{Math.round(`${location.temp}`)}°C</div>
          <div>
            <Ts />
          </div>
          <div className="desc">{weather},</div>
          <div className="pressure">Pressure:</div>
          <div className="feelpressure">{location.pressure / 100} Pa</div>

          <div className="date">
            {date}
            <br />
            {time} Hrs
          </div>

          <div className="feelslike">Feels Like: </div>
          <div className="feeltemp">{location.feels_like}°C</div>

          <div className="left">
            <span className="dawn">Dawn: </span>
            <span className="bold">{sr} Hrs</span>
          </div>
          <div className="right">
            <span className="dusk">Dusk:</span>
            <span className="bold"> {ss} Hrs</span>
          </div>
          <div className="copyright">
            Copyright ©2021 All rights reserved. /GAURAV.SINHA
          </div>
        </div>
      )}
    </>
  );
}

export default Html;
