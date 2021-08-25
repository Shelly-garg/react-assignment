
const baseUrl='https://api.github.com/users/'

async function getProfileData(username){
    const response= await fetch(baseUrl+ username);
    const data= await response.json();
    if(response.ok){
        console.log("here");
        return {
            isLoaded: true,
            data: data
          }
    }

    else{
        return {
            isLoaded: true,
            error: data.message,
          }
    }

}

export default getProfileData;