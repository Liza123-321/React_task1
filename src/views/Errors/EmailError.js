import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import styles from './style';

let EmailError = ({ classes }) => {
	return <div className={classes.error}>Invalid email</div>;
};
export default withStyles(styles)(EmailError);
