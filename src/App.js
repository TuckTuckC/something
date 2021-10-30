import './App.css';
import {useState} from 'react';
import Calculator from './Components/Calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
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
			<Calculator calc = {calc} />
			<FontAwesomeIcon 
				icon={faCalculator} 
				className='toggleCalc' 
				onClick={() => toggle()}
				style={iconPos === 1 ? { bottom:'37%' } : { bottom: '0.5vw' }}
			/>
		</div>
  	);
};

export default App;
