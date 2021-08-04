import { createGlobalStyle } from 'styled-components';

import StarjediWebfont from './starjedi-webfont.woff';
import StarjediWebfont2 from './starjedi-webfont.woff2';
import StarjholWebfont from './starjhol-webfont.woff';
import StarjholWebfont2 from './starjhol-webfont.woff2';

export const GlobalFonts = createGlobalStyle`
	@font-face {
		font-family: 'star_jediregular';
		src: url(${StarjediWebfont2}) format('woff2'),
			url(${StarjediWebfont}) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'star_jedi_hollowregular';
		src: url(${StarjholWebfont2}) format('woff2'),
			url(${StarjholWebfont}) format('woff');
		font-weight: normal;
		font-style: normal;
	}
`