/*
	This is the navbar on the top of the page.
	I have imported 'Menu' from 'semantic-ui-react' library to try it out.
	I need to further explore how I could combine styled components
	with the use of the 'semantic-ui-react' lib.
*/

import { Link } from 'react-router-dom';
import logo from '../images/logo/Star_Wars_logo_open_yellow_small.png';
import { Menu } from 'semantic-ui-react';
import { ButtonStyle } from '../styles/App.styles';

const Navigation = () => {
	return (
		<Menu >
			<Menu.Item as={Link} to="/">
				<img src={logo} alt="StarWarsLogo"/>
			</Menu.Item>
			<Menu.Item as={Link} to="/about" position="right">
				<ButtonStyle>
					About
				</ButtonStyle>
			</Menu.Item>
			<Menu.Item as={Link} to="/contact" position="right">
				<ButtonStyle>
					Contact
				</ButtonStyle>
			</Menu.Item>
		</Menu>
	)
}

export default Navigation;
