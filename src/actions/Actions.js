import axios from 'axios'

import {PROCEED_LOGIN, USER_LIST,LOGIN_SUCCESSFUL, LOGIN_FAILURE} from "./ActionTypes"

import {validateUserName, validatePassword} from "../utils/DataUtils"
import {dashboard_userlist, authorized_user} from "../Constants"

export const handleSubmit = (username, password) => {

    return (dispatch, getState) => {


       dispatch({ type: PROCEED_LOGIN}) 

       let isValid = true
       let errorMessage = null
       
       /* 
        * validating username
        */
       let validatedUserName = validateUserName(username);
       isValid = validatedUserName.isValid
       errorMessage = validatedUserName.errorMessage

       /* 
        * validating password
        */
       if (isValid)
       {
        let validatedPassword = validatePassword(password);
        isValid = validatedPassword.isValid
        errorMessage = validatedPassword.errorMessage
       }

       /* 
        * Authenticate user
        */       
       if (isValid)
       {
        if (username === authorized_user.username & password === authorized_user.password){
            console.log("login successful")
        }
        else
        {
            isValid = false
            errorMessage = "Invalid User"    
        }

       }

       if (isValid)
       {
        dispatch({ type: LOGIN_SUCCESSFUL, payload: errorMessage})
       }
       else
       {    
        dispatch({ type: LOGIN_FAILURE, payload: errorMessage})
       }

    }
}

export const getUserList = () => {

    return (dispatch, getState) => {

        dispatch({ type: USER_LIST, payload: dashboard_userlist.user})

    }
}
