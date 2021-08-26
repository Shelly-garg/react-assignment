import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const NavBar = () => {
    const loggedInUser = useSelector((state) => state.loginReducer)
    return (
        <div>
            <Link to='/Search'>Search</Link>
            {!loggedInUser.token && <Link to='/login'>Login</Link>}
            <Link to='/profile'>Profile</Link>
        </div>
    );
}

export default NavBar;
