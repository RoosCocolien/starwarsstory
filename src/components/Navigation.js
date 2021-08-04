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
			<ButtonStyle>
				<Menu.Item as={Link} to="/about" position="right">
					About
				</Menu.Item>
			</ButtonStyle>
		</Menu>
	)
}

export default Navigation;