import { createStore, applyMiddleware, combineReducers } from 'redux';
import RegistrationReducer from './reducer';
import thunk from 'redux-thunk';

//rootReducer is a variable that houses multiple reducers
const rootReducer = combineReducers({
//RegistrationReducer is renamed to registration
 registration: RegistrationReducer  
})

//thunk helps to dispatch actions as functions rather than as objects
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;