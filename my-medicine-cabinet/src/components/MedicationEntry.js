// Container Component
import React from 'react';
import './MedicationEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import urlPropType from 'url-prop-type';

const MedicationEntry = (props) => {
	return (
		<div>
			<h2 className="pap-info__heading">Patient Assistance Program Info</h2>
			<ul className="pap-info">
				<li>
					<span style={{ fontWeight: 'bold' }}>Brand Name:</span>{' '}
					{props.brand_name}
				</li>
				<li>
					<span style={{ fontWeight: 'bold' }}>Description:</span>{' '}
					{props.medication_description}
				</li>
				<li>
					<span style={{ fontWeight: 'bold' }}>Program Name:</span>{' '}
					{props.pap_name}
				</li>

				{props.pap_info_link && (
					<li>
						Program Info Link:{' '}
						<a href={props.pap_info_link} target="_blank" rel="noreferrer">
							{props.pap_info_link}
						</a>
					</li>
				)}

				{props.pap_eligibility_link && (
					<li>
						Program Eligibility Link:{' '}
						<a
							href={props.pap_eligibility_link}
							target="_blank"
							rel="noreferrer"
						>
							{props.pap_eligibility_link}
						</a>
					</li>
				)}

				{props.pap_application_link && (
					<li>
						Program Application Link:{' '}
						<a
							href={props.pap_application_link}
							target="_blank"
							rel="noreferrer"
						>
							{props.pap_application_link}
						</a>
					</li>
				)}
			</ul>
		</div>
	);
};

MedicationEntry.propTypes = {
	id: PropTypes.number,
	brand_name: PropTypes.string,
	medication_description: PropTypes.string,
	pap_name: PropTypes.string,
	pap_info_link: urlPropType.isRequired,
	pap_eligibility_link: urlPropType.isRequired,
	pap_application_link: urlPropType.isRequired,
};

export default MedicationEntry;
