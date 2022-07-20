import React from "react";
import "../../styles/home.css";
import People from "./People.jsx";
import Planets from "./Planets.jsx";
import Vehicles from "./Vehicles.jsx";


export const Home = () => (
	<div>
		<h1 >Characters</h1>
		<div className="container">
			<People />
		</div>
		<h1>Planets</h1>
		<div className="container">
			<Planets />
		</div>
		<h1>Starships</h1>
		<div className="container">
			<Vehicles />
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
