import { storeLoggedInUSer } from "../services/tokenStorage";

export const FETCH_LOGIN_BEGIN   = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_lOGIN_FAILURE';

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN
});

export const fetchLoginSuccess = data => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data
});

export const fetchLoginFailure = data => ({
  type: FETCH_LOGIN_FAILURE,
  payload: data
});


const loginURL='https://api.github.com/user'

export const fetchLogin= (username, password) =>{
    return async dispatch=>{
        dispatch(fetchLoginBegin());
        const response = await fetch(loginURL, { 
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${password}`
            },
        });
        const data= await response.json();
        if(response.ok){
            if(data.login===username){
                storeLoggedInUSer(username,password); 
                dispatch(fetchLoginSuccess(password));
            }
            else{
                dispatch(fetchLoginFailure("Username do not match password"));
            }
            return ;
        }

        else{
          console.log(data);
            dispatch(fetchLoginFailure(data.message));
            return;
        }
    }

}