export const storeLoggedInUSer = (username,token) => {
    window.localStorage.setItem("access-Token", token);
    window.localStorage.setItem("loggedin-user", username);
}

export const getLoggedInUser = () =>{
    return {
        "token" : window.localStorage.getItem("access-token"),
        "username" : window.localStorage.getItem('loggedin-user'), 
    }
}