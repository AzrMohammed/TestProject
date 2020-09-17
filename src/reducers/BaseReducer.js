
import {PROCEED_LOGIN, USER_LIST, LOGIN_SUCCESSFUL, LOGIN_FAILURE} from "../actions/ActionTypes"

let initialState = {
    username:"",
    password:"",
    loginSuccess:false,
    isLoading: false,
    errorMessage: null,
}

export default BaseReducer = (state = initialState, action) => {

    switch (action.type) {
        case PROCEED_LOGIN:
            return Object.assign({}, state, { isLoading: true , errorMessage : null})
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, state, { isLoading: false, loginSuccess : true}) 
        case LOGIN_FAILURE:
            return Object.assign({}, state, { isLoading: false, loginSuccess : false, errorMessage: action.payload })
        case USER_LIST:
            return Object.assign({}, state, { isLoading: false, userList : action.payload})    
        default:
            return state
    }
}
