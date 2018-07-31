
export const validateForm =()=>{
    return{
        type: 'VALIDATE_FORM'
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
export const validatePassword =(password)=>{
    return{
        type: 'VALIDATE_PASSWORD',
        password
    }
}
export const validateEmail =(email)=>{
    return{
        type: 'VALIDATE_EMAIL',
        email
    }
}
export const addToStore =(email,password)=>{
    return{
        type: 'ADD_TO_STORE',
        email,
        password,

    }
}