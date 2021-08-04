//images
import YavinIV from "../../../images/planets/3.png";
import Bespin from "../../../images/planets/6.png";
import Endor from "../../../images/planets/7.png";
import Naboo from "../../../images/planets/8.png";
import Utapau from "../../../images/planets/12.png";

const createPlanetsList = () => {
	const planets = [
		{
			src : YavinIV,
			url : "https://swapi.dev/api/planets/3/",
			name: "Yavin IV"
		},
		{
			src : Bespin,
			url : "https://swapi.dev/api/planets/6",
			name: "Bespin"
		},
		{
			src : Endor,
			url : "https://swapi.dev/api/planets/7",
			name: "Endor"
		},
		{
			src : Naboo,
			url : "https://swapi.dev/api/planets/8",
			name: "Naboo"
		},
		{
			src : Utapau,
			url : "https://swapi.dev/api/planets/12",
			name: "Utapau"
		}	
	];
	return (planets);
};

export { createPlanetsList };