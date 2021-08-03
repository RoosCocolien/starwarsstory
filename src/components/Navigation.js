import { Link } from 'react-router-dom';
import logo from '../images/logo/Star_Wars_logo_open_yellow_small.png'

const Navigation = () => {
	return (
		<div className="Navigation">
			<Link to="/">
				<img src={logo} alt="StarWarsLogo"/>
			</Link>
			<Link to='/about'>
				<button>
					About
				</button>
			</Link>
		</div>
	)
}

export default Navigation;