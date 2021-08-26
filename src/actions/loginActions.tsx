import { 
  FETCH_LOGIN_BEGIN, 
  FETCH_LOGIN_SUCCESS, 
  FETCH_LOGIN_FAILURE 
} from './actionTypes';
import { fetchUserData } from '../services/fetchUserData';
import { setUserDetailsCookie } from '../services/tokenStorage';
import { USERNAME_DO_NOT_PASSWORD } from '../constants';


interface detailsType{
  username: string,
  token: string
}

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN
});

export const fetchLoginSuccess = (data:string) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data
});

export const fetchLoginFailure = (data:string) => ({
  type: FETCH_LOGIN_FAILURE,
  payload: data
});

export const fetchUser = (details:detailsType) => async(dispatch: any) => {
  dispatch(fetchLoginBegin());
  let username = details.username;
  let password = details.token;
  const response = await fetchUserData(password);
  if(response.statusCode === 200){
      if(response.data.login === username){
          setUserDetailsCookie(username,password); 
          dispatch(fetchLoginSuccess(password));
      }
      else{
          dispatch(fetchLoginFailure(USERNAME_DO_NOT_PASSWORD));
      }
  }
  else{
      dispatch(fetchLoginFailure(response.data.message));
  }
}
