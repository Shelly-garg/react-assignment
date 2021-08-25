import React from "react";
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    render(){
        return (
            <div>
              <Link to="/">Search </Link>
              <Link to="/login">Login </Link>
              <Link to="/loggedin"> Profile</Link>
            </div>


        );
    }
}

export default NavBar;
