import { Link } from 'react-router-dom';
import { ButtonStyle } from '../styles/App.styles';

/* 
	I need to change the className
*/
const Home = () => {
  return (
    <div className="App">
		<header className="App-header">
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
		</header>
    </div>
  );
};

export default Home;
