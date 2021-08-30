export const setUserDetailsCookie = (username: string,token: string) => {
    window.localStorage.setItem('personal-access-token', token);
    window.localStorage.setItem('username', username);
}

export const loggedInUserDetails = () => {
    return {
        'token': window.localStorage.getItem('personal-access-token'),
        'username': window.localStorage.getItem('username'), 
    }
}
