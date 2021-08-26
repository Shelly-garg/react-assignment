import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Profile from './profile';


interface LoginProps {}

interface LoginState{
    username: string,
    val: string,
}

class Search extends Component <LoginProps, LoginState>{
    constructor(props: LoginProps){
        super(props);
        this.state = {
            username: '',
            val: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
    }

    handleInputChange(event: any){
        event.preventDefault();
        this.setState({val: event.target.value})
    }

    handleSearchClick(event: React.MouseEvent){
        event.preventDefault();
        
        if(this.state.val === ''){
            alert('Enter username.')
            return;
        }
        this.setState({username: this.state.val})
        
    }

    render(){
        return (
            <>
                <div>
                    <form>
                        <label>
                        User Name : 
                        <input 
                            type='text' value={this.state.val} name='value' 
                            onChange={this.handleInputChange} 
                        />
                        </label>
                    </form> 
                </div>
                <Link to='/profile' >
                    <button onClick={this.handleSearchClick}>Search</button>
                </Link>
                {this.state.username && <Profile username={this.state.username} />}
            </>
        );
    }
}

export default Search;
