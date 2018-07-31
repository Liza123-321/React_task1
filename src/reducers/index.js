const initialState = {
        email: '',
        password: '',
        isAuth: false,
        formErrors: {email: 'Invalid email', password: 'Password is to short'},
        emailValid: false,
        passwordValid: false,
};
const loginForm = (state = initialState, action) => {
    switch (action.type) {
        case 'VALIDATE_FORM':
            let temp = false;
            if (state.emailValid === true && state.passwordValid === true) temp = true;
            return {
                ...state,
                isAuth: temp
            }
        case 'CHANGE_EMAIL':
            let emailTemp = false;
            let errorsEmail= state.formErrors;
            if (action.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                emailTemp = true;
                errorsEmail.email='';
            }
            return {
                ...state,
                email: action.email,
                emailValid: emailTemp,
                formErrors: errorsEmail,

            }
        case 'VALIDATE_EMAIL':
            let emailValid = false;
            let errorsEmailValid= state.formErrors;
            if (action.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                emailValid = true;
                errorsEmailValid.email='';
            }
            return {
                ...state,
                emailValid:  emailValid,
                formErrors: errorsEmailValid,

            }
        case 'VALIDATE_PASSWORD':
            let passwordValid = false;
            let passwordEmailValid= state.formErrors;
            if (action.password.length >= 6){
                passwordValid = true;
                passwordEmailValid.password='';
            }
            return {
                ...state,
                passwordValid: passwordValid,
                formErrors:passwordEmailValid,

            }
        case 'CHANGE_PASSWORD':
            let passwordTemp = false;
            let errorsPass= state.formErrors;
            if (action.password.length >= 6){
                passwordTemp = true;
                errorsPass.password='';
            }
            return {
                ...state,
                password: action.password,
                passwordValid: passwordTemp,
                formErrors:errorsPass,

            }
        case 'ADD_TO_STORE':
            return {
                ...state,
                email: action.email,
                password: action.password,

            }
        default:
            return state

    }
}


export default loginForm;