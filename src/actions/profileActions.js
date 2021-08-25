export const FETCH_PROFILE_BEGIN   = 'FETCH_PROFILE_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

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


const baseUrl='https://api.github.com/users/'

export const fetchProfile= (username) =>{
    return async dispatch=>{
        dispatch(fetchProfileBegin());
        const response= await fetch(baseUrl+ username);
        const data= await response.json();
        if(response.ok){
            dispatch(fetchProfileSuccess(data));
            return ;
        }

        else{
          console.log(data);
            dispatch(fetchProfileFailure(data));
            return;
        }
    }

}
