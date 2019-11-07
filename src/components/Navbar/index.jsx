import React from "react"
import { Link } from "react-router-dom"
import { matchPath, withRouter } from "react-router"

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHome,
	faImages,
	faAddressCard,
	faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons"

class Navbar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div class='tabs is-centered is-boxed'>
					<ul>
						<li
							className={
								matchPath(this.props.location.pathname, {
									path: "/",
									exact: true
								})
									? "is-active"
									: ""
							}
						>
							<Link to='/'>
								<span class='icon is-small'>
									<FontAwesomeIcon icon={faHome} />
								</span>
								<span>Home</span>
							</Link>
						</li>
						<li
							className={
								matchPath(this.props.location.pathname, { path: "/portfolio" })
									? "is-active"
									: ""
							}
						>
							<Link to='/portfolio'>
								<span class='icon is-small'>
									<FontAwesomeIcon icon={faImages} />
								</span>
								<span>Portfolio</span>
							</Link>
						</li>
						<li
							className={
								matchPath(this.props.location.pathname, { path: "/about" })
									? "is-active"
									: ""
							}
						>
							<Link to='/about'>
								<span class='icon is-small'>
									<FontAwesomeIcon icon={faAddressCard} />
								</span>
								<span>About</span>
							</Link>
						</li>
						<li
							className={
								matchPath(this.props.location.pathname, { path: "/contact" })
									? "is-active"
									: ""
							}
						>
							<Link to='/contact'>
								<span class='icon is-small'>
									<FontAwesomeIcon icon={faEnvelopeOpen} />
								</span>
								<span>Contact</span>
							</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}

export default withRouter(Navbar)
