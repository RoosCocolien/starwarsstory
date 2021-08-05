/*
	This file contains the table of contents of the application.
	Importing Router, Switch and Route from 'react-router-dom' to
	have the functionality of a multiple page website.
		Applying GlobalyStyle and GlobalFonts in order to be able to
	use the specific Star Wars fonts everywhere and have a general
	style applied to the whole application.
		Importing the various components.
	- Navigation and footer respectively as the upper part and the lower part of the website.
	- Home is the opening page. In further development I would like to import
	the three.js library to create a 3D starry background.
	- Story is where the magic happens.
	- About is the informative page about the creation of the website.
	- Contact is the component where i would like to create a
	contact form.
*/

//routing
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

//styles (hier komt een GlobalStyle Component)
import { GlobalStyle } from './styles/App.styles';
import { GlobalFonts } from './fonts/fonts';

//components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import Story from './components/Story';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
	<>
	<GlobalStyle />
	<GlobalFonts />
	<Router>
		<Navigation />
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/story' component={Story}></Route>
			<Route exact path='/about' component={About}></Route>
			<Route exact path='/contact' component={Contact}></Route>
		</Switch>
		<Footer />
	</Router>
	</>
  );
}

export default App;
