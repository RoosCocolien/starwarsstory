import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/2k_stars.jpeg';


export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'star_jediregular';
		src: url('./fonts/starjedi-webfont.woff2') format('woff2'),
			url('./fonts/starjedi-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;

	}

	@font-face {
		font-family: 'star_jedi_hollowregular';
		src: url('./fonts/starjhol-webfont.woff2') format('woff2'),
			url('./fonts/starjhol-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;

	}

	body {
		background-img: url(${backgroundImage});
		background-attachment: fixed;
		font-family: 'Jost', sans-serif;
	}

	h1 {
		font-family: 'star_jediregular';
	}

	h2, h3 {
		font-family: 'star_jedi_hollowregular';
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