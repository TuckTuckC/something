import './App.css';
import {useState} from 'react';
import Calculator from './Components/Calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

function App() {
	
	const [calc, setCalc] = useState(1)

  	return (
		<div className="App">
			<Calculator calc = {calc} />
			<FontAwesomeIcon 
				icon={faCalculator} 
				className='toggleCalc' 
				onClick={() => setCalc(calc === 1 ? 0 : 1)}
			/>
		</div>
  	);
};

export default App;
