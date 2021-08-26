import { FETCH_PROFILE } from '../constants'


export const fetchProfileData = async(username: string) => {
    const response = await fetch(FETCH_PROFILE + username);
    const data = await response.json();
    
    return {
        data: data, 
        statusCode: response.status
    }
}
