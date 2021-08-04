import React, { useState } from 'react';
import { SlideshowWrapper } from '../../styles/App.styles';
import { Card, Grid } from 'semantic-ui-react';

const People = (props) => {
	//create states
	const [imageIndex, setImageIndex] = useState(0);

	const nextImage = () => {
		if (imageIndex >= props.items.length - 1) {
			setImageIndex(0);
		} else {
			setImageIndex(imageIndex + 1);
		}
	}

	const previousImage = () => {
		if (imageIndex <= 0) {
			setImageIndex(props.items.length - 1);
		} else {
			setImageIndex(imageIndex - 1);
		}
	}

	const selectCurrentItem = () => {
		console.log('Selecting current image: ' + imageIndex);
		props.onChange(props.items[imageIndex]);
	}
	
	return (
		<SlideshowWrapper>
		<article className="slideshowContainer">
				<figure className="slideItem">
					<img className="currImage" src={props.items[imageIndex].src} alt={props.items[imageIndex].name}/>
					<br/>
					<p>
						<i className="arrow slideButtonLeft" onClick={previousImage}></i>
						<i className="arrow slideButtonRight" onClick={nextImage}></i>
						<div className="textItem">{props.items[imageIndex].name}</div>
					</p>
				</figure>

				<section className="selectImage">
					<button className="selectImageButton" onClick={selectCurrentItem}>
						Submit
					</button>
				</section>			
		</article>
		</SlideshowWrapper>
	);
};

export default People;