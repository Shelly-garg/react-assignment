import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux';
import { useState } from 'react'

import { AppState } from '../reducers/rootReducer';
import { fetchUser } from '../actions/loginActions'
import { UserState } from '../reducers/reducerConstants'


interface detailsType{
  username: string,
  token: string
}

const Login = (props: mapDispatchToPropsType) => {
    const loginData: UserState = useSelector((state: AppState) => state.loginReducer);
    const[username, setUsername] = useState<string>();
    const[token, setToken] = useState<string>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(!username){
          alert('Please Enter Username')
          return;
      }

      if(!token){
        alert('Please Enter Password')
        return;
      }
      const data: detailsType = {
        username: username,
        token: token,
      }
      props.fetchUser(data);
    }

    return(
      <div className='login-wrapper'>
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username:</p>
            <input type='text' onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label>
            <p>Password:</p>
            <input type='password' onChange={(event) => setToken(event.target.value)} />
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
interface mapDispatchToPropsType{
  fetchUser: (details: detailsType) =>  void
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: (details: detailsType) => dispatch(fetchUser(details))
  }
}

export default connect(null, mapDispatchToProps)(Login);
