import {
    FETCH_PROFILE_BEGIN,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
    CLEAR_ERROR
  } from '../actions/actionTypes';
import { ProfileState, ActionType } from './reducerConstants';

const initialState: ProfileState = {
  isLoaded: false,
  error: null,
  data: null
};

function profileReducer(state = initialState, action: ActionType) {
  switch(action.type) {
    case FETCH_PROFILE_BEGIN:
      return {
        ...state,
        isLoaded: false,
        error: null
      };

    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        data: action.payload,
        error:null
      };

    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
        data:null
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default profileReducer
