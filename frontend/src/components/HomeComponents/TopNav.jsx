import React from "react";

function TopNav() {
  return (
    <div className="w-screen bg-black flex justify-between py-3 px-12 sticky top-0">
      <div className="websiteLogo text-yellow-300 text-7xl">cB</div>
      <div 
        className="userProfileLogo h-20 w-20 p-10 text-blue-500 text-7xl rounded-full flex justify-center items-center border-blue-500 border-solid border-4">
        P
      </div>
    </div>
  );
}

export default TopNav;
