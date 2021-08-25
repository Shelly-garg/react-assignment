import React from "react";
import { connect } from "react-redux";

import {fetchProfile}  from "../actions/profileActions";

class Profile extends React.Component{
    
    componentDidMount(){
      let username;
        if(this.props.match){
          username = this.props.match.params.username;
          console.log(username);
        }
        else{
          username = this.props.username;
        }
       this.props.fetchProfile(username);
      }

      componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username) {
          this.props.fetchProfile(this.props.username);
        
        }
       }
    
      render() {
        const { error, isLoaded, data } = this.props.profile;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(data);
          return (
            <div >
                <img src={data.avatar_url} alt="avatar"></img>
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
    }
}

const mapStateToProps = state =>{
  return {
    profile: state.profileReducer
  }
}

const mapDispathToProps= dispatch => {
  return {
    fetchProfile : (username) => dispatch(fetchProfile(username))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Profile);
