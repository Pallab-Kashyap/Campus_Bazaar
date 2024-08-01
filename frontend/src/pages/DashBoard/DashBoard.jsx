import React, { useState,useEffect } from "react";
import "./DashBoard.css";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from '../../utils/API/user'

function DashBoard() {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "Ankit Singh",
    university: "Guru Jambheshwar University of Science & Technology",
    course: "CSE(A&MI)",
    year: "3rd Year contact",
  });

  const { user,setUser } = useUserContext();
  const navigate = useNavigate()

  useEffect(()=>{

      if(!user) navigate('/login');
  })


  if(user){
  const { userName } = user
  console.log(userName);
  }
  function changeval() {
    setIsEditing((prev)=> (prev)? false : true);
    
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  }



  return (
    <div className="ml-96">
      <div className="user-card">
        <div id="profilech">
          <div className="user-profile">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="user-info">
            {isEditing ? (
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={userName || ""}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  University:
                  <input
                    type="text"
                    name="university"
                    value={userProfile.university}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Course:
                  <input
                    type="text"
                    name="course"
                    value={userProfile.course}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Year:
                  <input
                    type="text"
                    name="year"
                    value={userProfile.year}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                {/* <button onClick={handleSave}>Save</button> */}
              </form>
            ) : (
              <>
                <h3>{userProfile.name}</h3>
                <p>{userProfile.university}</p>
                <p>{userProfile.course}</p>
                <p>{userProfile.year}</p>
              </>
            )}
          </div>
        </div>

        <div className="user-actions">
          <button className="chat-button">Chat </button>
          <button className="edit-button1" onClick={changeval}>
            Edit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
