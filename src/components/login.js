import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux';

import { fetchUser } from '../actions/loginActions'
import { useState } from 'react'


const Login = (props) => {
    const loginData = useSelector(state => state.loginReducer);
    const[username, setUsername] = useState();
    const[token, setToken] = useState();

    const handleSubmit = event => {
      event.preventDefault();
      if(!username){
          alert('Please Enter Username')
          return;
      }

      if(!token){
        alert('Please Enter Password')
        return;
      }
      const data = [
        username,
        token
      ]
      props.fetchUser(data);
    }

    return(
      <div className='login-wrapper'>
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username:</p>
            <input type='text' onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label>
            <p>Password:</p>
            <input type='password' onChange={(e) => setToken(e.target.value)} />
          </label>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
        {!loginData.isSuccess&&loginData.error && <h1>{loginData.error} !!!</h1> }
        {loginData.isSuccess && <Redirect to='/'></Redirect>}        
      </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (details) => dispatch(fetchUser(details))
  }
}

export default connect(null,mapDispatchToProps)(Login);
