/*
	ChapterTwo component
	This chapter contains the same functionality as ChapterOne.
*/

import React, { useEffect, useState } from "react";
import { ArticleStyle } from "../../styles/App.styles";

const ChapterThree = (props) => {
	const [planetData, setPlanetData] = useState({});

	useEffect(() => {
		async function fetchPlanetData(url) {
			await fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setPlanetData(data);
			})
		}
		fetchPlanetData(props.planet.url);
	}, []);

	// const showData = () => {
	// 	console.log('showData planetData: ', planetData);
	// }

	return (
		<ArticleStyle>
			<h1>Chapter 3: The arrival</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
			</p>
			{/* <button onClick={showData}>showData</button> */}
			{!planetData.name &&
				<article className="paragraphStory">
					<p>Loading...</p>
				</article>
			}
			{planetData.name &&
				<article className="paragraphStory">
					<p>
						Name: {planetData.name}
					<br/>
						Climate: {planetData.climate}
					<br/>
						Mauris malesuada eu enim ut vehicula. Donec laoreet rhoncus turpis, id finibus sem consectetur eu. Nunc pharetra eros lorem, ut ullamcorper libero sodales condimentum. Praesent a eros eu enim fringilla viverra. Etiam sed cursus mauris, quis ullamcorper ex. Phasellus aliquet enim et enim pellentesque scelerisque. In egestas, magna eu vestibulum hendrerit, purus nisl efficitur orci, id consectetur nibh massa nec justo. Suspendisse eu augue convallis, commodo lacus et, finibus ipsum. Cras ac tristique orci. Duis at tempus est. Donec eleifend luctus hendrerit. Aliquam leo metus, mollis sed velit vitae, lobortis finibus odio.		
					</p>
					<p>
						Gravity: {planetData.gravity}
						Terrain: {planetData.terrain}
					<br/>
						Mauris malesuada eu enim ut vehicula. Donec laoreet rhoncus turpis, id finibus sem consectetur eu. Nunc pharetra eros lorem, ut ullamcorper libero sodales condimentum. Praesent a eros eu enim fringilla viverra. Etiam sed cursus mauris, quis ullamcorper ex. Phasellus aliquet enim et enim pellentesque scelerisque. In egestas, magna eu vestibulum hendrerit, purus nisl efficitur orci, id consectetur nibh massa nec justo. Suspendisse eu augue convallis, commodo lacus et, finibus ipsum. Cras ac tristique orci. Duis at tempus est. Donec eleifend luctus hendrerit. Aliquam leo metus, mollis sed velit vitae, lobortis finibus odio.						
					</p>
					<p>
						Population: {planetData.population}
					<br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					</p>
				</article>
			}
		</ArticleStyle>
	);
};

export default ChapterThree;
