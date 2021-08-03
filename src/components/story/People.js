import LukeSkywalker from "../../images/people/1.png";
import C3PO from "../../images/people/2.png";
import R2D2 from "../../images/people/3.png";
import DarthVader from "../../images/people/4.png";
import Leia from "../../images/people/5.png";
import ObiWanKenobi from "../../images/people/10.png";
import Chewbacca from "../../images/people/13.png";
import HanSolo from "../../images/people/14.png";
import MasterYoda from "../../images/people/20.png";
import React, { useState } from 'react';
const TOTAL_IMAGES = 9;
const images = [
	{
		src : LukeSkywalker,
		name : "Luke SkyWalker"
	},
	{
		src : C3PO,
		name : "C3-PO"
	},
	{
		src : R2D2,
		name : "R2-D2"
	},
	{
		src : DarthVader,
		name : "Darth Vader"
	},
	{
		src : Leia,
		name : "Leia"
	},
	{
		src : ObiWanKenobi,
		name : "Obi-Wan Kenobi"
	},
	{
		src : Chewbacca,
		name : "Chewbacca"
	},
	{
		src : HanSolo,
		name : "Han Solo"
	},
	{
		src : MasterYoda,
		name : "Master Yoda"
	}
];

const People = () => {
	//create states
	const [imageIndex, setImageIndex] = useState(0);
	
	const nextImage = (value) => {
		if (value > 0) {
			if (imageIndex > TOTAL_IMAGES - 1) {
				setImageIndex(0);
			}
			else if (imageIndex < 0) {
				setImageIndex(TOTAL_IMAGES + 1)
			} else {
				setImageIndex(imageIndex + 1);
			}
			setImageIndex(imageIndex + 1);
		} else {
			if (imageIndex > TOTAL_IMAGES - 1) {
				setImageIndex(TOTAL_IMAGES + 1)
			} else if (imageIndex < 0) {
				setImageIndex(0)
			} else {
				setImageIndex(imageIndex - 1);
			}
		}
	}
	
	const selectCurrentImage = () => {
		console.log('Selecting current image: ' + imageIndex);
	}
	
	return (
		<article className="App">
			<section className="slideshow-container">

				{/* Images of Star Wars characters with caption text and buttons */}
				<figure className="slideItem">
					<button className="previous">previous</button>
					<img src={images[0].src} alt={images[0].name}/>
					<button className="next">next</button>
					<div className="textItem">{images[0].name}</div>
				</figure>
 
			</section>
			<div className="selectImage" onClick={selectCurrentImage}>
				<button className="selectImageButton">
					Select
				</button>
			</div>
		</article>
	);
};

export default People;