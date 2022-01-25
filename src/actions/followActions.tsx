import { 
    FETCH_USERLIST_BEGIN, 
    FETCH_USERLIST_FAILURE, 
    FETCH_USERLIST_SUCCESS,
  } from './actionTypes'
  import { fetchUserListData } from '../services/fetchUserList';
  
  
  export const fetchUserListBegin = () => ({
    type: FETCH_USERLIST_BEGIN
  });
  
  export const fetchUserListSuccess = (data: string[]) => ({
    type: FETCH_USERLIST_SUCCESS,
    payload: data
  });
  
  export const fetchUserListFailure = (data: string) => ({
    type: FETCH_USERLIST_FAILURE,
    payload: data
  });
  
  export const fetchUserList = () => async(dispatch: any) => {
    dispatch(fetchUserListBegin());
    const response = await fetchUserListData();
    if(response.statusCode === 200){
        dispatch(fetchUserListSuccess(response.data));
    }
    else{
        dispatch(fetchUserListFailure(response.data));
    }
  }
