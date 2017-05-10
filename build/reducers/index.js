import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// EXAMPLE CODE... you can combine multiple reducers to help reduce the changes of State in your app.
import users from './user';
const rootReducer = combineReducers({users, routing: routerReducer});

export default rootReducer;