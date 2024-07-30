import fetchToken from "./fetchToken";

async function createUser(body) {
  const res = await fetch("http://localhost:3000/api/auth/signin", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));

  const token = { token: res.token };

  localStorage.setItem("token", JSON.stringify(token));

  return res;
}

async function findUser(body) {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));

  if (res.status === "success") {
    const token = { token: res.token };
    localStorage.setItem("token", JSON.stringify(token));
    return res
  }
  return false
}

async function forgotPassword(body) {
  const token = fetchToken();
  if (!token) return false;

  const res = await fetch("http://localhost:3000/api/auth/forgotPassword", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));

  console.log("ext fun");
  console.log(res);
  if (res.status === "success") {
    return true;
  } else {
    return false;
  }
}

async function resetPassword(body) {

  const { userId, token } = body;
  const res = await fetch(
    `http://localhost:3000/api/auth/resetPassword/${userId}/${token}`,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  if (res.status === "success") {
    return true;
  } else {
    return false;
  }
}

export { createUser, findUser, forgotPassword, resetPassword };
