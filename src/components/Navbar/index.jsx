import React from "react"
import "./navbar-component.scss"
import { Link } from "react-router-dom"

// Assets
import logo from "../../assets/images/logo.png"

function Navbar() {
	return (
		<nav>
			<div className='container'>
				<ul>
					<li>
						<Link to='/'>
							<img src={logo} alt='Logo' />
						</Link>
					</li>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/'>home</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
