//images
import LukeSkywalker from "../../../images/people/1.png";
import C3PO from "../../../images/people/2.png";
import R2D2 from "../../../images/people/3.png";
import DarthVader from "../../../images/people/4.png";
import Leia from "../../../images/people/5.png";
import ObiWanKenobi from "../../../images/people/10.png";
import Chewbacca from "../../../images/people/13.png";
import HanSolo from "../../../images/people/14.png";
import MasterYoda from "../../../images/people/20.png";

const createPeopleList = () => {
	const people = [
		{
			src : LukeSkywalker,
			url: "https://swapi.dev/api/people/1/",
			name : "Luke SkyWalker"
		},
		{
			src : C3PO,
			url: "https://swapi.dev/api/people/2/",
			name : "C3-PO"
		},
		{
			src : R2D2,
			url: "https://swapi.dev/api/people/3/",
			name : "R2-D2"
		},
		{
			src : DarthVader,
			url: "https://swapi.dev/api/people/4/",
			name : "Darth Vader"
		},
		{
			src : Leia,
			url: "https://swapi.dev/api/people/5/",
			name : "Leia Organa"
		},
		{
			src : ObiWanKenobi,
			url: "https://swapi.dev/api/people/10/",
			name : "Obi-Wan Kenobi"
		},
		{
			src : Chewbacca,
			url: "https://swapi.dev/api/people/13/",
			name : "Chewbacca"
		},
		{
			src : HanSolo,
			url: "https://swapi.dev/api/people/14/",
			name : "Han Solo"
		},
		{
			src : MasterYoda,
			url: "https://swapi.dev/api/people/20/",
			name : "Master Yoda"
		}
	];
	return (people);
};

export { createPeopleList };