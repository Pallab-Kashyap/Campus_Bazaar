import React from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
    return (
        <div className='w-4/5 h-1/1 bg-zinc-900 px-20 py-12 flex flex-wrap gap-x-28 overflow-y-scroll'>
            
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
