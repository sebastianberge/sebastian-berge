import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Navbar from "./components/Navbar"

// Views
import Main from "./views/MainView"

function App() {
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Main} />
				</Switch>
			</Router>
		</React.Fragment>
	)
}

export default App
