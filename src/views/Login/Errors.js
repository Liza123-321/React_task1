import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles/index';

export const Errors = ({ formErrors }) => (
	<div>
		{Object.keys(formErrors).map((fieldName, i) => {
			if (formErrors[fieldName].length > 0) {
				return (
					<div key={i}>
						<TextField error label="Error" value={formErrors[fieldName]} />
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

export let ErrorsEmail = classes => {
	return <div className={classes.errors}>Invalid email</div>;
};
export let ErrorsPassword = () => {
	return <div>Password is to short</div>;
};
