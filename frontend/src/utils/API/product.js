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

export { getAllProducts };
