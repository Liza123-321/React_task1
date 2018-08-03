import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import styles from './style';

export let PasswordError = ({ classes }) => {
	return <div className={classes.error}>Password is to short</div>;
};
export default withStyles(styles)(PasswordError);
