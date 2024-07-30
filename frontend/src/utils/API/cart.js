import { FcCdLogo } from "react-icons/fc";
import fetchToken from "./fetchToken";

const getCartItem = async (email) => {

    const token = fetchToken()
    if(!token) return false


    try{
       const res = await fetch(`http://localhost:3000/api/wishlist`, {
            method: 'get',
            headers: {
                "authorization": `Bearer ${token}`
            },
            credentials: 'include'
        })
        .then((res) => res.json())

        if(res.status === 'failed') return false;
        return res
    }
    catch(error){
        console.log(error);
        return false;
    }
}


const addCartItem = async (body) => {

      const token = fetchToken()
  if(!token) return false

    try{
      const res =  await fetch('http://localhost:3000/api/wishlist', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
"authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
        .then((res) => res.json())

        if(res.status === 'failed') return false;
        return res
    }
    catch(error){
        console.log(error);
        return false
    
    }
}


const deleteCartItem = async (body) => {

    const token = fetchToken()
    if(!token) return false

    try{
        const res = await fetch('http://localhost:3000/api/wishlist', {
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
        .then((res) => res.json())

        if(res.status === 'failed') return false;
        return res
    }
    catch(error){
        console.log(error);
        return false
    }
}


export {
    getCartItem,
    addCartItem,
    deleteCartItem
}