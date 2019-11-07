import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

// Views
import Main from "./views/MainView"

function App() {
	return (
		<React.Fragment>
			<Router>
				<Hero title="Sebastian Berge" subtitle="Computer Engineer Student @ Western University of Applied Sciences, Norway" />
				<Navbar />
				<Switch>
					<Route exact path='/' component={Main} />
				</Switch>
			</Router>
		</React.Fragment>
	)
}

export default App
