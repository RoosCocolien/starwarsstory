//routing
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
//styles (hier komt een GlobalStyle Component)
import { GlobalStyle } from './styles/App.styles';
import './App.css';
//components
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Story from './components/Story';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
	<>
	<GlobalStyle/>
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
