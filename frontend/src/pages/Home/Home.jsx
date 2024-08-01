import React, { useEffect, useState } from "react";
import TopNav from "../../components/HomeComponents/TopNav";
import SideNav from "../../components/HomeComponents/SideNav";
import { HomeContextProvider } from "../../context/homeConext";
import { UserContextProvider } from "../../context/userContext";
import { Outlet } from "react-router-dom";
import "./Home.css";
import { getUserDetails } from "../../utils/API/user";
import { useNavigate } from "react-router-dom"

function Home() {
  const [sideNavDisplay, setSideNavDisplay] = useState("hidden");
  const [user, setUser] = useState(null);
  const type = 'home'
  

  useEffect(()=>{
  }, [])

  return (
    <UserContextProvider value={{user, setUser}}>
      <HomeContextProvider value={{ sideNavDisplay, setSideNavDisplay }}>
        <div className="home p-2 bg-zinc-800  h-screen w-screen ">
          <TopNav />
          <div className="heroSection h-[91%] flex ">
            <div>
              <SideNav />
            </div>
            <Outlet />
          </div>
        </div>
      </HomeContextProvider>
    </UserContextProvider>
  );
}

export default Home;
