import { FETCH_USERLIST } from '../constants'


export const fetchUserListData = async() => {
    const response = await fetch(FETCH_USERLIST);
    const data = await response.json();
    
    return {
        data: data,
        statusCode: response.status
    }
}
