import Profile from './profile';
import { loggedInUserDetails } from '../services/tokenStorage';


export const LoggedIn = () => {
    const userData = loggedInUserDetails();
    if(userData.username){
        return(
            <Profile username={userData.username}/>
          )
    }
    return(
        <h1>Please Login First !!!</h1>
    )
}
