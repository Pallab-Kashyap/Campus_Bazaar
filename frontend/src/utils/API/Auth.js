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
  
  export { createUser, findUser };