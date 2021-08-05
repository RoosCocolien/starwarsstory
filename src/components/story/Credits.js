/*
	The Credits
	Further development:
	
	I would like to use the information from the API to calculate how many people the
	chosen characters were able to save from the chosen planet.

	I would like to import three.js library to create a 3D starry sky and let the credits
	move away corresponding with the Star Wars movies.
*/

import { ArticleStyle } from "../../styles/App.styles";

const Credits = () => {
	return (
		<ArticleStyle>
			<h1>Credits</h1>
			<p>
				With thanks to:
				<br/><br/>
				Luke Skywalker
				<br/>
				C-3PO
				<br/>
				R2-D2
				<br/>
				Darth Vader
				<br/>
				Leia Organa
				<br/>
				Obi-Wan Kenobi
				<br/>
				Chewbacca
				<br/>
				Han Solo
				<br/>
				Master Yoda
			</p>
		</ArticleStyle>
	);
};

export default Credits;
