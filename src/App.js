import "./App.css";
import React from "react";
import Html from "./Ui/Html";
import Geoloc from "./Ui/Wi/Geoloc";
import { Route, Switch, Link } from "react-router-dom";
import MyLocationIcon from "@material-ui/icons/MyLocation";

export default function App() {
  return (
    <div className="App">
      <span className="icon">
        <Link to="geolocation">
          <MyLocationIcon />
        </Link>
      </span>
      <Switch>
        <Route exact path="/" component={Html} />
        <Route path="/geolocation" component={Geoloc} />
      </Switch>
    </div>
  );
}
