async function createUser(body) {
    const res = await fetch("http://localhost:3000/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((e) => console.log(e));
  
      console.log(res);
  
    return res;
  }
  
  async function findUser(body) {
    const res = await fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res.res)
      .catch((e) => console.log(e));
  
    return res;
  }
  
  export { createUser, findUser };