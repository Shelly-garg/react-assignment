import { FETCH_USER } from '../constants';


export const fetchUserData = async(token: string) => {
    const response = await fetch(FETCH_USER, { 
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    });
    const data = await response.json();
    return {
        data: data,
        statusCode: response.status,
    }
}
