import React from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
    return (
        <div className='productContainer h-full bg-zinc-900 px-20 gap-x-20 md:px-12 py-12 flex flex-wrap md:gap-x-16 overflow-y-scroll'>
            
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

 

        </div>        
    )
}

export default ProductContainer
