
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
        case 'VALIDATE_FORM':
            let temp=false;
            if(action.emailValid===true && action.passwordValid===true) temp=true;
            return {
                ...state,
                isAuth:temp
            }
        case 'VALIDATE_EMAIL':
            let emailTemp=false;
            if(action.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))  emailTemp=true;
            return{
                ...state,
                emailValid:emailTemp
            }
        case 'VALIDATE_PASSWORD':
            let passwordTemp=false;
            if(action.password.length >=6 )  passwordTemp=true;
            return{
                ...state,
                passwordValid:passwordTemp
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