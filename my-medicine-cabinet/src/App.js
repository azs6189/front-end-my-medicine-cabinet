import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MedicationLog from './components/MedicationLog';
import medData from './data/medications.json';

function App() {
	// const [medications, setMedications] = useState(medData);
	const medications = medData[0];

	return (
		<div id="App">
			<header>
				<h1>My Medicine Cabinet</h1>
			</header>

			<main>
				<MedicationLog medications={medications}></MedicationLog>
			</main>
		</div>
	);
}

export default App;
