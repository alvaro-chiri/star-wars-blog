import React from "react";
import "../../styles/home.css";
import People from "./People.jsx";
import Planets from "./Planets.jsx";
import Vehicles from "./Vehicles.jsx";

export const Home = () => (
  <div>
    <h1>People</h1>
      <div>
        <People />
      </div>
    <h1>Planets</h1>
    <div>
      <Planets />
    </div>
    <h1>Starships</h1>
    <div >
      <Vehicles />
    </div>
  </div>
);
