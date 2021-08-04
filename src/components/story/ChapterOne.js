// import fetchData from "../../utils/Api";
import React, { useEffect, useState } from "react";

const ChapterOne = (props) => {
	const [characterOneData, setCharacterOneData] = useState({});
	const [characterTwoData, setCharacterTwoData] = useState({});
	const [homePlanetOne, setHomePlanetOne] = useState({});
	const [homePlanetTwo, setHomePlanetTwo] = useState({});

	useEffect(() => {
		async function fetchCharacterOne(url) {
			let res2 = await fetch(url);
			let data2 = await res2.json();
			let data3 = await Promise.resolve(data2);
			setCharacterOneData(data3);
		} 

		async function fetchCharacterTwo(url) {
			let res = await fetch(url);
			let data = await res.json();
			let data2 = await Promise.resolve(data);
			setCharacterTwoData(data2);
		}

		fetchCharacterOne(props.characterOne.url);
		fetchCharacterTwo(props.characterTwo.url);
		console.log('end: ', characterOneData);
		console.log('end: ', characterTwoData);
		
	}, []);

	const showData = () => {
		console.log('showData characterOne: ', characterOneData);
		console.log('showData characterTwo: ', characterTwoData);
	}

	return (
		<div className="ChapterOne">
			<article>
				<h1>Chapter 1: The heroes pack their bags</h1>
				<p>
					API CALL
					The heroes
					Eyes
					Home planet
					Height
				</p>
				<button onClick={showData}>showData</button>
				{characterOneData.name && characterTwoData.name &&
					<article className="paragraphStory">
						<h1>The beginning</h1>
						<p>Height character one: {characterOneData.height}</p>
						<p>Height character two: {characterTwoData.height}</p>
						<p>Eye colors character one: {characterOneData.eye_color}</p>
						<p>Eye colors character two: {characterTwoData.eye_color}</p>
						<p>Home World character one: {characterOneData.homeworld}</p>
						<p>Home World character two: {characterTwoData.homeworld}</p>
					</article>
				}
			</article>
		</div>
	);
};

export default ChapterOne;
