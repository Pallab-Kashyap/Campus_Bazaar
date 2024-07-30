
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from '../context/userContext'
import { addProduct } from '../utils/API/product';


function ListProduct() {

    const navigate = useNavigate()
    const [product_name, setEmail] = useState("");
    const [product_prize, setPassword] = useState("");
    const { user, setUser } = useUserContext()
    
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[])


    const handleClick = async (e) => {
        e.preventDefault();
    
        if(user){
            const seller_id = user.email
        const res = await addProduct({
            product_name,
            product_prize,
            seller_id
        });
            
        if (res) {
            navigate("/");
          }
    }
    
        setEmail("");
        setPassword("");
      };

    return (
        <div className='h-[96] w-screen ml-72 bg-red-400 flex justify-center items-center'>
            <form className="signupForm bg-slate-700 h-fit w-fit p-8">
        <div className="InputBox">
          <label htmlFor="email" className="block mt-2 mb-1">
            Product name
          </label>
          <input
            type="email"
            id="email"
            placeholder="name"
            value={product_name}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="InputBox">
          <label htmlFor="password" className="block mt-2 mb-1">
            Product price
          </label>
          <input
            type="text"
            id="password"
            placeholder="price"
            value={product_prize}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleClick}
          className="px-4 py-2 my-4 ml-10 bg-orange-600 text-white rounded-lg"
        >
          List product
        </button>
  
      </form>
        </div>
    )
}

export default ListProduct
