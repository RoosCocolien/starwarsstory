import React, { useState } from 'react';

import Introduction from './story/Introduction';
import Slideshow from './story/Slideshow';
import ChapterOne from './story/ChapterOne';
import ChapterTwo from './story/ChapterTwo';
import ChapterThree from './story/ChapterThree';
import Credits from './story/Credits';
import { createPeopleList } from './story/helpers/people_helper';
import { createStarshipsList } from './story/helpers/starship_helper';
import { createPlanetsList } from './story/helpers/planet_helper';
import { ButtonStyle } from '../styles/App.styles';

const Story = () => {
	//define people, starships and planets
	const peopleList = createPeopleList();
	const planetsList = createPlanetsList();
	const starshipsList = createStarshipsList();

	//create states
	const [currChapter, setCurrChapter] = useState(0);
	const [currCharacterOne, setCurrCharacterOne] = useState(peopleList[0]);
	const [currCharacterTwo, setCurrCharacterTwo] = useState(peopleList[0]);
	const [currPlanet, setCurrPlanet] = useState(planetsList[0]);
	const [currStarship, setCurrStarship] = useState(starshipsList[0]);
	
	//functions
	const changeCurrCharacterOne = (newCharacter) => {
		console.log('New char is: ' + newCharacter.name);
		setCurrCharacterOne(newCharacter);
	};

	const changeCurrCharacterTwo = (newCharacter) => {
		console.log('New char is ' + newCharacter.name);
		setCurrCharacterTwo(newCharacter);
	}

	const changeCurrPlanet = (newPlanet) => {
		console.log('New char is: ' + newPlanet.name);
		setCurrPlanet(newPlanet);
	};

	const changeCurrStarship = (newStarship) => {
		console.log('New starship is: ' + newStarship.name);
		setCurrStarship(newStarship);
	};

	const nextChapter = () => {
		if (currChapter < 3) {
			setCurrChapter(currChapter + 1);
		}
		if (currChapter === 3) {
			setCurrChapter(currChapter + 1);
		}
	};

	return (
		<article>
			{currChapter === 0 &&
				<div className="Chapter">
					<Introduction />
					<Slideshow items={peopleList} current={currCharacterOne} onChange={changeCurrCharacterOne} />
					<p>
						Selected: {currCharacterOne.name}
					</p>
					<Slideshow items={peopleList} current={currCharacterTwo} onChange={changeCurrCharacterTwo} />
					<p>
						Selected: {currCharacterTwo.name}
					</p>
					<Slideshow items={starshipsList} current={currStarship} onChange={changeCurrStarship} />
					<p>
						Selected: {currStarship.name}
					</p>
					<Slideshow items={planetsList} current={currPlanet} onChange={changeCurrPlanet} />
					<p>
						Selected: {currPlanet.name}
					</p>
				</div>
			}
			{currChapter === 1 &&
				<ChapterOne characterOne={currCharacterOne} characterTwo={currCharacterTwo}/>
			}
			{currChapter === 2 &&
				<ChapterTwo starship={currStarship}/>
			}
			{currChapter === 3 &&
				<ChapterThree planet={currPlanet}/>
			}
			{currChapter === 4 &&
				<Credits />
			}
			{currChapter < 4 &&
				<ButtonStyle onClick={nextChapter}>
					Next
				</ButtonStyle>
			}
		</article>
	);
};

export default Story;