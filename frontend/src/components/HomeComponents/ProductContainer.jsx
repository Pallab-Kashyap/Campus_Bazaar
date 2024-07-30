import React, { useState , useEffect } from 'react'
import ProductCard from './ProductCard'
import {getAllProducts} from '../../utils/API/product'
import { useNavigate } from 'react-router-dom'
import { getCartItem } from '../../utils/API/cart'
import { useUserContext } from '../../context/userContext'
import { getUserDetails } from '../../utils/API/user'

function ProductContainer({type}) {
    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const { user, setUser } = useUserContext()
    const navigate = useNavigate()

    useEffect(()=> {
        const fetchProducts = async () => {
            try{
                if(!type){
                let productData = await getAllProducts();
                setProducts(productData);

                if(user){
                    let cartData = await getCartItem(user.email);
                    setCartItem(cartData);
                }
                return;
                }
                else if(type === 'cart'){
                    if(user){
                        let data = await getCartItem(user.email);
                        setProducts(data);
                        return;
                    }else{
                        const data = await getUserDetails();
                        if(data){
                            setUser(data)
                            const res = await getCartItem(data.email)
                            if(res){
                                setProducts(res);
                            }
                            else{
                                return;
                            }
                        }
                        else{
                            navigate('/login')
                        }
                    }

                }
            }
            catch(error){
                console.log(error);
                navigate('/login')
            }
        } 
        fetchProducts();
    }, [])

    return (
        <div className='productContainer h-full w-full bg-zinc-800 px-20 gap-x-20 md:px-12 py-12 flex flex-wrap md:ml-80 md:gap-x-16 overflow-y-scroll'>
            
            {products.map((product => (
                <ProductCard key={product._id} product={product} type={type} cartItem={cartItem}/>
            )))}


 
            
        </div>        
    )
}

export default ProductContainer
