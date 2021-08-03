import React, { useState } from 'react';

//images
import Sentinel from "../../images/starships/5.png";
import MillenniumFalcon from "../../images/starships/10.png";
import RebelTransport from "../../images/starships/17.png";
import ImperialShuttle from "../../images/starships/22.png";
import Nebulon from "../../images/starships/23.png";
const TOTAL_STARSHIPS = 5;
const starships = [
	{
		src : Sentinel,
		name: "Sentinel-class landing craft"
	},
	{
		src : MillenniumFalcon,
		name: "Millennium Falcon"
	},
	{
		src : RebelTransport,
		name: "Rebel Transport"
	},
	{
		src : ImperialShuttle,
		name: "Imperial Shuttle"
	},
	{
		src : Nebulon,
		name: "EF76 Nebulon-B Escort Frigate"
	}	
]

const Starships = () => {
	const [starshipIndex, setStarshipIndex] = useState(0);
	const [currStarships, setCurrStarship] = useState(0);

	const nextStarship = () => {
		console.log('next starship');
		if (starshipIndex >= TOTAL_STARSHIPS - 1) {
			setStarshipIndex(0);
		} else {
			setStarshipIndex(starshipIndex + 1);
		}
	}

	const previousStarship = () => {
		console.log('previous starship');
		if (starshipIndex <= 0) {
			setStarshipIndex(TOTAL_STARSHIPS - 1);
		} else {
			setStarshipIndex(starshipIndex - 1);
		}
	}

	const selectCurrentStarship = () => {
		console.log('Selecting current starship ' + starshipIndex);
		setCurrStarship(starshipIndex);
	}

	return (
		<article className="App">
			<section className="slideshow-container">

				<figure className="slideItem">
					<button className="previous" onClick={previousStarship}>previous</button>
					<img className="currImage" src={starships[starshipIndex].src} alt={starships[starshipIndex].name}/>
					<button className="next" onClick={nextStarship}>next</button>
					<div className="textItem">{starships[starshipIndex].name}</div>
				</figure>

			</section>
			<div className="selectImage">
				<button className="selectImageButton" onClick={selectCurrentStarship}>
					Select
				</button>
			</div>			
		</article>
	);
};

export default Starships;