import React, { useState } from "react"
import {fetchLogin} from '../actions/loginActions'
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from 'react-router'

export const Login = () => {
    const loginData = useSelector(state => state.loginReducer);
    const dispatch= useDispatch()

    const[username, setUsername]= useState();
    const[password, setPassword]= useState();

    const handleSubmit = async e => {
        e.preventDefault();
        if(!username){
            alert("Please Enter Username")
            return;
        }

        if(!password){
          alert("Please Enter Password")
          return;
      }
       
      dispatch(fetchLogin(username, password));
        
    }
    return(
      
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username:</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label>
            <p>Password:</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        {!loginData.isSuccess && loginData.error && <h1>{loginData.error} !!!</h1> }
        {loginData.isSuccess && <Redirect to='/loggedin'></Redirect>}
         
        
      </div>
    )
  }
