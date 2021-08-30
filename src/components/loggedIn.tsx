import Profile from './profile';
import { loggedInUserDetails } from '../services/tokenStorage';


interface userDetail{
    username : string|null,
    token: string|null,
}

export const LoggedIn = () => {
    const userData: userDetail = loggedInUserDetails();
    if(userData.username){
        return(
            <Profile username={userData.username}/>
          )
    }
    return(
        <h1>Please Login First !!!</h1>
    )
}
