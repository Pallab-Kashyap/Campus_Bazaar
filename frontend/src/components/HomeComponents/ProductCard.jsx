import React from 'react'
import './HomeComponents.css'

function ProductCard() {
    return (
        <div className='ProductCard mb-16 rounded-3xl w-fit h-fit bg-slate-800 overflow-hidden'>
            <div className="productImage">
                <img className='object-fill h-80 w-72' src="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=2048x2048&w=is&k=20&c=pYFo-KV5os-YhgBkfv9HQGM9cEPv6hvpvhf80CJTcHw=" alt="" />
            </div>
            <div className='p-5  text-white text-2xl'>
                <div>Product name</div>
                <div className='flex justify-between py-4  text-4xl'>
                <div className='font-medium'> $ 200</div>
                <div className=''>cart</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
