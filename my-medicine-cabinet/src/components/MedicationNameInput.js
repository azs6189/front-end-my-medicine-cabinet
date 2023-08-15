import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './MedicationNameInput.css';

const MedicationNameInput = ({ onSearch }) => {
	const [medicationName, setMedicationName] = useState('');

	const handleSearch = () => {
		onSearch(medicationName);
	};

	return (
		<form className="centered-form">
			<section>
				<input
					type="text"
					className="input"
					value={medicationName}
					onChange={(event) => setMedicationName(event.target.value)}
				/>

				<button type="button" onClick={handleSearch}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</section>
		</form>
	);
};

export default MedicationNameInput;
