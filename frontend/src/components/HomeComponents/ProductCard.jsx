import React, { useEffect, useState } from "react";
import "./HomeComponents.css";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { createNewChatBox } from "../../utils/supabase/supaOperations";
import { FaBookmark } from "react-icons/fa6";
import { getUserDetails } from "../../utils/API/user";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { addCartItem, deleteCartItem } from "../../utils/API/cart";

function ProductCard({ product, type, cartItem }) {
  const navigate = useNavigate();
  const { product_name, product_prize, seller_id } = product;

  const [bookmark, setBookmark] = useState(false)
  const { user,setUser } = useUserContext();
  useEffect(()=> {
    if(type === 'cart'){ setBookmark(true)}
    cartItem.forEach(item => {
      if(item._id === product._id){
        setBookmark(true);
      } 
    });
  },[cartItem])

  const handleBookmark = async () => {
    if(!user){
      return navigate('/login')
    }

    if(user.email === seller_id) return;
    const body = {
      productId: product._id,
    }
      if(bookmark){
        try{
          const res = await deleteCartItem(body)
          if(!res) {
            return navigate('/login')
          }
          setBookmark(prev => (prev) ? false : true)
        }
        catch(error){
          console.log(error);
          return;
        }
      }
      else{
        try{
         const res = await addCartItem(body);
         if(!res){
          console.log(res);
          return navigate('/login')
         }
         setBookmark(prev => (prev) ? false : true)
        }
        catch(error){
          console.log(error);
          return;
        }
      }
  };



  const handleChatClick = async () => {
    if (user) {
      console.log(user);
      if(user.email === seller_id) return;
      await createNewChatBox(user.email, seller_id);
      navigate("/chat");
    } else {
      const data = await getUserDetails();
      if (data) {
        if(data.email === seller_id) return;
          await createNewChatBox(data.email, seller_id);
          setUser(data) 
        navigate("/chat");
      } else navigate("/login");
    }
  };

  return (
    <div className="ProductCard mb-16 h-fit rounded-3xl bg-slate-800 overflow-hidden relative">
      {((!bookmark) ?<FaRegBookmark
        onClick={handleBookmark}
        className="bookmark absolute top-3 right-5 text-xl"
      /> :
      <FaBookmark
        onClick={handleBookmark}
        className="bookmark absolute top-3 right-5 text-xl"
      />
    )}
      <div className="productImage ">
        <img
          className="object-fill h-64 w-60"
          src="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=2048x2048&w=is&k=20&c=pYFo-KV5os-YhgBkfv9HQGM9cEPv6hvpvhf80CJTcHw="
          alt=""
        />
      </div>
      <div className="p-5 py-3  text-white text-xl">
        <div>{product_name}</div>
        <div className="flex justify-between py-2  text-3xl">
          <div className="font-medium"> ₹ {product_prize}</div>
          <div className="text-white bg-blue-500 p-3 rounded-lg text-lg">
            <BsFillChatRightTextFill onClick={handleChatClick} />
          </div>
        </div>
      <div className="sellerId text-white text-xl hidden ">
        {seller_id}
      </div>
      </div>
    </div>
  );
}

export default ProductCard;
