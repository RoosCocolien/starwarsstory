import React, { useState } from 'react';

import Slideshow from './story/Slideshow';
import { createPeopleList } from './story/people_helper';
import { createStarshipsList } from './story/starship_helper';
import { createPlanetsList } from './story/planet_helper';

const Story = () => {
	//define people, starships and planets
	const peopleList = createPeopleList();
	const planetsList = createPlanetsList();
	const starshipsList = createStarshipsList();

	//create states
	const [currChapter, setCurrChapter] = useState(0);
	const [currCharacter, setCurrCharacter] = useState(peopleList[0]);
	const [currPlanet, setCurrPlanet] = useState(planetsList[0]);
	const [currStarship, setCurrStarship] = useState(starshipsList[0]);
	
	//functions
	const submitChoices = () => {
		console.log('submit choices');
		console.log('remove submit button');
		console.log('api, set values for next');
		console.log('currCharacter: ' + currCharacter.name);
		console.log('currPlanet: ' + currPlanet.name);
		console.log('currStarship: ' + currStarship.name);
		console.log('test eind');
	};

	const changeCurrCharacter = (newCharacter) => {
		console.log('New char is: ' + newCharacter.name);
		setCurrCharacter(newCharacter);
	};

	const changeCurrPlanet = (newPlanet) => {
		console.log('New char is: ' + newPlanet.name);
		setCurrPlanet(newPlanet);
	};

	const changeCurrStarship = (newStarship) => {
		console.log('New starship is: ' + newStarship.name);
		setCurrStarship(newStarship);
	};

	const nextChapter = () => {
		setCurrChapter(currChapter + 1);
	}

	return (
		<div className="App">
			{currChapter === 0 &&
				<div className="Chapter">
					<article>
						<section>
							<h1>
								Create your own Star Wars Story
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non pharetra tellus, eu euismod sem. Suspendisse magna libero, posuere eu suscipit sit amet, cursus quis enim. Nulla faucibus metus a ex sodales euismod sed ut metus. Aliquam imperdiet sed augue eget accumsan. Sed et dolor posuere, scelerisque lacus sed, eleifend neque. Donec tempus egestas ultricies. Pellentesque diam nisl, condimentum sit amet lectus gravida, faucibus posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
							</p>
							<p>
								Mauris malesuada eu enim ut vehicula. Donec laoreet rhoncus turpis, id finibus sem consectetur eu. Nunc pharetra eros lorem, ut ullamcorper libero sodales condimentum. Praesent a eros eu enim fringilla viverra. Etiam sed cursus mauris, quis ullamcorper ex. Phasellus aliquet enim et enim pellentesque scelerisque. In egestas, magna eu vestibulum hendrerit, purus nisl efficitur orci, id consectetur nibh massa nec justo. Suspendisse eu augue convallis, commodo lacus et, finibus ipsum. Cras ac tristique orci. Duis at tempus est. Donec eleifend luctus hendrerit. Aliquam leo metus, mollis sed velit vitae, lobortis finibus odio.
							</p>
						</section>
						<section>
							<ul>
								<li>Pick 1 Character</li>
								<li>Pick 1 Planet</li>
								<li>Pick 1 Starship</li>
							</ul>
						</section>
					</article>
					< Slideshow items={peopleList} current={currCharacter} onChange={changeCurrCharacter} />
					<p>
						Selected: {currCharacter.name}
					</p>
					< Slideshow items={planetsList} current={currPlanet} onChange={changeCurrPlanet} />
					<p>
						Selected: {currPlanet.name}
					</p>
					< Slideshow items={starshipsList} current={currStarship} onChange={changeCurrStarship} />
					<p>
						Selected: {currStarship.name}
					</p>
					<button id="submitChoices" onClick={submitChoices}>
						Submit choices
					</button>
				</div>
			}
			{currChapter === 1 &&
				<div className="Chapter">
					<article>
						<p>
							Chapter 1
						</p>
					</article>
				</div>
			}
			{currChapter === 2 &&
				<div className="Chapter">
					<article>
						<p>
							Chapter 2
						</p>
					</article>
				</div>
			}
			{currChapter === 3 &&
				<div className="Chapter">
					<article>
						<p>
							Chapter 3
						</p>
					</article>
				</div>
			}
			<button id="nextChapter" onClick={nextChapter}>
				Next
			</button>
		</div>
	);
};

export default Story;