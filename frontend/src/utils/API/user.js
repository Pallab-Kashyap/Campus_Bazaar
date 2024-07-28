 
const getUserDetails = async () => {
    let res = await fetch("http://localhost:3000/profile/getUserDetails", {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            // "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjlhN2VkMTIyZDkxZGQ1MWQzMDg3OTciLCJpYXQiOjE3MjIwNjc3MzMsImV4cCI6MTcyMjY3MjUzM30._JUMIZE_43uP9KhnloRkgZq6ROO_9Mp90Wu_LP8mZG4"
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE0ODJmMDgyZGM2YWQwYTJlMzM0MjIiLCJpYXQiOjE3MjIwNTc0NTYsImV4cCI6MTcyMjY2MjI1Nn0.4siNwHJ5zpRK2JEHPX9z0Eos_LtDX4zLrs6tuKJlbsI"
          },
    })
    .then((res) => res.json())
    
    return res.user;
}

export {
    getUserDetails,
}