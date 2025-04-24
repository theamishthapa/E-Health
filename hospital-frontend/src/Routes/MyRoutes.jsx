import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import UserLogin from "../Components/User/UserLogin";
import CreateUser from "../Components/User/CreateUser";
import Login from "../Components/Login";
import AdminLogin from "../Components/Admin/AdminLogin";
import UserVerify from "../Components/User/UserVerify";
import UserProfile from "../Components/User/UserProfile";
import BookAppointment from "../Components/BookAppointment";
import EyeExam from "../Components/Services/EyeExam";
import BookingPage from "../Components/Booking/BookingPage";

const PrivateRoute = () => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="book-appointment" element={<Outlet />}>
          <Route index element={<BookAppointment />}></Route>
          <Route path="eye-exam" element={<EyeExam />}></Route>
          <Route
            path="/book-appointment/eye-exam/:hospitalName"
            element={<BookingPage />}
          ></Route>
        </Route>
        <Route path="verify-email" element={<UserVerify />} />
        <Route path="user-profile" element={<PrivateRoute />}>
          <Route index element={<UserProfile />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Outlet />}>
          <Route index element={<Login />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="user" element={<Outlet />}>
            <Route index element={<UserLogin />} />
            <Route path="create-user" element={<CreateUser />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
