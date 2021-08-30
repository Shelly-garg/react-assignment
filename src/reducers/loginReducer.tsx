import {
    FETCH_LOGIN_BEGIN,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from '../actions/actionTypes';

import { loggedInUserDetails } from '../services/tokenStorage';
import { UserState, ActionType } from './reducerConstants';

const initialState: UserState = {
  isLoaded: false,
  error: null,
  token: loggedInUserDetails().token,
  isSuccess: false,
};

function loginReducer(state = initialState, action: ActionType) {
  switch(action.type){
    case FETCH_LOGIN_BEGIN:
      return {
        ...state,
        isLoaded: false,
        error: null
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        token: action.payload,
        error:null,
        isSuccess:true
      };

    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
        isSuccess: false
      };

    default:
      return state;
  }
}

export default loginReducer;
