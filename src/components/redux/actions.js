import * as types from './actionTypes';
//actions are events, they are d only way to send data from the application to the store, using the dispatch()
const register = (firstname, lastname, username, email, password, bio) =>{
    return((dispatch) =>{
        dispatch({
            type: types.REGISTER,
            payload: {firstname, lastname, username, email, password, bio}
        })
    })
}
const edit = (firstname, lastname, username, email, password, bio) =>{
    return((dispatch) =>{
        dispatch({
            type: types.EDIT_PROFILE,
            payload: {firstname, lastname, username, email, password, bio}
        })
    })
}
//with the help of thunk we are able to write our action objects as function and pass arguments
export {register, edit}
 