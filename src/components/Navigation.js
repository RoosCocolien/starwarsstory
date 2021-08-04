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
		</Menu>
	)
}

export default Navigation;