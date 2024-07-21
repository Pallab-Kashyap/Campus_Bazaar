import React, { useState } from "react";
import TopNav from "../../components/HomeComponents/TopNav";
import SideNav from "../../components/HomeComponents/SideNav";
import ProductContainer from "../../components/HomeComponents/ProductContainer";
import {HomeContextProvider} from '../../context/homeConext'
import { Outlet } from "react-router-dom";
import "./Home.css";

function Home() {

    const [sideNavDisplay, setSideNavDisplay] = useState('hidden')

  return (
    <HomeContextProvider value={{sideNavDisplay, setSideNavDisplay}}>
      <div className="home h-screen w-screen flex flex-col overflow-y-hidden">
        <TopNav />
        <div className="heroSection grow flex">
          <SideNav />
          <Outlet />
        </div>
      </div>
    </HomeContextProvider>
  );
}

export default Home;
