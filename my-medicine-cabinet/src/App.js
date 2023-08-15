import React from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MedicationLog from './components/MedicationLog';
import MedicationNameInput from './components/MedicationNameInput';
// import medData from './data/medications.json';

function App() {
	// const [medications, setMedications] = useState(medData[1]);
	const [medications, setMedications] = useState([]);
	// const medications = medData[1];

	const searchMedication = async (medicationName) => {
		try {
			const response = await fetch(
				// `http://127.0.0.1:8000/medications/?brand_name=${medicationName}`
				// `https://back-end-my-medicine-cabinet.onrender.com/medications/?brand_name=${medicationid}`
				`https://back-end-my-medicine-cabinet.onrender.com/search/?brand_name=${medicationName}`
			);

			if (response.ok) {
				const data = await response.json();
				// setMedications([data]);
				setMedications(data);
			} else {
				console.error('Failed to fetch medication data');
			}
		} catch (error) {
			console.error('Error fetching medication data', error);
		}
	};

	return (
		<div id="App">
			<header>
				<h1>My Medicine Cabinet</h1>
			</header>

			<main>
				<MedicationNameInput onSearch={searchMedication}></MedicationNameInput>
				{/* <MedicationNameInput></MedicationNameInput> */}
				<MedicationLog medications={medications}></MedicationLog>
			</main>
		</div>
	);
}

export default App;
