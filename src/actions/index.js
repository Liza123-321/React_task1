
export const validateForm =(emailValid,passwordValid)=>{
    return{
        type: 'VALIDATE_FORM',
        emailValid,
        passwordValid
    }
}

export const validateEmail =(emailValid)=>{
    return{
        type: 'VALIDATE_EMAIL',
        emailValid
    }
}

export const validatePassword =(passwordValid)=>{
    return{
        type: 'VALIDATE_PASSWORD',
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