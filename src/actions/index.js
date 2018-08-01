export const validateForm = () => {
	return {
		type: 'VALIDATE_FORM',
	};
};
export const changeEmail = email => {
	return {
		type: 'CHANGE_EMAIL',
		email,
	};
};

export const changePassword = password => {
	return {
		type: 'CHANGE_PASSWORD',
		password,
	};
};
export const addToStore = (email, password, isAuth) => {
	return {
		type: 'ADD_TO_STORE',
		email,
		password,
		isAuth,
	};
};
