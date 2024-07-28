async function createUser(body) {
    const res = await fetch("http://localhost:3000/auth/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      // .then((res) => res.json())
      .then((res) => console.log('respond',res))
      .catch((e) => console.log(e));
  
    return res;
  }
  

async function findUser(body) {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res.user)
      .catch((e) => console.log(e));
  
    return res;
  }
  

async function forgotPassword(body){
  console.log('ent fun');
  const res = await fetch('http://localhost:3000/auth/forgotPassword', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE0ODJmMDgyZGM2YWQwYTJlMzM0MjIiLCJpYXQiOjE3MjIwNTc0NTYsImV4cCI6MTcyMjY2MjI1Nn0.4siNwHJ5zpRK2JEHPX9z0Eos_LtDX4zLrs6tuKJlbsI"
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))

    console.log('ext fun');
    console.log(res);
    if(res.status === 'success'){
      return true;
    }
    else{
      return false
    }
}


async function resetPassword(body){
  console.log('ent fun');
  const { userId, token } = body
  const res = await fetch(`http://localhost:3000/auth/resetPassword/${userId}/${token}`, {
    method: 'put',
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE0ODJmMDgyZGM2YWQwYTJlMzM0MjIiLCJpYXQiOjE3MjIwNTc0NTYsImV4cCI6MTcyMjY2MjI1Nn0.4siNwHJ5zpRK2JEHPX9z0Eos_LtDX4zLrs6tuKJlbsI"
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))

    console.log('ext fun');
    console.log(res);
    if(res.status === 'success'){
      return true;
    }
    else{
      return false
    }
}


  export { createUser, findUser, forgotPassword, resetPassword };