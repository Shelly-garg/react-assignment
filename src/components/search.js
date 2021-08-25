import React from "react";
import { Link } from "react-router-dom";
import Profile from './profile';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: null,
            value:'',
        }
        this.handleInputChange= this.handleInputChange.bind(this)
        this.handleSearchClick= this.handleSearchClick.bind(this)
    }

    handleInputChange(event){
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSearchClick(event){
        this.setState({
            username: this.state.value,
        })
        
        event.preventDefault();
    }

    render(){
        return (
            <>
                <div>
                    <form>
                        <label>
                        User Name : 
                        <input type="text" value={this.state.value} name='value' onChange={this.handleInputChange} />
                        </label>
                    </form> 
                </div>
                <Link to='/profile' >
                    <button onClick={this.handleSearchClick}>Search</button>
                </Link>
                
                {this.state.username && 
                    <Profile username={this.state.username} />                        
                }
            </>
        );
    }
}

export default Search;
