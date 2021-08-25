import {
    FETCH_PROFILE_BEGIN,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE
  } from '../actions/profileActions';
  
  const initialState = {
    isLoaded: false,
    error: null,
    data: null
  };
  
  function profileReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PROFILE_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          isLoaded: false,
          error: null
        };
  
      case FETCH_PROFILE_SUCCESS:
        return {
          isLoaded: true,
          data: action.payload,
          error:null
        };
  
      case FETCH_PROFILE_FAILURE:
          console.log(action.payload);
        return {
          isLoaded: true,
          error: action.payload,
          data:null
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

export default profileReducer
