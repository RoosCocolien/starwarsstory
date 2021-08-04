import { Link } from 'react-router-dom';
import { ButtonStyle, HomeStyle } from '../styles/App.styles';
import { scrollToTop } from '../utils/scroll';

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
			<ButtonStyle onClick={scrollToTop}>
				E n t e r
			</ButtonStyle>
		</Link>
	</HomeStyle>
  );
};

export default Home;
