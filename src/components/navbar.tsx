import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../reducers/reducerConstants'

import { AppState } from '../reducers/rootReducer';


export const NavBar = () => {
    const loggedInUser: UserState = useSelector((state: AppState) => state.loginReducer)
    return (
        <div>
            <Link to='/Search'>Search</Link>
            {!loggedInUser.token && <Link to='/login'>Login</Link>}
            <Link to='/profile'>Profile</Link>
        </div>
    );
}

export default NavBar;
