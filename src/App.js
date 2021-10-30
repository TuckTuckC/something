import './App.css';
import {useState} from 'react';
import Calculator from './Components/Calculator';
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
  	);
};

export default App;
