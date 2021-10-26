import './App.css';
import {useState} from 'react';
import Calculator from './Components/Calculator';


function App() {
	
	const [calc, setCalc] = useState(0)

  	return (
		<div className="App">
			<Calculator calc = {calc} />
			<button onClick={() => setCalc(calc === 1 ? 0 : 1)}>Toggle Calc</button>
		</div>
  	);
};

export default App;
