/*
	The styled components:
	- GlobalStyle
	- ButtonStyle
	- FooterStyle
	- HomeStyle (header)
	- ArticleStyle
	- SlideshowWrapper

	In further development if this file becomes bigger, I might split it up
	into sections.
*/

import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/2k_stars.jpeg';
import { device } from './device';

export const GlobalStyle = createGlobalStyle`
	body {
		background: url(${backgroundImage});
		background-attachment: fixed;
		font-family: 'Jost', sans-serif;
		font-weight: 300;
		color: rgb(185,185,185);
		text-align: center;
		align-items: center;
	}

	h1 {
		font-family: 'star_jedi_hollowregular';
		font-size: 4em;
		color: rgb(255, 197, 0);
	}

	h2, h3 {
		font-family: 'star_jediregular';
	}

	p {
		font-size: 1.5em;
	}

	@media(max-width: 600px) {
		.row {
			display: block;
		}
		h1 {
			font-size: 2em;
		}
		p {
			font-size: 1em;
		}
	}
`;

export const ButtonStyle = styled.button`
	background-color: rgba(0, 0, 0, 0);
	font-family: 'star_jedi_hollowregular';
	border-radius: 3px;
	border: 1px solid rgba(255, 197, 0, 0.5);
	color: rgb(255,197,0);
	margin: 1em 0.5em;
	padding: 0.25em 0.5em;
	&:hover {
		background-color: rgba(255, 197, 0, 0.5);
	}
	&:active {
		color: black;
	}
`

export const FooterStyle = styled.footer`
	background-color: rgba(31, 31, 31, 0.5);
	width: 100%;
	position: absolute;
	margin-top: 20px;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 0.8em;
	color: rgb(160,160,160);
	height: 100px;
`

export const HomeStyle = styled.header`
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	margin-left: 20px;
	margin-right: 20px;
	h1 {
		font-size: 8em;
	}
	@media(max-width: 600px) {
		font-size: 0.5em;
	}
`;

export const ArticleStyle = styled.article`
	margin-left: 20px;
	margin-right: 20px;
	@media(max-width:600px) {
		h2 {
			font-size: 1.5em;
		}
	}
`;

export const SlideshowWrapper = styled.article`
	color: black;
	background: rgba(255, 197, 0, 0.4);
	padding: 20px 20px;
	align-items: center;
	display: block;
	border-radius: 25px;
	border: 2px solid rgb(148, 113,0);
	font-size: 2em;
	box-shadow: 5px 5px rgba(148,113,0,0.5);

	@media (${device.desktop}) {
		margin: 10px 300px 10px 300px;
	};
	@media (${device.laptopL}) {
		margin: 10px 200px 10px 200px;
	};
	@media (${device.laptop}) {
		margin: 10px 50px 10px 50px;
	};
	@media (${device.tablet}) {
		margin: 10px 40px 10px 40px;
	}
	@media (${device.mobileL}) {
		margin: 10px 20px 10px 20px;
	};
	@media (${device.mobileM}) {
		margin: 10px 20px 10px 20px;
	};
	@media (${device.mobileS}) {
		margin: 10px 15px 10px 15px;
	};

	.currImage {
		min-width: 20%;
		max-width: 80%;
	};

	.arrow {
		border: solid rgb(31,31,31);
		border-width: 0 5px 5px 0;
		display: inline-block;
		padding: 15px;
		margin: 15px;
	}

	.slideButtonLeft {
		transform: rotate(135deg);
		webkit-transform: rotate(135deg);
	}

	.arrow:hover {
		cursor: pointer;
		border: solid black;
		border-width: 0 5px 5px 0;
	}

	.slideButtonRight {
		transform: rotate(-45deg);
		webkit-transform: rotate(-45deg);		
	}

	button {
		background-color: rgba(148, 113, 0, 0.1);
		border-radius: 10px;
		border: solid rgb(31, 31, 31);
		cursor: pointer;
		box-shadow: 0 9px rgb(31,31,31);
	}

	button:hover {
		background-color: rgb(31, 31, 31);
		color: rgb(148, 113, 0);
		box-shadow: 0 9px rgb(148, 113, 0);
	}

	button:active {
		background-color: rgb(31, 31, 31);
		box-shadow: 0 5px rgb(122, 94, 0);
		transform: translateY(4px);
	}

`;
