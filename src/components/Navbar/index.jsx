import React from "react"
import { Link } from "react-router-dom"

// Assets
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHome,
	faImages,
	faAddressCard,
	faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons"

function Navbar() {
	return (
		<React.Fragment>
			<div class='tabs is-centered is-boxed'>
				<ul>
					<li class='is-active'>
						<Link>
							<span class='icon is-small'>
								<FontAwesomeIcon icon={faHome} />
							</span>
							<span>Home</span>
						</Link>
					</li>
					<li>
						<Link>
							<span class='icon is-small'>
								<FontAwesomeIcon icon={faImages} />
							</span>
							<span>Portfolio</span>
						</Link>
					</li>
					<li>
						<Link>
							<span class='icon is-small'>
								<FontAwesomeIcon icon={faAddressCard} />
							</span>
							<span>About</span>
						</Link>
					</li>
					<li>
						<Link>
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

export default Navbar
