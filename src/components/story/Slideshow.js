import React, { useState } from 'react';

const People = (props) => {
	//create states
	const [imageIndex, setImageIndex] = useState(0);
	// const [currCharacter, setCurrCharacter] = useState(0);

	const nextImage = () => {
		// console.log('next image');
		// console.log('n1 imageIndex: ' + imageIndex);
		if (imageIndex >= props.items.length - 1) {
			// console.log('setting image to 0')
			// setImageSrc(images[0].src);
			setImageIndex(0);
		} else {
			// console.log('incrementing imageindex with 1');
			// setImageSrc(images[imageIndex + 1].src);
			setImageIndex(imageIndex + 1);
		}
		// console.log('n2 imageIndex: ' + imageIndex);
		// props.onChange(props.items[imageIndex]);
	}

	const previousImage = () => {
		// console.log('previous image');
		// console.log('p1 imageIndex: ' + imageIndex);
		if (imageIndex <= 0) {
			setImageIndex(props.items.length - 1);
		} else {
			setImageIndex(imageIndex - 1);
		}
		// console.log('p2 imageIndex: ' + imageIndex);
		// props.onChange(props.items[imageIndex]);
	}

	const selectCurrentItem = () => {
		console.log('Selecting current image: ' + imageIndex);
		props.onChange(props.items[imageIndex]);
	}
	
	return (
		<article className="App">
			<section className="slideshow-container">

				<figure className="slideItem">
					<img className="currImage" src={props.items[imageIndex].src} alt={props.items[imageIndex].name}/>
					<br/>
					<button className="previous" onClick={previousImage}>previous</button>
					<button className="next" onClick={nextImage}>next</button>
					<div className="textItem">{props.items[imageIndex].name}</div>
				</figure>

				<div className="selectImage">
					<button className="selectImageButton" onClick={selectCurrentItem}>
						Submit
					</button>
				</div>			
			</section>
		</article>
	);
};

export default People;