import './App.css';

// React Imports
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Component Imports
import Calculator from './Components/Calculator/Calculator';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Budgets from './Components/Budgets/Budgets';
import Profile from './Components/Profile/Profile';

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

function App() {
	
	const [calc, setCalc] = useState(0)
	const [iconPos, setIconPos] = useState(0)

	const toggle = () => {
		setCalc(calc === 1 ? 0 : 1);
		setIconPos(iconPos === 1 ? 0 : 1);
	}

  	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/budgets'>Budgets</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/budgets'>
						<Budgets />
					</Route>
					<Route exact path='/profile'>
						<Profile />
					</Route>
				</Switch>
			</div>
			<div className="App">
				<div className='calcContainer'>
					<Calculator calc = {calc} />
					<FontAwesomeIcon 
						icon={faCalculator} 
						className='toggleCalc' 
						onClick={() => toggle()}
						style={iconPos === 1 ? { bottom:'37%' } : { bottom: '0.5vw' }}
					/>
				</div>
			</div>
		</Router>
  	);
};

export default App;
