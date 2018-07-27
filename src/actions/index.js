
export const validateFormSuccess =(formValid)=>{
    return{
        type: 'VALIDATE_FORM_SUCCESS',
        formValid
    }
}

export const validateEmailSuccess =(emailValid)=>{
    return{
        type: 'VALIDATE_EMAIL_SUCCESS',
        emailValid
    }
}

export const validatePasswordSuccess =(passwordValid)=>{
    return{
        type: 'VALIDATE_PASSWORD_SUCCESS',
        passwordValid
    }
}

export const changeEmail =(email)=>{
    return{
        type: 'CHANGE_EMAIL',
        email
    }
}

export const changePassword =(password)=>{
    return{
        type: 'CHANGE_PASSWORD',
        password
    }
}