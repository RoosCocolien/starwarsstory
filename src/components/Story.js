/*
	The Story component.

	The imported components:
	- Introduction is located at the top of the page. It only consists of
	text. Introduction of the story and the instructions.
	- Slideshow is a component that takes an object array, and displays it
	in a slideshow. It also takes an callback function to change a state
	corresponding with the chosen object in the object array. It is shown
	4 times on the website: twice for picking a character, once for a starship, and
	once for a planet.
	- Credits is the component which is shown after the third chapter.

	createPeopleLists, createStarshipsList and createPlanetLists are functions
	which create the object array in a particular format accepted by the Slideshow component.
	It contains an image, the url for the API fetch later on, and the name.
	Length of the object array is variable. It is possible to add objects which correspond
	with the Star Wars API.
	The selected objects from the Lists are being send to the Chapters in which I make the
	api call.

	scrollToTop is a function which scrolls back to the top of the page after a button
	is clicked navigating to a different route.

	ButtonStyle is a styled component.

	The states:
	- currChapter refers to the which chapter needs to be rendered starting with 0
	- currCharacterOne, currCharacter Two, currPlanet, currStarship refers to the submitted
	character in the Slideshow components. Default is first on the list.


*/

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
import { scrollToTop } from '../utils/scroll';
/*styles*/
import { ButtonStyle } from '../styles/App.styles';

const Story = () => {
	/*declaration of peopleList, starshipsList and planetsList*/
	const peopleList = createPeopleList();
	const planetsList = createPlanetsList();
	const starshipsList = createStarshipsList();

	/*create states*/
	const [currChapter, setCurrChapter] = useState(0);
	const [currCharacterOne, setCurrCharacterOne] = useState(peopleList[0]);
	const [currCharacterTwo, setCurrCharacterTwo] = useState(peopleList[0]);
	const [currPlanet, setCurrPlanet] = useState(planetsList[0]);
	const [currStarship, setCurrStarship] = useState(starshipsList[0]);
	
	//functions	
	const changeCurrCharacterOne = (newCharacter) => {
		// console.log('New char is: ' + newCharacter.name);
		setCurrCharacterOne(newCharacter);
	};
	
	const changeCurrCharacterTwo = (newCharacter) => {
		// console.log('New char is ' + newCharacter.name);
		setCurrCharacterTwo(newCharacter);
	}
	
	const changeCurrPlanet = (newPlanet) => {
		// console.log('New char is: ' + newPlanet.name);
		setCurrPlanet(newPlanet);
	};
	
	const changeCurrStarship = (newStarship) => {
		// console.log('New starship is: ' + newStarship.name);
		setCurrStarship(newStarship);
	};
	
	const nextChapter = () => {
		if (currChapter < 3) {
			setCurrChapter(currChapter + 1);
		}
		if (currChapter === 3) {
			setCurrChapter(currChapter + 1);
		}
		scrollToTop();
	};
	
	return (
		<article>
			{currChapter === 0 &&
				<div className="Chapter">
					<Introduction />
					<Slideshow items={peopleList} current={currCharacterOne} onChange={changeCurrCharacterOne} />
					<p> Selected: {currCharacterOne.name} </p>
					<Slideshow items={peopleList} current={currCharacterTwo} onChange={changeCurrCharacterTwo} />
					<p> Selected: {currCharacterTwo.name}</p>
					<Slideshow items={starshipsList} current={currStarship} onChange={changeCurrStarship} />
					<p> Selected: {currStarship.name}</p>
					<Slideshow items={planetsList} current={currPlanet} onChange={changeCurrPlanet} />
					<p> Selected: {currPlanet.name}</p>
				</div>
			}
			{currChapter === 1 && <ChapterOne characterOne={currCharacterOne} characterTwo={currCharacterTwo}/>}
			{currChapter === 2 && <ChapterTwo starship={currStarship}/>}
			{currChapter === 3 && <ChapterThree planet={currPlanet}/>}
			{currChapter === 4 && <Credits />}
			{currChapter < 4 &&
				<ButtonStyle onClick={nextChapter}>
					Next
				</ButtonStyle>
			}
		</article>
	);
};

export default Story;
