import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MedicationNameInput = () => {
	const [medicationName, setMedicationName] = useState('Eliquis');

	const renameMedication = (changeEvent) => {
		console.log('Details about the element that fired the event:', changeEvent);
		console.log('The value of that element:', changeEvent.target.value);
		setMedicationName(changeEvent.target.value);
	};

	return (
		<form className="form-group fg--search">
			<input
				type="text"
				className="input"
				value={medicationName}
				onChange={renameMedication}
			/>

			<button type="submit" value="Submit">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</form>
	);
};

export default MedicationNameInput;
