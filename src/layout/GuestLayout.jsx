import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const GuestLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestLayout;
