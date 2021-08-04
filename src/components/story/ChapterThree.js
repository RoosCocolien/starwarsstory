import React, { useEffect, useState } from "react";

const ChapterThree = (props) => {
	console.log('props: ' + props.planet.url);
	const [planetData, setPlanetData] = useState({});

	useEffect(() => {
		async function fetchPlanetData(url) {
			let res = await fetch(url);
			let data = await res.json();
			let planet = await Promise.resolve(data);
			setPlanetData(planet);
		}
		console.log('props.url: ', props.planet.url);
		fetchPlanetData(props.planet.url);
		console.log('end: ', planetData);
	}, []);

	const showData = () => {
		console.log('showData planetData: ', planetData);
	}

	return (
		<div className="ChapterThree">
			<article>
				<h1>Chapter 3: The arrival</h1>
				<button onClick={showData}>showData</button>
				{!planetData.name &&
					<article className="paragraphStory">
						<p>Loading...</p>
					</article>
				}
				{planetData.name &&
					<article className="paragraphStory">
						<p>
						</p>
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
			</article>
		</div>
	);
};

export default ChapterThree;