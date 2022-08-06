import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


import People from "./views/People.jsx";
import Planets from "./views/Planets.jsx";
import Vehicles from "./views/Vehicles.jsx";
import Person from "./views/onePerson.jsx";
import Planet from "./views/onePlanet.jsx";
import Vehicle from "./views/oneVehicle.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people/:id">
							<Person />
						</Route>
						<Route exact path="/planets/:id">
							<Planet />
						</Route>
						<Route exact path="/vehicles/:id">
							<Vehicle />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
