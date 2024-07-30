import fetchToken from "./fetchToken";

const getAllProducts = async () => {
  let res = await fetch("http://localhost:3000/api/products", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
  .then((res) => res.json());
  return res;
};

const addProduct = async (body) => {

  const token = fetchToken()
  if(!token) return false

  const res = await fetch('http://localhost:3000/api/products', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))

  return res.res
}

export { getAllProducts, addProduct };
