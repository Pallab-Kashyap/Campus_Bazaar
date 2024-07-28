import React, { useState , useEffect } from 'react'
import ProductCard from './ProductCard'
import {getAllProducts} from '../../utils/API/product'

function ProductContainer() {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        const fetchProducts = async () => {
            try{
                let data = await getAllProducts();
                setProducts(data);
                return;
            }
            catch(error){
                console.log(error);
            }
        } 
        fetchProducts();
    }, [])

    return (
        <div className='productContainer h-full w-full bg-zinc-800 px-20 gap-x-20 md:px-12 py-12 flex flex-wrap md:ml-80 md:gap-x-16 overflow-y-scroll'>
            
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}
            {products.map((product => (
                <ProductCard key={product._id} product={product}/>
            )))}

 
            
        </div>        
    )
}

export default ProductContainer
