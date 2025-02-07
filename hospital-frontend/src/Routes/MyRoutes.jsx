import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import UserLogin from "../Components/User/UserLogin";
import CreateUser from "../Components/User/CreateUser";
import Login from "../Components/Login";
import AdminLogin from "../Components/Admin/AdminLogin";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path={"about"} element={<About />}></Route>
          <Route path={"services"} element={<Services />}></Route>
          <Route path={"login"} element={<Outlet />}>
            <Route index element={<Login />}></Route>
            <Route path={"admin"} element={<AdminLogin />}></Route>
            <Route path={"user"} element={<Outlet />}>
              <Route index element={<UserLogin />}></Route>
              <Route path="create-user" element={<CreateUser />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
