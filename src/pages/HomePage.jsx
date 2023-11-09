import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const userToken = localStorage.getItem("token");
  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      {!userToken && <Navigate to="/login" replace={true} />}
      {userToken && (
        <div>
          <div className="text-2xl">Welcome</div>
          <button onClick={HandleLogout}> Logout</button>
        </div>
      )}
    </>
  );
};

export default HomePage;
