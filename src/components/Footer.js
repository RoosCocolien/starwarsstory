import { Link } from 'react-router-dom';
import { ButtonStyle, FooterStyle } from '../styles/App.styles';

const Footer = () => {
	return (
		<FooterStyle>
			<p>
				Made by Roos Cocolien, click
					<Link to='/about'>
						<ButtonStyle>
								here
						</ButtonStyle>
					</Link>
					for more info.
			</p>
		</FooterStyle>
	)
}

export default Footer;