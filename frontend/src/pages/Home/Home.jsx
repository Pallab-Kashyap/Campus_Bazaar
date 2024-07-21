import React from 'react'
import TopNav from '../../components/HomeComponents/TopNav'
import SideNav from '../../components/HomeComponents/SideNav'
import ProductContainer from '../../components/HomeComponents/ProductContainer'
import { Outlet } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='home h-screen w-screen  flex flex-col overflow-x-hidden'>
            <TopNav />
            <div className="heroSection h-[86%] w-screen flex">
                <SideNav />
                <Outlet />
            </div>
        </div>
    )
}

export default Home
