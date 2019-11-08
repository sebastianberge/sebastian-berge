import React from "react"
import profileImg from "../../assets/images/profile.jpeg"

function Hero(props) {
	return (
		<section className='hero is-dark is-medium'>
			<div className='hero-body'>
				<div className='container'>
					<figure className='image is-128x128'>
						<img src={profileImg} alt='Profile image' className='is-rounded' />
					</figure>
					<h1 className='title'>{props.title}</h1>
					<h2 className='subtitle'>{props.subtitle}</h2>
				</div>
			</div>
		</section>
	)
}

export default Hero
