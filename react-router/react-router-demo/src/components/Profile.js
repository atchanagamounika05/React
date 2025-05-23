import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>welcome {auth.user}</h1>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
