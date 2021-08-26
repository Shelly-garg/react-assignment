import { 
  FETCH_PROFILE_BEGIN, 
  FETCH_PROFILE_FAILURE, 
  FETCH_PROFILE_SUCCESS
} from './actionTypes'
import { fetchProfileData } from '../services/fetchProfileData';


export const fetchProfileBegin = () => ({
  type: FETCH_PROFILE_BEGIN
});

export const fetchProfileSuccess = data => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: data
});

export const fetchProfileFailure = data => ({
  type: FETCH_PROFILE_FAILURE,
  payload: data
});

export const fetchProfile = (username) => async(dispatch) => {
  dispatch(fetchProfileBegin());
  const profile = await fetchProfileData(username);
  if(profile.statusCode === 200){
      dispatch(fetchProfileSuccess(profile.data));
      return ;
  }
  else{
      dispatch(fetchProfileFailure(profile.data));
      return;
  }
}
