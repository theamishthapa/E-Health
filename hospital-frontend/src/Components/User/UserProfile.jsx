import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const UserProfile = () => {
  useEffect(() => {
    toast.success("Logged in");
  }, []);
  return (
    <div>
      <ToastContainer />
      <h1>You are now logged in</h1>
    </div>
  );
};

export default UserProfile;
