import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import loginReducer from './loginReducer';
import followReducer from './followReducer';


const rootReducer = combineReducers({
  profileReducer,
  loginReducer,
  followReducer
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
