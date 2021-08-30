import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
  profileReducer,
  loginReducer
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
