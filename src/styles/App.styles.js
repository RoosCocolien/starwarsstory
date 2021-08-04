import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/2k_stars.jpeg';

export const GlobalStyle = createGlobalStyle`
	body {
		background: url(${backgroundImage});
		background-attachment: fixed;
		font-family: 'Jost', sans-serif;
		font-weight: 300;
		color: white;
	}

	h1 {
		font-family: 'star_jedi_hollowregular';
		font-size: 4em;
		color: rgb(255, 197, 0);
	}

	h2, h3 {
		font-family: 'star_jedi_hollowregular';
	}

	p {
		font-size: 1.5em;
	}
`;

export const ButtonStyle = styled.button`
	background: transparant;
	border-radius: 3px;
	border: 2px solid yellow;
	color: white;
	margin: 0 1em;
	padding: 0.25em 1em;
`