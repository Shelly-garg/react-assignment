import { connect } from 'react-redux';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { clearError, fetchProfile }  from '../actions/profileActions';
import { AppState } from '../reducers/rootReducer';


interface propType{
  username: string,
  match?: any,
  fetchProfile: (username: string) => void,
  clearError: () => void,
  profile?: any
}
class Profile extends Component<propType>{

  componentDidMount(){
    let username;
    if(this.props.match){
      username = this.props.match.params.username;
    }
    else{
      username = this.props.username;
    }
    this.props.fetchProfile(username);
  }

  componentDidUpdate(prevProps: propType) {
    if (this.props.username !== prevProps.username) {
      this.props.fetchProfile(this.props.username);
    }
  }

  IntervalHandler = (interval: any) => {
    this.props.clearError();
    clearInterval(interval);
  }
  render() {
    const { error, isLoaded, data } = this.props.profile;
    if (error) {
      const interval = setInterval(() => {
        this.IntervalHandler(interval)
      }, 2000);
    return <h2>{error.message}</h2>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if(data){
      return (
        <div >
            <img src={data.avatar_url} alt='avatar'></img>
            <div> Username : {data.login}</div>
            <div> Location : {data.location}</div>
            <div> Following : {data.following}</div>
            <div> Followers : {data.followers}</div>
            <div> Bio : {data.bio}</div>
            <a href={data.html_url}> Link to github page</a>
            <div> Blog : {data.blog}</div>
            <div> Email : {data.email}</div>
        </div>
      );
    }
    else{
      return <Redirect to='/Search'></Redirect>
    }
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    profile: state.profileReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProfile: (username: string) => dispatch(fetchProfile(username)),
    clearError: () => dispatch(clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
