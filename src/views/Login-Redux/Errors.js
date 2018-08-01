import React from 'react';
import TextField from '@material-ui/core/TextField';

const Errors = ({ formErrors }) => (
	<div>
		{Object.keys(formErrors).map((fieldName, i) => {
			if (formErrors[fieldName].length > 0) {
				return (
					<div key={i}>
						<TextField error value={formErrors[fieldName]} />
						<br />
						<br />
					</div>
				);
			} else {
				return '';
			}
		})}
	</div>
);

export default Errors;
