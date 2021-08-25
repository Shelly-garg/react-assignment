
import Profile from './profile';
import {getLoggedInUser} from "../services/tokenStorage";

export const LoggedIn = () => {
    
    const userData= getLoggedInUser();

    if(userData.username){
        return(
            <Profile username = {userData.username}/>
          )
    }

    return(
        <h1>Please Login First !!!</h1>
    )
    
  }
