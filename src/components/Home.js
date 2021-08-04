import { Link } from 'react-router-dom';
import { ButtonStyle, HomeStyle } from '../styles/App.styles';

/* 
	I need to change the className
*/
const Home = () => {
  return (
	<HomeStyle>
		<h1>
			STAR WARS
		</h1>
		<p>
			An interactive Star Wars Story
		</p>
		<Link to="/story">
			<ButtonStyle>
				E n t e r
			</ButtonStyle>
		</Link>
	</HomeStyle>
  );
};

export default Home;
