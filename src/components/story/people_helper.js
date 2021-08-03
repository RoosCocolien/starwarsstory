//images
import LukeSkywalker from "../../images/people/1.png";
import C3PO from "../../images/people/2.png";
import R2D2 from "../../images/people/3.png";
import DarthVader from "../../images/people/4.png";
import Leia from "../../images/people/5.png";
import ObiWanKenobi from "../../images/people/10.png";
import Chewbacca from "../../images/people/13.png";
import HanSolo from "../../images/people/14.png";
import MasterYoda from "../../images/people/20.png";

const createPeopleList = () => {
	const people = [
		{
			src : LukeSkywalker,
			url: "people/1/",
			name : "Luke SkyWalker"
		},
		{
			src : C3PO,
			url: "people/2/",
			name : "C3-PO"
		},
		{
			src : R2D2,
			url: "people/3/",
			name : "R2-D2"
		},
		{
			src : DarthVader,
			url: "people/4/",
			name : "Darth Vader"
		},
		{
			src : Leia,
			url: "people/5/",
			name : "Leia"
		},
		{
			src : ObiWanKenobi,
			url: "people/10/",
			name : "Obi-Wan Kenobi"
		},
		{
			src : Chewbacca,
			url: "people/13/",
			name : "Chewbacca"
		},
		{
			src : HanSolo,
			url: "people/14/",
			name : "Han Solo"
		},
		{
			src : MasterYoda,
			url: "people/20/",
			name : "Master Yoda"
		}
	];
	return (people);
};

export { createPeopleList };