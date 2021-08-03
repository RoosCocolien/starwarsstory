//images
import Sentinel from "../../../images/starships/5.png";
import MillenniumFalcon from "../../../images/starships/10.png";
import RebelTransport from "../../../images/starships/17.png";
import ImperialShuttle from "../../../images/starships/22.png";
import Nebulon from "../../../images/starships/23.png";

const createStarshipsList = () => {
	const starships = [
		{
			src : Sentinel,
			url : "https://swapi.co/api/starships/5/",
			name: "Sentinel-class landing craft"
		},
		{
			src : MillenniumFalcon,
			url : "https://swapi.co/api/starships/10/",
			name: "Millennium Falcon"
		},
		{
			src : RebelTransport,
			url : "https://swapi.co/api/starships/17/",
			name: "Rebel Transport"
		},
		{
			src : ImperialShuttle,
			url : "https://swapi.co/api/starships/22/",
			name: "Imperial Shuttle"
		},
		{
			src : Nebulon,
			url : "https://swapi.co/api/starships/23/",
			name: "EF76 Nebulon-B Escort Frigate"
		}	
	];
	return starships;
};

export { createStarshipsList };