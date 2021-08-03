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
	const [currCharacter, setCurrCharacter] = useState(0);
	
	const nextImage = () => {
		console.log('next image');
		console.log('n1 imageIndex: ' + imageIndex);
		if (imageIndex >= TOTAL_IMAGES - 1) {
			console.log('setting image to 0')
			// setImageSrc(images[0].src);
			setImageIndex(0);
		} else {
			console.log('incrementing imageindex with 1');
			// setImageSrc(images[imageIndex + 1].src);
			setImageIndex(imageIndex + 1);
		}
		console.log('n2 imageIndex: ' + imageIndex);
	}

	const previousImage = () => {
		console.log('previous image');
		console.log('p1 imageIndex: ' + imageIndex);
		if (imageIndex <= 0) {
			setImageIndex(8);
		} else {
			setImageIndex(imageIndex - 1);
		}
		console.log('p2 imageIndex: ' + imageIndex);
	}

	const selectCurrentImage = () => {
		console.log('Selecting current image: ' + imageIndex);
		setCurrCharacter(imageIndex);
	}
	
	return (
		<article className="App">
			<section className="slideshow-container">

				<figure className="slideItem">
					<button className="previous" onClick={previousImage}>previous</button>
					<img className="currImage" src={images[imageIndex].src} alt={images[imageIndex].name} name={imageIndex}/>
					<button className="next" onClick={nextImage}>next</button>
					<div className="textItem">{images[imageIndex].name}</div>
				</figure>
 
			</section>
			<div className="selectImage">
				<button className="selectImageButton" onClick={selectCurrentImage}>
					Select
				</button>
			</div>
		</article>
	);
};

export default People;