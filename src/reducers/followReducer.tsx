import {
    FETCH_USERLIST_BEGIN,
    FETCH_USERLIST_SUCCESS,
    FETCH_USERLIST_FAILURE,
  } from '../actions/actionTypes';

import { FollowState, ActionType } from './reducerConstants';

const initialState: FollowState = {
  isLoaded: false,
  error: null,
  data: null
};

function followReducer(state = initialState, action: ActionType) {
  switch(action.type) {
    case FETCH_USERLIST_BEGIN:
      return {
        ...state,
        isLoaded: false,
        error: null
      };

    case FETCH_USERLIST_SUCCESS:
      console.log(typeof(action.payload))
      return {
        ...state,
        isLoaded: true,
        data: action.payload,
        error:null
      };

    case FETCH_USERLIST_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.payload,
        data:null
      };
    default:
      return state;
  }
}

export default followReducer
