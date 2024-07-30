 
import fetchToken from "./fetchToken";

const getUserDetails = async () => {

    const token = fetchToken()
    if(!token) return false
    
    let res = await fetch("http://localhost:3000/api/profile/getUserDetails", {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            // "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjlhN2VkMTIyZDkxZGQ1MWQzMDg3OTciLCJpYXQiOjE3MjIwNjc3MzMsImV4cCI6MTcyMjY3MjUzM30._JUMIZE_43uP9KhnloRkgZq6ROO_9Mp90Wu_LP8mZG4"
            "authorization": `Bearer ${token}`
          },
          credentials: 'include'
    })
    .then((res) => res.json())
    
    if(res.status === 'failed') return false;
    return res.user;
    }



export {
    getUserDetails,
}