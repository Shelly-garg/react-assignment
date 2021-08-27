import Profile from './profile';
import WhoToFollow from './follow'
import { loggedInUserDetails } from '../services/tokenStorage';


interface userDetail{
    username : string|null,
    token: string|null,
}

export const LoggedIn = () => {
    const userData: userDetail = loggedInUserDetails();
    if(userData.username){
        return(
            <div>
                <Profile username={userData.username}/>
                <WhoToFollow></WhoToFollow>
            </div>
          )
    }
    return(
        <h1>Please Login First !!!</h1>
    )
}
