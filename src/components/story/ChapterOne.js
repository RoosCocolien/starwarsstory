/*
	ChapterOne component
	ArticleStyle component is imported in every chapter.
	In further development I will rewrite the fetching functionality in a seperate file
	to avoid writing repeating code and to handle errors. Then I could import it like this:
	// import fetchData from "../../utils/Api";
	and the code will be cleaner.
	
	I get warnings in the useEffect hook which I need to further investigate.
	The "showData" is commented out, and is meant for testing. In further development
	I will move it to a different branch.

	Loading: I would like to add a light saber as a loading animation.
*/

import React, { useEffect, useState } from "react";
import { ArticleStyle } from "../../styles/App.styles";

const ChapterOne = (props) => {
	const [characterOneData, setCharacterOneData] = useState({});
	const [characterTwoData, setCharacterTwoData] = useState({});
	const [homePlanetOne, setHomePlanetOne] = useState({});
	const [homePlanetTwo, setHomePlanetTwo] = useState({});

	useEffect(() => {
		async function fetchHomePlanetOne(url) {
			await fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setHomePlanetOne(data);
			})
		}

		async function fetchHomePlanetTwo(url) {
			await fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setHomePlanetTwo(data);
			})
		}

		async function fetchCharacterOne(url) {
			await fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setCharacterOneData(data);
				fetchHomePlanetOne(data.homeworld);
			})
		}

		async function fetchCharacterTwo(url) {
			await fetch(url)
			.then((result) => result.json())
			.then((data) => {
				setCharacterTwoData(data);
				fetchHomePlanetTwo(data.homeworld);
			})
		}
		fetchCharacterOne(props.characterOne.url);
		fetchCharacterTwo(props.characterTwo.url);
	}, []);

	// const showData = () => {
	// 	console.log('showData characterOne: ', characterOneData);
	// 	console.log('showData characterTwo: ', characterTwoData);
	// }

	return (
		<ArticleStyle>
				<section>
					<h1>Chapter 1: The heroes pack their bags</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					</p>
				</section>
				{(!characterOneData.name || !characterTwoData.name) &&
					<article className="paragraphStory">
						<p>Loading...</p>
					</article>
				}
				{characterOneData.name && characterTwoData.name &&
					<article className="paragraphStory">
						<h1>The beginning</h1>
						<p>Height {characterOneData.name}: {characterOneData.height}</p>
						<p>Height {characterTwoData.name}: {characterTwoData.height}</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
						</p>
						<p>Eye colors character one: {characterOneData.eye_color}</p>
						<p>Eye colors character two: {characterTwoData.eye_color}</p>
						<p>
							Mauris malesuada eu enim ut vehicula. Donec laoreet rhoncus turpis, id finibus sem consectetur eu. Nunc pharetra eros lorem, ut ullamcorper libero sodales condimentum. Praesent a eros eu enim fringilla viverra. Etiam sed cursus mauris, quis ullamcorper ex. Phasellus aliquet enim et enim pellentesque scelerisque. In egestas, magna eu vestibulum hendrerit, purus nisl efficitur orci, id consectetur nibh massa nec justo. Suspendisse eu augue convallis, commodo lacus et, finibus ipsum. Cras ac tristique orci. Duis at tempus est. Donec eleifend luctus hendrerit. Aliquam leo metus, mollis sed velit vitae, lobortis finibus odio.
						</p>
					</article>
				}
				{(homePlanetOne.name && homePlanetTwo.name)
					?
					<article className="paragraphStory">
							<p>Home World {characterOneData.name} is {homePlanetOne.name}</p>
							<p>Home World {characterTwoData.name} is {homePlanetTwo.name}</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.							
							</p>
						</article>
					:
					<p>Loading...</p>
				}
		</ArticleStyle>
	);
};

export default ChapterOne;
