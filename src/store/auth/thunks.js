import { checkingCredentials } from "./"



export const checkingAuthentication = (email,Password)=>{

    return async(dispatch)=>{

        dispatch(checkingCredentials())



    }
}

export const startGoogleSignIn = ()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}