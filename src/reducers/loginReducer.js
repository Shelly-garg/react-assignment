import {
    FETCH_LOGIN_BEGIN,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
  } from '../actions/loginActions';
  
  const initialState = {
    isLoaded: false,
    error: null,
    token: null,
    isSuccess: false,
  };
  
  function loginReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_LOGIN_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
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
