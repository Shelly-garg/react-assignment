import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
  profileReducer,
  loginReducer
});

export default rootReducer
