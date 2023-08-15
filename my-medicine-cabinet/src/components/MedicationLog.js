// Presentational Component
import React from 'react';
import './MedicationLog.css';
import MedicationEntry from './MedicationEntry';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

const MedicationLog = (props) => {
	const medications = props.medications;

	return (
		<div>
			{medications.map((medication) => (
				<MedicationEntry
					key={medication.id}
					brand_name={medication.brand_name}
					medication_description={medication.medication_description}
					pap_name={medication.pap_name}
					pap_info_link={medication.pap_info_link}
					pap_eligibility_link={medication.pap_eligibility_link}
					pap_application_link={medication.pap_application_link}
				></MedicationEntry>
			))}
		</div>
	);
};

MedicationLog.propTypes = {
	medications: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			brand_name: PropTypes.string,
			medication_description: PropTypes.string,
			pap_name: PropTypes.string,
			pap_info_link: urlPropType.isRequired,
			pap_eligibility_link: urlPropType.isRequired,
			pap_application_link: urlPropType.isRequired,
		})
	),
};

export default MedicationLog;
