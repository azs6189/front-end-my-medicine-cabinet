import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
	return (
		<div className="form-group fg--search">
			<input type="text" className="input" placeholder="Search medication" />
			<button type="submit">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</div>
	);
};

export default SearchBar;
