/*
	ChapterTwo component
	This chapter contains the same functionality as ChapterOne.
*/

import React, {useEffect, useState } from "react";
import { ArticleStyle } from "../../styles/App.styles";

const ChapterTwo = (props) => {
	const [starshipData, setStarshipData] = useState({});

	useEffect(() => {
		async function fetchStarship(url) {
			await fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setStarshipData(data);
			})
		}
		fetchStarship(props.starship.url);
	}, []);

	// const showData = () => {
	// 	console.log('showData starship: ', starshipData);
	// }

	return (
		<ArticleStyle>
			<article>
				<h1>Chapter Two - on board of the starship</h1>
				{/* <button onClick={showData}>showData</button> */}
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
				</p>
			</article>
			{!starshipData.name &&
				<p>Loading...</p>
			}
			{starshipData.name &&
				<article className="paragraphStory">
					<p>
						Name ship: {starshipData.name}
					<br/>
						Passengers: {starshipData.passengers}
					<br/>
						Mauris malesuada eu enim ut vehicula. Donec laoreet rhoncus turpis, id finibus sem consectetur eu. Nunc pharetra eros lorem, ut ullamcorper libero sodales condimentum. Praesent a eros eu enim fringilla viverra. Etiam sed cursus mauris, quis ullamcorper ex. Phasellus aliquet enim et enim pellentesque scelerisque. In egestas, magna eu vestibulum hendrerit, purus nisl efficitur orci, id consectetur nibh massa nec justo. Suspendisse eu augue convallis, commodo lacus et, finibus ipsum. Cras ac tristique orci. Duis at tempus est. Donec eleifend luctus hendrerit. Aliquam leo metus, mollis sed velit vitae, lobortis finibus odio.		
					</p>
					<p>
						Max Atmosphering Speed: {starshipData.max_atmosphering_speed}
					<br/>
						Mauris malesuada eu enim ut vehicula. Donec laoreet rhoncus turpis, id finibus sem consectetur eu. Nunc pharetra eros lorem, ut ullamcorper libero sodales condimentum. Praesent a eros eu enim fringilla viverra. Etiam sed cursus mauris, quis ullamcorper ex. Phasellus aliquet enim et enim pellentesque scelerisque. In egestas, magna eu vestibulum hendrerit, purus nisl efficitur orci, id consectetur nibh massa nec justo. Suspendisse eu augue convallis, commodo lacus et, finibus ipsum. Cras ac tristique orci. Duis at tempus est. Donec eleifend luctus hendrerit. Aliquam leo metus, mollis sed velit vitae, lobortis finibus odio.						
					</p>
					<p>
						Cost in credits: {starshipData.cost_in_credits}
					<br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					</p>
				</article>
			}
		</ArticleStyle>
	);
};

export default ChapterTwo;
