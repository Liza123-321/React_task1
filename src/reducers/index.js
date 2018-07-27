
const initialState = {
    email: '',
    password: '',
    isAuth: false,
    formErrors: {email: 'Invalid email', password: 'Password is to short'},
    emailValid: false,
    passwordValid: false,
};
 const loginForm=(state=initialState,action)=>{
    switch(action.type){
        case 'VALIDATE_FORM_SUCCESS':
            return {
                ...state,
                isAuth:true
            }
        case 'VALIDATE_EMAIL_SUCCESS':
            return{
                ...state,
                emailValid:true
            }
        case 'VALIDATE_PASSWORD_SUCCESS':
            return{
                ...state,
                passwordValid:true
            }
        case 'CHANGE_EMAIL':
            return{
                ...state,
                email: action.email,

            }
        case 'CHANGE_PASSWORD':
            return{
                ...state,
                password: action.password,

            }
        default:
            return state

    }
}

 export default loginForm;