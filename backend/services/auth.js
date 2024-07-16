
const authUser = new Map();

console.log(authUser);

 function setUserAuthId(id, User){
    authUser.set(id, User)
    console.log(authUser);
}

 function getUserByAuthId(id){
    const User = authUser.get(id)

    if(User){
        return User
    }
    return false
}

module.exports = {
    setUserAuthId,
    getUserByAuthId
}