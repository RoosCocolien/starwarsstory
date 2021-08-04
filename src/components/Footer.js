import { Link } from 'react-router-dom';
import { ButtonStyle, FooterStyle } from '../styles/App.styles';
import { scrollToTop } from '../utils/scroll';

const Footer = () => {
	return (
		<FooterStyle>
			<p>
				Made by Roos Cocolien, click
					<Link to='/about'>
						<ButtonStyle onClick={scrollToTop}>
								here
						</ButtonStyle>
					</Link>
					for more info.
			</p>
		</FooterStyle>
	)
}

export default Footer;