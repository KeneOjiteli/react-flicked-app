import * as types from './actionTypes';

//initialize state object
const initialState = {
    details: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        bio: ''
    }
}

function RegistrationReducer(currentState = initialState, action) {
    switch(action.type){
        case types.REGISTER:
            return{
                //initialstate is spread into d current state
                ...currentState, details: action.payload
            }
            case types.EDIT_PROFILE:
                return{
                    ...currentState, details: action.payload
                }
            default:{
                return currentState;
             }
    }         
}

export default RegistrationReducer;