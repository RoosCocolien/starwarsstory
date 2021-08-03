import React, { useState } from 'react';

//images
import YavinIV from "../../images/planets/3.png";
import Bespin from "../../images/planets/6.png";
import Endor from "../../images/planets/7.png";
import Naboo from "../../images/planets/8.png";
import Utapau from "../../images/planets/12.png";
const TOTAL_PLANETS = 5;
const planets = [
	{
		src : YavinIV,
		name: "Yavin IV"
	},
	{
		src : Bespin,
		name: "Bespin"
	},
	{
		src : Endor,
		name: "Endor"
	},
	{
		src : Naboo,
		name: "Naboo"
	},
	{
		src : Utapau,
		name: "Utapau"
	}	
]

const Planets = () => {
	const [planetIndex, setPlanetIndex] = useState(0);
	const [currPlanet, setCurrPlanet] = useState(0);

	const nextPlanet = () => {
		console.log('next planet');
		if (planetIndex >= TOTAL_PLANETS - 1) {
			setPlanetIndex(0);
		} else {
			setPlanetIndex(planetIndex + 1);
		}
	}

	const previousPlanet = () => {
		console.log('previous planet');
		if (planetIndex <= 0) {
			setPlanetIndex(TOTAL_PLANETS - 1);
		} else {
			setPlanetIndex(planetIndex - 1);
		}
	}

	const selectCurrentPlanet = () => {
		console.log('Selecting current planet ' + planetIndex);
		setCurrPlanet(planetIndex);
	}

	return (
		<article className="App">
			<section className="slideshow-container">

				<figure className="slideItem">
					<button className="previous" onClick={previousPlanet}>previous</button>
					<img className="currImage" src={planets[planetIndex].src} alt={planets[planetIndex].name}/>
					<button className="next" onClick={nextPlanet}>next</button>
					<div className="textItem">{planets[planetIndex].name}</div>
				</figure>

			</section>
			<div className="selectImage">
				<button className="selectImageButton" onClick={selectCurrentPlanet}>
					Select
				</button>
			</div>			
		</article>
	);
};

export default Planets;