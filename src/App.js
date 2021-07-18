import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import AddUser from "./Components/AddUser";

import { useState } from "react";

function App() {
	const [details, addDetail] = useState([]);
	return (
		<Router>
			<div>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/contact"
						component={<Contact></Contact>}
					/>
					<Route exact path="/add-user" component={AddUser} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
