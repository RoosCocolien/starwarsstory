import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="Footer">
			<p>
				Made by Roos Cocolien, click
				<Link to='/about'>
					<button>
						here
					</button>
				</Link>
				 for more info.
			</p>
		</div>
	)
}

export default Footer;