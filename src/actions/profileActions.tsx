import { 
  FETCH_PROFILE_BEGIN, 
  FETCH_PROFILE_FAILURE, 
  FETCH_PROFILE_SUCCESS,
  CLEAR_ERROR
} from './actionTypes'
import { fetchProfileData } from '../services/fetchProfileData';


export const fetchProfileBegin = () => ({
  type: FETCH_PROFILE_BEGIN
});

export const fetchProfileSuccess = (data: string) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: data
});

export const fetchProfileFailure = (data: string) => ({
  type: FETCH_PROFILE_FAILURE,
  payload: data
});

export const clearError = () =>({
  type: CLEAR_ERROR
});

export const fetchProfile = (username: string) => async(dispatch: any) => {
  dispatch(fetchProfileBegin());
  const profile = await fetchProfileData(username);
  if(profile.statusCode === 200){
      dispatch(fetchProfileSuccess(profile.data));
  }
  else{
      dispatch(fetchProfileFailure(profile.data));
  }
}
